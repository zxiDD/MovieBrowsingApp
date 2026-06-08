import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { IMAGE_BASE_URL } from '../constants/config';

interface HeroBannerProps {
  movie: any;
  onPlayTrailer: () => void;
}

const HeroBanner = ({ movie, onPlayTrailer }: HeroBannerProps) => {
  return (
    <ImageBackground
      source={{ uri: `${IMAGE_BASE_URL}${movie.backdrop_path}` }}
      style={styles.banner}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}> {movie.title} </Text>
        <Text style={styles.description} numberOfLines={3}>
          {movie.overview}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPlayTrailer}>
          <Text style={styles.buttonText}> Play Trailer </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  banner: { height: 400, justifyContent: 'flex-end' },
  overlay: { backgroundColor: 'rgba(0,0,0,0.5)', padding: 20 },
  title: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  description: { color: 'white', marginTop: 10 },
  button: {
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    width: 140,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
export default HeroBanner;
