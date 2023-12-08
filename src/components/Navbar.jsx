function Navbar() {
    return (
      <div>
        <img src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" />
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            {/* inside of h5 we are going to add brand name */}
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Brand name or image</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            {/* links */}
            <ul className="list-group list-group-flush">
              {/* Add hover effect later base on design */}
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
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