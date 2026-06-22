import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import BookOfTheMonth from '../../componentes/Biblioteca/BookOfTheMonth';
import { styles } from './styles';

interface Book {
  id: string;
  title: string;
  authors?: string[];
  averageRating?: number;
  ratingsCount?: number;
  description?: string;
  thumbnail?: string;
}

function Estrelas({ nota }: { nota: number }) {
  const cheias = Math.round(nota);
  return (
    <Text style={{ fontSize: 14, letterSpacing: 1 }}>
      {Array.from({ length: 5 }, (_, i) =>
        i < cheias ? '★' : '☆'
      ).join('')}
    </Text>
  );
}

async function traduzirParaPortugues(texto: string): Promise<string> {
  try {
    const resposta = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: `Traduza o texto abaixo para português brasileiro de forma natural e fluida. Retorne APENAS o texto traduzido, sem explicações, sem aspas, sem prefixos.\n\n${texto}`,
          },
        ],
      }),
    });

    if (!resposta.ok) return texto;

    const dados = await resposta.json();
    return dados.content?.[0]?.text?.trim() ?? texto;
  } catch {
    return texto;
  }
}

function LivroDetalhe({
  book,
  onClose,
}: {
  book: Book | null;
  onClose: () => void;
}) {
  const [resumoPt, setResumoPt] = useState<string | null>(null);
  const [traduzindo, setTraduzindo] = useState(false);

  React.useEffect(() => {
    if (!book?.description) {
      setResumoPt(null);
      return;
    }

    const textoLimpo = book.description
      .replace(/<[^>]*>/g, '')
      .trim();
    const textoLimitado = textoLimpo.length > 500
      ? textoLimpo.slice(0, 500).trimEnd() + '…'
      : textoLimpo;

    setResumoPt(null);
    setTraduzindo(true);

    traduzirParaPortugues(textoLimitado).then((traduzido) => {
      setResumoPt(traduzido);
      setTraduzindo(false);
    });
  }, [book?.id]);

  if (!book) return null;

  return (
    <View style={styles.livroDetalhe}>
      {book.thumbnail && (
        <Image
          source={{ uri: book.thumbnail }}
          style={styles.livroDetalheCapa}
        />
      )}

      <Text style={styles.livroDetalheTitulo}>
        {book.title}
      </Text>

      {book.authors && book.authors.length > 0 && (
        <Text style={styles.livroDetalheAutor}>
          {book.authors.join(', ')}
        </Text>
      )}

      {book.averageRating != null && (
        <View style={{ alignItems: 'center', gap: 2 }}>
          <Estrelas nota={book.averageRating} />
          <Text style={styles.livroDetalheAvaliacao}>
            {book.averageRating.toFixed(1)}
            {book.ratingsCount != null
              ? ` · ${book.ratingsCount.toLocaleString()} avaliações`
              : ''}
          </Text>
        </View>
      )}

      {book.description && (
        traduzindo ? (
          <ActivityIndicator
            color="#A8774C"
            style={{ marginVertical: 12 }}
          />
        ) : resumoPt ? (
          <Text style={styles.livroDetalheSinopse}>
            {resumoPt}
          </Text>
        ) : null
      )}

      <TouchableOpacity
        style={styles.botaoFechar}
        onPress={onClose}
      >
        <Text style={styles.botaoFecharTexto}>
          Fechar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function Destaque() {
  const [livroMes, setLivroMes] =
    useState<Book | null>(null);

  const toggleLivroMes = (book: Book) =>
    setLivroMes((prev) =>
      prev?.id === book.id ? null : book
    );

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Livro do mês
        </Text>

        <Text style={{
          fontFamily: 'Poppins_400Regular',
          fontSize: 13,
          color: '#3f3a33',
          opacity: 0.6,
          marginBottom: 12,
        }}>
          Toque na capa para ver o resumo
        </Text>

        <BookOfTheMonth
          onSelectBook={toggleLivroMes}
        />

        <LivroDetalhe
          book={livroMes}
          onClose={() => setLivroMes(null)}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Seu livro, seu momento
        </Text>

        <Text style={styles.fraseTexto}>
          Ler um bom livro é como tomar um café:
          aquece a alma, desperta a imaginação e
          deixa um gostinho de quero mais.
        </Text>
      </View>
    </ScrollView>
  );
}