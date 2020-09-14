import React from 'react';
import {  useHistory } from 'react-router-dom';

const SavedList = props => {
  const history = useHistory()
  return(
    <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
      <button onClick={()=>history.push("/")}><div className="home-button">Home</div></button>
  </div>

  )
    };

export default SavedList;
