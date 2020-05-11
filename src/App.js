import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import axios from 'axios';
import debounce from 'debounce';
import MovieScreen from './containers/MovieScreen';
import PopularMovies from './containers/PopularMovies';
import SearchMovies from './containers/SearchMovies';
import Header from './components/Header';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div id="moviefone" className="ui main text container">
        <Route path='/' component={Header}>
          {/* always render Header */}
        </Route>

        <div className="ui grid container">
          <Switch>
            <Route exact path='/' component={PopularMovies}>
            </Route>

            <Route path='/search/:searchString' component={SearchMovies}>
            </Route>

            <Route exact path='/movies/popular' component={PopularMovies}>
            </Route>

            <Route path='/movies/:movieId' component={MovieScreen}>
            </Route>
          </Switch>
        </div>

      </div>
    </Router>
  );
}

export default App;
