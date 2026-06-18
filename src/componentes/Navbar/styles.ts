import { StyleSheet } from "react-native";
import { MEDIDAS, CORES } from "../../styles/theme";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(190, 194, 174)',
  },

  container: {
    padding: 5,
    gap: MEDIDAS.gapL,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logo: {
    height: 90,
    width: 190,
    padding: 10,
  },

  logoImg: {
    height: 80,
    width: 190,
  },

  menuToggle: {
    flexDirection: 'column',
    margin: 27,
    gap: 5,
  },

  bar: {
    width: 25,
    height: 3,
    backgroundColor: CORES.secundaria,
    borderRadius: 2,
  },

});