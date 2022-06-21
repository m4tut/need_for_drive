import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { AppSpin } from '~shared/ui/AppSpin';

const Home: FC = () => {
  return (
    <Container>
      <h1>Index Page</h1>
      <AppSpin />
    </Container>
  );
};

export default Home;
