import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

const App = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
]);

export default App;
