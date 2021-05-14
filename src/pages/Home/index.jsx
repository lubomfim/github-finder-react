import * as S from './styled';

import { useQuery } from '@apollo/react-hooks';
import { USER } from 'services/graphql/queries';

function Home() {
  const { loading, error, data } = useQuery(USER, {
    variables: {
      login: 'lubomfim',
    },
  });

  console.log(loading, error, data);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error! {error.message}</p>;
  }

  if (data) {
    const { repository } = data;
    return <div></div>;
  }
}

export default Home;
