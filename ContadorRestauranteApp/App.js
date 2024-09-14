import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Pressable } from 'react-native';

export default function App() {
  let [number, setNumber] = useState(0);
  let urlPessoas = './pessoasFila.png'
  aumentarNumero = () => {
      setNumber(number += 1);
  }
  diminuarNumero = () => {
    if(number > 0){
        setNumber(number -= 1);
    }
  }
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Nº de Clientes no Restaurante:</Text>
        <Text style={[styles.text, styles.textNumber]}>{number}</Text>
        <Image style={styles.image} source={require(urlPessoas)}/>
        <View style={styles.btnsRow}> 
          <Pressable style={styles.btn} onPress={() => diminuarNumero()}>
            <Text style={styles.labelBtn}>-</Text>
          </Pressable>     
          <Pressable style={styles.btn} onPress={() => aumentarNumero()}>
            <Text style={styles.labelBtn}>+</Text>
          </Pressable>   
        </View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnsRow: {
    marginTop: 50,
    flexDirection: 'row',
    gap: 10,
  },
  image:{
    resizeMode: 'contain',
    width: 300, 
    height: 300
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },  
  textNumber:{
    color: 'darkblue',
    fontSize: 30,
    marginTop: 30,
    marginBottom: 30

  },
  labelBtn:{
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
      fontWeight: 'bold',
      fontSize: 25,
      marginTop: 20,
      textAlign: 'center'
  },
});
