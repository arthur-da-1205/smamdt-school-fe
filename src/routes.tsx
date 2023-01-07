import { ProtectedRoute } from '@guards/auth.guard';
import AdminLayout from '@layouts/admin/admin-layout';
import AboutPage from '@pages/about';
import AdminPage from '@pages/admin';
import Dashboard from '@pages/dashboard/indes';
import LoginPage from '@pages/login';
import NotFound from '@pages/not-found';
import StudentPage from '@pages/student';
import TeacherPage from '@pages/teacher';
import { RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <AdminLayout component={<Dashboard />} />
      </ProtectedRoute>
    ),
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <AdminLayout component={<AdminPage />} />
      </ProtectedRoute>
    ),
  },
  {
    path: '/student',
    element: (
      <ProtectedRoute>
        <AdminLayout component={<StudentPage />} />
      </ProtectedRoute>
    ),
  },
  {
    path: '/teacher',
    element: (
      <ProtectedRoute>
        <AdminLayout component={<TeacherPage />} />
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
