// load env
require('dotenv').config()

// server setup
const movieService = require('./services/movie_service')
const express = require('express')
const path = require('path')
const app = express()

// parse json requests
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'build')));


app.get('/api/movies/popular', async (req, res) => {
  const {page} = req.query
  const popular = await movieService.getPopular(page)
  res.json(popular.data)
})

app.get('/api/movies/search', async (req, res) => {
  const {title, page} = req.query
  const search = await movieService.searchTitle(title, page)
  res.json(search.data)
})

app.get('/api/movies/:id', async (req, res) => {
  const movieId = req.params.id
  const movie = await movieService.getMovie(movieId)
  res.json(movie.data)
})

// serve static assets
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'))
})

module.exports = app
