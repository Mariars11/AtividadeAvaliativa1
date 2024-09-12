import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let [number, setNumber] = useState(0);
  return (
    <View style={styles.container}>
        <Text style={styles.textLabel}>Bem-Vind@ ao Restaurante</Text>
        <Text style={styles.textNumber}>Número de clientes: {number}</Text>
        <View style={styles.btnsRow}>       
          <Button title='-' onPress={() => setNumber(number = number - 1)}/>
          <Button title='+' onPress={() => setNumber(number = number + 1)}/>

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
    gap: 10
  },
  textNumber: {
      fontWeight: 'bold',
      fontSize: 30,
      color: 'darkblue',
      marginTop: 20
  },
  textLabel: {
    fontWeight: '600',
    fontSize: 40,
    textAlign: 'center',
    color: 'red'
},
});
