import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { AppHeader } from '~widgets/AppHeader';
import { HeroSection } from '~widgets/HeroSection';
import { AppFooter } from '~widgets/AppFooter';
import { HeroSlider } from '~widgets/HeroSlider';

// Styles
import cn from 'classnames';
import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <Default>
      <div className={cn(styles['home'])}>
        <div className={cn(styles['home__left'])}>
          <AppHeader />
          <HeroSection />
          <AppFooter className={cn(styles['home__left-footer'])} />
        </div>
        <div className={cn(styles['home__right'])}>
          <HeroSlider />
        </div>
      </div>
    </Default>
  );
};

export default Home;
