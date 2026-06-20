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
  const estiloTitulo = variante === 'card2' ? styles.titulo2 : styles.titulo;
  const estiloCorpo = variante === 'card2' ? styles.corpo2 : styles.corpo;

  return (
    <View style={estiloCard}>
      <Image source={imagem} style={styles.imgCard} resizeMode="contain" />
      <View style={estiloTexto}>
        <Text style={estiloTitulo}>{titulo}</Text>
        <Text style={estiloCorpo}>{descricao}</Text>
      </View>
    </View>
  );
}