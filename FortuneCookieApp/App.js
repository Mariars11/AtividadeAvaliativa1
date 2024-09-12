import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { useState  } from 'react';

export default function App() {
  let urlBiscoitoAberto = './assets/BiscoitoAberto.jpeg';
  let urlBiscoitoFechado = './assets/BiscoitoFechado.jpeg';
  let [isPressed, setPressed] = useState(false);
  if(!isPressed){
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.divImagemTexto}>
            <Text style={styles.textLabel}>Biscoito da Sorte - Fechado</Text>
            <Image style={styles.imagem} source={require(urlBiscoitoFechado)}/>
            <View style={styles.botao}>
              <Button  
                title="Quebre o Biscoito"
                onPress={() => setPressed(true)}
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
            <Text style={styles.textLabel}>Biscoito da Sorte - Aberto</Text>
            <Image style={styles.imagem} source={require(urlBiscoitoAberto)}/>
            <View style={styles.botao}>
            <Button  
                title="Feche o biscoito"
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
    backgroundColor: '#000',
  },
  imagem:{
    maxWidth: 200,
    maxHeight: 200,
    marginLeft: 100,
    textAlign: 'center',
    backgroundColor: 'red'
  },
  textLabel:{
      color: 'white',
      fontSize: 30,
      textAlign: 'center',
  },
  divImagemTexto:{
      marginTop: 90
  },
  botao:{
    marginTop: 20,
    maxWidth: 100,
    alignSelf: 'center',
    color: '#00f'
  }
});
