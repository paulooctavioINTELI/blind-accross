import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current: string) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <View style={styles.buttonContainer2}>
        <TouchableOpacity style={styles.button2}>
          <Text>Carro vindo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <Text>Pode atravessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
        <Text>Ajuste a camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: 2,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'grey',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 8,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  buttonContainer2: {
    flex: 1,
    flexBasis: '20%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',

    backgroundColor: 'transparent',
    margin: 0,
  },


  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  button2: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 5,
  },


  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
