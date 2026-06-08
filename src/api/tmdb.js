import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/config';
const api = axios.create({ baseURL: BASE_URL });

export const fetchTrendingMovies = async () => {
  const response = await api.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchTopRatedMovies = async () => {
  const response = await api.get(`/movie/top_rated?api_key=${API_KEY}`);
  return response.data.results;
};

export const fetchUpcomingMovies = async () => {
  const response = await api.get(`/movie/upcoming?api_key=${API_KEY}`);
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await api.get(
    `/search/movie?api_key=${API_KEY}&query=${query}`,
  );
  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const response = await api.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMovieVideos = async id => {
  const response = await api.get(`/movie/${id}/videos?api_key=${API_KEY}`);
  return response.data.results;
};
