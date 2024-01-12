import { useState, useEffect } from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';
import { AuthData } from '../auth/AuthWrapper';

function SignUpForm() {
  const navigate = useNavigate();
  const { user, signup } = AuthData();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsgTitle, setErrorMsgTitle] = useState(null);

  useEffect(() => {
    if (user.isAuthenticated) {
      window.sessionStorage.setItem('APITOKEN', user.token);
      navigate('/');
    } else {
      setErrorMsgTitle(user.errorMsg.error);
      navigate('/sign-up');
    }
  }, [user.isAuthenticated, user.token, user.errorMsg, navigate]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup(username, email, password);
  };
  return (
    <form className="p-3 bg-white rounded-2" onSubmit={handleSubmit}>
      {errorMsgTitle ? (
        <div className="alert alert-danger" role="alert">
          {errorMsgTitle}
        </div>
      ) : null}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            required
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
          <input
            type="password"
            className="form-control w-100"
            id="exampleInputPassword1"
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>

      <div className="mb-3 alert alert-warning">
        <Link to="/log-in"><span className="fs-6">Log-in </span></Link>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SignUpForm;
