import React from 'react';
import {Link} from 'react-router-dom';
import {
  TMDB_IMAGE_PATH,
  IMAGE_PLACEHOLDER_URL,
} from '../constants';

function MovieCard({ id, title, poster_path }) {
  function posterUrl() {
    return poster_path
      ? `${TMDB_IMAGE_PATH}/w500/${poster_path}`
      : IMAGE_PLACEHOLDER_URL
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
    <Link to={`/movies/${id}`} className="ui raised card">
      <div className="ui fluid image">
        <img src={posterUrl()} />
      </div>

      { renderTitle() }
    </Link>
  )
}

export default MovieCard;
