import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { AppLink } from '~shared/ui/AppLink/AppLink';

// Styles
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
        <AppLink href="/" mod="green">
          Вернуться на главную
        </AppLink>
      </div>
    </Container>
  );
};

export default Error404;
