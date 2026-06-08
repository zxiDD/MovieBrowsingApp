import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MovieCard from './MovieCard';

interface MovieRowProps {
  title: string;
  data: any[];
  navigation: any;
}

const MovieRow = ({ title, data, navigation }: MovieRowProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> {title} </Text>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            onPress={() => navigation.navigate('Details', { movieId: item.id })}
          />
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { marginTop: 20 },
  heading: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
});
export default MovieRow;
