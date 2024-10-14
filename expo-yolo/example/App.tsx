import { StyleSheet, Text, View } from 'react-native';

import * as ExpoYolo from 'expo-yolo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoYolo.hello()}</Text>
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
});
