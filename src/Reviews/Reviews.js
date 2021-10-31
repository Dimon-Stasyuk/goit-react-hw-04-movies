import { useState, useEffect } from "react";
import fetchMovies from "../services/moviesApi";

export default function Reviews({ movieId }) {
  const [review, setReview] = useState(null);

  useEffect(() => {
    fetchMovies.reviewsFetch(movieId).then(setReview);
  }, [movieId]);

  return (
    <p>
      {review && review[0]
        ? review[0].content
        : "We dont have any reviews for this movie."}
    </p>
  );
}
