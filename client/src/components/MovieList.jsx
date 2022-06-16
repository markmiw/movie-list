import React from 'react';
import Movie from './Movie.jsx';
var MovieList = function(props) {
  return (
    <div className='movie-list'>
      {
        props.movies.map((movie) => (
          <Movie movieSent={movie}
            searchedMovie={props.searchedMovie}
            updateWatchedState={props.updateWatchedState}
            watched={props.watched}
          />
        ))
      }
    </div>
  );
};

export default MovieList;
