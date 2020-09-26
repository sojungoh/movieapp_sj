import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, summary, poster, genres }) {
  return (
    <Link
      className="hyperlink"
      to={{
        pathname: `/movie/${id}`,
        state: {
          title,
          year,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movies-movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie-data">
          <h3 className="movie-title">{title}</h3>
          <h5 className="movie-year">{year}</h5>
          <ul className="movie-genres">
            {genres &&
              genres.map((genre, index) => (
                <li key={index} className="movie-genres-genre">
                  {genre}
                </li>
              ))}
          </ul>
          <p className="movie-summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
