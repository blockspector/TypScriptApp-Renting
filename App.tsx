import { StyleSheet, Text, View } from 'react-native';
import Test from './Components/test';
import NavBar from './Components/nav';

export default function App() {
  return (
    <View style={styles.container}>
      <Test/>
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
