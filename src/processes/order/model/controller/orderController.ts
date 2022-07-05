// Function
import { getFullLocation } from '~processes/order/functons/getFullLocation';
import { getFullCar } from '~processes/order/functons/getFullCar';
import { getFullRentalDuration } from '~processes/order/functons/getFullRentalDuration';

// Interface
import { ILocation } from '~processes/order/interface/ILoacation';
import { IOrder } from '~processes/order/interface/IOrder';
import { IOrderBtnSettings } from '~entities/TheOrder';
import { IBreadcrumb } from '~shared/ui/AppBreadcrumbs';
import { ICar } from '~processes/order/interface/ICar';
import { IAdditionally } from '~processes/order/interface/IAdditionally';

// Types
import { OrderStep } from '~processes/order/type/OrderStep';

interface IOrderController {
  order: IOrder;
  completed: {
    location: boolean;
    model: boolean;
    additionally: boolean;
    total: boolean;
  };
  btnSettings: IOrderBtnSettings;
  breadcrumbs: IBreadcrumb[];
}

const btnSettings: IOrderBtnSettings = {
  text: '',
  variant: 'lightgreen',
  disabled: true,
};

export function orderController(
  step: OrderStep,
  location: ILocation,
  car: ICar,
  additionally: IAdditionally
): IOrderController {
  const locationCompleted = Boolean(location.city && location.address);
  const modelCompleted = locationCompleted && Boolean(car.model && car.brend);
  const modelVisible = step !== 'location' && locationCompleted;
  const additionallyVisible = modelCompleted && step !== 'model';
  const additionallyCompleted =
    modelCompleted &&
    Boolean(
      additionally.color &&
        additionally.rentalDuration.endDate &&
        additionally.rentalDuration.startDate &&
        additionally.rate
    );
  const totalCompleted = localStorage.getItem('confirmation') === 'true';

  switch (step) {
    case 'location':
      btnSettings.text = 'selectModel';
      btnSettings.disabled = !locationCompleted;
      btnSettings.variant = 'lightgreen';
      break;

    case 'model':
      btnSettings.text = 'optional';
      btnSettings.disabled = !modelCompleted;
      btnSettings.variant = 'lightgreen';
      break;

    case 'additionally':
      btnSettings.text = 'total';
      btnSettings.disabled = !additionallyCompleted;
      btnSettings.variant = 'lightgreen';
      break;

    case 'total':
      btnSettings.text = 'toOrder';
      btnSettings.disabled = false;
      btnSettings.variant = 'lightgreen';
      break;
    case 'completed':
      btnSettings.text = 'cancel';
      btnSettings.disabled = false;
      btnSettings.variant = 'red';
      break;
  }

  const breadcrumbs = totalCompleted
    ? [{ text: 'Заказ номер RU58491823' }]
    : [
        {
          href: '/order?step=location',
          text: 'location',
        },
        {
          href: '/order?step=model',
          text: 'model',
          disabled: !locationCompleted,
        },
        {
          href: '/order?step=additionally',
          text: 'optional',
          disabled: !modelCompleted,
        },
        {
          href: '/order?step=total',
          text: 'total',
          disabled: !additionallyCompleted,
        },
      ];

  return {
    order: {
      location: {
        name: 'pointOfIssue',
        value: getFullLocation(location),
        visible: true,
      },
      model: {
        name: 'model',
        value: getFullCar(car),
        visible: modelVisible,
      },
      color: {
        name: 'color',
        value: additionally.color,
        visible: additionallyVisible,
      },
      rentalDuration: {
        name: 'rentalDuration',
        value: getFullRentalDuration(additionally.rentalDuration),
        visible: additionallyVisible,
      },
      rate: {
        name: 'rate',
        value: additionally.rate.split(', ')[0].replaceAll(' ', '\u00a0'),
        visible: additionallyVisible,
      },
      babySeat: {
        name: 'childSeat',
        value: additionally.babySeat ? 'yes' : 'not',
        visible: additionallyVisible,
      },
    },
    completed: {
      location: locationCompleted,
      model: modelCompleted,
      additionally: additionallyCompleted,
      total: totalCompleted,
    },
    btnSettings,
    breadcrumbs,
  };
}
