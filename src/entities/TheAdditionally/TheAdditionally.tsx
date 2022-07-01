import { FC, useState } from 'react';

// Store
import { useStore } from 'effector-react';
import { $storeAdditionally, $storeCar } from '~processes/order/model/store';

// Events
import { setColor as setColorEvent } from '~processes/order/model/events/setColor';

// Components
import { RadioOrChecboxGroup } from '~shared/ui/RadioOrChecboxGroup';
import ReactDatePicker from 'react-datepicker';

// Functions
import { initGroupColor } from './function/initGroupColors';
import { getCalendarLocale } from '~processes/lang/function/getCalendarLocale';

// Config
import { DAYS_CALENDAR, MONTH_CALENDAR } from '~processes/lang/config/localeCalendar';

// Styles
import cn from 'classnames';
import styles from './TheAdditionally.module.scss';

interface TheAdditionallyProps {
  className?: string;
}

export const TheAdditionally: FC<TheAdditionallyProps> = ({ className }) => {
  const storeCar = useStore($storeCar);
  const storeAdditionally = useStore($storeAdditionally);
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const colorsGroup = initGroupColor(storeCar);

  return (
    <div className={cn(className, styles['additionally'])}>
      {colorsGroup.length > 2 && (
        <div className={cn(styles['additionally__color'])}>
          <div>Цвет</div>
          <RadioOrChecboxGroup
            className={cn(styles['additionally__color-group'])}
            group={colorsGroup}
            groupName="carColor"
            initValue={storeAdditionally.color ? storeAdditionally.color : 'all'}
            handleChange={setColorEvent}
          />
        </div>
      )}

      <div className={cn(styles['additionally__calendar'])}>
        <div>Дата аренды</div>
        <div className={cn(styles['additionally__calendar-block'])}>
          <div className={cn(styles['additionally__calendar-block-item'])}>
            <span>C</span>
            <ReactDatePicker
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              calendarStartDay={1}
              locale={getCalendarLocale(DAYS_CALENDAR['ru'], MONTH_CALENDAR['ru'])}
              timeCaption="Время"
              placeholderText="Введите дату и время"
              showTimeSelect
              timeIntervals={15}
              timeFormat="hh:mm"
              dateFormat="dd.mm.yyyy hh:mm"
              isClearable
            />
          </div>
          <div className={cn(styles['additionally__calendar-block-item'])}>
            <span>По</span>
            <ReactDatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              calendarStartDay={1}
              locale={getCalendarLocale(DAYS_CALENDAR['ru'], MONTH_CALENDAR['ru'])}
              timeCaption="Время"
              placeholderText="Введите дату и время"
              showTimeSelect
              timeIntervals={15}
              timeFormat="hh:mm"
              dateFormat="dd.mm.yyyy hh:mm"
              isClearable
            />
          </div>
        </div>
      </div>
    </div>
  );
};
