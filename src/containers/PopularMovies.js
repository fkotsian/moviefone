import React, {Component} from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import {loadMovies} from '../utils';

class PopularMovies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      loading: false,
    }

    this.loadMovies = loadMovies.bind(this)
  }

  componentDidMount() {
    this.loadMovies(this.getPopular, res => this.setState({
      movies: res.data.results,
    }))
  }

  getPopular = () => axios.get('/api/movies/popular')

  render() {
    return (
      <MovieList
        loading={this.state.loading}
        movies={this.state.movies}
      />
    );
  }
}

export default PopularMovies;
