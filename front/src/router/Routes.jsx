// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../pages/Homepage/HomePage';
import NotFoundPage from '../pages/404/404Page';
import SignInPage from '../pages/SignIn/SignInPage';
import UserPage from '../pages/User/UserPage';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element }) => {
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = token && token.length ? true : false;

  return isAuthenticated ? element : <Navigate to="/sign-in" />;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-out" element={<SignInPage />} />
        <Route
          path="/user"
          element={<PrivateRoute element={<UserPage />} />}
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
