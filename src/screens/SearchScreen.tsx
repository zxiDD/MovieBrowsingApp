import React, { useState } from 'react';
import { TextInput, FlatList, StyleSheet } from 'react-native';
import { searchMovies } from '../api/tmdb';
import MovieCard from '../components/MovieCard';
import { SafeAreaView } from 'react-native-safe-area-context';
const SearchScreen = ({ navigation }: any) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<any[]>([]);
  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length > 1) {
      const results = await searchMovies(text);
      setMovies(results);
    } else {
      setMovies([]);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Search movies..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={handleSearch}
        style={styles.input}
      />
      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { movieId: item.id })}
          />
        )}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 10 },
  input: {
    backgroundColor: '#222',
    color: 'white',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
});
export default SearchScreen;
