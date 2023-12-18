/* eslint-disable import/no-cycle */
import SignInForm from '../components/SignInForm';

function LoginPage() {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={backgroundStyle}>
      <div className="p-3 d-flex flex-column justify-content-center align-items-center bg-white rounded-2">
        <h1 className="text-dark">Log-in Form</h1>
        <SignInForm />
      </div>
    </div>
  );
}

export default LoginPage;
