import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieList = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          console.log('response', response)
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  return (
    <div className="movie-list">
      {movieList.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

    </div>
  );
}


export default MovieList;
