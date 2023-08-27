import axios from 'axios';

const API_KEY =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDY0YTRkMWY2YWM1YzQ2YmI1YWE4MzI5ZTYwNjE3YiIsInN1YiI6IjY0ZTM1NGI5ZDdjZDA2MDExZjM4ZjdjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wbq1kfMBlGDMka7umUudFpe9xsh9J4H853rEikvtFzw';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;

export const getTrending = () => {
  return axios.get(`trending/movie/day`);
};

export const getMoviesFromQuery = name => {
  return axios.get(`search/movie?query=${name}&page=1`);
};

export const getMoviesById = movieId => {
  return axios.get(`movie/${movieId}`);
};

export const getMoviesCreditsById = movieId => {
  return axios.get(`movie/${movieId}/credits`);
};

export const getMoviesReviewsById = movieId => {
  return axios.get(`movie/${movieId}/reviews`);
};
