import { Dimensions, StyleSheet } from 'react-native';
import { FONTES, MEDIDAS } from '../../styles/theme';

export const CORES_CATEGORIA = {
  destaque: {
    bg: 'rgba(204, 211, 159, 0.55)',
    texto: 'rgb(122, 133, 100)',
    bgInativo: 'rgba(204, 211, 159, 0.2)',
    textoInativo: 'rgba(122, 133, 100, 0.6)',
  },
  categorias: {
    bg: 'rgba(206, 163, 135, 0.55)',
    texto: 'rgb(143, 118, 102)',
    bgInativo: 'rgba(206, 163, 135, 0.2)',
    textoInativo: 'rgba(143, 118, 102, 0.6)',
  },
  recomendados: {
    bg: 'rgba(190, 131, 82, 0.49)',
    texto: 'rgb(141, 111, 87)',
    bgInativo: 'rgba(190, 131, 82, 0.2)',
    textoInativo: 'rgba(141, 111, 87, 0.6)',
  },
};

const COLORS = {
  verdeSalvia: '#C7D0C2',
  verdeMusgo: '#6F816A',
  verdeMusgoDark: '#57664f',
  begeLatte: '#D9B686',
  cremePapel: '#F3F0E8',
  carameloCafe: '#A8774C',
  begeHoney: '#D8C39D',
  textoEscuro: '#3f3a33',
  branco: '#ffffff',
  cinzaClaro: '#f0f4ff',
  sombra: 'rgba(0,0,0,0.07)',
};

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({

  telaCheia: {
    flex: 1,
    backgroundColor: 'rgb(241, 237, 221)',
  },

  cardapio: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 16,
  },

  titulo: {
    fontFamily: FONTES.titulo.bold,
    fontSize: 36,
    color: 'rgb(94, 104, 73)',
    textAlign: 'center',
    marginBottom: 2,
    letterSpacing: 1.5,
  },

  frase: {
    fontFamily: FONTES.corpo.regular,
    fontStyle: 'italic',
    fontSize: 14,
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

  container: {
    flex: 1,
    backgroundColor: '#EDE8DF',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },

  card: {
    backgroundColor: COLORS.cremePapel,
    borderRadius: MEDIDAS?.radiusM ?? 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  cardDestaque: {
    backgroundColor: '#faf7f0',
    borderWidth: 1,
    borderColor: 'rgba(168,119,76,0.18)',
    shadowColor: COLORS.carameloCafe,
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 5,
  },
  cardQuiz: {
    backgroundColor: COLORS.begeLatte,
    alignItems: 'center',
  },
  cardFrase: {
    backgroundColor: COLORS.verdeSalvia,
  },
  cardTitulo: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 18,
    color: COLORS.carameloCafe,
    marginBottom: 14,
  },

  categoriasGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  botao: {
    backgroundColor: COLORS.verdeMusgo,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginBottom: 4,
  },
  botaoFullWidth: {
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 12,
  },
  botaoQuiz: {
    backgroundColor: COLORS.carameloCafe,
    marginTop: 4,
  },
  botaoTexto: {
    fontFamily: 'Poppins_500Medium',
    color: COLORS.branco,
    fontSize: 14,
  },

  generoTag: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.verdeSalvia,
    borderRadius: 999,
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  generoTagTexto: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: COLORS.verdeMusgoDark,
  },

  quizDescricao: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: COLORS.textoEscuro,
    textAlign: 'center',
    marginBottom: 16,
  },
  quizContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
  progresso: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: COLORS.textoEscuro,
    opacity: 0.6,
    marginBottom: 8,
    textAlign: 'center',
  },
  perguntaTexto: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 16,
    color: COLORS.textoEscuro,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  opcaoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.cremePapel,
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  opcaoLetra: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
    color: COLORS.carameloCafe,
    width: 20,
  },
  opcaoTexto: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: COLORS.textoEscuro,
    flex: 1,
  },

  resultadoContainer: {
    alignItems: 'center',
    width: '100%',
    paddingVertical: 8,
  },
  resultadoTitulo: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: COLORS.textoEscuro,
    marginBottom: 8,
  },
  resultadoDescricao: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: COLORS.textoEscuro,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 16,
  },
  resultadoCard: {
    backgroundColor: COLORS.cinzaClaro,
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#c0caff',
    marginBottom: 14,
  },
  resultadoEmoji: {
    fontSize: 36,
    marginBottom: 6,
  },
  resultadoGenero: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 20,
    color: COLORS.textoEscuro,
  },
  resultadoHint: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: COLORS.textoEscuro,
    opacity: 0.6,
    textAlign: 'center',
    marginBottom: 16,
  },
  botaoReiniciar: {
    backgroundColor: COLORS.carameloCafe,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 28,
  },
  botaoReiniciarTexto: {
    fontFamily: 'Poppins_500Medium',
    color: COLORS.branco,
    fontSize: 14,
  },

  fraseDestaqueBar: {
    width: 3,
    backgroundColor: COLORS.carameloCafe,
    borderRadius: 2,
    position: 'absolute',
    left: 20,
    top: 56,
    bottom: 20,
  },
  fraseTexto: {
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'italic',
    fontSize: 14,
    color: COLORS.textoEscuro,
    lineHeight: 22,
    paddingLeft: 16,
  },

  
  livroDetalhe: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(168,119,76,0.2)',
    alignItems: 'center',
    gap: 8,
  },
  livroDetalheCapa: {
    width: 110,
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  livroDetalheTitulo: {
    fontFamily: 'PlayfairDisplay_600SemiBold',
    fontSize: 16,
    color: COLORS.carameloCafe,
    textAlign: 'center',
  },
  livroDetalheAutor: {
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'italic',
    fontSize: 13,
    color: COLORS.verdeMusgoDark,
  },
  livroDetalheAvaliacao: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: COLORS.carameloCafe,
  },
  livroDetalheSinopse: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: COLORS.textoEscuro,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 4,
  },
  botaoFechar: {
    marginTop: 8,
    borderWidth: 1.5,
    borderColor: COLORS.verdeMusgo,
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  botaoFecharTexto: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: COLORS.verdeMusgoDark,
  },

  
  livroCard: {
    width: width * 0.32,
    marginRight: 12,
    alignItems: 'center',
  },
  livroCapa: {
    width: '100%',
    height: 130,
    borderRadius: 10,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  livroCapaPlaceholder: {
    backgroundColor: COLORS.begeHoney,
    justifyContent: 'center',
    alignItems: 'center',
  },
  livroTitulo: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: COLORS.textoEscuro,
    textAlign: 'center',
    marginTop: 6,
  },
  livroAutor: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 11,
    color: COLORS.textoEscuro,
    opacity: 0.6,
    textAlign: 'center',
  },
  livroListaContainer: {
    paddingVertical: 4,
  },
  estadoVazioTexto: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 13,
    color: COLORS.textoEscuro,
    opacity: 0.6,
    textAlign: 'center',
    paddingVertical: 16,
  },
});