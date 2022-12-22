import { useApp } from '@provider/app.provider';
import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { isAuthenticated } = useApp();

  // user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export const PublicRoute = ({ children }: { children: ReactElement }) => {
  const { isAuthenticated } = useApp();

  // user is not authenticated
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};
