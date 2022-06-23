import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { Header } from '~widgets/Header';

// Styles
import cn from 'classnames';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Default>
      <div className={cn(styles['home'])}>
        <div className={cn(styles['home__left'])}>
          <Header />
        </div>
        <div className={cn(styles['home__right'])}></div>
      </div>
    </Default>
  );
};

export default Home;
