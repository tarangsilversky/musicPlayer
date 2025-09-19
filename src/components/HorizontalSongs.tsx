import { FlatList, StyleSheet } from 'react-native';
import { musicData } from '../tempData/MusicData.tsx';
import { MusicCard } from './MusicCard.tsx';

export function HorizontalSongs() {
  return(
      <FlatList
        style={styles.flatList}
        horizontal={true}
        data={musicData}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MusicCard title={item.title} singer={item.singer} image={item.image}/>}
        keyExtractor={(item) => item.title}
      />
  );
}

const styles = StyleSheet.create({
  flatList: {
    flexGrow: 1,
    flex: 1
  }
})