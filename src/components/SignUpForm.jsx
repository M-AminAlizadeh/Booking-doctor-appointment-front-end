import React from 'react';
import {
  Link,
} from 'react-router-dom';

function SignUpForm() {
  return (
    <form className="p-3 bg-white rounded-2">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="usernameHelp"
            required
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
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
          />
        </label>
      </div>

      <div className="mb-3 form-check">
        <label className="form-check-label" htmlFor="exampleCheck1">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          Remember me
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
