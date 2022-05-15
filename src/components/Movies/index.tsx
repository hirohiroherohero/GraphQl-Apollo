import React from 'react';
import Movie from './Movie';

interface Type {
  data: any;
}

interface MovieType {
  title: string;
  id: number;
}

const Movies = ({ data }: Type) => {
  return (
    <div>
      {data &&
        data.allMovies.map((movie: MovieType) => (
          <React.Fragment key={movie.id}>
            <Movie movie={movie} />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Movies;
