import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
import defaultImg from "../images/default_img.jpg";
import PropTypes from "prop-types";

export default function MovieDetailsPageView({ movieDetails }) {
  return (
    <>
      {movieDetails && (
        <div className={s.container}>
          <div>
            {movieDetails.backdrop_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.backdrop_path}`}
                alt=''
              />
            ) : (
              <img src={defaultImg} alt='' />
            )}
          </div>
          <div className={s.description}>
            <h1>{movieDetails.title}</h1>
            <p>User Score: {movieDetails.vote_average * 10}%</p>
            <h2>Owerview</h2>
            <p>{movieDetails.overview}</p>
            <h3>Genres</h3>
            {movieDetails.genres.map((ganre) => {
              return (
                <span className={s.ganres} key={ganre.id}>
                  {ganre.name}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

MovieDetailsPageView.propTypes = {
  movieDetails: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }),
};
