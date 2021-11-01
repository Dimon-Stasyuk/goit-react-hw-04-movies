import { useState, useEffect } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  Switch,
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
  const { path, url } = useRouteMatch();

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
    if (location.state?.from) {
      history.push(location.state.from);
    }
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
              <NavLink
                to={{ pathname: `${url}/cast`, state: location.state }}
                location={location}>
                Cast
              </NavLink>
            </li>
            <li className={s.item}>
              <NavLink
                to={{ pathname: `${url}/reviews`, state: location.state }}
                location={location}>
                Reviews
              </NavLink>
            </li>
          </ul>

          <hr />
        </>
      ) : (
        <ErrorView />
      )}

      <Switch>
        <Route path={`${path}/cast`} exact>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
