import { StyleSheet } from "react-native";
import { FONTES } from "../../styles/theme";

export const styles = StyleSheet.create({

  titulo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 10,
  },

  imagem: {
    width: 20,
    height: 20,
  },

  h1: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 28,
  },

  h2: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 21,
    marginTop: 5,
  },
})