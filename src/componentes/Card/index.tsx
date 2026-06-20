import { View, Image, Text, ImageSourcePropType } from "react-native";
import { styles } from "./styles";

type Variante = 'card1' | 'card2';

type Props = {
  imagem: ImageSourcePropType;
  titulo: string;
  descricao: string;
  variante?: Variante;
};

export default function Card({ imagem, titulo, descricao, variante = 'card1' }: Props) {
  const estiloCard = variante === 'card2' ? styles.card2 : styles.card;
  const estiloTexto = variante === 'card2' ? styles.text2 : styles.text;

  return (
    <View style={estiloCard}>
      <Image source={imagem} style={styles.imgCard} resizeMode="contain" />
      <View style={estiloTexto}>
        <Text style={styles.h3}>{titulo}</Text>
        <Text style={styles.p}>{descricao}</Text>
      </View>
    </View>
  );
}