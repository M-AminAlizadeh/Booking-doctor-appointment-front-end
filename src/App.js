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
import DeleteReservation from './components/DeleteReservation';
import DoctorDetails from './components/DoctorDetails';
import DoctorDetailsAddReservation from './components/DoctorDetailsAddReservation';
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
    path: '/doctors/:id',
    element: <Layout component={<DoctorDetails />} />,
  },
  {
    path: '/doctors/:id/add-reservation',
    element: <Layout component={<DoctorDetailsAddReservation />} />,
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
    path: '/delete-reservation',
    element: <Layout component={<DeleteReservation />} />,
  },
  // Not found
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default App;
