import { Drawer } from 'expo-router/drawer';
import { CORES, FONTES } from '../../styles/theme';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerStyle: {
          backgroundColor: CORES.primariaLight,
          width: 260,
        },
        drawerActiveBackgroundColor: CORES.secundaria,
        drawerActiveTintColor: CORES.primariaLight,
        drawerInactiveTintColor: CORES.texto,
        drawerLabelStyle: {
          fontFamily: FONTES.corpo.bold,
          fontSize: 15,
        },
        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 8,
        },
      }}
    >
      <Drawer.Screen name="Home" options={{ title: 'Início' }} />
      <Drawer.Screen name="NossoRefugio" options={{ title: 'Nosso Refúgio' }} />
      <Drawer.Screen name="Cardapio" options={{ title: 'Cardápio' }} />
      <Drawer.Screen name="BibliotecaDoGato" options={{ title: 'Biblioteca do Gato' }} />
      <Drawer.Screen name="ItensSelecionados" options={{ title: 'Itens Selecionados' }} />
    </Drawer>
  );
}