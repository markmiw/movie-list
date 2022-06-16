import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import Add from './Add.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    var initialMovieDatabase = [
      {title: 'Mean Girls', watched: 'Watched', id: 0},
      {title: 'Hackers', watched: 'Watched', id: 1},
      {title: 'The Grey', watched: 'Watched', id: 2},
      {title: 'Sunshine', watched: 'Watched', id: 3},
      {title: 'Ex Machina', watched: 'Watched', id: 4},
    ];

    this.state = {
      movieList: initialMovieDatabase,
      searchedMovie: '',
      onChangeMovie: '',
      onChangeAdd: '',
      watched: 'Watched',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.onChangeAdd = this.onChangeAdd.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.updateWatchedState = this.updateWatchedState.bind(this);
    this.handleWatched = this.handleWatched.bind(this);
  };


  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      searchedMovie: this.state.onChangeMovie,
    });
  };
  onChangeSearch(event) {
    this.setState({
      onChangeMovie: event.target.value,
    });
  }

  onChangeAdd(event) {
    this.setState({
      onChangeAdd: event.target.value,
    });
  }

  handleAdd(event) {
    event.preventDefault();
    const movies = this.state.movieList.slice();
    const id = movies.length;
    movies.push({title: this.state.onChangeAdd, watched: 'To Watch', id: id});
    this.setState({
      movieList: movies,
    });
  }

  updateWatchedState(state, id) {
    const movies = this.state.movieList.slice();
    if (state === 'Watched') {
      movies[id].watched = 'To Watch';
    } else {
      movies[id].watched = 'Watched';
    }
    this.setState({
      movieList: movies,
    });
  }

  handleWatched(value) {
    this.setState({
      watched: value,
    });
  }
  render() {
    return (
      <div className='whole-app'>
        <h1 className='header'>Movie List</h1>
        <div className ='add-button'>
          <Add handleAdd={this.handleAdd} onChangeAdd={this.onChangeAdd}/>
        </div>
        <div>
          <Search handleSubmit={this.handleSubmit}
            onChangeSearch={this.onChangeSearch}
          />
        </div>
        <div className='watch-buttons'>
          <button type='button' onClick={(event) => {
            this.handleWatched(event.target.innerHTML);
          }} >Watched</button>
          <button type='button' onClick={(event) => {
            this.handleWatched(event.target.innerHTML);
          }}>To Watch</button>
        </div>
        <div className='movie-list'>
          <MovieList
            movies={this.state.movieList}
            searchedMovie={this.state.searchedMovie}
            updateWatchedState={this.updateWatchedState}
            watched={this.state.watched}
          />

        </div>


      </div>
    );
  }
}


export default App;
