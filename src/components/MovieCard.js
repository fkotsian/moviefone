import React from 'react';
import {Link} from 'react-router-dom';

const BASE_URL_POSTER_IMG = "http://image.tmdb.org/t/p/w500/"
const DEFAULT_URL_EMPTY_POSTER = "https://semantic-ui.com/images/wireframe/image.png"

function MovieCard({ id, title, overview, vote_count, poster_path, release_date }) {
  function posterUrl() {
    return poster_path
      ? `${BASE_URL_POSTER_IMG}${poster_path}`
      : DEFAULT_URL_EMPTY_POSTER
  }

  function renderTitle() {
    return (
      poster_path
        ? null
        : <div className="ui center aligned middle aligned content">
            <div className="ui center aligned middle aligned header">
              {title}
            </div>
          </div>
    )
  }

  return (
    <Link to={`/movies/${id}`} className="ui basic card">
      <div className="ui fluid image">
        <img src={posterUrl()} />
      </div>

      { renderTitle() }
    </Link>
  )
}

export default MovieCard;
