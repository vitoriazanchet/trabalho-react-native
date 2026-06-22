import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { styles } from '../../pages/BibliotecaDoGato/styles';
import { buscarLivroDoMes, Book } from '../../service/Googlebooksservice';

interface BookOfTheMonthProps {
  onSelectBook: (book: Book) => void;
}

export default function BookOfTheMonth({
  onSelectBook,
}: BookOfTheMonthProps) {
  const [livro, setLivro] = useState<Book | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function carregarLivro() {
      setCarregando(true);
      const resultado = await buscarLivroDoMes();

      if (ativo) {
        setLivro(resultado);
        setCarregando(false);
      }
    }

    carregarLivro();

    return () => {
      ativo = false;
    };
  }, []);

  if (carregando) {
    return (
      <View style={styles.livroDetalhe}>
        <ActivityIndicator color="#A8774C" />
      </View>
    );
  }

  if (!livro) {
    return (
      <Text style={styles.estadoVazioTexto}>
        Não foi possível carregar o livro do mês.
      </Text>
    );
  }

  return (
    <TouchableOpacity
      style={styles.livroCard}
      onPress={() => onSelectBook(livro)}
      activeOpacity={0.8}
    >
      {livro.thumbnail ? (
        <Image
          source={{ uri: livro.thumbnail }}
          style={styles.livroCapa}
        />
      ) : (
        <View style={[styles.livroCapa, styles.livroCapaPlaceholder]}>
          <Text>📖</Text>
        </View>
      )}

      <Text style={styles.livroTitulo} numberOfLines={2}>
        {livro.title}
      </Text>

      {livro.authors && livro.authors.length > 0 && (
        <Text style={styles.livroAutor} numberOfLines={1}>
          {livro.authors.join(', ')}
        </Text>
      )}
    </TouchableOpacity>
  );
}