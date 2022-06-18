import MOVIEDB_API_KEY from '../config/moviedb.js';

var getMovies = ({key, query, max = 5}, callback) => {
  $.get('https://api.themoviedb.org/3/movie/550?api_key='+MOVIEDB_API_KEY+'&query='Jack+Reacher, {
    part: 'snippet',
    key: MOVIEDB_API_KEY,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default getMovies;
