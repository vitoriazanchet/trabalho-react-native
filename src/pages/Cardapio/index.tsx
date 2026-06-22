import React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Salgados from './Salgados'; 
import Doces from './Doces';
import Bebidas from './Bebidas';

import { styles, CORES_CARDAPIO } from "./styles"; 

import gato from '../../../assets/icons/gato2.png';
import folhaEsquerda from '../../../assets/icons/folhaesquerda2.png';
import folhaDireita from '../../../assets/icons/folhadireita2.png';

const Tab = createBottomTabNavigator();

export default function Cardapio() {
  return (
    <View style={styles.telaCheia}>
      {/* Cabeçalho Fixo */}
      <View style={styles.cardapioHeader}>
        <Image source={gato} style={styles.gatoTitulo} />
        <View style={styles.tituloContainer}>
          <Image source={folhaEsquerda} style={styles.folha} /> 
          <Text style={styles.titulo}>Cardápio</Text>
          <Image source={folhaDireita} style={styles.folha} />
        </View>
        <Text style={styles.frase}>Sabores que inspiram, aconchegam e despertam histórias.</Text>
      </View>

      <View style={styles.tabsContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarLabelPosition: 'beside-icon',
            tabBarIcon: ({ color, size }) => {
              const icones: Record<string, keyof typeof Ionicons.glyphMap> = {
                Salgados: 'restaurant-outline',
                Doces: 'ice-cream-outline',
                Bebidas: 'cafe-outline',
              };
              return <Ionicons name={icones[route.name]} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen 
            name="Salgados" 
            component={Salgados} 
            options={{ 
              title: 'Salgados', 
              tabBarActiveTintColor: CORES_CARDAPIO.salgados.texto, 
              tabBarActiveBackgroundColor: CORES_CARDAPIO.salgados.bg,
              tabBarInactiveTintColor: CORES_CARDAPIO.salgados.textoInativo,
              tabBarInactiveBackgroundColor: CORES_CARDAPIO.salgados.bgInativo, 
            }} 
          />
          <Tab.Screen 
            name="Doces" 
            component={Doces} 
            options={{ 
              title: 'Doces', 
              tabBarActiveTintColor: CORES_CARDAPIO.doces.texto, 
              tabBarActiveBackgroundColor: CORES_CARDAPIO.doces.bg,
              tabBarInactiveTintColor: CORES_CARDAPIO.doces.textoInativo,
              tabBarInactiveBackgroundColor: CORES_CARDAPIO.doces.bgInativo, 
            }}
          />
          <Tab.Screen 
            name="Bebidas" 
            component={Bebidas} 
            options={{ 
              title: 'Bebidas', 
              tabBarActiveTintColor: CORES_CARDAPIO.bebidas.texto, 
              tabBarActiveBackgroundColor: CORES_CARDAPIO.bebidas.bg,
              tabBarInactiveTintColor: CORES_CARDAPIO.bebidas.textoInativo,
              tabBarInactiveBackgroundColor: CORES_CARDAPIO.bebidas.bgInativo, 
            }}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}