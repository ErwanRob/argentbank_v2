import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Wallet from '../pages/Wallet';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/wallet"
                    element={<ProtectedRoute element={<Wallet />} />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </Router>

    );
}

export default AppRoutes;