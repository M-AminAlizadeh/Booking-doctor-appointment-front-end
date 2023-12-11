import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Layout from './pages/Layout';
import DoctorsList from './components/DoctorsList';
import Reservations from './components/Reservations';
import AddReservation from './components/AddReservation';
import NotFound from './components/NotFound';

const App = createBrowserRouter([
  // Before Authentication
  {
    path: '/log-in',
    element: <LoginPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  // After Authentication
  {
    path: '/',
    element: <Layout component={<DoctorsList />} />,
  },
  {
    path: '/reservations',
    element: <Layout component={<Reservations />} />,
  },
  {
    path: '/add-reservation',
    element: <Layout component={<AddReservation />} />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default App;
