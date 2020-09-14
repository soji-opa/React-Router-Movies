import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams, useRouteMatch} from 'react-router-dom';
import MovieCard from './MovieCard';

const Movie = (props) => {
  const params = useParams()
  const routeMatch = useRouteMatch()
  const [movie, setMovie] = useState({});
 
  useEffect(() => {
    const id = Number(params.slug);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          console.log("id", response)
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[params.slug]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => {
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  // const { title, director, metascore, stars } = movie;
  return (
    <React.Fragment>
    <MovieCard movie={movie}/>
    <div className="save-button">Save</div>
    </React.Fragment>
  )
}

export default Movie;
