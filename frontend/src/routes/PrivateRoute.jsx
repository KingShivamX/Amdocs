import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = () => {
    const { hasCompletedAssessment } = useAuth();

    if (!hasCompletedAssessment) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default PrivateRoute; 