import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import { toast } from 'react-toastify';

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps){
  const { user } = useAuth();

  if (!localStorage.getItem('@laragramUser') && !localStorage.getItem('@laragramToken')) {
     toast.info('Faça o login para continuar.');
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default PrivateRoute;

