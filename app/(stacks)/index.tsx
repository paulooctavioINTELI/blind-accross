import { View, Text, TouchableOpacity, StyleSheet, Vibration } from 'react-native';
import * as Speech from 'expo-speech';

export default function Test() {
  
  const handleVibration = () => {
    Vibration.vibrate(500);
  }
  
  const speak = () => {
    const phrase = 'Aguarde!'; 
    Speech.speak(phrase, {
      language: 'pt - BR', 
      pitch: 1,       
      rate: 1,
    });
  };

  const speakFree = () => {
    const phrase = 'Pode atravessar!'; 
    Speech.speak(phrase, {
      language: 'pt - BR', 
      pitch: 2,       
      rate: 1.5,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress = {() =>{
        handleVibration();
        speak();
      }}>
        <Text style={styles.buttonText}>Carro vindo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress = {() =>{
        handleVibration();
        speakFree();
      }}>
        <Text style={styles.buttonText}>Livre</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#007bff',
    height: 140,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 80
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center'
  },
});
