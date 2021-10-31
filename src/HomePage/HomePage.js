import { useState, useEffect } from "react";
import HomePageView from "../Views/HomePageView";
import fetchMovies from "../services/moviesApi";

export default function HomePage() {
  const [popularMovies, setPopularMovies] = useState(null);

  useEffect(() => {
    fetchMovies.fetchTrendingMovies().then(setPopularMovies);
  }, []);

  return (
    <>
      <HomePageView movies={popularMovies} />
    </>
  );
}
