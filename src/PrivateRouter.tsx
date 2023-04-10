import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute() {
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/');
            return;
        }
        const { user: { role } } = JSON.parse(storedUser);
        if (role !== "admin") {
            navigate('/');
        }
    })
}

export default PrivateRoute;