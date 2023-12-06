import SignIn from '../components/SignIn';

const LoginPage = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={backgroundStyle}>
      <SignIn />
    </div>
  );
};

export default LoginPage;
