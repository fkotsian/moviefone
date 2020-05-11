import React from 'react';
import MovieCard from './MovieCard';
import NotFound from './NotFound';
import Loader from './Loader';

function MovieList({ movies, loading }) {
  return (
    <>
      <Loader loading={loading} />

      {
        movies.length > 0
          ? <div className="ui three column centered doubling grid">
            {
              movies.map(m => (
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
    </>
  );
}

export default MovieList;
