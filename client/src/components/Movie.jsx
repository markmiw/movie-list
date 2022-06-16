import React from 'react';
var Movie = (props) => {
  if (props.movieSent.title.includes(props.searchedMovie) && props.movieSent.watched===props.watched) {
    return (
      <div className='float-movie-container'>
        <div className='float-movie'>
          <div
            onClick={(event) => {
              props.updateWatchedState(props.watched, props.movieSent.id);
            }}
          >{props.movieSent.title}</div>
        </div>
        <div className='float-movie'>
          <div>{props.watched}</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Movie;
