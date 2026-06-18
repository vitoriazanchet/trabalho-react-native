import { styles } from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';
import logo from '../../../assets/images/logo.cafeteria.png';

export default function Navbar() {
  const navigation = useNavigation();

  const abrirMenuLateral = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={logo} style={styles.logoImg} resizeMode="cover" />
        </View>
        <TouchableOpacity style={styles.menuToggle} onPress={abrirMenuLateral}>
          <View style={styles.bar} />
          <View style={styles.bar} />
          <View style={styles.bar} />
        </TouchableOpacity>
      </View>
    </View>
  );
}