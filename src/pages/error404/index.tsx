import { FC } from 'react';

// Components
import { Container } from '~shared/layouts/Container';
import { AppLink } from '~shared/ui/AppLink/AppLink';

// Utils
import translate from '~processes/lang/utils/translate';

// Styles
import cn from 'classnames';
import styles from './Error404.module.scss';

// Img
import error404 from '~assets/images/error404.png';

const Error404: FC = () => {
  return (
    <Container className={cn(styles['error'])}>
      <div className={cn(styles['error__content'])}>
        <img src={error404} alt="error404" />
        <h1>{translate('error')} 404</h1>
        <AppLink href="/need-for-drive" variant="green">
          {translate('goHome')}
        </AppLink>
      </div>
    </Container>
  );
};

export default Error404;
