import { StyleSheet } from "react-native";
import { FONTES, MEDIDAS, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({
    // Banner
  banner: {
    minHeight: 480,
    flexDirection: 'column',
    width: '100%',
  },
  secao1: {
    backgroundColor: '#F1EDDE',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    paddingTop: 16,
    padding: 20,
    textAlign: 'center',
    fontFamily: FONTES.titulo.bold
  },
  subtitulo: {
    fontSize: 16,
    padding: 10,
    textAlign: 'center'
  },
  botoes: {
    flexDirection: 'row',
    width: '80%',
    height: 40,
    marginTop: 24,
    gap: 16,
  },
  buttonCardapio: {
    flex: 1,
    backgroundColor: CORES.secundaria,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBiblioteca: {
    flex: 1,
    borderWidth: 1,
    borderColor: CORES.secundaria,
    backgroundColor: '#F5F0E8',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton1: {
    color: CORES.primariaLight,
    fontWeight: '700',
  },
  textButton2: {
    color: CORES.secundaria,
    fontWeight: '700',
  },
  imagemContainer: {
    width: '100%',
    height: 300,
  },
  imagem: {
    width: '100%',
    height: 300,
  },
  gradiente: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 150,
    zIndex: 1,
  },

  // Pages
  pages: {
    minHeight: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  titulo2: {
    fontSize: 18,
    fontWeight: '700',
  },
  cards: {
    flexDirection: 'column',
    maxWidth: '100%',
    gap: 16,
    marginTop: 16,
    alignItems:'center'
  },
  card: {
    width: '90%',
    minHeight: 220,
    backgroundColor: CORES.primaria,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 16,
    padding: 24,
    borderRadius: 10,
  },
  cardAberto: {
    backgroundColor: '#e4dac1',
  },
  cardImagem: {
    width: 120,
    height: 120,
    marginBottom: 8,
    resizeMode: 'contain'
  },
  text1: {
    fontSize: 16,
    fontWeight: '700',
  },
  text2: {
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  conteudoExpandido: {
    marginTop: 8,
    alignItems: 'center',
    gap: 4,
  },
  tituloExpandido: {
    fontWeight: '700',
    marginBottom: 4,
  },

  // Destaques
  destaques: {
    minHeight: 'auto',
    alignItems: 'center',
    paddingVertical: 24,
  },
  titulo3: {
    fontSize: 20,
    fontWeight: '700',
  },
  folhetos: {
    width: "90%",
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
    paddingTop: 24,
    paddingHorizontal: 16,
  },
  folheto: {
    height: 70,
    backgroundColor: CORES.primaria,
    flexDirection: 'row',
    gap: 8,
    borderRadius: 10,
    alignItems: 'center',
    paddingLeft: 8,
  },
  folhetoImagem: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  },
  mes: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mesH4: {
    fontSize: 12,
    color: '#666',
  },
  mesH2: {
    fontSize: 14,
    fontWeight: '700',
  },

  // Comentários
  comentarios: {
    minHeight: "auto",
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1EDDE',
    paddingBottom: 16,
  },
  cardComentario: {
    backgroundColor: CORES.primaria,
    padding: 24,
    borderRadius: 10,
    maxWidth: 400,
    width: '90%',
    alignItems: 'center',
    gap: 16,
    marginTop: 16,
  },
  avatarFoto: {
    width: 80,
    height: 80,
    borderRadius: 30,
    resizeMode: 'contain'
  },
  comentarioConteudo: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center',
  },
  textoComentario: {
    fontStyle: 'italic',
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 24,
  },
  nomeCliente: {
    color: '#5C7A5A',
    fontSize: 18,
    fontWeight: '700',
  },
  btnProximo: {
    marginTop: 8,
  },
  btnProximoText: {
    color: CORES.textoLight,
    fontWeight: '700',
    fontSize: 15,
    fontFamily: FONTES.titulo.bold,
    marginLeft: 10
  },
})