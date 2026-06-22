import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { styles } from "./styles";
import { useSelecao } from '../../context/ContextSelecao'; //*

// Seus imports de imagens originais
import cafeChocolate from '../../../assets/images/cardapio/bebidas/cafe-com-chocolate.png';
import cappuccino from '../../../assets/images/cardapio/bebidas/cappuccino.png';
import latte from '../../../assets/images/cardapio/bebidas/latte.png';
import espresso from '../../../assets/images/cardapio/bebidas/espresso.png';
import icedTea from '../../../assets/images/cardapio/bebidas/iced-tea-colorido.png';

interface Produto {
  nome: string;
  descricao: string;
  preco: string;
  tag: string;
  img: any;
}

export default function Bebidas() {
  const { adicionarItem } = useSelecao(); //*
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<Produto | null>(null);

  const bebidasData: Produto[] = [
    { nome: 'Café com Chocolate', descricao: 'Café especial com chocolate belga cremoso e delicioso.', preco: 'R$ 17,90', tag: '🐾 Mais pedido', img: cafeChocolate },
    { nome: 'Cappuccino Clássico', descricao: 'Cappuccino assinatura da casa com canela e muito amor.', preco: 'R$ 15,90', tag: '⭐ Favorito da casa', img: cappuccino },
    { nome: 'Latte Cremoso', descricao: 'Latte suave com leite vaporizado e toque de baunilha.', preco: 'R$ 16,90', tag: '☕ Perfeito com livro', img: latte },
    { nome: 'Espresso da Casa', descricao: 'Espresso encorpado e aromático, puro ou com açúcar.', preco: 'R$ 8,90', tag: '☕ Clássico', img: espresso },
    { nome: 'Iced Tea Colorido', descricao: 'Chá gelado de frutas vermelhas com toque de hortelã e limão.', preco: 'R$ 15,90', tag: '🌿 Refrescante', img: icedTea },
  ];

  function abrirModal(item: Produto) {
    setItemSelecionado(item);
    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setItemSelecionado(null);
  }

  async function confirmarSelecao() { //*
    if (!itemSelecionado) return;
    try {
      await adicionarItem({
        nome: itemSelecionado.nome,
        preco: itemSelecionado.preco,
        imagem: itemSelecionado.img,
        tipo: 'comida',
      });
      fecharModal();
    } catch (error) {
      console.log("Erro ao salvar item");
    }
  }

  return (
    <ScrollView style={styles.telaCheia} contentContainerStyle={styles.listaItensGrid}>
      {bebidasData.map((item, index) => (
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