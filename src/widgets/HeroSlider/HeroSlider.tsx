import { FC, useRef } from 'react';

// Components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { HeroSlide } from './HeroSlide/HeroSlide';

// Styles
import 'swiper/scss';
import cn from 'classnames';
import styles from './HeroSlider.module.scss';

// Config
import { DEFAULT_SLIDES } from './config/defaultSlides';

// Interface
import { IHeroSlide } from './interface/IHeroSlide';

interface HeroSliderProps {
  className?: string;
  slides?: IHeroSlide[];
}

export const HeroSlider: FC<HeroSliderProps> = ({ className, slides = DEFAULT_SLIDES }) => {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
    <Swiper
      className={cn(className, styles['hero-slider'])}
      initialSlide={1}
      slidesPerView={1}
      pagination={{
        clickable: true,
        type: 'bullets',
        bulletClass: `${styles['hero-slider__bullets']}`,
        bulletActiveClass: `${styles['hero-slider__bullets--active']}`,
      }}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      modules={[Navigation, Pagination]}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.images}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        );
      })}

      <button
        ref={navigationPrevRef}
        className={cn(styles['hero-slider__arrow'], styles['hero-slider__arrow--prev'])}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1l-8 9 8 9" />
        </svg>
      </button>
      <button
        ref={navigationNextRef}
        className={cn(styles['hero-slider__arrow'], styles['hero-slider__arrow--next'])}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l8 9-8 9" />
        </svg>
      </button>
    </Swiper>
  );
};
