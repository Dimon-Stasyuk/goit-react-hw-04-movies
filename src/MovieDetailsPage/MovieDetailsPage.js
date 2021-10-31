import { useState, useEffect } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router";
import { NavLink } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import MovieDetailsPageView from "../Views/MovieDetailsPageView";
import fetchMovies from "../services/moviesApi";
import ErrorView from "../Views/ErrorView";

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams(null);
  const { url } = useRouteMatch();

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (!movieId) {
      return;
    }
    fetchMovies
      .fetchMovieDetails(movieId)
      .then(setMovieDetails)
      .catch((err) => setError("true"));
  }, [movieId]);

  const onGoBack = () => {
    if (location && location.state && location.state.from) {
      history.push(location.state.from);
      return;
    }
    history.push("/");
  };

  return (
    <>
      {!error ? (
        <>
          <button type='button' onClick={onGoBack}>
            Go back
          </button>
          <MovieDetailsPageView movieDetails={movieDetails} />
          <hr />
          <p>Additional information</p>
          <ul className={s.list}>
            <li className={s.item}>
              <NavLink to={`${url}/cast`} location={location}>
                Cast
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink to={`${url}/reviews`} location={location}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <hr />
        </>
      ) : (
        <ErrorView />
      )}

      <Route path={`${url}/cast`}>
        <Cast movieId={movieId} />
      </Route>

      <Route path={`${url}/reviews`}>
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
}
