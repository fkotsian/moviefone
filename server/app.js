// load env
require('dotenv').config()

// server setup
const express = require('express')
const app = express()

// parse json requests
app.use(express.json());

const movieService = require('./services/movie_service')

app.get('/api/movies/popular', async (req, res) => {
  const page = req.query.page
  const popular = await movieService.getPopular(page)
  console.log(popular.data)
  res.json(popular.data)
})

app.get('/api/movies/search', async (req, res) => {
  const searchString = req.query.title
  const search = await movieService.searchTitle(searchString)
  res.json(search.data)
})

app.get('/api/movies/:id', async (req, res) => {
  const movieId = req.params.id
  const movie = await movieService.getMovie(movieId)
  res.json(movie.data)
})

// serve static assets
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = app
