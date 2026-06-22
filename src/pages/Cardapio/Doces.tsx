import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./styles";

// Seus imports de imagens originais
import brownie from '../../../assets/images/cardapio/doces/brownie.png';
import cheesecake from '../../../assets/images/cardapio/doces/cheesecake.png';
import cinnamon from '../../../assets/images/cardapio/doces/cinnamon.png';
import pavlova from '../../../assets/images/cardapio/doces/pavlova.png';
import torta from '../../../assets/images/cardapio/doces/torta.png';

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  tag: string;
  img: any;
}

export default function Doces() {
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<Produto | null>(null);

  const docesData: Produto[] = [
    { nome: 'Brownie do Ateliê', descricao: 'Brownie intenso com sorvete de creme e calda de chocolate.', preco: 'R$ 19,90', tag: '🐾 Mais pedido', img: brownie },
    { nome: 'Cheesecake da Casa', descricao: 'Cheesecake cremoso com calda de frutas vermelhas.', preco: 'R$ 18,90', tag: '⭐ Favorito da casa', img: cheesecake },
    { nome: 'Cinnamon Roll', descricao: 'Cinnamon roll artesanal coberto com glacê de baunilha.', preco: 'R$ 17,90', tag: '☕ Perfeito com café', img: cinnamon },
    { nome: 'Pavlova Delicada', descricao: 'Base de merengue com chantilly e frutas frescas.', preco: 'R$ 21,90', tag: '🌿 Leve e especial', img: pavlova },
    { nome: 'Torta do Dia', descricao: 'Torta artesanal com recheio especial feito na hora.', preco: 'R$ 16,90', tag: '👨‍🍳 Inspiração do chef', img: torta },
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
      {docesData.map((item, index) => (
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

      {/* Modal Customizado */}
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