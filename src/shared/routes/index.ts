import { lazy } from 'react';
import { IRoutes } from './types';

// Pages
const Home = lazy(() => import('~pages/home'));
const Order = lazy(() => import('~pages/order'));
const Error404 = lazy(() => import('~pages/error404'));

export const ROUTES: IRoutes[] = [
  {
    path: '/need-for-drive',
    elements: Home,
  },
  {
    path: '/order',
    elements: Order,
  },
  {
    path: '*',
    elements: Error404,
  },
];
