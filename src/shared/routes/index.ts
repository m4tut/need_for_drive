import { lazy } from 'react';
import { IRoutes } from './types';

// Pages
const Home = lazy(() => import('~pages/home'));
const Error404 = lazy(() => import('~pages/error404'));

export const routes: IRoutes[] = [
  {
    path: '/',
    elements: Home,
  },
  {
    path: '*',
    elements: Error404,
  },
];
