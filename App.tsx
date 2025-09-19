import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppBar } from './src/components/AppBar.tsx';
import {SearchBar} from "./src/components/SearchBar.tsx";
import {Banner} from "./src/components/Banner.tsx";
import { HorizontalSongs } from './src/components/HorizontalSongs.tsx';
function App() {

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <SearchBar />
      <ScrollView style={styles.scrollView}>
        <Banner />
        <View style={styles.popularSongs}>
          <Text style={styles.titleText}> Popular Song </Text>
          <TouchableOpacity onPress={() => {}}>
            <Image source={require('./src/assets/icons/rightArrow.png')} style={styles.rightArrow} />
          </TouchableOpacity>
        </View>
        <HorizontalSongs />
        <Text style={styles.titleText}> By Genre </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  popularSongs: {
    alignContent: 'center',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  rightArrow: {
    marginTop: 10,
    width: 30,
    height: 30,
  },
  titleText: {
    fontSize: 30,
    marginBottom: 15,
    fontWeight: 'bold',
  },
})

export default App;
