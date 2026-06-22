import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from "./styles";
import fotoEspaco from '../../../assets/images/espaco4.png';
import cafe from '../../../assets/icons/cafe.png';
import livroAberto from '../../../assets/icons/livro aberto.png';
import Gato1 from '../../../assets/icons/gato1.png'
import Gato2 from '../../../assets/icons/gato2.png';
import Gato3 from '../../../assets/icons/gato3.png';
import Sobremesa from '../../../assets/icons/sobremesa.png';
import Salgado from '../../../assets/icons/salgado.png';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';

type Avaliacao ={
  id: string; 
  nome: string;
  comentario: string;
  avatar?: string; 
}

export default function Home() {
  const router = useRouter();
  const [cafeEstendido, setCafeEstendido] = useState(false);
  const [sobremesaEstendido, setSobremesaEstendido] = useState(false);
  const [salgadoEstendido, setSalgadoEstendido] = useState(false);
  const [livrosEstendido, setLivrosEstendido] = useState(false);
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [comentarioAtual, setComentarioAtual] = useState(0);
  const gatos = [Gato1, Gato2, Gato3];

  useEffect(() => {
    async function buscarAvaliacoes() {
      try{
        const resposta = await axios.get('https://6a325645c6ca2aee4384db15.mockapi.io/cafeteria/avaliacoes');
        setAvaliacoes(resposta.data);
      }
      catch(error){
        setErro('Não foi possível carregar as avaliações.');
      }
      finally{
        setCarregando(false);
      }
    }

    buscarAvaliacoes();
  }, []);

  function proximaAvaliacao() {
    setComentarioAtual((indexAnterior) => (indexAnterior + 1) % avaliacoes.length);
  }

  function alternarCardCafe() {
    setCafeEstendido(!cafeEstendido);
  }

  function alternarCardLivros() {
    setLivrosEstendido(!livrosEstendido);
  }

  function alternarCardSobremesa(){
    setSobremesaEstendido(!sobremesaEstendido);
  }

  function alternarCardSalgado(){
    setSalgadoEstendido(!salgadoEstendido);
  }

  return ( 
    <ScrollView>
      <View style={styles.banner}>
        <View style={styles.secao1}>
          <Text style={styles.titulo}>
            Um refúgio entre livros, arte, café e ronrons.🐾
          </Text>
          <Text style={styles.subtitulo}>
            Um cantinho acolhedor para criar, ler, tomar um café especial
            e receber carinho dos nossos gatinhos residentes.
          </Text>
          <View style={styles.botoes}>
            <TouchableOpacity
              style={styles.buttonCardapio}
              onPress={() => router.push('/Cardapio')}>
              <Text style={styles.textButton1}>
                  Cardapio
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonBiblioteca}
              onPress={() => router.push('/BibliotecaDoGato')}>
                <Text style={styles.textButton2}>
                  BibliotecaDoGato
                </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imagemContainer}>
            <LinearGradient
              colors={['#F1EDDE', 'transparent']}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradiente}
            />
            <Image source={fotoEspaco} style={styles.imagem}/>
          </View>
        </View>
      </View>

      <View style={styles.pages}>
        <Text style={styles.titulo2}>
          🌿 A experiência do Book & Brew 🌿
        </Text>

        <View style={styles.cards}>
          <TouchableOpacity
            style={[styles.card, cafeEstendido && styles.cardAberto]}
            onPress={alternarCardCafe}>
            <Image source={cafe} style={styles.cardImagem}/>
            <Text style={styles.text1}>Saboreie</Text>
            <Text style={styles.text2}>Cafés especiais para aquecer o coração e alimentar a alma.</Text>
            {cafeEstendido && (
                <View style={styles.conteudoExpandido}>
                <Text style={styles.tituloExpandido}>☕ Opções do Cardápio:</Text>
                <Text>• Café com Chocolate</Text>
                <Text>• Cappuccino Clássico</Text>
                <Text>• Latte Cremoso</Text>
                <Text>• Iced Tea Colorido</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, sobremesaEstendido && styles.cardAberto]}
            onPress={alternarCardSobremesa}>
            <Image source={Sobremesa} style={styles.cardImagem}/>
            <Text style={styles.text1}>Deguste</Text>
            <Text style={styles.text2}>Doces artesanais para adoçar os seus melhores momentos.</Text>
            {sobremesaEstendido && (
                <View style={styles.conteudoExpandido}>
                <Text style={styles.tituloExpandido}>🍰 Opções do Cardápio:</Text>
                <Text>•  Brownie do Ateliê</Text>
                <Text>• Cheesecake da Casa</Text>
                <Text>• Cinnamon Roll</Text>
                <Text>• Pavlova Delicada</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, salgadoEstendido && styles.cardAberto]}
            onPress={alternarCardSalgado}>
            <Image source={Salgado} style={styles.cardImagem}/>
            <Text style={styles.text1}>Desfrute</Text>
            <Text style={styles.text2}>Pratos autorais feitos com carinho e ingredientes selecionados.</Text>
            {salgadoEstendido && (
                <View style={styles.conteudoExpandido}>
                <Text style={styles.tituloExpandido}>🥐 Opções do Cardápio:</Text>
                <Text>• Croissant Clássico</Text>
                <Text>• Panini da Casa</Text>
                <Text>• Quiche do Ateliê</Text>
                <Text>• Sanduíche Quente</Text>
              </View>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.card, livrosEstendido && styles.cardAberto]}
            onPress={alternarCardLivros}>
            <Image source={livroAberto} style={styles.cardImagem}/>
            <Text style={styles.text1}>Leia</Text>
            <Text style={styles.text2}>Uma biblioteca cozy para se perder em boas histórias.</Text>
            {livrosEstendido && (
                <View style={styles.conteudoExpandido}>
                <Text style={styles.tituloExpandido}>📚 Na Biblioteca:</Text>
                <Text>• Romances Cozy</Text>
                <Text>• Suspense & Mistério</Text>
                <Text>• Ficção Literária</Text>
                <Text>• Best-Sellers do Mês</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.destaques}>
        <Text style={styles.titulo3}>⭐Destaques do mês⭐</Text>

        <View style={styles.folhetos}>
          <View style={styles.folheto}>
            <Image source={cafe} style={styles.folhetoImagem}/>
            <View style={styles.mes}>
              <Text style={styles.text2}>Bebida do mês</Text>
              <Text style={styles.text1}>Cappuccino Clássico</Text>
            </View>
          </View>
        </View>

        <View style={styles.folhetos}>
          <View style={styles.folheto}>
            <Image source={livroAberto} style={styles.folhetoImagem}/>
            <View style={styles.mes}>
              <Text style={styles.text2}>Livro do mês</Text>
              <Text style={styles.text1}>Trono de Vidro</Text>
            </View>
          </View>
        </View> 

        <View style={styles.folhetos}>
          <View style={styles.folheto}>
            <Image source={Sobremesa} style={styles.folhetoImagem}/>
            <View style={styles.mes}>
              <Text style={styles.text2}>Sobremesa do mês</Text>
              <Text style={styles.text1}>Brownie do Ateliê</Text>
            </View>
          </View>
        </View>

        <View style={styles.folhetos}>
          <View style={styles.folheto}>
            <Image source={Salgado} style={styles.folhetoImagem}/>
            <View style={styles.mes}>
              <Text style={styles.text2}>Salgado do mês</Text>
              <Text style={styles.text1}>Croissant Clássico</Text>
            </View>
          </View>
        </View>  
      </View>

      <View style={styles.comentarios}>
        {carregando && <Text>Carregando avaliações...</Text>}
        {erro && <Text>{erro}</Text>}

        {!carregando && !erro && avaliacoes.length > 0 && (
          <View style={styles.cardComentario}>
          <Image
            source={gatos[comentarioAtual % gatos.length]}
            style={styles.avatarFoto}
            accessibilityLabel={`Foto de ${avaliacoes[comentarioAtual].nome}`}
          />

          <View style={styles.comentarioConteudo}>
            <Text style={styles.textoComentario}>
              "{avaliacoes[comentarioAtual].comentario}"
            </Text>
            <Text style={styles.nomeCliente}>
              {avaliacoes[comentarioAtual].nome}
            </Text>
          </View>

          <TouchableOpacity style={styles.btnProximo} onPress={proximaAvaliacao}>
            <Text style={styles.btnProximoText}>Próximo depoimento →</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
    </ScrollView>
  );
}