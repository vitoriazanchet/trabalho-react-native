import { StyleSheet } from "react-native";
import { FONTES, MEDIDAS } from "../../styles/theme";

const CORES_CATEGORIA = {
  salgados: {
    bg: 'rgba(204, 211, 159, 0.55)',
    texto: 'rgb(122, 133, 100)',
    bgInativo: 'rgba(204, 211, 159, 0.2)',
    textoInativo: 'rgba(122, 133, 100, 0.6)',
  },
  doces: {
    bg: 'rgba(206, 163, 135, 0.55)',
    texto: 'rgb(143, 118, 102)',
    bgInativo: 'rgba(206, 163, 135, 0.2)',
    textoInativo: 'rgba(143, 118, 102, 0.6)',
  },
  bebidas: {
    bg: 'rgba(190, 131, 82, 0.49)',
    texto: 'rgb(141, 111, 87)',
    bgInativo: 'rgba(190, 131, 82, 0.2)',
    textoInativo: 'rgba(141, 111, 87, 0.6)',
  },
};

export { CORES_CATEGORIA };

export const styles = StyleSheet.create({
  telaCheia: {
    flex: 1,
    //estilo aletório apenas para visualizar a navegação das páginas internas:
    backgroundColor: 'rgb(241, 237, 221)',
    fontFamily: FONTES.corpo.regular,
    fontStyle: 'italic',
    color: 'rgb(133, 117, 94)',
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

  tabsContainer: {
    flex: 1,
  },

  tabBar: {
    backgroundColor: 'rgb(241, 237, 221)',
    height: 64,
    borderTopWidth: 0,
    elevation: 8,
  },
  tabBarLabel: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 12.2,
    fontWeight: '600',
  },

  card1: {
    backgroundColor: CORES_CATEGORIA.salgados.bg,
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
    backgroundColor: CORES_CATEGORIA.doces.bg,
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
    backgroundColor: CORES_CATEGORIA.bebidas.bg,
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
    color: CORES_CATEGORIA.salgados.texto,
    textAlign: 'right',
  },

  txt2: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 24,
    color: CORES_CATEGORIA.doces.texto,
    textAlign: 'right',
  },

  txt3: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 24,
    color: CORES_CATEGORIA.bebidas.texto,
    textAlign: 'right',
  },
})