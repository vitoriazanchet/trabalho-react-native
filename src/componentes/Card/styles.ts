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

  titulo: {
    fontFamily: FONTES.corpo.bold,
    color: CORES.texto,
    fontSize: 18,
  },

  titulo2: {
    fontFamily: FONTES.corpo.bold,
    color: CORES.primaria,
    fontSize: 18,
  },

  corpo: {
    fontFamily: FONTES.corpo.regular,
    marginTop: 10,
    fontSize: 14,
    color: CORES.texto,
  },

  corpo2: {
    fontFamily: FONTES.corpo.regular,
    marginTop: 10,
    fontSize: 14,
    color: CORES.primaria,
  },

  imgCard: {
    width: 48,
    height: 48,
    marginLeft: 16,
  },
})