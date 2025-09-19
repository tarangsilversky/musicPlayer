import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

export function AppBar() {
  return(
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('onPress');
        }}
      >
        <Image source={require('../assets/icons/menu.png')} style={styles.menu} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/images/profile.jpg')} style={styles.menu}/>
        <TouchableOpacity
          onPress={() => {
            console.log('onPress');
          }}
        >
          <Image source={require('../assets/icons/threeDot.png')} style={styles.menu} />
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  menu: {
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
})