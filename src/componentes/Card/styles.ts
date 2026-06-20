import { StyleSheet } from "react-native";
import { FONTES, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CORES.primaria,
    borderWidth: 1,
    borderColor: CORES.terceariaLight,
    borderRadius: 18,
    flex: 1,
    height: 160,
  },

  card2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 80,
  },

  text: {
    flexDirection: 'column',
    padding: 32,
  },

  text2: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    width: 203,
  },

  h3: {
    fontFamily: FONTES.corpo.bold,
    fontSize: 18,
  },

  p: {
    fontFamily: FONTES.corpo.regular,
    marginTop: 10,
    fontSize: 14,
    color: CORES.texto,
  },

  imgCard: {
    width: 48,
    height: 48,
    marginLeft: 16,
  },
})