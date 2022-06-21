import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { Link } from 'react-router-dom';

// styles
import cn from 'classnames';
import styles from './Error404.module.scss';

// img
import error404 from '~assets/images/error404.png';

const Error404: FC = () => {
  return (
    <Container className={cn(styles['error'])}>
      <div className={cn(styles['error__content'])}>
        <img src={error404} alt="error404" />
        <h1>ОШИБКА 404</h1>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </Container>
  );
};

export default Error404;
