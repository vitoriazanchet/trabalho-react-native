import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
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

      {/* Container das Abas */}
      <View style={styles.tabsContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarItemStyle: { padding: 0, margin: 0 },
            tabBarIcon: ({ color }) => {
              const icones: Record<string, keyof typeof Ionicons.glyphMap> = {
                Salgados: 'restaurant-outline',
                Doces: 'ice-cream-outline',
                Bebidas: 'cafe-outline',
              };
              return <Ionicons name={icones[route.name]} size={22} color={color} />;
            },
          })}
        >
          <Tab.Screen 
            name="Salgados" 
            component={Salgados} 
            options={{ 
              title: 'Salgados',
              tabBarActiveTintColor: CORES_CARDAPIO.salgados.texto, 
              tabBarInactiveTintColor: CORES_CARDAPIO.salgados.textoInativo,
              // Desestruturamos apenas as propriedades seguras e necessárias para o TypeScript
              tabBarButton: ({ onPress, accessibilityState, children }) => (
                <TouchableOpacity
                  onPress={onPress}
                  accessibilityState={accessibilityState}
                  activeOpacity={1}
                  style={[
                    styles.tabBarItemCustom,
                    accessibilityState?.selected ? { backgroundColor: CORES_CARDAPIO.salgados.bg } : null
                  ]}
                >
                  {children}
                </TouchableOpacity>
              )
            }} 
          />
          <Tab.Screen 
            name="Doces" 
            component={Doces} 
            options={{ 
              title: 'Doces',
              tabBarActiveTintColor: CORES_CARDAPIO.doces.texto, 
              tabBarInactiveTintColor: CORES_CARDAPIO.doces.textoInativo,
              tabBarButton: ({ onPress, accessibilityState, children }) => (
                <TouchableOpacity
                  onPress={onPress}
                  accessibilityState={accessibilityState}
                  activeOpacity={1}
                  style={[
                    styles.tabBarItemCustom,
                    accessibilityState?.selected ? { backgroundColor: CORES_CARDAPIO.doces.bg } : null
                  ]}
                >
                  {children}
                </TouchableOpacity>
              )
            }} 
          />
          <Tab.Screen 
            name="Bebidas" 
            component={Bebidas} 
            options={{ 
              title: 'Bebidas',
              tabBarActiveTintColor: CORES_CARDAPIO.bebidas.texto, 
              tabBarInactiveTintColor: CORES_CARDAPIO.bebidas.textoInativo,
              tabBarButton: ({ onPress, accessibilityState, children }) => (
                <TouchableOpacity
                  onPress={onPress}
                  accessibilityState={accessibilityState}
                  activeOpacity={1}
                  style={[
                    styles.tabBarItemCustom,
                    accessibilityState?.selected ? { backgroundColor: CORES_CARDAPIO.bebidas.bg } : null
                  ]}
                >
                  {children}
                </TouchableOpacity>
              )
            }} 
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}