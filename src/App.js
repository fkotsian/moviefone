import React, {Component} from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }
  }

  async componentDidMount() {
    try {
      const popular = await axios.get('/api/movies/popular')
      this.setState({
        movies: popular.data.results,
      })
    } catch (err) {
      console.log("Err")
      console.log(err)
    }
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

        <div id="results" className="ui grid container">
          {
            this.state.movies.map(m => (
              <div className="ui segment">
                <div className="ui grid">
                  <div>{m.title}</div>
                  <div>{m.overview}</div>
                  <div>{m.popularity} - {m.vote_count}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
