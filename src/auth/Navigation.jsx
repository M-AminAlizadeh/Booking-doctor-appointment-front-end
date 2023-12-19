import LoginPage from '../pages/LoginPage';
import Layout from '../pages/Layout';
import DoctorsList from '../components/DoctorsList';
import SignUpPage from '../pages/SignUpPage';
import Reservations from '../components/Reservations';
import AddReservation from '../components/AddReservation';
import DeleteReservation from '../components/DeleteReservation';
import DoctorDetails from '../components/DoctorDetails';
import DoctorDetailsAddReservation from '../components/DoctorDetailsAddReservation';
import NotFound from '../components/NotFound';

const Navigation = [
  {
    path: '/log-in',
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
    isPrivate: false,
  },
  {
    path: '*',
    element: <NotFound />,
    isPrivate: false,
  },
  {
    path: '/',
    element: <Layout component={<DoctorsList />} />,
    isPrivate: true,
  },
  {
    path: '/doctors/:id',
    element: <Layout component={<DoctorDetails />} />,
    isPrivate: true,
  },
  {
    path: '/doctors/:id/add-reservation',
    element: <Layout component={<DoctorDetailsAddReservation />} />,
    isPrivate: true,
  },
  {
    path: '/reservations',
    element: <Layout component={<Reservations />} />,
    isPrivate: true,
  },
  {
    path: '/add-reservation',
    element: <Layout component={<AddReservation />} />,
    isPrivate: true,
  },
  {
    path: '/delete-reservation',
    element: <Layout component={<DeleteReservation />} />,
    isPrivate: true,
  },
];

export default Navigation;
