import { FC } from 'react';

// Components
import { AppButton } from '~shared/ui/AppButton';

// Styles
import cn from 'classnames';
import styles from './HeroSlide.module.scss';

// Interface
import { IHeroSlide } from '../interface/IHeroSlide';
import { useNavigate } from 'react-router-dom';

interface HeroSlideProps {
  className?: string;
  slide: IHeroSlide;
}

export const HeroSlide: FC<HeroSlideProps> = ({ className, slide }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(slide.button.href);
  }

  return (
    <section className={cn(className, styles['hero-slide'])}>
      <img className={cn(styles['hero-slide__img'])} src={slide.images} alt={slide.alt} />
      <div className={cn(styles['hero-slide__content'])}>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <AppButton handleClick={handleClick} variant={slide.button.variant}>
          {slide.button.text}
        </AppButton>
      </div>
    </section>
  );
};
