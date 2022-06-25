import { FC } from 'react';

// Components
import { Default } from '~shared/layouts/Default';
import { Container } from '~shared/layouts/Container';
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
        <Container className={cn(styles['home__left'])}>
          <AppHeader className={cn(styles['home__left-header'])} />
          <HeroSection />
          <AppFooter className={cn(styles['home__left-footer'])} />
        </Container>
        <div className={cn(styles['home__right'])}>
          <HeroSlider />
        </div>
      </div>
    </Default>
  );
};

export default Home;
