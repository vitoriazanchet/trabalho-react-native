import React, { useRef, useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Modal, 
  Alert 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'; 

import iconeSalgados from '../../../assets/icons/pincel.icon.png';
import iconeDoces from '../../../assets/icons/livro.icon.png';
import iconeBebidas from '../../../assets/icons/cafe.icon.png';
import gato from '../../../assets/icons/gato2.png';
import folhaEsquerda from '../../../assets/icons/folhaesquerda2.png';
import folhaDireita from '../../../assets/icons/folhadireita2.png';
import gatinhoComendo from '../../../assets/icons/gatinho-comendo.gif';

// Imagens do Cardápio
import croissant from '../../../assets/images/cardapio/salgados/croissant.png';
import panini from '../../../assets/images/cardapio/salgados/panini.png';
import quiche from '../../../assets/images/cardapio/salgados/quiche.png';
import sanduiche from '../../../assets/images/cardapio/salgados/sanduiche-quente.png';
import tabua from '../../../assets/images/cardapio/salgados/tabua-de-torradas.png';

import brownie from '../../../assets/images/cardapio/doces/brownie.png';
import cheesecake from '../../../assets/images/cardapio/doces/cheesecake.png';
import cinnamon from '../../../assets/images/cardapio/doces/cinnamon.png';
import pavlova from '../../../assets/images/cardapio/doces/pavlova.png';
import torta from '../../../assets/images/cardapio/doces/torta.png';

import cafeChocolate from '../../../assets/images/cardapio/bebidas/cafe-com-chocolate.png';
import cappuccino from '../../../assets/images/cardapio/bebidas/cappuccino.png';
import latte from '../../../assets/images/cardapio/bebidas/latte.png';
import espresso from '../../../assets/images/cardapio/bebidas/espresso.png';
import icedTea from '../../../assets/images/cardapio/bebidas/iced-tea-colorido.png';

interface ItemCardapio {
  nome: string;
  preco: string;
  imagem: any;
}

interface RenderCardItemProps {
  nome: string;
  preco: string;
  imagem: any;
  descricao: string;
  tag: string;
}

export default function Cardapio() {
  const scrollViewRef = useRef<ScrollView>(null);

  const [posicaoSalgados, setPosicaoSalgados] = useState<number>(0);
  const [posicaoDoces, setPosicaoDoces] = useState<number>(0);
  const [posicaoBebidas, setPosicaoBebidas] = useState<number>(0);

  const [modalAberto, setModalAberto] = useState<boolean>(false);
  const [itemSelecionado, setItemSelecionado] = useState<ItemCardapio | null>(null);

  const scrollParaSecao = (posicao: number) => {
    scrollViewRef.current?.scrollTo({ y: posicao - 20, animated: true });
  };

  const abrirModal = (nome: string, preco: string, imagem: any) => {
    setItemSelecionado({ nome, preco, imagem });
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const confirmarSelecao = async () => {
    if (!itemSelecionado) return;
    
    try {
      const stringItens = await AsyncStorage.getItem('itensSelecionados');
      const itensSalvos = stringItens ? JSON.parse(stringItens) : [];
      itensSalvos.push(itemSelecionado);
      await AsyncStorage.setItem('itensSelecionados', JSON.stringify(itensSalvos));
      fecharModal();
      Alert.alert('Sucesso! 🐾', `"${itemSelecionado.nome}" adicionado aos seus itens!`);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar o item.');
    }
  };

  const RenderCardItem = ({ nome, preco, imagem, descricao, tag }: RenderCardItemProps) => (
    <TouchableOpacity style={styles.cardItem} onPress={() => abrirModal(nome, preco, imagem)}>
      <Image source={imagem} style={styles.cardImg} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardNome}>{nome}</Text>
        <Text style={styles.cardDescricao}>{descricao}</Text>
        <Text style={styles.cardPreco}>{preco}</Text>
        <Text style={styles.cardTag}>{tag}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView ref={scrollViewRef} style={styles.pagina} contentContainerStyle={{ paddingBottom: 40 }}>
      
      <View style={styles.cardapioHeader}>
        <Image source={gato} style={styles.gatoTitulo} />
        <View style={styles.tituloContainer}>
          <Image source={folhaEsquerda} style={styles.folha} /> 
          <Text style={styles.titulo}>Cardápio</Text>
          <Image source={folhaDireita} style={styles.folha} />
        </View>
        <Text style={styles.frase}>Sabores que inspiram, aconchegam e despertam histórias.</Text>
      </View>

      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.card1} onPress={() => scrollParaSecao(posicaoSalgados)}>
          <Text style={styles.txt1}>
            <Image source={iconeSalgados} style={styles.iconeCard} /> Capítulos Salgados
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} onPress={() => scrollParaSecao(posicaoDoces)}>
          <Text style={styles.txt2}>
            <Image source={iconeDoces} style={styles.iconeCard} /> Doces da biblioteca
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card3} onPress={() => scrollParaSecao(posicaoBebidas)}>
          <Text style={styles.txt3}>
            <Image source={iconeBebidas} style={styles.iconeCard} /> Poções dos gatos
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divisor} />

      {/* SEÇÃO: SALGADOS */}
      <View onLayout={(e) => setPosicaoSalgados(e.nativeEvent.layout.y)} style={styles.secaoHeader}>
        <View style={styles.secaoTitulo}>
          <Text style={styles.secaoNome}>
            <Image source={iconeSalgados} style={styles.iconeSecao} /> Capítulos Salgados
          </Text>
          <Text style={styles.secaoDescricao}>Pratos salgados feitos com carinho e ingredientes selecionados.</Text>
        </View>
      </View>

      <View style={styles.listaItens}>
        <RenderCardItem nome="Croissant Clássico" preco="R$ 24,90" imagem={croissant} descricao="Croissant artesanal com queijo brie e geleia de damasco." tag="⭐ Favorito da casa" />
        <RenderCardItem nome="Panini da Casa" preco="R$ 21,90" imagem={panini} descricao="Panini artesanal de queijo minas, tomate confit e pesto." tag="🐾 Mais pedido" />
        <RenderCardItem nome="Quiche do Ateliê" preco="R$ 23,90" imagem={quiche} descricao="Quiche de alho-poró com queijo e massa amanteigada." tag="🌿 Vegetariano" />
        <RenderCardItem nome="Sanduíche Quente" preco="R$ 20,90" imagem={sanduiche} descricao="Pão artesanal com frango grelhado e cream cheese." tag="🔥 Quentinho" />
        <RenderCardItem nome="Tábua de Torradas" preco="R$ 18,90" imagem={tabua} descricao="Torradas artesanais com pastas selecionadas da casa." tag="👨‍🍳 Inspiração do chef" />
      </View>

      <View style={styles.divisor} />

      {/* SEÇÃO: DOCES */}
      <View onLayout={(e) => setPosicaoDoces(e.nativeEvent.layout.y)} style={styles.secaoHeader}>
        <View style={styles.secaoTitulo}>
          <Text style={styles.secaoNome}>
            <Image source={iconeDoces} style={styles.iconeSecao} /> Doces da Biblioteca
          </Text>
          <Text style={styles.secaoDescricao}>Doces que adoçam seus melhores momentos.</Text>
        </View>
      </View>

      <View style={styles.listaItens}>
        <RenderCardItem nome="Brownie do Ateliê" preco="R$ 19,90" imagem={brownie} descricao="Brownie intenso com sorvete de creme e calda de chocolate." tag="🐾 Mais pedido" />
        <RenderCardItem nome="Cheesecake da Casa" preco="R$ 18,90" imagem={cheesecake} descricao="Cheesecake cremoso com calda de frutas vermelhas." tag="⭐ Favorito da casa" />
        <RenderCardItem nome="Cinnamon Roll" preco="R$ 17,90" imagem={cinnamon} descricao="Cinnamon roll artesanal coberto com glacê de baunilha." tag="☕ Perfeito com café" />
        <RenderCardItem nome="Pavlova Delicada" preco="R$ 21,90" imagem={pavlova} descricao="Base de merengue com chantilly e frutas frescas." tag="🌿 Leve e especial" />
        <RenderCardItem nome="Torta do Dia" preco="R$ 16,90" imagem={torta} descricao="Torta artesanal com recheio especial feito na hora." tag="👨‍🍳 Inspiração do chef" />
      </View>

      <View style={styles.divisor} />

      {/* SEÇÃO: BEBIDAS */}
      <View onLayout={(e) => setPosicaoBebidas(e.nativeEvent.layout.y)} style={styles.secaoHeader}>
        <View style={styles.secaoTitulo}>
          <Text style={styles.secaoNome}>
            <Image source={iconeBebidas} style={styles.iconeSecao} /> Poções dos Gatos
          </Text>
          <Text style={styles.secaoDescricao}>Bebidas especiais para aquecer o coração e alimentar a alma.</Text>
        </View>
      </View>

      <View style={styles.listaItens}>
        <RenderCardItem nome="Café com Chocolate" preco="R$ 17,90" imagem={cafeChocolate} descricao="Café especial com chocolate belga cremoso e delicioso." tag="🐾 Mais pedido" />
        <RenderCardItem nome="Cappuccino Clássico" preco="R$ 15,90" imagem={cappuccino} descricao="Cappuccino assinatura da casa com canela e muito amor." tag="⭐ Favorito da casa" />
        <RenderCardItem nome="Latte Cremoso" preco="R$ 16,90" imagem={latte} descricao="Latte suave com leite vaporizado e toque de baunilha." tag="☕ Perfeito com livro" />
        <RenderCardItem nome="Espresso da Casa" preco="R$ 8,90" imagem={espresso} descricao="Espresso encorpado e aromático, puro ou com um toque de açúcar." tag="☕ Clássico" />
        <RenderCardItem nome="Iced Tea Colorido" preco="R$ 15,90" imagem={icedTea} descricao="Chá gelado de frutas vermelhas com toque de hortelã e limão." tag="🌿 Refrescante" />
      </View>

      <View style={styles.gatinhoFinal}>
        <Image source={gatinhoComendo} style={styles.gatinhoImg} />
      </View>

      {/* MODAL NATIVO */}
      {modalAberto && itemSelecionado && (
        <Modal transparent={true} visible={modalAberto} animationType="fade" onRequestClose={fecharModal}>
          <TouchableOpacity style={styles.modalOverlay} activeOpacity={1} onPress={fecharModal}>
            <View style={styles.modal} onStartShouldSetResponder={() => true}>
              <Image source={itemSelecionado.imagem} style={styles.modalImg} />
              <View style={styles.modalInfo}>
                <Text style={styles.modalNome}>{itemSelecionado.nome}</Text>
                <Text style={styles.modalPreco}>{itemSelecionado.preco}</Text>
                <Text style={styles.modalPergunta}>Deseja adicionar este item à sua seleção? 🐾</Text>
                <View style={styles.modalBotoes}>
                  <TouchableOpacity style={styles.btnCancelar} onPress={fecharModal}>
                    <Text style={styles.btnTextCancelar}>Cancelar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnConfirmar} onPress={confirmarSelecao}>
                    <Text style={styles.btnTextConfirmar}>Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </Modal>
      )}

    </ScrollView>
  );
}