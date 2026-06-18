import { StyleSheet } from "react-native";
import { FONTES, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({
  telaCheia: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 32,
  },

  primaria: {
    alignItems: 'center',
    flex: 1,
  },

  secundaria: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 24,
    gap: 16,
  },

  imgSecundaria: {
    height: 160,
    borderRadius: 18,
  },

  tercearia: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: CORES.terceariaLight,
    borderRadius: 18,
    flex: 1,
    overflow: 'hidden',
  },

  imgLeft: {
    flex: 1,
    height: 240,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },

  historia: {
    flexDirection: 'column',
    backgroundColor: '#3a3228ab',
    height: 240,
    padding: 42,
  },

  backgroundH2: {
    fontFamily: FONTES.titulo.bold,
    color: CORES.primaria,
    fontSize: 21,
    marginTop: 5,
  },

  backgroundP: {
    fontFamily: FONTES.corpo.regular,
    marginTop: 10,
    fontSize: 14,
    color: CORES.primaria,
  },

  titulo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 13,
    marginBottom: 10,
  },

  imgTitulo: {
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

  h3: {
    fontFamily: FONTES.corpo.bold,
    fontSize: 18,
  },

  text: {
    flexDirection: 'column',
    padding: 32,
  },

  p: {
    fontFamily: FONTES.corpo.regular,
    marginTop: 10,
    fontSize: 14,
    color: CORES.texto,
  },

  text2: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16,
    width: 203,
  },

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

  imgCard: {
    width: 48,
    height: 48,
    marginLeft: 16,
  },

  card2: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: 80,
  },

  metricas: {
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
    flex: 1,
    borderRadius: 18,
    backgroundColor: CORES.secundaria,
    padding: 16,
  },

  imgRight: {
    flex: 1,
    height: 420,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  avaliacao: {
    marginTop: 8,
    padding: 16,
    backgroundColor: '#3a3228b8',
    flexDirection: 'column',
    height: 420,
  },

  avaliacaoH2: {
    fontFamily: FONTES.titulo.bold,
    color: CORES.terceariaLight,
    fontSize: 21,
    marginTop: 5,
  },

  avaliacaoH3: {
    fontFamily: FONTES.corpo.bold,
    color: CORES.terceariaLight,
    fontSize: 18,
  },

  input: {
    backgroundColor: CORES.primaria,
    borderWidth: 1,
    borderColor: CORES.terceariaLight,
    borderRadius: 18,
    height: 40,
    padding: 11,
    fontFamily: FONTES.corpo.regular,
    fontSize: 14,
    marginBottom: 4,
  },

  button: {
    backgroundColor: CORES.terceariaLight,
    borderRadius: 18,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  buttonText: {
    fontFamily: FONTES.corpo.bold,
    color: CORES.primaria,
    fontSize: 16,
  },

  erro: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 12,
    color: CORES.secundariaLight,
    marginBottom: 8,
    paddingLeft: 4,
  },
});