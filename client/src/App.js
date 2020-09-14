import React, { useState, useEffect } from 'react';

import {Route, Switch} from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';



const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
 

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
          return <MovieList />
        }}/>
        <Route path="/movies/:slug">
          <Movie />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
