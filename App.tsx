import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar } from './src/components/AppBar.tsx';
function App() {

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
})

export default App;
