import { View, Text, Image, ImageSourcePropType } from "react-native";
import folhaEsquerda1 from '../../../assets/icons/folhaesquerda1.png';
import folhaDireita1 from '../../../assets/icons/folhadireita1.png';
import folhaEsquerda2 from '../../../assets/icons/folhaesquerda2.png';
import folhaDireita2 from '../../../assets/icons/folhadireita2.png';
import { styles } from "./styles";

type Variante = 'principal' | 'secao';

type Props = {
  texto: string;
  folhaEsquerda?: ImageSourcePropType;
  folhaDireita?: ImageSourcePropType;
  variante?: Variante;
};

export default function Titulo({ texto, folhaEsquerda: folhaEsqProp, folhaDireita: folhaDirProp, variante = 'principal'}: Props) {
  const estiloTexto = variante === 'secao' ? styles.h2 : styles.h1;
  const esquerdaPadrao = variante === 'secao' ? folhaEsquerda2 : folhaEsquerda1;
  const direitaPadrao = variante === 'secao' ? folhaDireita2 : folhaDireita1;

  return (
    <View style={styles.titulo}>
      <Image source={folhaEsqProp ?? esquerdaPadrao} style={styles.imagem} resizeMode="contain" />
      <Text style={estiloTexto}>{texto}</Text>
      <Image source={folhaDirProp ?? direitaPadrao} style={styles.imagem} resizeMode="contain" />
    </View>
  );
}