import { StyleSheet, Dimensions } from "react-native";
import { FONTES, MEDIDAS } from "../../styles/theme";

const larguraDoItem = (Dimensions.get('window').width - 44) / 2;

const CORES_CARDAPIO = {
  salgados: { 
    bg: 'rgba(78, 87, 60, 0.15)',        
    texto: '#4E573C',                    
    bgInativo: 'transparent',
    textoInativo: 'rgba(78, 87, 60, 0.4)',
  },
  doces: { 
    bg: 'rgba(139, 90, 43, 0.15)',       
    texto: '#8B5A2B',                    
    bgInativo: 'transparent',
    textoInativo: 'rgba(139, 90, 43, 0.4)',
  },
  bebidas: { 
    bg: 'rgba(105, 116, 83, 0.15)',      
    texto: '#697453',                    
    bgInativo: 'transparent',
    textoInativo: 'rgba(105, 116, 83, 0.4)',
  },
};

export { CORES_CARDAPIO };

export const styles = StyleSheet.create({
  telaCheia: {
    flex: 1,
    backgroundColor: 'rgb(253, 252, 248)',
  },
  cardapioHeader: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  gatoTitulo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  tituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  folha: {
    width: 60,
    height: 35,
    resizeMode: 'contain',
    marginHorizontal: 16,
  },
  titulo: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 42,
    color: 'rgb(78, 87, 60)',
    textAlign: 'center',
    marginBottom: 2,
  },
  frase: {
    fontFamily: FONTES.corpo.regular,
    fontStyle: 'italic',
    color: 'rgb(83, 75, 63)',
    textAlign: 'center',
    letterSpacing: 1,
    paddingHorizontal: 24,
    marginTop: 4,
  },
  tabsContainer: {
    flex: 1,
    marginTop: 8,
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
  
  // --- Sistema de Grid para os Cards ---
  listaItensGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingBottom: 32,
    paddingTop: 12,
  },
  cardItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: MEDIDAS.radiusM,
    width: 180,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  cardImg: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  cardInfo: {
    padding: 12,
    flexDirection: 'column',
    gap: 5,
  },
  cardNome: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 15,
    color: 'rgb(50, 50, 50)',
  },
  cardDescricao: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 12,
    color: '#726B62',
    lineHeight: 16,
    height: 48,
  },
  cardPreco: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 14,
    color: '#8B5A2B',
    marginTop: 4,
  },
  badgeContainer: {
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  cardTag: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 11,
    color: '#4E573C',
    borderWidth: 1,
    borderColor: '#697453',
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  // --- Estilos do Modal Customizado ---
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: 'rgb(241, 237, 221)',
    borderRadius: 16,
    overflow: 'hidden',
    width: 340,
    elevation: 5,
  },
  modalImg: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  modalInfo: {
    padding: 24,
    flexDirection: 'column',
    gap: 8,
  },
  modalNome: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 20,
    color: '#333',
  },
  modalPreco: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 16,
    color: '#8B5A2B',
  },
  modalPergunta: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  modalBotoes: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  btnCancelar: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: 'rgba(133, 117, 94, 0.3)',
    borderRadius: 8,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtCancelar: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 14,
    color: '#666',
  },
  btnConfirmar: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#4E573C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtConfirmar: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 14,
    color: '#FFFFFF',
  },
});