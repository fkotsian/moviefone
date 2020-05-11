import React, {Component} from 'react';
import axios from 'axios';

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

  renderMovieDetails(m) {
    return (
      <div key={m.id} className="">
        <div className="ui segment">
          <div className="ui grid">
            <div>{m.title}</div>
            <div>{m.overview}</div>
            <div>{m.popularity} - {m.vote_count}</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="">
        <Loader loading={this.state.loading} />

        {
          this.state.movie
            ? this.renderMovieDetails(this.state.movie)
            : <NotFound />
        }
      </div>
    );
  }
}

export default MovieDetails;
