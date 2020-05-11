import React from 'react';
import Movie from './Movie';
import NotFound from './NotFound';
import Loader from './Loader';

function MovieList({ movies, loading }) {
  return (
    <>
      <Loader loading={loading} />

      {
        movies.length > 0
          ? movies.map(m => <Movie key={m.id} {...m} />)
          : <NotFound />
      }
    </>
  );
}

export default MovieList;
