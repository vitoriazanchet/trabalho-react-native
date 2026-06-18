import { useState } from 'react';
import { View, Text, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import folhaDireita from '../../../assets/icons/folhadireita1.png';
import folhaEsquerda from '../../../assets/icons/folhaesquerda1.png';
import folhaDireita2 from '../../../assets/icons/folhadireita2.png';
import folhaEsquerda2 from '../../../assets/icons/folhaesquerda2.png';
import fachada from '../../../assets/images/fachada.png';
import espaco1 from '../../../assets/images/espaco1.png';
import espaco2 from '../../../assets/images/espaco2.png';
import espaco3 from '../../../assets/images/espaco3.png';
import espaco4 from '../../../assets/images/espaco4.png';
import espaco5 from '../../../assets/images/espaco5.png';
import plantinha from '../../../assets/icons/plantinha.png';
import paleta from '../../../assets/icons/paleta.png';
import livroFechado from '../../../assets/icons/livro fechado.png';
import gatinho1 from '../../../assets/icons/gatinho1.png';
import cafe from '../../../assets/icons/cafe.png';
import gatinho2 from '../../../assets/icons/gatinho2.png';
import livroAberto from '../../../assets/icons/livro aberto.png';

interface ErrosFormulario {
  nome?: string;
  email?: string;
  comentario?: string;
}

export default function NossoRefugio() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comentario, setComentario] = useState('');
  const [erros, setErros] = useState<ErrosFormulario>({});
  const [enviando, setEnviando] = useState(false);

  const validar = () => {
    const erro: ErrosFormulario = {};
    if (nome.trim().length < 3) {erro.nome = 'O nome deve ter no mínimo 3 caracteres.';}
    if (!email.includes('@')) {erro.email = 'Digite um e-mail válido.';}
    if (comentario.trim().length < 10) {erro.comentario = 'O comentário deve ter no mínimo 10 caracteres.';}
    setErros(erro);
    return Object.keys(erro).length === 0;
  };

  const handleEnviar = async () => {
    if (!validar()) return;
    setEnviando(true);

    try {
      const resposta = await fetch('https://6a325645c6ca2aee4384db15.mockapi.io/cafeteria/avaliacoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, comentario }),
      });

      if (!resposta.ok) {
        throw new Error('Falha ao enviar avaliação.');
      }

      Alert.alert('Sucesso', 'Avaliação enviada com sucesso!');
      setNome('');
      setEmail('');
      setComentario('');
      setErros({});
    } catch (erro) {
      Alert.alert('Erro', 'Ocorreu um erro ao enviar sua avaliação. Tente novamente.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.telaCheia}>
      <View style={styles.primaria}>
        <View style={styles.titulo}>
          <Image source={folhaEsquerda} style={styles.imgTitulo} resizeMode="contain" />
          <Text style={styles.h1}>Nosso Refúgio</Text>
          <Image source={folhaDireita} style={styles.imgTitulo} resizeMode="contain" />
        </View>
        <Text style={styles.p}>Mais que um café, um lugar para pertencer.</Text>
      </View>
      <View style={styles.tercearia}>
      <ImageBackground source={fachada} style={styles.imgLeft} resizeMode="cover">
        <View style={styles.historia}>
          <Text style={styles.backgroundH2}>Nossa história</Text>
          <Text style={styles.backgroundP}>O Book & Brew nasceu do desejo de criar um espaço onde arte, leitura e conforto pudessem coexistir em harmonia.</Text>
          <Text style={styles.backgroundP}>Cada detalhe foi pensado para que você se sinta em casa, inspirado e acolhido!</Text>
        </View>
      </ImageBackground>
      </View>
      <View style={styles.primaria}>
        <View style={styles.titulo}>
          <Image source={folhaEsquerda2} style={styles.imgTitulo} resizeMode="contain" />
          <Text style={styles.h2}>Nossos valores</Text>
          <Image source={folhaDireita2} style={styles.imgTitulo} resizeMode="contain" />
        </View>
        <View style={styles.secundaria}>
          <View style={styles.card}>
            <Image source={plantinha} style={styles.imgCard} resizeMode="contain" />
            <View style={styles.text}>
              <Text style={styles.h3}>Aconchego</Text>
              <Text style={styles.p}>Ambientes calmos e acolhedores para descansar a mente.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={paleta} style={styles.imgCard} resizeMode="contain" />
            <View style={styles.text}>
              <Text style={styles.h3}>Criatividade</Text>
              <Text style={styles.p}>Um espaço para expansão criativa e novas ideias.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={livroFechado} style={styles.imgCard} resizeMode="contain" />
            <View style={styles.text}>
              <Text style={styles.h3}>Cultura</Text>
              <Text style={styles.p}>Livros e histórias para imaginar e transformar.</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={gatinho1} style={styles.imgCard} resizeMode="contain" />
            <View style={styles.text}>
              <Text style={styles.h3}>Cuidado Animal</Text>
              <Text style={styles.p}>Gatinhos felizes, respeitados e muito bem cuidados.</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.primaria}>
        <View style={styles.titulo}>
          <Image source={folhaEsquerda2} style={styles.imgTitulo} resizeMode="contain" />
          <Text style={styles.h2}>Nosso cantinho</Text>
          <Image source={folhaDireita2} style={styles.imgTitulo} resizeMode="contain" />
        </View>
        <View style={styles.secundaria}>
          <Image source={espaco1} style={styles.imgSecundaria} />
          <Image source={espaco2} style={styles.imgSecundaria} />
          <Image source={espaco3} style={styles.imgSecundaria} />
          <Image source={espaco4} style={styles.imgSecundaria} />
        </View>
      </View>
      <View style={styles.metricas}>
        <View style={styles.card2}>
          <Image source={cafe} style={styles.imgCard} resizeMode="contain" />
          <View style={styles.text2}>
            <Text style={styles.h3}>+4.000</Text>
            <Text style={styles.p}>cafés servidos com amor</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <Image source={gatinho2} style={styles.imgCard} resizeMode="contain" />
          <View style={styles.text2}>
            <Text style={styles.h3}>+10.000</Text>
            <Text style={styles.p}>ronrons compartilhados</Text>
          </View>
        </View>
        <View style={styles.card2}>
          <Image source={livroAberto} style={styles.imgCard} resizeMode="contain" />
          <View style={styles.text2}>
            <Text style={styles.h3}>+2.000</Text>
            <Text style={styles.p}>livros lidos por aqui</Text>
          </View>
        </View>
      </View>
      <View style={styles.tercearia}>
        <ImageBackground source={espaco5} style={styles.imgRight} resizeMode="cover" >
          <View style={styles.avaliacao}>
            <View style={styles.titulo}>
              <Image source={folhaEsquerda2} style={styles.imgTitulo} resizeMode="contain" />
              <Text style={styles.avaliacaoH2}>Avalie nosso atendimento</Text>
              <Image source={folhaDireita2} style={styles.imgTitulo} resizeMode="contain" />
            </View>
            <Text style={styles.avaliacaoH3}>Nome</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} />
            <Text style={styles.erro}>{erros.nome || ''}</Text>
            <Text style={styles.avaliacaoH3}>E-mail</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <Text style={styles.erro}>{erros.email || ''}</Text>
            <Text style={styles.avaliacaoH3}>Comentário</Text>
            <TextInput style={styles.input} value={comentario} onChangeText={setComentario} multiline />
            <Text style={styles.erro}>{erros.comentario || ''}</Text>
            <TouchableOpacity disabled={enviando} style={styles.button} onPress={handleEnviar}>
              <Text style={styles.buttonText}>{enviando ? 'Enviando...' : 'Avaliar'}</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}