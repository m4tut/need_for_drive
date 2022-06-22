import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { Container } from '~shared/layouts/Container';

const Home: FC = () => {
  return (
    <Default>
      <Container>
        <hr />
        <h1>Index Page</h1>
        <hr />
      </Container>
    </Default>
  );
};

export default Home;
