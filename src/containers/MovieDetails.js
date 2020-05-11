import React, {Component} from 'react';
import axios from 'axios';

import MovieDetailCard from '../components/MovieDetailCard';
import NotFound from '../components/NotFound';
import Loader from '../components/Loader';
import {loadMovies} from '../utils';

class MovieDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: null,
      loading: false,
    }

    this.loadMovies = loadMovies.bind(this)
  }

  componentDidMount() {
    this.loadMovies(this.getMovie, res => this.setState({
      movie: res.data,
    }))
  }

  getMovie = () => {
    const movieId = this.props.match.params.movieId
    return axios.get(`/api/movies/${movieId}`)
  }

  render() {
    return (
      <>
        <Loader loading={this.state.loading} />

        {
          this.state.movie
            ? <MovieDetailCard {...this.state.movie} />
            : <NotFound />
        }
      </>
    );
  }
}

export default MovieDetails;
