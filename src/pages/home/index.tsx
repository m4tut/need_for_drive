import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { AppHeader } from '~widgets/AppHeader';
import { HeroSection } from '~widgets/HeroSection';

// Styles
import cn from 'classnames';
import styles from './Home.module.scss';
import { AppFooter } from '~widgets/AppFooter';

const Home: FC = () => {
  return (
    <Default>
      <div className={cn(styles['home'])}>
        <div className={cn(styles['home__left'])}>
          <AppHeader />
          <HeroSection />
          <AppFooter />
        </div>
        <div className={cn(styles['home__right'])}></div>
      </div>
    </Default>
  );
};

export default Home;
