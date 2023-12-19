import { useState, useEffect } from 'react';
import {
  Link, useNavigate,
} from 'react-router-dom';
import { AuthData } from '../auth/AuthWrapper';

function SignInForm() {
  const navigate = useNavigate();
  const { user, login } = AuthData();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsgTitle, setErrorMsgTitle] = useState(null);

  useEffect(() => {
    if (user.isAuthenticated) {
      window.sessionStorage.setItem('APITOKEN', user.token);
      navigate('/');
    } else if (user.errorMsg) {
      setErrorMsgTitle(user.errorMsg.error);
      navigate('/log-in');
    }
  }, [user.isAuthenticated, user.token, user.errorMsg, navigate]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="p-3 bg-white rounded-2" onSubmit={handleSubmit}>
      {errorMsgTitle ? (
        <div className="alert alert-danger" role="alert">
          {errorMsgTitle}
        </div>
      ) : null}
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">
          Email address
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
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
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>
      <div className="mb-3 alert alert-warning">
        <Link to="/sign-up"><span className="fs-6">Sign-up </span></Link>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SignInForm;
