import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="mx-5 my-2">
      <img src="https://img.icons8.com/clouds/100/menu.png" alt="menu--v1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" className="cursor-pointer" />
      <div className="offcanvas offcanvas-start show" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
          <Link to="/home" className="link-secondary link-offset-2 link-underline-opacity-25">
            <h4 className="offcanvas-title fw-bold fst-italic" id="offcanvasScrollingLabel">
              Doc Reservation
            </h4>
          </Link>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          {/* links */}
          <ul className="list-group list-group-flush text-uppercase navbar-links-group">
            <li className="list-group-item fw-bold fs-5">
              <Link to="/home" className="remove-underline-from-links text-secondary">Doctors List</Link>
            </li>
            <li className="list-group-item fw-bold fs-5">
              <Link to="/home" className="remove-underline-from-links text-secondary">My Reservations</Link>
            </li>
          </ul>
          {/* Footer */}
          <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            {/* social media links */}
            <ul className="list-unstyled d-flex justify-content-center w-100 ">
              <li><img className="cursor-pointer mx-2 cursor-pointer" src="https://img.icons8.com/sf-regular/30/facebook-new.png" alt="facebook-new" /></li>
              <li><img className="cursor-pointer mx-2 cursor-pointer" src="https://img.icons8.com/sf-regular/30/twitter.png" alt="twitter" /></li>
              <li><img className="cursor-pointer mx-2 cursor-pointer" src="https://img.icons8.com/sf-regular/30/instagram-new.png" alt="instagram-new" /></li>
              <li><img className="cursor-pointer mx-2 cursor-pointer" src="https://img.icons8.com/sf-regular/30/youtube-play.png" alt="youtube-play" /></li>
            </ul>
            {/* Copyright */}
            <div
              className="text-center p-4"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
            >
              © 2023 Copyright
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
