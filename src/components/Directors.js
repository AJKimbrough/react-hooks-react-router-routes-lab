import React from "react";
import { directors } from "../data";

function Directors() {

const director = directors.map(director => 
  <div key={director.name}>
    <h2>Name: {director.name}</h2>
    Movies: 
      {director.movies.map(movie => 
        <li key={movie}>{movie}</li>)}
    
  </div>
  )

  return (
  <div>
    <h1>Directors Page</h1>
    {director}
  </div>
  );
}

export default Directors;
