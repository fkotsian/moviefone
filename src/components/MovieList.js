import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import NotFound from './NotFound';
import Loader from './Loader';
import {infiniteScroll} from '../utils';

class MovieList extends Component {

  componentDidMount() {
    if (this.props.loadNext) {
      this.scrollListener = document.addEventListener("scroll", e => {
        infiniteScroll(this.props.loadNext)
      })
    }
  }

  componentWillUnmount() {
    this.scrollListener && document.removeEventListener(
      "scroll", this.scrollListener
    )
  }

  render() {
    return (
      <>
        {
          this.props.movies.length > 0
            ? <div className="ui three column centered doubling grid">
              {
                this.props.movies.map(m => (
                  <div key={m.id} className="column">
                    <div className="ui cards">
                      <MovieCard {...m} />
                    </div>
                  </div>
                ))
              }
              </div>
            : <NotFound />
        }

        {
          this.props.movies.length
            ? null
            : <Loader loading={this.props.loading} />
        }
      </>
    );
  }
}


MovieList.defaultProps = {
  movies: [],
  loading: false,
}

MovieList.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
  loadNext: PropTypes.func,
}

export default MovieList;
