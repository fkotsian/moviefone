import React, {Component} from 'react';
import axios from 'axios';
import debounce from 'debounce';
import MovieList from '../components/MovieList';
import {loadMovies} from '../utils';

class SearchMovies extends Component {
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
    this.loadFirstPage()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.title !== prevProps.match.params.title) {
      this.loadFirstPage()
    }
  }

  loadFirstPage = () => {
    this.loadMovies(() => this.searchTitle(1), res => this.setState({
      movies: res.data.results,
      totalPages: res.data.total_pages,
      page: 1,
    }))
  }

  loadNextPage = () => {
    if (this.state.totalPages && this.state.page >= this.state.totalPages) {
      return
    }

    this.loadMovies(this.searchTitle, res => this.setState(
      prevState => ({
        movies: [...prevState.movies, ...res.data.results],
        totalPages: res.data.total_pages,
        page: prevState.page+1,
      })
    ))
  }

  searchTitle = (page=null) => {
    const {title} = this.props.match.params
    if (!title) {
      return Promise.resolve()
    }

    return axios.get('/api/movies/search', {
      params: {
        title: title,
        page: page || this.state.page+1,
      }
    })
  }

  render() {
    return (
      <MovieList
        loading={this.state.loading}
        movies={this.state.movies}
        loadNext={this.loadNextPageDebounced}
      />
    );
  }
}

export default SearchMovies;
