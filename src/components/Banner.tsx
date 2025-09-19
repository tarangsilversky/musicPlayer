import { Image, StyleSheet } from 'react-native';

export function Banner() {
  return(
    <Image source={require('../assets/images/banner.jpg')} style={styles.banner}/>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 150,
    marginTop: 20,
    borderRadius: 30,
    marginBottom: 20,
  }
})