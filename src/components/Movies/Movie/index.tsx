import { MovieStyle } from './style';
import { Link } from 'react-router-dom';

interface Type {
  movie: {
    title: string;
    id: number;
    medium_cover_image: string;
    synopsis: string;
  };
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    imgUrl?: string;
  }
}

const Movie = ({ movie }: Type) => {
  return (
    <MovieStyle imgUrl={movie.medium_cover_image}>
      <Link to={`/${movie.id}`}>
        <div className="movie-img"></div>
        <div className="movie-short-description">
          <p>{movie.title}</p>
          <div>{movie.synopsis}</div>
        </div>
        <div className="dim"></div>
      </Link>
    </MovieStyle>
  );
};

export default Movie;
