import { View, Text, Image, ImageBackground, ScrollView } from "react-native";
import { styles } from "./styles";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import FormularioAvaliacao from "./FormularioAvaliacao";
import fachada from '../../../assets/images/fachada.png';
import espaco1 from '../../../assets/images/espaco1.png';
import espaco2 from '../../../assets/images/espaco2.png';
import espaco3 from '../../../assets/images/espaco3.png';
import espaco4 from '../../../assets/images/espaco4.png';
import espaco5 from '../../../assets/images/espaco5.png';
import plantinha from '../../../assets/icons/plantinha.png';
import paleta from '../../../assets/icons/paleta.png';
import livroFechado from '../../../assets/icons/livro fechado.png';
import gatinho1 from '../../../assets/icons/gatinho1.png';
import cafe from '../../../assets/icons/cafe.png';
import gatinho2 from '../../../assets/icons/gatinho2.png';
import livroAberto from '../../../assets/icons/livro aberto.png';

const VALORES = [
  { imagem: plantinha, titulo: 'Aconchego', descricao: 'Ambientes calmos e acolhedores para descansar a mente.' },
  { imagem: paleta, titulo: 'Criatividade', descricao: 'Um espaço para expansão criativa e novas ideias.' },
  { imagem: livroFechado, titulo: 'Cultura', descricao: 'Livros e histórias para imaginar e transformar.' },
  { imagem: gatinho1, titulo: 'Cuidado Animal', descricao: 'Gatinhos felizes, respeitados e muito bem cuidados.' },
];

const METRICAS = [
  { imagem: cafe, titulo: '+4.000', descricao: 'cafés servidos com amor' },
  { imagem: gatinho2, titulo: '+10.000', descricao: 'ronrons compartilhados' },
  { imagem: livroAberto, titulo: '+2.000', descricao: 'livros lidos por aqui' },
];

export default function NossoRefugio() {
  return (
    <ScrollView contentContainerStyle={styles.telaCheia}>
      <View style={styles.primaria}>
        <Titulo texto="Nosso Refúgio" variante="principal" />
        <Text style={styles.p}>Mais que um café, um lugar para pertencer.</Text>
      </View>
      <View style={styles.tercearia}>
      <ImageBackground source={fachada} style={styles.fachada} resizeMode="cover">
        <View style={styles.historia}>
          <Text style={styles.backgroundH2}>Nossa história</Text>
          <Text style={styles.backgroundP}>O Book & Brew nasceu do desejo de criar um espaço onde arte, leitura e conforto pudessem coexistir em harmonia.</Text>
          <Text style={styles.backgroundP}>Cada detalhe foi pensado para que você se sinta em casa, inspirado e acolhido!</Text>
        </View>
      </ImageBackground>
      </View>
      <View style={styles.primaria}>
        <Titulo texto="Nossos valores" variante="secao" />
        <View style={styles.secundaria}>
          {VALORES.map((valor) => (<Card key={valor.titulo} {...valor} variante="card1" /> ))}
        </View>
      </View>
      <View style={styles.primaria}>
        <Titulo texto="Nosso cantinho" variante="secao" />
        <View style={styles.secundaria}>
          <Image source={espaco1} style={styles.imgSecundaria} />
          <Image source={espaco2} style={styles.imgSecundaria} />
          <Image source={espaco3} style={styles.imgSecundaria} />
          <Image source={espaco4} style={styles.imgSecundaria} />
        </View>
      </View>
      <View style={styles.metricas}>
        {METRICAS.map((metrica) => (<Card key={metrica.titulo} {...metrica} variante="card2" />))}
      </View>
      <View style={styles.tercearia}>
        <ImageBackground source={espaco5} style={styles.imgAvaliacao} resizeMode="cover" >
          <View style={styles.avaliacao}>
            <Titulo texto="Avalie nosso atendimento" variante="secao" />
            <FormularioAvaliacao />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}