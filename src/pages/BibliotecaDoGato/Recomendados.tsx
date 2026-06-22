import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import CategorySection from '../../componentes/Biblioteca/CategorySection';
import Quiz from '../../componentes/Biblioteca/Quiz';
import { styles } from './styles';

export default function Recomendados() {
  const [mostrarQuiz, setMostrarQuiz] =
    useState(false);

  const [generoRecomendado, setGeneroRecomendado] =
    useState('romance');

  const handleGeneroDefinido = (
    genero: string
  ) => {
    setGeneroRecomendado(
      genero.toLowerCase()
    );
    setMostrarQuiz(false);
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Recomendados para você
        </Text>

        <CategorySection
          label=""
          subject={generoRecomendado}
          maxResults={3}
        />
      </View>

      <View style={styles.card}>
        {mostrarQuiz ? (
          <Quiz
            onGeneroDefinido={
              handleGeneroDefinido
            }
          />
        ) : (
          <>
            <Text style={styles.cardTitulo}>
              Qual livro combina com você?
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() =>
                setMostrarQuiz(true)
              }
            >
              <Text style={styles.botaoTexto}>
                Descubra agora
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
}