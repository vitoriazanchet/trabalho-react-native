import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import { styles } from '../../pages/BibliotecaDoGato/styles';
import { buscarLivrosPorAssunto, Book } from '../../service/Googlebooksservice';

interface CategorySectionProps {
  label: string;
  subject: string;
  maxResults?: number;
  onSelectBook?: (book: Book) => void;
}

export default function CategorySection({
  label,
  subject,
  maxResults = 6,
  onSelectBook,
}: CategorySectionProps) {
  const [livros, setLivros] = useState<Book[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function carregarLivros() {
      setCarregando(true);
      const resultado = await buscarLivrosPorAssunto(subject, maxResults);

      if (ativo) {
        setLivros(resultado);
        setCarregando(false);
      }
    }

    carregarLivros();

    return () => {
      ativo = false;
    };
  }, [subject, maxResults]);

  return (
    <View>
      {label ? (
        <Text style={styles.cardTitulo}>{label}</Text>
      ) : null}

      <View style={styles.generoTag}>
        <Text style={styles.generoTagTexto}>
          {subject.charAt(0).toUpperCase() + subject.slice(1)}
        </Text>
      </View>

      {carregando ? (
        <ActivityIndicator color="#A8774C" />
      ) : livros.length === 0 ? (
        <Text style={styles.estadoVazioTexto}>
          Nenhum livro encontrado para esta categoria.
        </Text>
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.livroListaContainer}
        >
          {livros.map((livro) => (
            <TouchableOpacity
              key={livro.id}
              style={styles.livroCard}
              onPress={() => onSelectBook?.(livro)}
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
          ))}
        </ScrollView>
      )}
    </View>
  );
}