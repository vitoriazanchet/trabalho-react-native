import { StyleSheet } from "react-native";
import { FONTES, MEDIDAS, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({
  pagina: {
    padding: 32,
  },

  cardapio: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 16,
  },

  titulo: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 59,
    color: 'rgb(94, 104, 73)',
    textAlign: 'center',
    marginBottom: 2,
    letterSpacing: 1.5,
  },

  frase: {
    fontFamily: FONTES.corpo.regular,
    fontStyle: 'italic',
    color: 'rgb(133, 117, 94)',
    letterSpacing: 1.6,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    flexWrap: 'wrap',
  },

  card1: {
    backgroundColor: 'rgba(204, 211, 159, 0.55)',
    borderRadius: MEDIDAS.radiusM,
    padding: 24,
    flex: 1,
    minWidth: 250,
    maxWidth: 350,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  card2: {
    backgroundColor: 'rgba(206, 163, 135, 0.55)',
    borderRadius: MEDIDAS.radiusM,
    padding: 24,
    flex: 1,
    minWidth: 250,
    maxWidth: 350,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  card3: {
    backgroundColor: 'rgba(190, 131, 82, 0.49)',
    borderRadius: MEDIDAS.radiusM,
    padding: 24,
    flex: 1,
    minWidth: 250,
    maxWidth: 350,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },

  txt1: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 24,
    color: 'rgb(122, 133, 100)',
    textAlign: 'right',
  },

  txt2: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 24,
    color: 'rgb(143, 118, 102)',
    textAlign: 'right',
  },

  txt3: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 24,
    color: 'rgb(141, 111, 87)',
    textAlign: 'right',
  },
})