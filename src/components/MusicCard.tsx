import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export function MusicCard({title, singer, image} : {title: string, singer: string, image: any}) {
  return (
    <ImageBackground
      style={styles.musicCard}
      source={image}
    >
      <View style={styles.musicDetail} />
      <View style={styles.cardDetail}>
        <Text numberOfLines={1} style={styles.cardText}> {title} </Text>
        <Text numberOfLines={1} style={styles.cardText}> {singer} </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  musicCard: {
    margin: 10,
    backgroundColor: '#565656',
    width: 170,
    height: 170,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  musicDetail: {
    opacity: 0.5,
    backgroundColor: '#565656',
    width: '100%',
    height: '35%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  cardDetail: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  cardText: {
    width: '80%',
    opacity: 1,
    color: 'white',
  },
})