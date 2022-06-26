import { createStore } from 'effector';

// Event
import { setPointOfIssue, setPointOfIssueEvent } from './events/setPointOfIssue';
import { setModel, setModelEvent } from './events/setModel';
import { setColor, setColorEvent } from './events/setColor';
import { setRentalDuration, setRentalDurationEvent } from './events/setRentalDuration';
import { setRate, setRateEvent } from './events/setRate';
import { setTankFull, setTankFullEvent } from './events/setTankFull';
import { setBabySeat, setBabySeatEvent } from './events/setBabySeat';
import { setRightHandDrive, setRightHandDriveEvent } from './events/setRightHandDrive';
import { resetOrder, resetOrderEvent } from './events/resetOrder';

// Interface
import { IOrder } from './../interface/IOrder';
import { ILocation } from '../interface/ILoacation';
import { IRentalDuration } from './../interface/IDate';

// Config
import { INIT_ORDER } from '../config/initOrder';

export const $storeOrder = createStore<IOrder>(INIT_ORDER)
  .on(setPointOfIssue, (state, payload: ILocation) => setPointOfIssueEvent(state, payload))
  .on(setModel, (state, payload: string) => setModelEvent(state, payload))
  .on(setColor, (state, payload: string) => setColorEvent(state, payload))
  .on(setRentalDuration, (state, payload: IRentalDuration) => setRentalDurationEvent(state, payload))
  .on(setRate, (state, payload: string) => setRateEvent(state, payload))
  .on(setTankFull, (state, payload: boolean) => setTankFullEvent(state, payload))
  .on(setBabySeat, (state, payload: boolean) => setBabySeatEvent(state, payload))
  .on(setRightHandDrive, (state, payload: boolean) => setRightHandDriveEvent(state, payload))
  .on(resetOrder, (state) => resetOrderEvent(state));
