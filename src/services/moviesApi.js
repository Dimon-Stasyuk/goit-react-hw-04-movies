import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "8ed7f54d2991fc05fca415d613a37f57",
};

const fetchTrendingMovies = () => {
  return axios
    .get("/trending/all/week")
    .then(({ data: { results } }) => results);
};

const fetchCast = (movieId) => {
  return axios
    .get(`/movie/${movieId}/credits`)
    .then(({ data: { cast } }) => cast);
};

const reviewsFetch = (movieId) => {
  return axios
    .get(`/movie/${movieId}/reviews?language=en-US&page=1`)
    .then(({ data: { results } }) => results);
};

const fetchMovieDetails = (movieId) => {
  return axios.get(`/movie/${movieId}?`).then(({ data }) => data);
};

const fetchMoviesPage = (movieName) => {
  return axios
    .get(
      `/search/movie?language=en-US&query=${movieName}&page=1&include_adult=false`,
    )
    .then(({ data: { results } }) => results);
};

const fetchMovies = {
  fetchTrendingMovies,
  fetchCast,
  reviewsFetch,
  fetchMovieDetails,
  fetchMoviesPage,
};

export default fetchMovies;
