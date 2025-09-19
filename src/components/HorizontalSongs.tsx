import { FlatList, StyleSheet, View } from 'react-native';
import { data } from '../tempData/Data.tsx';
import { MusicCard } from './MusicCard.tsx';

export function HorizontalSongs() {
  return(
    // <View style={styles.horizontalSongsScrollBar}>
      <FlatList
        style={{flexGrow: 1, flex: 1}}
        horizontal={true}
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <MusicCard title={item.title} singer={item.singer} image={item.image}/>}
        keyExtractor={(item) => item.title}
      />
    // {/*</View>*/}
  );
}

// const styles = StyleSheet.create({
//   horizontalSongsScrollBar: {
//     width: '100%',
//     height: 200,
//   }
// })