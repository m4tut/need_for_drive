import { FC } from 'react';

// Components
import { TextAccent } from '~shared/ui/TextAccent';
import { AppButton } from '~shared/ui/AppButton';

// Styles
import cn from 'classnames';
import styles from './HeroSection.module.scss';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: FC<HeroSectionProps> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <section className={cn(className, styles['hero'])}>
      <h1 className={cn(styles['hero__title'])}>
        <span>Каршеринг</span> <br />
        <TextAccent>Need&#160;for&#160;drive</TextAccent>
      </h1>
      <p className={cn(styles['hero__text'])}>Поминутная аренда авто твоего города</p>
      <AppButton
        className={cn(styles['hero__btn'])}
        handleClick={() => {
          navigate('/order?step=location');
        }}
      >
        Забронировать
      </AppButton>
    </section>
  );
};
