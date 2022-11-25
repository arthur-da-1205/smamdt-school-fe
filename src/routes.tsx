import AboutPage from '@pages/about';
import LoginPage from '@pages/login/login';
import NotFound from '@pages/not-found';
import { RouteObject } from 'react-router-dom';

export default [
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/*',
    element: <NotFound />,
  },
] as RouteObject[];
