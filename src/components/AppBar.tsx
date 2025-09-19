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
        <Image source={require('../assets/icons/menus.png')} style={styles.menu} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/images/profile.jpg')} style={styles.menu}/>
        <TouchableOpacity
          onPress={() => {
            console.log('onPress');
          }}
        >
          <Image source={require('../assets/icons/dots.png')} style={styles.menu} />
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5FCFF',
      marginBottom: 25,
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