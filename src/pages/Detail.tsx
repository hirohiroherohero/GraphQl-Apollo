import { gql, useQuery } from '@apollo/client';
import Loading from '@components/Loading';
import MovieDetail from '@components/MovieDetail';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query getMovie($id: String!) {
    movie(id: $id) {
      id
      title_long
      description_full
      genres
      background_image_original
    }
  }
`;

const Detail = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  console.log(loading, data);
  return (
    <>
      {loading && <Loading />}
      {!loading && data && <MovieDetail data={data} />}
    </>
  );
};

export default Detail;
