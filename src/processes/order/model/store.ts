import { createStore } from 'effector';

// Event

// Interface
import { IOrder } from './../interface/IOrder';

// Config
import { INIT_ORDER } from '../config/initOrder';

export const $storeOrder = createStore<IOrder>(INIT_ORDER);
