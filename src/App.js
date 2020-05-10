import React, {Component} from 'react';
import axios from 'axios';
import debounce from 'debounce';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      loading: false,
      searchString: "",
    }

    this.loadSearch = this.loadSearch.bind(this)
    this.loadMovies = this.loadMovies.bind(this)
    this.debounceLoadMovies = debounce(this.loadMovies, 500)
  }

  componentDidMount() {
    this.loadPopular()
  }

  loadPopular() {
    this.loadMovies(this.getPopular)
  }

  loadSearch(e) {
    this.setState({
      searchString: e.target.value
    })

    this.debounceLoadMovies(this.searchTitle)
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

  getPopular = () => axios.get('/api/movies/popular')

  searchTitle = () => axios.get('/api/movies/search', {
    params: {
      title: this.state.searchString,
    }
  })

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
      <div key={m.id} className="ui main text container">
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
      <div id="moviefone" className="ui main text container">
        <div className="ui borderless main menu fixed" id="header">
          <div className="ui text container">
            <div className="header item center aligned">
              Moviefone!
            </div>
            <div className="item right aligned category search">
              <div className="ui icon input">
                <input
                  className="prompt"
                  type="text"
                  placeholder="Search movies..."
                  onChange={this.loadSearch}
                />
                <i className="search icon"></i>
              </div>
              <div className="results"></div>
            </div>
          </div>
        </div>

        <div id="searchResults" className="ui grid container">
          {
            this.state.loading
              ? this.renderLoader()
              : null
          }
          {
            this.state.movies.length
              ? this.state.movies.map(m => this.renderMovie(m))
              : this.renderEmptyMovie()
          }
        </div>
      </div>
    );
  }
}

export default App;
