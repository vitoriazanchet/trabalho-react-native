import { styles } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Link, usePathname } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import cafe from '../../../assets/icons/cafe.png';

const PAGINAS = [
  { href: '/(drawer)/Home', label: 'Início', icone: 'home-outline' as const },
  { href: '/(drawer)/NossoRefugio', label: 'Refúgio', icone: 'leaf-outline' as const },
  { href: '/(drawer)/Cardapio', label: 'Cardápio', icone: 'cafe-outline' as const },
  { href: '/(drawer)/BibliotecaDoGato', label: 'Biblioteca', icone: 'book-outline' as const },
  { href: '/(drawer)/ItensSelecionados', label: 'Itens', icone: 'bag-handle-outline' as const },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <View style={styles.footer}>
      <View style={styles.tabBar}>
        {PAGINAS.map(({ href, label, icone }) => {
          const ativo = pathname === href;
          return (
            <Link key={href} href={href} asChild>
              <TouchableOpacity style={styles.tabItem}>
                <Ionicons
                  name={icone}
                  size={22}
                  color={ativo ? styles.tabLabelAtivo.color : styles.tabLabel.color}
                />
                <Text style={[styles.tabLabel, ativo && styles.tabLabelAtivo]}>{label}</Text>
              </TouchableOpacity>
            </Link>
          );
        })}
      </View>
      <View style={styles.rodape}>
        <Image source={cafe} style={styles.logoCafe} resizeMode="cover" />
        <View style={styles.marca}>
          <Text style={styles.rodapeP}>Aqui cada detalhe é feito com carinho para você e nossos gatinhos se sentirem em casa.</Text>
          <Text style={styles.rodapeSmall}>© {new Date().getFullYear()} Book & Brew. Todos os direitos reservados.</Text>
        </View>
      </View>
    </View>
  );
}