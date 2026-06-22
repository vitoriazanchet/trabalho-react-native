import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useSelecao, ItemSelecionado } from '../../context/ContextSelecao';
import { styles } from './styles';

interface ItemAgrupado extends ItemSelecionado {
  quantidade: number;
}

interface CardItemProps {
  item: ItemAgrupado;
  onRemover: (id: string) => void;
}

function CardItem({ item, onRemover }: CardItemProps) {
  const fonteImagem = typeof item.imagem === 'number' ? item.imagem : { uri: item.imagem };

  return (
    <View style={styles.cardItem}>
      <Image source={fonteImagem} style={styles.cardImg} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardNome}>
          {item.nome} {item.quantidade > 1 && <Text style={styles.multiplicador}>x{item.quantidade}</Text>}
        </Text>
        
        {item.tipo === 'comida' ? (
          <Text style={styles.cardPreco}>{item.preco}</Text>
        ) : (
          <Text style={styles.cardAutor}>✍️ {item.autor || 'Autor desconhecido'}</Text>
        )}
      </View>
      
      <TouchableOpacity style={styles.botaoDeletar} onPress={() => onRemover(item.id)}>
        <Text style={styles.textoDeletar}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function ItensSelecionados() {
  const { itens, removerItem } = useSelecao();

  const agruparItens = (lista: ItemSelecionado[]): ItemAgrupado[] => {
    const acc: Record<string, ItemAgrupado> = {};
    lista.forEach(item => {
      if (acc[item.nome]) {
        acc[item.nome].quantidade += 1;
      } else {
        acc[item.nome] = { ...item, quantidade: 1 };
      }
    });
    return Object.values(acc);
  };

  const itensAgrupados = agruparItens(itens);
  const comidas = itensAgrupados.filter(item => item.tipo === 'comida');
  const livros = itensAgrupados.filter(item => item.tipo === 'livro');

  return (
    <View style={styles.inicial}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.headerPagina}>
          <Text style={styles.tituloPagina}>🌿 Seus itens selecionados 🌿</Text>
          <Text style={styles.subtituloPagina}>
            Aqui está o que você separou para tornar seu dia mais aconchegante.
          </Text>
        </View>

       
        <View style={styles.blocoContainer}>
          <View style={styles.blocoTituloContainer}>
            <Text style={styles.blocoTitulo}>☕ Comidas & Bebidas</Text>
          </View>
          {comidas.length === 0 ? (
            <Text style={styles.textoVazio}>Nenhum item adicionado para consumo.</Text>
          ) : (
            comidas.map(item => (
              <CardItem key={item.id} item={item} onRemover={removerItem} />
            ))
          )}
        </View>

    
        <View style={styles.blocoContainer}>
          <View style={styles.blocoTituloContainer}>
            <Text style={styles.blocoTitulo}>📖 Livros</Text>
          </View>
          {livros.length === 0 ? (
            <Text style={styles.textoVazio}>Nenhum livro adicionado para leitura.</Text>
          ) : (
            livros.map(item => (
              <CardItem key={item.id} item={item} onRemover={removerItem} />
            ))
          )}
        </View>

        
        <View style={styles.blocoLembrete}>
          <Text style={styles.tituloLembrete}>Lembre-se</Text>
          <Text style={styles.textoLembrete}>
            Os itens selecionados ficam salvos enquanto você estiver na mesa. 
            Informe ao garçom sobre qualquer alteração. Aproveite, relaxe e curta nossa companhia felina!
          </Text>
          
          <TouchableOpacity style={styles.botaoGarcom}>
            <Text style={styles.textoBotaoGarcom}>🔔 Chamar garçom</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}