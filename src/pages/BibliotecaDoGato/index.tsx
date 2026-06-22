import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Destaque from './Destaque';
import Categorias from './Categorias';
import Recomendados from './Recomendados';
import { styles, CORES_CATEGORIA } from './styles';

const Tab = createBottomTabNavigator();

export default function BibliotecaDoGato() {
  return (
    <View style={styles.telaCheia}>
      <View style={styles.cardapio}>
        <Text style={styles.titulo}>Biblioteca do Gato</Text>
        <Text style={styles.frase}>Livros, histórias e um bom café</Text>
      </View>

      <View style={styles.tabsContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarIcon: ({ color, size }) => {
              const icones: Record<string, keyof typeof Ionicons.glyphMap> = {
                Destaque: 'star-outline',
                Categorias: 'grid-outline',
                Recomendados: 'bookmark-outline',
              };

              return (
                <Ionicons
                  name={icones[route.name]}
                  size={size}
                  color={color}
                />
              );
            },
          })}
        >
          <Tab.Screen
            name="Destaque"
            component={Destaque}
            options={{
              tabBarActiveTintColor:
                CORES_CATEGORIA.destaque.texto,
              tabBarActiveBackgroundColor:
                CORES_CATEGORIA.destaque.bg,
            }}
          />

          <Tab.Screen
            name="Categorias"
            component={Categorias}
            options={{
              tabBarActiveTintColor:
                CORES_CATEGORIA.categorias.texto,
              tabBarActiveBackgroundColor:
                CORES_CATEGORIA.categorias.bg,
            }}
          />

          <Tab.Screen
            name="Recomendados"
            component={Recomendados}
            options={{
              tabBarActiveTintColor:
                CORES_CATEGORIA.recomendados.texto,
              tabBarActiveBackgroundColor:
                CORES_CATEGORIA.recomendados.bg,
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}