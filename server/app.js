require('dotenv').config()

// server setup
const express = require('express')
const app = express()
const port = 3000

const movieService = require('server/movie_service')

app.get('/', (req, res) => res.send('loads built React'))

app.get('/popular', (req, res) => {

})

app.listen(port, () => console.log(`Listening on port :${port}!`))
