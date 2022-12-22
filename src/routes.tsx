import { ProtectedRoute } from '@guards/auth.guard';
import AdminLayout from '@layouts/admin/admin-layout';
import AboutPage from '@pages/about';
import AdminPage from '@pages/admin';
import LoginPage from '@pages/login';
import NotFound from '@pages/not-found';
import { RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AdminLayout component={<AdminPage />} />
      </ProtectedRoute>
    ),
  },
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
