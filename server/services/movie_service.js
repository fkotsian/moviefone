const axios = require('axios')

const movieService = {

  getPopular: function(page=1) {
    return axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: process.env.TMDB_API_KEY,
        page: page,
      },
    })
  },

  searchTitle: function(title, page=1) {
    return axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: process.env.TMDB_API_KEY,
        query: title,
        page: page,
      },
    })
  },

  getMovie: function(movieId, page=1) {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
      },
    })
  }

}

module.exports = movieService
