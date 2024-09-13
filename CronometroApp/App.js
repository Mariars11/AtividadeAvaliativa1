import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let [miliS, setMili] = useState(0);
  let [segundos, setSegundos] = useState(0);
  let [minutos, setMinutos] = useState(0);

  startTimer = () => {
     this.interval = setInterval(() =>{
        setMili(miliS = miliS + 1);
        if((miliS % 100) === 0){
            setMili(miliS = 0);
            setSegundos(segundos = segundos + 1);
        }
        if(segundos > 0 && (segundos % 60) === 0){
          setSegundos(segundos = 0);
          setMinutos(minutos = minutos + 1);
        }
    }, 10)};

  stopTimer = () => {
    clearInterval(this.interval);
  };
  reloadTimer = () => {
    clearInterval(this.interval);
    setSegundos(segundos = 0);
    setMili(miliS = 0);
    setMinutos(minutos = 0);
    this.startTimer();
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 50}}>{minutos} m {segundos} s {miliS} ms</Text>
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
