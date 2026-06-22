import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


import { styles } from '../../pages/BibliotecaDoGato/styles';
import { buscarLivrosPorAssunto, Book } from '../../service/Googlebooksservice';
import { useSelecao } from '../../context/ContextSelecao';


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
  const { adicionarItem, itens } = useSelecao();
 
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
    return () => { ativo = false; };
  }, [subject, maxResults]);
 
  const jaAdicionado = (livro: Book) =>
    itens.some(item => item.nome === livro.title && item.tipo === 'livro');
 
  const handleAdicionar = (livro: Book) => {
    if (jaAdicionado(livro)) return;
    adicionarItem({
      nome: livro.title,
      imagem: livro.thumbnail ?? '',
      autor: livro.authors?.join(', '),
      tipo: 'livro',
    });
  };
 
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
          {livros.map((livro) => {
            const adicionado = jaAdicionado(livro);
            return (
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
 
                <TouchableOpacity
                  style={[
                    styles.botaoAdicionar,
                    adicionado && styles.botaoAdicionado,
                  ]}
                  onPress={() => handleAdicionar(livro)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={adicionado ? 'checkmark' : 'add'}
                    size={14}
                    color="#fff"
                  />
                  <Text style={styles.botaoAdicionarTexto}>
                    {adicionado ? 'Adicionado' : 'Adicionar'}
                  </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
}