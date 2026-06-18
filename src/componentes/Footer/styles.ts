import { StyleSheet } from "react-native";
import { FONTES, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: CORES.secundaria,
  },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
    paddingVertical: 12,
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
  },

  tabLabel: {
    fontFamily: FONTES.corpo.regular,
    fontSize: 11,
    color: CORES.primariaLight,
    textAlign: 'center',
  },

  tabLabelAtivo: {
    fontFamily: FONTES.corpo.bold,
    color: CORES.primariaLight,
  },

  rodape: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    paddingVertical: 10,
    paddingHorizontal: 28,
    flexDirection: 'row',
    gap: 5,
  },

  rodapeP: {
    fontSize: 12,
    opacity: 0.85,
    width: 300,
    textAlign: 'center',
    color: CORES.primariaLight,
  },

  rodapeSmall: {
    fontSize: 11,
    opacity: 0.6,
    textAlign: 'center',
    color: CORES.primariaLight,
  },

  marca: {
    flexDirection: 'column',
    gap: 4,
  },

  logoCafe: {
    width: 45,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 2, 
  },
});