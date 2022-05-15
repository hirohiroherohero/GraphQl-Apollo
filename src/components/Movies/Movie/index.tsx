import { MovieStyle } from './style';
import { Link } from 'react-router-dom';

interface Type {
  movie: {
    title: string;
    id: number;
  };
}

const Movie = ({ movie }: Type) => {
  return (
    <MovieStyle>
      <Link to={`/${movie.id}`}>{movie.title}</Link>
    </MovieStyle>
  );
};

export default Movie;
