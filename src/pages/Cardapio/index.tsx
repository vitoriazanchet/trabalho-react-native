import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Salgados from './Salgados';
import Doces from './Doces';
import Bebidas from './Bebidas';
import { styles, CORES_CATEGORIA } from "./styles";

const Tab = createBottomTabNavigator();

export default function Cardapio() {
  return (
    <View style={styles.telaCheia}>
        <View style={styles.cardapio}>
            <Text style={styles.titulo}>Cardápio</Text>
            <Text style={styles.frase}>Sabores que inspiram, aconchegam e despertam histórias.</Text>
        </View>
        <View style={styles.tabsContainer}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarIcon: ({ color, size }) => {
              const icones: Record<string, keyof typeof Ionicons.glyphMap> = {
                Salgados: 'fast-food-outline',
                Doces: 'ice-cream-outline',
                Bebida: 'cafe-outline',
              };
              return <Ionicons name={icones[route.name]} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Salgados" component={Salgados} options={{ title: 'Pinceladas salgadas', 
            tabBarActiveTintColor: CORES_CATEGORIA.salgados.texto, 
            tabBarActiveBackgroundColor: CORES_CATEGORIA.salgados.bg,
            tabBarInactiveTintColor: CORES_CATEGORIA.salgados.textoInativo,
            tabBarInactiveBackgroundColor: CORES_CATEGORIA.salgados.bgInativo, }} 
            />
          <Tab.Screen name="Doces" component={Doces} options={{ title: 'Doces da biblioteca', 
            tabBarActiveTintColor: CORES_CATEGORIA.doces.texto, 
            tabBarActiveBackgroundColor: CORES_CATEGORIA.doces.bg,
            tabBarInactiveTintColor: CORES_CATEGORIA.doces.textoInativo,
            tabBarInactiveBackgroundColor: CORES_CATEGORIA.doces.bgInativo, }}
            />
          <Tab.Screen name="Bebidas" component={Bebidas} options={{ title: 'Poções dos gatos', 
            tabBarActiveTintColor: CORES_CATEGORIA.bebidas.texto, 
            tabBarActiveBackgroundColor: CORES_CATEGORIA.bebidas.bg,
            tabBarInactiveTintColor: CORES_CATEGORIA.bebidas.textoInativo,
            tabBarInactiveBackgroundColor: CORES_CATEGORIA.bebidas.bgInativo, }}
            />
        </Tab.Navigator>
        </View>
    </View>
  );
}