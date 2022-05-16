import React from 'react';
import Movie from './Movie';
import { MoviesStyle } from './style';

interface Type {
  data: any;
}

interface MovieType {
  title: string;
  id: number;
  medium_cover_image: string;
  synopsis: string;
}

const Movies = ({ data }: Type) => {
  return (
    <MoviesStyle>
      {data &&
        data.allMovies.map((movie: MovieType) => (
          <React.Fragment key={movie.id}>
            <Movie movie={movie} />
          </React.Fragment>
        ))}
    </MoviesStyle>
  );
};

export default Movies;
