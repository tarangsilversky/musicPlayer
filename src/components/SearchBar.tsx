// import { useState } from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

export function SearchBar() {
  // const [searchQuery, setSearchquery] = useState('');

  return(
    <View style={styles.searchContainer}>
      <TextInput
        placeholder='Search...'
        style={styles.input}
      />
      <Image source={require('../assets/icons/search.png')} style={styles.searchIcon}/>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 60,
    marginBottom: 20,
  },
  input: {
    width: '90%',
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  }
})