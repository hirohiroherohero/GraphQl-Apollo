import { ApolloError, gql, useQuery } from '@apollo/client';
import Loading from '@components/Loading';
import Movies from '@components/Movies';

interface Type {
  data: any;
  boolean: boolean;
  error: any;
}

const Main = () => {
  const GET_MOVIES = gql`
    {
      allMovies {
        title
        medium_cover_image
        id
        synopsis
      }
    }
  `;

  const { loading, error, data } = useQuery<Type>(GET_MOVIES);
  return (
    <>
      {loading && <Loading />}
      {!loading && data && <Movies data={data} />}
    </>
  );
};

export default Main;
