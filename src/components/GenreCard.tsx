import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export function GenreCard({genre, image} : {genre: string, image: any}) {
  return(
    <ImageBackground
      style={styles.genreCard}
      source={image}
    >
      <View style={styles.genreDetail} />
      <View style={styles.cardDetail}>
        <Text style={styles.cardText}> {genre} </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  genreCard: {
    margin: 10,
    backgroundColor: '#565656',
    width: 110,
    height: 120,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  genreDetail: {

    opacity: 0.6,
    backgroundColor: '#EFEFEF',
    width: '100%',
    height: '40%',
    padding: 10,
  },
  cardDetail: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
  },
  cardText: {
    fontSize: 20,
    opacity: 1,
    color: 'white',
  },
})