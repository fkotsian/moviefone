import React, {Component} from 'react';
import axios from 'axios';
import debounce from 'debounce';
import MovieList from '../components/MovieList';

class SearchMovies extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      loading: false,
    }

    this.loadSearch = this.loadSearch.bind(this)
    this.loadMovies = this.loadMovies.bind(this)
    this.debounceLoadMovies = debounce(this.loadMovies, 500)
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
    this.loadMovies(this.searchTitle)
  }

  async loadMovies(func) {
    try {
      this.setState({ loading: true })
      const res = await func()
      this.setState({
        movies: res.data.results,
        loading: false,
      })
    } catch (err) {
      console.log("Err")
      console.log(err)
    }
  }

  searchTitle = () => axios.get('/api/movies/search', {
    params: {
      title: this.props.match.params.searchString,
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

export default SearchMovies;
