// load env
require('dotenv').config()

// server setup
const express = require('express')
const app = express()

const movieService = require('server/movie_service')

app.get('/', (req, res) => res.send('loads built React'))

app.get('/popular', (req, res) => {

// serve static assets
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

module.exports = app
