import React from "react";
import { movies } from "../data";

function Movies() {

  const movie = movies.map(movie =>
    <div key={movie.title}>
     <h2>Name: {movie.title}</h2>
      <h3>Time: {movie.time}</h3>
    <ul>Genres:
      {movie.genres.map(genre => (
        <li key={genre}>{genre}</li>
        )
      )}
    </ul>
        
     
    </div>
    ) 
 

  return (
  <div>
    <h1>Movies Page</h1>
      {movie}
  </div>
  );
}

export default Movies;
