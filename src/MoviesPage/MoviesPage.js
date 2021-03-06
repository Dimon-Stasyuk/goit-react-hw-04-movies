import { useState, useEffect } from "react";
import MoviesPageView from "../Views/MoviesPageView";
import fetchMovies from "../services/moviesApi";
import { useLocation, useHistory } from "react-router";
import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const location = useLocation();

  const [movies, setMovies] = useState(null);
  const [name, setName] = useState("");
  const searchName = new URLSearchParams(location.search).get("query");

  const history = useHistory();

  const changeName = (event) => {
    setName(event.target.value);
  };

  const onFetch = (name) => {
    fetchMovies.fetchMoviesPage(name).then(setMovies);
    setName("");
  };

  useEffect(() => {
    if (searchName) {
      onFetch(searchName);
      setName(searchName);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();

    onFetch(name);
    history.push({
      ...location,
      search: `query=${name}`,
    });
  };

  return (
    <>
      <form className={s.searchForm} onSubmit={onSubmit}>
        <input
          value={name}
          onChange={changeName}
          className='SearchForm-input'
          type='text'
          autoFocus
          placeholder='Search movies'
        />
        <button type='submit' className='SearchForm-button'>
          <span className='SearchForm-button-label'>Search</span>
        </button>
      </form>

      {movies && <MoviesPageView searcMovies={movies} />}
    </>
  );
}
