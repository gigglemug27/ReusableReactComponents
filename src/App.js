// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RegistrationForm from './components/registration/Registration';
import LoginForm from './components/login/Login';
import Dashboard from './components/dashboard/dashboard/Dashboard';

const App = () => {
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleRegistrationSuccess = () => {
    setRegistrationSuccess(true);
    setLoginSuccess(false); // Set loginSuccess to false after successful registration
  };

  const handleLoginSuccess = () => {
    setLoginSuccess(true);
    setRegistrationSuccess(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/registration"
          element={
            registrationSuccess ? (
              <Navigate to="/login" replace={true} />
            ) : (
              <RegistrationForm onRegistrationSuccess={handleRegistrationSuccess} />
            )
          }
        />
        <Route
          path="/login"
          element={
            loginSuccess ? (
              <Navigate to="/dashboard" replace={true} />
            ) : (
              <LoginForm onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/registration" />} />
      </Routes>
    </Router>
  );
};

export default App;

