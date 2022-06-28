// Function
import { getFullLocation } from '~processes/order/functons/getFullLocation';

// Interface
import { ILocation } from '~processes/order/interface/ILoacation';
import { IOrder } from '~processes/order/interface/IOrder';
import { IOrderBtnSettings } from '~entities/TheOrder';
import { IBreadcrumb } from '~shared/ui/AppBreadcrumbs';

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

export function orderController(step: OrderStep, location: ILocation): IOrderController {
  const locationCompleted = Boolean(location.city && location.address);

  switch (step) {
    case 'location':
      btnSettings.text = 'Выбрать модель';
      btnSettings.disabled = !locationCompleted;
      break;

    case 'model':
      btnSettings.text = 'Дополнительно';
      btnSettings.disabled = true;
      break;

    default:
      break;
  }

  const breadcrumbs = [
    {
      href: '/order?step=location',
      text: 'Местоположение',
    },
    {
      href: '/order?step=model',
      text: 'Модель',
      disabled: !locationCompleted,
    },
    {
      href: '/order?step=additionally',
      text: 'Дополнительно',
      disabled: true,
    },
    {
      href: '/order?step=total',
      text: 'Итого',
      disabled: true,
    },
  ];

  return {
    order: {
      location: {
        name: 'Пункт выдачи',
        value: getFullLocation(location),
        visible: true,
      },
      model: {
        name: 'Модель',
        value: '',
        visible: step !== 'location' && locationCompleted,
      },
      color: {
        name: 'Цвет',
        value: '',
        visible: false,
      },
      rentalDuration: {
        name: 'Длительность аренды',
        value: {
          dateStart: undefined,
          dateEnd: undefined,
        },
        visible: false,
      },
      rate: {
        name: 'Тариф',
        value: '',
        visible: false,
      },
      tankFull: {
        name: 'Полный бак',
        value: false,
        visible: false,
      },
      babySeat: {
        name: 'Детское кресло',
        value: false,
        visible: false,
      },
      rightHandDrive: {
        name: 'Правый руль',
        value: false,
        visible: false,
      },
    },
    completed: {
      location: locationCompleted,
      model: false,
      additionally: false,
      total: false,
    },
    btnSettings,
    breadcrumbs,
  };
}
