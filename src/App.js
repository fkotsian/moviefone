import React, {Component} from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      loading: false,
    }
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true })
      const popular = await axios.get('/api/movies/popular')
      this.setState({
        movies: popular.data.results,
        loading: false,
      })
    } catch (err) {
      console.log("Err")
      console.log(err)
    }
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
      <div className="ui main text container">
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
      <div id="moviefone" className="ui main text container">
        <div className="ui borderless main menu fixed" id="header">
          <div className="ui text container">
            <div className="header item center aligned">
              Moviefone! for you
            </div>
            <div className="item right aligned category search">
              <div className="ui icon input">
                <input className="prompt" type="text" placeholder="Search movies..." />
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
            this.state.movies.map(m => this.renderMovie(m))
          }
        </div>
      </div>
    );
  }
}

export default App;
