import React, {Component} from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import {loadMovies} from '../utils';

class SearchMovies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      loading: false,
    }

    this.loadSearch = this.loadSearch.bind(this)
    this.loadMovies = loadMovies.bind(this)
  }

  componentDidMount() {
    this.loadSearch()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.searchString !== prevProps.match.params.searchString) {
      this.loadSearch()
    }
  }

  loadSearch() {
    this.loadMovies(this.searchTitle, res => this.setState({
      movies: res.data.results,
    }))
  }

  searchTitle = () => {
    const {searchString} = this.props.match.params
    if (!searchString) {
      return Promise.resolve()
    }

    return axios.get('/api/movies/search', {
      params: { title: searchString }
    })
  }

  render() {
    return (
      <MovieList
        loading={this.state.loading}
        movies={this.state.movies}
      />
    );
  }
}

export default SearchMovies;
