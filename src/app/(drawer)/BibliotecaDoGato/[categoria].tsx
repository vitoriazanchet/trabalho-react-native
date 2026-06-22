import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import CategorySection from '../../../componentes/Biblioteca/CategorySection';
import { CATEGORIES } from '../../../constants/Categories';
import { styles } from '../../../pages/BibliotecaDoGato/styles';

export default function CategoriaScreen() {
  const { categoria } = useLocalSearchParams<{ categoria: string }>();
  const router = useRouter();

  
  const subject = CATEGORIES[categoria] ?? categoria;

  return (
    <View style={styles.telaCheia}>
      <View style={headerStyles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={headerStyles.botaoVoltar}
          activeOpacity={0.7}
        >
          <Ionicons name="arrow-back" size={22} color="rgb(94, 104, 73)" />
        </TouchableOpacity>

        <Text style={headerStyles.titulo}>{categoria}</Text>

        <View style={headerStyles.espacador} />
      </View>

      <ScrollView contentContainerStyle={headerStyles.conteudo}>
        <View style={styles.card}>
          <CategorySection
            label=""
            subject={subject}
            maxResults={18}
          />
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos locais do header
import { StyleSheet } from 'react-native';
import { FONTES } from '../../../styles/theme';

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 52,
    paddingBottom: 16,
    backgroundColor: 'rgb(241, 237, 221)',
  },
  botaoVoltar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(204, 211, 159, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontFamily: FONTES?.titulo?.bold ?? 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: 'rgb(94, 104, 73)',
    textAlign: 'center',
    flex: 1,
  },
  espacador: {
    width: 36,
  },
  conteudo: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
});