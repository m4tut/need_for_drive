import { FC } from 'react';
import { useIntl } from 'react-intl';

// Store
import { useStore } from 'effector-react';
import { $storeAdditionally, $storeCar } from '~processes/order/model/store';
import { $storeLang } from '~processes/lang/model/store';

// Events
import { setColor as setColorEvent } from '~processes/order/model/events/setColor';
import { setStartDate as setStartDateEvent } from '~processes/order/model/events/setStartDate';
import { setEndDate as setEndDateEvent } from '~processes/order/model/events/setEndDate';
import { setRate as setRateEvent } from '~processes/order/model/events/setRate';
import { setBabySeat as setBabySeatEvent } from '~processes/order/model/events/setBabySeat';

// Components
import { RadioOrChecboxGroup } from '~shared/ui/RadioOrChecboxGroup';
import ReactDatePicker from 'react-datepicker';
import { RadioOrChecbox } from '~shared/ui/RadioOrChecbox';

// Functions
import { initGroupColor } from './function/initGroupColors';
import { getCalendarLocale } from '~processes/lang/function/getCalendarLocale';

// Utils
import translate from '~processes/lang/utils/translate';

// Config
import { DAYS_CALENDAR, MONTH_CALENDAR } from '~processes/lang/config/localeCalendar';
import { RATES } from '../../processes/order/config/rate';

// Styles
import cn from 'classnames';
import styles from './TheAdditionally.module.scss';

// Types
import { Langs } from '~processes/lang/type/langs';

interface TheAdditionallyProps {
  className?: string;
}

export const TheAdditionally: FC<TheAdditionallyProps> = ({ className }) => {
  const intl = useIntl();
  const lolcale: Langs = useStore($storeLang);
  const storeCar = useStore($storeCar);
  const storeAdditionally = useStore($storeAdditionally);

  const colorsGroup = initGroupColor(storeCar);

  function setEndDate(date: Date | null) {
    if (date && storeAdditionally.rentalDuration.startDate && date > storeAdditionally.rentalDuration.startDate) {
      setEndDateEvent(date);
      return;
    }

    setEndDateEvent(null);
  }

  return (
    <div className={cn(className, styles['additionally'])}>
      {colorsGroup.length > 2 && (
        <div className={cn(styles['additionally__color'])}>
          <div className={cn(styles['additionally__title'])}>{translate('color')}</div>
          <RadioOrChecboxGroup
            className={cn(styles['additionally__color-group'])}
            group={colorsGroup}
            groupName="carColor"
            initValue={storeAdditionally.color}
            handleChange={setColorEvent}
          />
        </div>
      )}

      <div className={cn(styles['additionally__calendar'])}>
        <div className={cn(styles['additionally__title'])}>{translate('rentalDate')}</div>
        <div className={cn(styles['additionally__calendar-block'])}>
          <div className={cn(styles['additionally__calendar-block-item'])}>
            <span>{translate('from')}</span>
            <ReactDatePicker
              selected={storeAdditionally.rentalDuration.startDate}
              selectsStart
              minDate={new Date()}
              startDate={storeAdditionally.rentalDuration.startDate}
              endDate={storeAdditionally.rentalDuration.endDate}
              onChange={(date) => {
                setStartDateEvent(date);
              }}
              calendarStartDay={1}
              locale={getCalendarLocale(DAYS_CALENDAR[lolcale], MONTH_CALENDAR[lolcale])}
              timeCaption={intl.formatMessage({ id: 'time' })}
              placeholderText={intl.formatMessage({ id: 'enterDateAndTime' })}
              showTimeSelect
              timeIntervals={15}
              timeFormat="HH:mm"
              dateFormat="dd.mm.yyyy HH:mm"
              isClearable
            />
          </div>
          <div className={cn(styles['additionally__calendar-block-item'])}>
            <span>{translate('by')}</span>
            <ReactDatePicker
              selected={storeAdditionally.rentalDuration.endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={storeAdditionally.rentalDuration.startDate}
              endDate={storeAdditionally.rentalDuration.endDate}
              minDate={storeAdditionally.rentalDuration.startDate}
              calendarStartDay={1}
              locale={getCalendarLocale(DAYS_CALENDAR[lolcale], MONTH_CALENDAR[lolcale])}
              timeCaption={intl.formatMessage({ id: 'time' })}
              placeholderText={intl.formatMessage({ id: 'enterDateAndTime' })}
              showTimeSelect
              timeIntervals={15}
              timeFormat="HH:mm"
              dateFormat="dd.mm.yyyy HH:mm"
              isClearable={!!storeAdditionally.rentalDuration.endDate}
            />
          </div>
        </div>
      </div>

      <div className={cn(styles['additionally__rate'])}>
        <div className={cn(styles['additionally__title'])}>{translate('rate')}</div>
        <RadioOrChecboxGroup
          className={cn(styles['additionally__rate-group'])}
          group={RATES}
          groupName="rate"
          initValue={storeAdditionally.rate}
          handleChange={(value) => setRateEvent(value)}
        />
      </div>

      <div className={cn(styles['additionally__service'])}>
        <div className={cn(styles['additionally__title'])}>{translate('additionalServices')}</div>
        <RadioOrChecbox
          id="Детское кресло"
          name="babySeat"
          value="Детское кресло"
          type="checkbox"
          checked={storeAdditionally.babySeat}
          handleToggle={(status) => setBabySeatEvent(status)}
        >
          {translate('childSeat')}
        </RadioOrChecbox>
      </div>
    </div>
  );
};
