import { MovieDetailStyle } from './style';

interface Type {
  data: {
    movie: {
      id: number;
      title_long: string;
      description_full: string;
      genres: [];
      background_image_original: string;
    };
  };
}

const MovieDetail = ({ data }: Type) => {
  return (
    <MovieDetailStyle imgUrl={data.movie.background_image_original}>
      <p className="title">{data.movie.title_long}</p>
      <ul>
        {data.movie.genres.map((el, index) => {
          return <li key={index}>{el}</li>;
        })}
      </ul>
      <div className="direction">{data.movie.description_full}</div>
    </MovieDetailStyle>
  );
};

export default MovieDetail;
