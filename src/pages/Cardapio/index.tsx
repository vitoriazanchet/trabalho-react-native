import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Cardapio() {
  return (
    <View style={styles.pagina}>
        <View style={styles.cardapio}>
            <Text style={styles.titulo}>Cardápio</Text>
            <Text style={styles.frase}>Sabores que inspiram, aconchegam e despertam histórias.</Text>
        </View>
        <View style={ styles.cardsContainer}>
            <View style={styles.card1}>
                <Text style={styles.txt1}>Pinceladas salgadas</Text>
            </View>
            <View style={styles.card2}>
                <Text style={styles.txt2}>Doces da biblioteca</Text>
            </View>
            <View style={styles.card3}>
                <Text style={styles.txt3}>Poções dos gatos</Text>
            </View>
        </View>
    </View>
  );
}