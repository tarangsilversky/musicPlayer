import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar } from './src/components/AppBar.tsx';
import {SearchBar} from "./src/components/SearchBar.tsx";
import {Banner} from "./src/components/Banner.tsx";
function App() {

  return (
    <SafeAreaView style={styles.container}>
        <AppBar />
        <SearchBar />
        <Banner />
        <Text style={styles.titleText}> Popular Song </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    fontSize: 30,
      marginBottom: 25,
    fontWeight: 'bold',
  }
})

export default App;
