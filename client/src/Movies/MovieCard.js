import React from 'react';
import {Link} from 'react-router-dom'


function MovieCard({ movie }) {
  const { title, director, metascore, id, stars } = movie;
  return (
    <Link to={`/movies/${id}`}>
      <div className="movie-card">
      <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>

        </div>
        
        {stars && stars.length && <h3>Actors</h3>}
        { stars && stars.length ? stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))
        : null
      }
      </div>
    </Link>

  );
}

// const MovieCard = props => {
//   return;
// };

export default MovieCard;
