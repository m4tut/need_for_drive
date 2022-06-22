import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { AppInput } from '~shared/ui/AppInput';

const Home: FC = () => {
  return (
    <Container>
      <h1>Index Page</h1>
      <AppInput name="city" placeholder="gdcgsdg" error="gfdgfdgdfg">
        Город
      </AppInput>
    </Container>
  );
};

export default Home;
