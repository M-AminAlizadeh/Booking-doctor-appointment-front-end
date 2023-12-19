import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthData } from '../auth/AuthWrapper';

function Navbar() {
  const [year, setYear] = useState();
  const { signout } = AuthData();
  const navigate = useNavigate();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const submitSignout = (e) => {
    e.preventDefault();
    signout();
    navigate('/log-in');
  };

  return (
    <div className="mx-5 my-2">
      <img src="https://img.icons8.com/clouds/100/menu.png" alt="menu--v1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="cursor-pointer" />
      <div className="offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <Link to="/" className="link-secondary link-offset-2 link-underline-opacity-25 remove-underline-from-links">
            <h4 className="offcanvas-title fw-bold fst-italic" id="offcanvasScrollingLabel">
              Doc Reservation
            </h4>
          </Link>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body d-flex flex-column align-items-between justify-content-between">
          <ul className="list-group list-group-flush text-uppercase navbar-links-group mt-5">
            <Link to="/" className="remove-underline-from-links text-secondary list-group-item fw-bold fs-5 cursor-pointer">Doctors List</Link>
            <Link to="/reservations" className="remove-underline-from-links text-secondary list-group-item fw-bold fs-5 cursor-pointer">My Reservations</Link>
            <Link to="/add-reservation" className="remove-underline-from-links text-secondary list-group-item fw-bold fs-5 cursor-pointer">Add Reservation</Link>
            <Link to="/delete-reservation" className="remove-underline-from-links text-secondary list-group-item fw-bold fs-5 cursor-pointer">Delete Reservation</Link>
            <Link to="/log-in" className="remove-underline-from-links text-secondary list-group-item fw-bold fs-5 cursor-pointer" onClick={submitSignout}>Sign out</Link>
          </ul>

          <footer className="text-lg-start bg-body-tertiary text-muted p-1">
            <ul className="list-unstyled d-flex w-100">
              <li><img className="cursor-pointer" src="https://img.icons8.com/sf-regular/30/facebook-new.png" alt="facebook-new" /></li>
              <li><img className="cursor-pointer mx-2" src="https://img.icons8.com/sf-regular/30/twitter.png" alt="twitter" /></li>
              <li><img className="cursor-pointer" src="https://img.icons8.com/sf-regular/30/instagram-new.png" alt="instagram-new" /></li>
              <li><img className="cursor-pointer mx-2" src="https://img.icons8.com/sf-regular/30/youtube-play.png" alt="youtube-play" /></li>
            </ul>
            <div>
              ©
              {year}
              {'  '}
              All right reserved
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
