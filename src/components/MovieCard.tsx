import React from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { IMAGE_BASE_URL } from '../constants/config';

interface MovieCardProps {
  movie: any;
  onPress: () => void;
}

const MovieCard = ({ movie, onPress }: MovieCardProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1}>
        {movie.title}
      </Text>
      <Text style={styles.rating}> ⭐ {movie.vote_average.toFixed(1)} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: { width: 140, marginRight: 12 },
  image: { width: 140, height: 210, borderRadius: 10 },
  title: { color: 'white', marginTop: 6, fontWeight: '600' },
  rating: { color: '#ccc', marginTop: 2 },
});
export default React.memo(MovieCard);
