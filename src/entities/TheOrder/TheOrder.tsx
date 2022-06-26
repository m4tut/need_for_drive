import { FC } from 'react';

// Styles
import cn from 'classnames';
import styles from './TheOrder.module.scss';
import { AppButton } from '~shared/ui/AppButton';

interface TheOrderProps {
  className?: string;
}

export const TheOrder: FC<TheOrderProps> = ({ className }) => {
  function nextSection() {
    console.log('next');
  }

  return (
    <div className={cn(className, styles['order'])}>
      <h2 className={cn(styles['order__title'])}>Ваш заказ:</h2>

      <ul className={cn(styles['order__list'])}>
        <li className={cn(styles['order__list-item'])}>
          <span className={cn(styles['order__list-item-name'])}>Пункт выдачи</span>
          <span className={cn(styles['order__list-item-dashed'])} />
          <span className={cn(styles['order__list-item-selected'])}>Ульяновск, Нариманова&#160;42</span>
        </li>
        <li className={cn(styles['order__list-item'])}>
          <span className={cn(styles['order__list-item-name'])}>Модель</span>
          <span className={cn(styles['order__list-item-dashed'])} />
          <span className={cn(styles['order__list-item-selected'])}>Hyndai,&#160;i30&#160;N</span>
        </li>
        <li className={cn(styles['order__list-item'])}>
          <span className={cn(styles['order__list-item-name'])}>Цвет</span>
          <span className={cn(styles['order__list-item-dashed'])} />
          <span className={cn(styles['order__list-item-selected'])}>Голубой</span>
        </li>
        <li className={cn(styles['order__list-item'])}>
          <span className={cn(styles['order__list-item-name'])}>Длительность аренды</span>
          <span className={cn(styles['order__list-item-dashed'])} />
          <span className={cn(styles['order__list-item-selected'])}>1д&#160;2ч</span>
        </li>
        <li className={cn(styles['order__list-item'])}>
          <span className={cn(styles['order__list-item-name'])}>Тариф</span>
          <span className={cn(styles['order__list-item-dashed'])} />
          <span className={cn(styles['order__list-item-selected'])}>На&#160;сутки</span>
        </li>
        <li className={cn(styles['order__list-item'])}>
          <span className={cn(styles['order__list-item-name'])}>Полный бак</span>
          <span className={cn(styles['order__list-item-dashed'])} />
          <span className={cn(styles['order__list-item-selected'])}>Да</span>
        </li>
      </ul>

      <div className={cn(styles['order__price'])}>
        <span>Цена:&#160;</span>
        <span>16 000</span>
        <span>&#160;₽</span>
      </div>

      <AppButton className={cn(styles['order__btn'])} handleClick={nextSection} disabled>
        Выбрать модель
      </AppButton>
    </div>
  );
};
