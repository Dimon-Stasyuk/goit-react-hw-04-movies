import { useEffect, useState } from "react";
import defaultAvatar from "../images/default_avatar.jpg";
import fetchMovies from "../services/moviesApi";

import s from "./Cast.module.css";

export default function Cast({ movieId }) {
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    fetchMovies.fetchCast(movieId).then(setCasts);
  }, [movieId]);

  return (
    <>
      <ul className={s.list}>
        {casts &&
          casts.map(({ id, profile_path, name, character }) => {
            const imgUrl = profile_path
              ? `https://image.tmdb.org/t/p/w200/${profile_path}`
              : defaultAvatar;
            return (
              <li className={s.item} key={id}>
                <img src={imgUrl} alt='' />

                <p>Name: {name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
