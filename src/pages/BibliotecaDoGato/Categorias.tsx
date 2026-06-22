import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';

import { CATEGORIES } from '../../constants/Categories';
import { styles } from './styles';

export default function Categorias() {
  const router = useRouter();

  return (
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.cardTitulo}>
          Categorias
        </Text>

        <View style={styles.categoriasGrid}>
          {Object.keys(CATEGORIES).map((key) => (
            <TouchableOpacity
              key={key}
              style={styles.botao}
              onPress={() =>
                router.push({
                 pathname: '/(drawer)/BibliotecaDoGato/[categoria]',
                  params: { categoria: key },
                })

              }
            >
              <Text style={styles.botaoTexto}>
                {key}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}