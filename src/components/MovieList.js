import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieList extends Component {
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
      <Link key={m.id} to={`/movies/${m.id}`}>
        <div className="ui segment">
          <div className="ui grid">
            <div>{m.title}</div>
            <div>{m.overview}</div>
            <div>{m.popularity} - {m.vote_count}</div>
          </div>
        </div>
      </Link>
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
      <div id="searchResults" className="">
        {
          this.props.loading
            ? this.renderLoader()
            : null
        }
        {
          this.props.movies.length
            ? this.props.movies.map(m => this.renderMovie(m))
            : this.renderEmptyMovie()
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  loading: PropTypes.bool,
  movies: PropTypes.array,
}

export default MovieList;
