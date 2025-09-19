import { FlatList, StyleSheet } from 'react-native';
import { genreData } from '../tempData/MusicData.tsx';
import { GenreCard } from './GenreCard.tsx';

export function GenreList() {
  return(
    <FlatList
      style={styles.flatList}
      numColumns={3}
      columnWrapperStyle={styles.columnWrapper}
      data={genreData}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <GenreCard genre={item.genre} image={item.image}/>}
      keyExtractor={(item) => item.genre}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flex: 1
  },
  columnWrapper: {
    justifyContent: 'space-between'
  }
})