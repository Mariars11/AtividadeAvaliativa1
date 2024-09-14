import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { useState  } from 'react';

export default function App() {
  let urlBiscoitoAberto = './biscoito-aberto.png';
  let urlBiscoitoFechado = './biscoito-fechado.png';
  let [isPressed, setPressed] = useState(false);
  let [frase, setFrase] = useState('');
  let [fraseNova, setFraseNova] = useState('');

  let [frases, setFrases] = useState([
        {frase: "A solidão é a sorte de todos os espíritos excepcionais."},
        {frase: "Não ser amado é falta de sorte, mas não amar é a própria infelicidade."},
        {frase: "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar."},
        {frase: "Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho."},
        {frase: "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores."},
        {frase: "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito."},
        {frase: "A perseverança é a mãe da boa sorte."},
        {frase: "Sorte é estar pronto quando a oportunidade vem."},
        {frase: "A sorte favorece a mente bem preparada."},
        {frase: "A sorte da mulher depende do amor que aceita."},
        {frase: "Custa menos ao nosso amor-próprio caluniar a sorte do que acusar a nossa má conduta."},
        {frase: "Quanto mais eu treino, mais sorte eu tenho."},
        {frase: "A vida trará coisas boas se tiver paciência."},
        {frase: "Não há que ser forte. Há que ser flexível."},
        {frase: "A sorte ajuda os audazes."}
  ]);
  fraseAleatoria = () => {
    var index = Math.floor(Math.random() * frases.length);
    return frases[index].frase;
  }

  carregarFrase = () => {
    if(frase.length === 0){
        setFrase(frase = fraseAleatoria());
    }
    else{
        setFraseNova(fraseNova = fraseAleatoria());

        while(frase === fraseNova){
            setFraseNova(fraseNova = fraseAleatoria());
        }
        setFrase(frase = fraseNova);

    }
    console.log(`${frase}`);

  }

 
  
  if(!isPressed){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.divImagemTexto}>
            <Image style={styles.imagem} source={require(urlBiscoitoFechado)}/>
            <View style={styles.botao}>
              <Button  
                title="Quebre o Biscoito"
                onPress={() => {setPressed(true); carregarFrase()}}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  else{
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.divImagemTexto}>
            <View style={styles.divFrase}>
              <Text style={styles.textLabel}>{frase}</Text>
            </View>
              <Image style={styles.imagem} source={require(urlBiscoitoAberto)}/>
            <View style={styles.botao}>
              <Button  
                  title="Novo biscoito"
                  onPress={() => setPressed(false)}
                />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem:{
    maxWidth: 250,
    maxHeight: 250,
    resizeMode: 'contain'
  },
  textLabel:{
      color: 'black',
      fontSize: 25,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  divFrase:{
    width: 300,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
},
  divImagemTexto:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 60
  },
  botao:{
    marginTop: 20,
    maxWidth: 100,
    alignSelf: 'center',
    color: '#00f',
  }
});
