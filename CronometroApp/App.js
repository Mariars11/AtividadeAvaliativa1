import { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  let urlRelogio = './relogio.png';
  let [miliS, setMili] = useState(0);
  let [segundos, setSegundos] = useState(0);
  let [isStart, setStart] = useState(false);
  let [minutos, setMinutos] = useState(0);

  startTimer = () => {
     this.interval = setInterval(() =>{
        setMili(miliS+=1);
        if((miliS % 100) === 0){
            setMili(miliS = 0);
            setSegundos(segundos += 1);
        }
        if(segundos > 0 && (segundos % 60) === 0){
          setSegundos(segundos = 0);
          setMinutos(minutos += 1);
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
      <Text style={styles.textLabel}>{minutos} m {segundos} s {miliS} ms</Text>
      <Image style={styles.image} source={require(urlRelogio)}/>
      <View style={styles.divBtns}>
        
        { isStart === false ? <Button title='Iniciar' color='blue' onPress={()=> {this.startTimer(); setStart(true)}}/>  : null }
        { isStart === true ? <Button title='Reiniciar' color='green' onPress={()=> this.reloadTimer()}/> : null }
        { isStart === true ? <Button title='Parar' color='red' onPress={()=> this.stopTimer()}/>  : null }

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
  textLabel:{
    fontSize: 30, 
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30
,
resizeMode: 'contain'
  }
});
