import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  fetchTrendingMovies,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
} from '../api/tmdb';
import HeroBanner from '../components/HeroBanner';
import MovieRow from '../components/MovieRow';
const HomeScreen = ({ navigation }: any) => {
  const [trending, setTrending] = useState<any[]>([]);
  const [topRated, setTopRated] = useState<any[]>([]);
  const [upcoming, setUpcoming] = useState<any[]>([]);
  useEffect(() => {
    loadMovies();
  }, []);
  const loadMovies = async () => {
    const trendingData = await fetchTrendingMovies();
    const topRatedData = await fetchTopRatedMovies();
    const upcomingData = await fetchUpcomingMovies();
    setTrending(trendingData);
    setTopRated(topRatedData);
    setUpcoming(upcomingData);
  };
  return (
    <ScrollView style={styles.container}>
      {trending.length > 0 && (
        <HeroBanner
          movie={trending[0]}
          onPlayTrailer={() =>
            navigation.navigate('Details', {
              movieId: trending[0].id,
              autoplay: true,
            })
          }
        />
      )}
      <View style={styles.content}>
        <MovieRow
          title="Trending Now"
          data={trending}
          navigation={navigation}
        />
        <MovieRow title="Top Rated" data={topRated} navigation={navigation} />
        <MovieRow
          title="Upcoming Releases"
          data={upcoming}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  content: { paddingBottom: 30 },
});
export default HomeScreen;
