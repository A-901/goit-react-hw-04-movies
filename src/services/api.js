import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "4c723f08ea7a4a76125776c3387f72cf";

export const imageURLBaseWidth200 = "https://image.tmdb.org/t/p/w200";
export const imageURLBaseWidth300 = "https://image.tmdb.org/t/p/w300";

export const fetchMostPopularMovies = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieByQuery = (query) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
};

export const fetchDetailsAboutMovie = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
};

export const fetchMovieCast = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`);
};

export const fetchMovieReviews = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`);
};