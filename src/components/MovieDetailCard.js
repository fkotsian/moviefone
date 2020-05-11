import React from 'react';
import {TMDB_IMAGE_PATH} from '../constants';

function MovieDetailCard({ id, title, backdrop_path, release_date, tagline, overview, vote_average, }) {
  function backdropImg() {
    return (
      backdrop_path
        ? <img src={`${TMDB_IMAGE_PATH}/w1280/${backdrop_path}`} />
        : null
    )
  }
  return (
    <div key={id} className="ui fluid basic card">
      <div className="image">
        { backdropImg() }
      </div>

      <div className="content">
        <div className="header">{title} ({release_date.slice(0,4)})</div>
        <div className="meta">
          <span className="category">{tagline}</span>
        </div>
        <div className="description">{overview}</div>
        <span class="right floated">
          <i class="star yellow icon"></i>
          {` ${vote_average}`} / 10
        </span>
      </div>
    </div>
  )
}

export default MovieDetailCard
