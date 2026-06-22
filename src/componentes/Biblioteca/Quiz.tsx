import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from '../../pages/BibliotecaDoGato/styles';

const perguntasQuiz = [
  {
    id: 1,
    pergunta: 'Está chovendo, você prefere?',
    opcoes: [
      { id: 'A', texto: 'Ficar embaixo das cobertas' },
      { id: 'B', texto: 'Fazer uma pipoca e ver um filme' },
      { id: 'C', texto: 'Jogar um cozy game' },
      { id: 'D', texto: 'Praticar um novo hobby' },
    ],
  },
  {
    id: 2,
    pergunta: 'Acabei de abrir o Netflix, qual filme você escolheria?',
    opcoes: [
      { id: 'A', texto: 'Mamma Mia!' },
      { id: 'B', texto: 'Einstein e a Bomba' },
      { id: 'C', texto: 'Senhor dos Anéis' },
      { id: 'D', texto: 'A noite que mudou o Pop' },
    ],
  },
  {
    id: 3,
    pergunta: 'Qual a melhor estação do ano?',
    opcoes: [
      { id: 'A', texto: 'Primavera' },
      { id: 'B', texto: 'Outono' },
      { id: 'C', texto: 'Inverno' },
      { id: 'D', texto: 'Verão' },
    ],
  },
];

const mapaGeneros: Record<string, string> = {
  A: 'Romance',
  B: 'Biografia e História',
  C: 'Fantasia',
  D: 'Artes',
};

const emojiGeneros: Record<string, string> = {
  Romance: '💕',
  'Biografia e História': '📚',
  Fantasia: '🧙',
  Artes: '🎨',
};

interface QuizProps {
  onGeneroDefinido?: (genero: string) => void;
}

export default function Quiz({ onGeneroDefinido }: QuizProps) {
  const [perguntaAtual, setPerguntaAtual] = useState(0);
  const [respostasUsuario, setRespostasUsuario] = useState<string[]>([]);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [generoResultado, setGeneroResultado] = useState('');

  const calcularGenero = (respostas: string[]) => {
    const contagem = respostas.reduce<Record<string, number>>((acc, letra) => {
      acc[letra] = (acc[letra] || 0) + 1;
      return acc;
    }, {});

    const letraMaisVotada = Object.keys(contagem).reduce((a, b) =>
      contagem[a] >= contagem[b] ? a : b
    );

    return mapaGeneros[letraMaisVotada];
  };

  const lidarComResposta = (opcaoId: string) => {
    const novasRespostas = [...respostasUsuario, opcaoId];
    setRespostasUsuario(novasRespostas);

    const proxima = perguntaAtual + 1;
    if (proxima < perguntasQuiz.length) {
      setPerguntaAtual(proxima);
    } else {
      const genero = calcularGenero(novasRespostas);
      setGeneroResultado(genero);
      setMostrarResultado(true);
      onGeneroDefinido?.(genero);
    }
  };

  const reiniciarQuiz = () => {
    setPerguntaAtual(0);
    setRespostasUsuario([]);
    setMostrarResultado(false);
    setGeneroResultado('');
  };

  if (mostrarResultado) {
    return (
      <View style={styles.resultadoContainer}>
        <Text style={styles.resultadoTitulo}>Resultado do Quiz!</Text>
        <Text style={styles.resultadoDescricao}>
          Com base nas suas respostas, seu gênero ideal é:
        </Text>

        <View style={styles.resultadoCard}>
          <Text style={styles.resultadoEmoji}>
            {emojiGeneros[generoResultado]}
          </Text>
          <Text style={styles.resultadoGenero}>{generoResultado}</Text>
        </View>

        <Text style={styles.resultadoHint}>
          Confira os livros recomendados para você acima! 👆
        </Text>

        <TouchableOpacity
          style={styles.botaoReiniciar}
          onPress={reiniciarQuiz}
          activeOpacity={0.8}
        >
          <Text style={styles.botaoReiniciarTexto}>Refazer Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const pergunta = perguntasQuiz[perguntaAtual];

  return (
    <View style={styles.quizContainer}>
      <Text style={styles.progresso}>
        Pergunta {perguntaAtual + 1} de {perguntasQuiz.length}
      </Text>
      <Text style={styles.perguntaTexto}>{pergunta.pergunta}</Text>

      {pergunta.opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={styles.opcaoBotao}
          onPress={() => lidarComResposta(opcao.id)}
          activeOpacity={0.75}
        >
          <Text style={styles.opcaoLetra}>{opcao.id}.</Text>
          <Text style={styles.opcaoTexto}>{opcao.texto}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}