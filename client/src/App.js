import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Route, Link, Switch} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import MovieCard from './Movies/MovieCard';


const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
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

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
     { /*<div>Replace this Div with your Routes</div>*/}
      <Switch>
        <Route
        exact
        path="/"
        render={(props)=>{
          console.log("react-props", props)
          return <MovieCard movies={movieList}/>
        }}/>
        <Route path="/movies/:slug">
          <Movie movies = {movieList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
