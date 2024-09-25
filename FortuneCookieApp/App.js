import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { useState  } from 'react';

export default function App() {
  let urlBiscoitoAberto = './biscoito-aberto.png';
  let urlBiscoitoFechado = './biscoito-fechado.png';
  let [isPressed, setPressed] = useState(false);
  let [frase, setFrase] = useState('');
  let [fraseNova, setFraseNova] = useState('');

  let [frases, setFrases] = useState([
        {frase: "A vida trará coisas boas se tiver paciência."},
        {frase: "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si."},
        {frase: "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar."},
        {frase: "Não compense na ira o que lhe falta na razão."},
        {frase: "Defeitos e virtudes são apenas dois lados da mesma moeda."},
        {frase: "A maior de todas as torres começa no solo."},
        {frase: "A perseverança é a mãe da boa sorte."},
        {frase: "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?"},
        {frase: "A sorte favorece a mente bem preparada."},
        {frase: "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida."},
        {frase: "A juventude não é uma época da vida, é um estado de espírito."},
        {frase: "Quanto mais eu treino, mais sorte eu tenho."},
        {frase: "Não importa o tamanho da montanha, ela não pode tapar o sol."},
        {frase: "Não há que ser forte. Há que ser flexível."},
        {frase: "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."},
        {frase: "Uma bela flor é incompleta sem as suas folhas."},
        {frase: "Sem o fogo do entusiasmo, não há o calor da vitória."},
        {frase: "O riso é a menor distância entre duas pessoas."},
        {frase: "Os defeitos são mais fortes quando o amor é fraco."},
        {frase: "O conhecimento é a única virtude e a ignorância é o único vício."},
        {frase: "Acredite em milagres, mas não dependa deles."},
        {frase: "Você sempre será a sua melhor companhia!"},
        {frase: "Realize o óbvio, pense no improvável e conquiste o impossível."},

  ]);
  fraseAleatoria = () => {
    var index = Math.floor(Math.random() * frases.length);
    console.log(index);
    
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
