import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

const GET_MOVIE = gql`
  query getMovie($id: String!) {
    movie(id: $id) {
      id
      title
    }
  }
`;

const Detail = () => {
  const { id } = useParams();

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id },
  });

  console.log(loading, data);
  return <div>디테일</div>;
};

export default Detail;
