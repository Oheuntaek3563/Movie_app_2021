import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title} />
            <div className="moive__data">
                <h3 className="movie_title" >{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie__genres">
                    {genres.map((genres, index) => {
                        return <li key={index} className="movie__genres">{genres}</li>;
                    })}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;