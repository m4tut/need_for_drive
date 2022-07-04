import { FC } from 'react';

// Components
import { TextAccent } from '~shared/ui/TextAccent';
import { AppButton } from '~shared/ui/AppButton';

// Utils
import translate from '~processes/lang/utils/translate';

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
        <span>{translate('carsharing')}</span> <br />
        <TextAccent>Need&#160;for&#160;drive</TextAccent>
      </h1>
      <p className={cn(styles['hero__text'])}>{translate('perMinuteRent')}</p>
      <AppButton
        className={cn(styles['hero__btn'])}
        handleClick={() => {
          navigate('/order?step=location');
        }}
      >
        {translate('toBook')}
      </AppButton>
    </section>
  );
};
