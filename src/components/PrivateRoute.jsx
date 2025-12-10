import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getToken } from '../api/auth';

const PrivateRoute = () => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const userRole = payload.role;

    return userRole === 'admin' ? <Outlet /> : <Navigate to="/" />;
  } catch (error) {
    console.error('Error decoding token:', error);
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
