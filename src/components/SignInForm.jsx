import React from 'react';
import {
  Link,
} from 'react-router-dom';

function SignInForm() {
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
        <span className="fs-6">Sign-up </span>
        <Link to="/sign-up">Link</Link>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default SignInForm;
