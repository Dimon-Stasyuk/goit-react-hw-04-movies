import { Link } from "react-router-dom";
import s from "../MoviesPage/MoviesPage.module.css";
import { useRouteMatch, useLocation } from "react-router";
import defaultImg from "../images/default_img.jpg";

export default function MoviesPageView({ searcMovies }) {
  const { url } = useRouteMatch();

  const location = useLocation();

  return (
    <ul className={s.list}>
      {searcMovies &&
        searcMovies.map((movie) => {
          return (
            <li key={movie.id} className={s.item}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { from: location },
                }}>
                {movie.backdrop_path ? (
                  <img
                    className={s.img}
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt=''
                  />
                ) : (
                  <img src={defaultImg} alt='' className={s.img} />
                )}
                <p>{movie.title}</p>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
