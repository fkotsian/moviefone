import React from 'react';
import {Link} from 'react-router-dom';

function Movie({ id, title, overview, popularity, vote_count }) {
  return (
    <Link to={`/movies/${id}`}>
      <div className="ui segment">
        <div className="ui grid">
          <div>{title}</div>
          <div>{overview}</div>
          <div>{popularity} - {vote_count}</div>
        </div>
      </div>
    </Link>
  )
}

export default Movie;
