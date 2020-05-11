import React, {Component} from 'react';
import axios from 'axios';
import debounce from 'debounce';
import MovieList from '../components/MovieList';
import {loadMovies, infiniteScroll} from '../utils';

class PopularMovies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      loading: false,
      page: 0,
      totalPages: null,
    }

    this.loadMovies = loadMovies.bind(this)
    this.loadNextPageDebounced = debounce(this.loadNextPage, 400)
  }

  componentDidMount() {
    this.loadNextPageDebounced()

    this.scrollListener = document.addEventListener("scroll", e => {
      infiniteScroll(this.loadNextPageDebounced)
    })
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollListener)
  }

  loadNextPage = () => {
    if (this.state.totalPages && this.state.page >= this.state.totalPages) {
      return
    }

    this.loadMovies(this.getPopular, res => this.setState(
      prevState => ({
        movies: [...prevState.movies, ...res.data.results],
        totalPages: res.data.total_pages,
        page: prevState.page+1,
      })
    ))
  }

  getPopular = () => axios.get('/api/movies/popular', {
    params: {
      page: this.state.page+1,
    }
  })

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
