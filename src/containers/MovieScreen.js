import React, {Component} from 'react';
import axios from 'axios';
import debounce from 'debounce';

class MovieScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movie: null,
      loading: false,
    }

    this.loadMovie = this.loadMovie.bind(this)
  }

  componentDidMount() {
    this.loadMovie()
  }

  loadMovie() {
    this.loadMovies(this.getMovie)
  }

  async loadMovies(func) {
    try {
      this.setState({ loading: true })
      const res = await func()
      this.setState({
        movie: res.data,
        loading: false,
      })
    } catch (err) {
      console.log("Err")
      console.log(err)
    }
  }

  getMovie = () => {
    const movieId = this.props.match.params.movieId
    return axios.get(`/api/movies/${movieId}`)
  }

  renderLoader() {
    return (
      <div className="ui basic segment" id="loader">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading Films...</div>
        </div>
        <p></p>
      </div>
    )
  }

  renderMovie(m) {
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

  renderEmptyMovie() {
    return (
      <div className="ui grid container" id="loader">
        <div className="ui center aligned middle aligned column">
          <i className="massive blue film icon"></i>
          <h2>No Movies Found</h2>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="">
          {
            this.state.loading
              ? this.renderLoader()
              : null
          }
          {
            this.state.movie
              ? this.renderMovie(this.state.movie)
              : this.renderEmptyMovie()
          }
      </div>
    );
  }
}

export default MovieScreen;
