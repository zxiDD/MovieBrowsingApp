import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Image, View, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { fetchMovieDetails, fetchMovieVideos } from '../api/tmdb';
import { IMAGE_BASE_URL } from '../constants/config';
const DetailsScreen = ({ route }: any) => {
  const { movieId, autoplay = false } = route.params;
  const [movie, setMovie] = useState<any>(null);
  const [trailerKey, setTrailerKey] = useState('');
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    loadMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const loadMovieDetails = async () => {
    const details = await fetchMovieDetails(movieId);
    const videos = await fetchMovieVideos(movieId);
    setMovie(details);
    const trailer = videos.find((video: any) => video.type === 'Trailer');
    if (trailer) {
      setTrailerKey(trailer.key);
      if (autoplay) {
        setTimeout(() => {
          setPlaying(true);
        }, 500);
      }
    }
  };
  if (!movie) return null;
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.content}>
        <Text style={styles.title}> {movie.title} </Text>
        <Text style={styles.info}> Release: {movie.release_date} </Text>
        <Text style={styles.info}> Runtime: {movie.runtime} mins </Text>
        <Text style={styles.info}> Rating: ⭐ {movie.vote_average} </Text>
        <View style={styles.genreContainer}>
          {movie.genres.map((genre: any) => (
            <View key={genre.id} style={styles.genreBadge}>
              <Text style={styles.genreText}> {genre.name} </Text>
            </View>
          ))}
        </View>
        <Text style={styles.overview}> {movie.overview} </Text>
        {trailerKey ? (
          <YoutubePlayer height={250} play={playing} videoId={trailerKey} />
        ) : null}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  poster: { width: '100%', height: 500 },
  content: { padding: 16 },
  title: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  info: { color: '#ccc', marginTop: 8 },
  overview: { color: 'white', marginTop: 20, lineHeight: 24 },
  genreContainer: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 15 },
  genreBadge: {
    backgroundColor: '#333',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  genreText: { color: 'white' },
});
export default DetailsScreen;
