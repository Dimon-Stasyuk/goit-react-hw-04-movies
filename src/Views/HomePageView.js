import { Link } from "react-router-dom";
import s from "../HomePage/HomePage.module.css";
import { useLocation } from "react-router";

export default function HomePageView({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies &&
        movies.map((movie) => {
          return (
            <li className={s.item} key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: { from: location },
                }}
                className={s.link}>
                <img
                  className={s.img}
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt=''
                />
              </Link>
              <h3>{movie.title ? movie.title : movie.name}</h3>
            </li>
          );
        })}
    </ul>
  );
}
