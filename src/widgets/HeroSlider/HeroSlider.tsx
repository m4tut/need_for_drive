import { FC } from 'react';

// Components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
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
  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <button
        className={cn(styles['hero-slider__arrow'], styles['hero-slider__arrow--prev'])}
        onClick={() => swiper.slidePrev()}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1l-8 9 8 9" />
        </svg>
      </button>
    );
  };

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <button
        className={cn(styles['hero-slider__arrow'], styles['hero-slider__arrow--next'])}
        onClick={() => swiper.slideNext()}
        type="button"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l8 9-8 9" />
        </svg>
      </button>
    );
  };

  return (
    <Swiper
      className={cn(className, styles['hero-slider'])}
      initialSlide={0}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      navigation
      pagination={{
        clickable: true,
        type: 'bullets',
        bulletElement: 'button',
        horizontalClass: `${styles['hero-slider__dots']}`,
        bulletClass: `${styles['hero-slider__dots-item']}`,
        bulletActiveClass: `${styles['hero-slider__dots-item--active']}`,
      }}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.images}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        );
      })}

      <SwiperButtonPrev />
      <SwiperButtonNext />
    </Swiper>
  );
};
