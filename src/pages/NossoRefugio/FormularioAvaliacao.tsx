import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';

interface ErrosFormulario {
  nome?: string;
  email?: string;
  comentario?: string;
}

export default function FormularioAvaliacao() {
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
        headers: {'Content-Type': 'application/json',},
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
    <>
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
    </>
  );
}