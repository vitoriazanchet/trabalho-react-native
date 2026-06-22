import { StyleSheet } from "react-native";
import { FONTES, MEDIDAS, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({
  inicial: {
    flex: 1,
    backgroundColor: 'rgb(253, 252, 248)', 
  },

  scrollContainer: {
    padding: 24,
    paddingBottom: 40,
  },

  headerPagina: {
    alignItems: 'center',
    marginBottom: 24,
  },

  tituloPagina: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 22,
    color: '#4E573C', 
    textAlign: 'center',
    marginBottom: 8,
  },

  subtituloPagina: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 14,
    color: '#726B62',
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 16,
  },

  
  blocoContainer: {
    backgroundColor: '#F5F3ED', 
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
  },

  blocoTituloContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  blocoTitulo: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 18,
    color: '#3A3228',
  },

  textoVazio: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 14,
    color: '#8A8073',
    textAlign: 'center',
    marginVertical: 16,
  },

  
  cardItem: {
    backgroundColor: CORES.primaria, 
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 10,
    position: 'relative',
  },

  cardImg: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12,
  },

  cardInfo: {
    flex: 1,
    justifyContent: 'center',
  },

  cardNome: {
    fontFamily: FONTES.corpo.bold,
    fontSize: 15,
    color: CORES.texto,
  },

  multiplicador: {
    color: '#C68B59', 
    fontFamily: FONTES.corpo.bold,
  },

  cardPreco: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 14,
    color: '#A67C52',
    marginTop: 2,
  },

  cardAutor: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 13,
    color: '#726B62',
    marginTop: 2,
  },

  botaoDeletar: {
    padding: 8,
  },

  textoDeletar: {
    color: '#C4B9AC',
    fontSize: 16,
  },

 
  blocoLembrete: {
    backgroundColor: '#F5F3ED',
    borderRadius: 18,
    padding: 20,
    marginTop: 8,
  },

  tituloLembrete: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 18,
    color: '#A67C52', 
    marginBottom: 8,
  },

  textoLembrete: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 14,
    color: '#5C5346',
    lineHeight: 21,
    marginBottom: 20,
  },

  botaoGarcom: {
    backgroundColor: '#606C54', 
    borderRadius: 18,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },

  textoBotaoGarcom: {
    fontFamily: FONTES.corpo.bold,
    color: CORES.primaria,
    fontSize: 16,
  },
});