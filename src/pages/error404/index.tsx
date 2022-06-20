import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';

// styles
import cn from 'classnames';
import styles from './Error404.module.scss';

const Error404: FC = () => {
  return (
    <Container className={cn(styles['error'])}>
      <h1>ERROR 404</h1>
    </Container>
  );
};

export default Error404;
