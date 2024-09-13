import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let [count, setCount] = useState(0);

  startTimer = () => {
     this.interval = setInterval(() =>{
      setCount(count = count + 1);
  }, 1000)};

  stopTimer = () => {
    clearInterval(this.interval);
  };
  reloadTimer = () => {
    clearInterval(this.interval);
    setCount(count = 0);
    this.startTimer();
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 50}}>{count} s</Text>
      <View style={styles.divBtns}>
        <Button title='Iniciar' color='blue' onPress={()=> this.startTimer()}/>
        <Button title='Parar' color='red' onPress={()=> this.stopTimer()}/>
        <Button title='Reiniciar' color='green' onPress={()=> this.reloadTimer()}/>
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
  divBtns: {
    flexDirection: 'row',
    gap: 5,
  },
});
