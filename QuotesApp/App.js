import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { useState  } from 'react';

export default function App() {
  let [fraseMotivacional, setFrase] = useState('');
  let [autorNovo, setAutorNovo] = useState('');

  let [urlImagem, setUrl] = useState('url');
  let [autor, setAutor] = useState('');

  let [frases, setFrases] = useState([
        {autor: 'Albert Eisten', frase: "Não tentes ser bem-sucedido, tenta antes ser um homem de valor.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtZmpvv4U5Ev8La1fJH-rGIxdbNTwnjgICA&s"},
        {autor: "Steve Jobs", frase: "As pessoas não sabem o que querem, até mostrarmos a elas.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTUTU_upHMXsQ-sIqi7r_gBxYoGxD0wYtgWA&s"},
        {autor: "Sigmund Freud", frase: "O pensamento é o ensaio da ação.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOdja5iTnJIC92egXRvg57BJOjlfwGTv2zQ&s"},
        {autor: "Papa Francisco", frase: "Se o mal é contagioso, o bem também é. Deixemo-nos contagiar pelo bem!", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R7qJpMdo53U2UzUcdCAMfL6RbMqIuxASRw&s"},
        {autor: "Socrates", frase: "Só sei que nada sei.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8d30JiuUrXqmZ8wlkIH_LhvNhy-nqADgjw&s"},
        {autor: "Aristoteles", frase: "Ter muitos amigos é não ter nenhum.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Y3fAlH4CF0MjO_CTua9Z0DYMGOYUEfRAxg&s"},
        {autor: "Fernando Pessoa", frase: "Tenho em mim todos os sonhos do mundo.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRM6oV20Nxnp9niG8bYooWPA87gArshaV9zA&s"},
        {autor: "Cora Coralina", frase: "O saber se aprende com os mestres. A sabedoria, só com o corriqueiro da vida.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKg9dm_pq8sZ4HhyZockfNH5F32GUbjm-18Q&s"},
        {autor: "Clarice Lispector", frase: "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS67B_3etGlDnHwajEPJU2WuZp9xY2SlMkvhw&s"},
        {autor: "Machado de Assis", frase: "O dinheiro não traz felicidade — para quem não sabe o que fazer com ele.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYGBilbJLQ02DioBnEXeNu9h977BdtnDikA&s"},
        {autor: "Florence Nightingale", frase: "A Enfermagem é uma arte; e para realizá-la como arte, requer uma devoção tão exclusiva, um preparo tão rigoroso, quanto a obra de qualquer pintor ou escultor; pois o que é tratar da tela morta ou do frio mármore comparado ao tratar do corpo vivo, o templo do espírito de Deus? É uma das artes; poder-se-ia dizer, a mais bela das artes!", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_7dvVkY0QFUR1Cf3XIZ6_zy2CJnotHW2LQw&s"},
        {autor: "Madre Teresa de Calcutá", frase: "Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar. Mas o mar seria menor se lhe faltasse uma gota.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSq55J1-TtAflQRF9OMU8--chYujM9N7Ak6A&s"},
        {autor: "Alan Kardec", frase: "Os homens semeiam na terra o que colherão na vida espiritual: os frutos da sua coragem ou da sua fraqueza.", urlImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtvHPecQbo2aZyT8Mfg0omy_xu9VV49QB2A&s"}
      ]);
  fraseAleatoria = () => {
    var index = Math.floor(Math.random() * frases.length);
    return index;
  }

  carregarFraseImagem = () => {
    let index = fraseAleatoria();
    if(autor.length === 0){
      setUrl(urlImagem = frases[index].urlImage);
      setFrase(fraseMotivacional = frases[index].frase);
      setAutor(autor = frases[index].autor);
    }
    else{
        setAutorNovo(autorNovo = frases[index].autor);
        while(autorNovo === autor){
            index = fraseAleatoria();
            console.log(`Index: ${index}`);
            setAutorNovo(autorNovo = frases[index].autor);
        } 
        setUrl(urlImagem = frases[index].urlImage);
      setFrase(fraseMotivacional = frases[index].frase);
      setAutor(autor = frases[index].autor);
    }
    
  }


    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.divImagemTexto}>
            <Text style={styles.textFrase}>"{fraseMotivacional}"</Text>
            <View style={styles.divImgAutor}>
              <Image style={styles.imagem} source={{uri: urlImagem}}/>
              <Text style={styles.textLabelImg}>{autor}</Text>
            </View>
          </View>
          <View style={styles.botao}>
              <Button  
                title="Gerar Citação"
                onPress={() => {carregarFraseImagem()}}
              />
            </View>
        </ScrollView>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divImagemTexto:{
    marginTop: 50,
  },
  textLabelImg:{
    marginTop: 0,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'darkblue'
  },
  textFrase:{
    width: 350,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem:{
    height: 200,
    width: 250,
    resizeMode: 'contain'
  }, 
  botao:{
    width: 300,
    marginTop: 100,
    marginLeft: 40,
    justifyContent: 'center',
    alignContent: 'center'
  },
  divImgAutor:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});
