import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";

// Seus imports de imagens originais
import croissant from '../../../assets/images/cardapio/salgados/croissant.png';
import panini from '../../../assets/images/cardapio/salgados/panini.png';
import quiche from '../../../assets/images/cardapio/salgados/quiche.png';
import sanduiche from '../../../assets/images/cardapio/salgados/sanduiche-quente.png';
import tabua from '../../../assets/images/cardapio/salgados/tabua-de-torradas.png';

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  tag: string;
  img: any;
}

export default function Salgados() {
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<Produto | null>(null);

  const salgadosData: Produto[] = [
    { nome: 'Croissant Clássico', descricao: 'Croissant artesanal com queijo brie e geleia de damasco.', preco: 'R$ 24,90', tag: '⭐ Favorito da casa', img: croissant },
    { nome: 'Panini da Casa', descricao: 'Panini artesanal de queijo minas, tomate confit e pesto.', preco: 'R$ 21,90', tag: '🐾 Mais pedido', img: panini },
    { nome: 'Quiche do Ateliê', descricao: 'Quiche de alho-poró com queijo e massa amanteigada.', preco: 'R$ 23,90', tag: '🌿 Vegetariano', img: quiche },
    { nome: 'Sanduíche Quente', descricao: 'Pão artesanal com frango grelhado e cream cheese.', preco: 'R$ 20,90', tag: '🔥 Quentinho', img: sanduiche },
    { nome: 'Tábua de Torradas', descricao: 'Torradas artesanais com pastas selecionadas da casa.', preco: 'R$ 18,90', tag: '👨‍🍳 Inspiração do chef', img: tabua },
  ];

  function abrirModal(item: Produto) {
    setItemSelecionado(item);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setItemSelecionado(null);
  }

  async function confirmarSelecao() {
    if (!itemSelecionado) return;
    try {
      const itensSalvosRaw = await AsyncStorage.getItem('itensSelecionados');
      const itensSalvos = itensSalvosRaw ? JSON.parse(itensSalvosRaw) : [];
      
      itensSalvos.push({
        nome: itemSelecionado.nome,
        preco: itemSelecionado.preco,
        imagem: itemSelecionado.img
      });
      
      await AsyncStorage.setItem('itensSelecionados', JSON.stringify(itensSalvos));
      fecharModal();
    } catch (error) {
      console.log("Erro ao salvar item");
    }
  }

  return (
    <ScrollView style={styles.telaCheia} contentContainerStyle={styles.listaItensGrid}>
      {salgadosData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.cardItem} onPress={() => abrirModal(item)}>
          <Image source={item.img} style={styles.cardImg} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardNome}>{item.nome}</Text>
            <Text style={styles.cardDescricao} numberOfLines={3}>{item.descricao}</Text>
            <Text style={styles.cardPreco}>{item.preco}</Text>
            <View style={styles.badgeContainer}>
              <Text style={styles.cardTag}>{item.tag}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {/* Seu Modal Customizado da Web transposto para o Mobile */}
      <Modal visible={modalAberto} transparent animationType="fade" onRequestClose={fecharModal}>
        <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={fecharModal}>
          <TouchableOpacity style={styles.modal} activeOpacity={1}>
            {itemSelecionado && (
              <>
                <Image source={itemSelecionado.img} style={styles.modalImg} />
                <View style={styles.modalInfo}>
                  <Text style={styles.modalNome}>{itemSelecionado.nome}</Text>
                  <Text style={styles.modalPreco}>{itemSelecionado.preco}</Text>
                  <Text style={styles.modalPergunta}>Deseja adicionar este item à sua seleção? 🐾</Text>
                  <View style={styles.modalBotoes}>
                    <TouchableOpacity style={styles.btnCancelar} onPress={fecharModal}>
                      <Text style={styles.txtCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnConfirmar} onPress={confirmarSelecao}>
                      <Text style={styles.txtConfirmar}>Confirmar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </ScrollView>
  );
}