import { FC } from 'react';
import { ISelect } from '~shared/interfaces/ISelect';

// Components
import { Container } from '~shared/layouts/Container';
import { AppSelect } from '~shared/ui/AppSelect';

const Home: FC = () => {
  const g: ISelect[] = [
    { text: 'fffff', value: 'fffff' },
    { text: 'ggggg', value: 'ggggg' },
    { text: 'hh', value: 'hh' },
    { text: 'jj', value: 'jj' },
    { text: 'll', value: 'll' },
    { text: 'oo', value: 'oo' },
    { text: 'pp', value: 'pp' },
    { text: 'uu', value: 'uu' },
  ];
  return (
    <Container>
      <hr />
      <h1>Index Page</h1>
      <hr />
      <AppSelect
        isOpen
        selectList={g}
        changeHandler={(et) => {
          console.log(et);
        }}
      />
    </Container>
  );
};

export default Home;
