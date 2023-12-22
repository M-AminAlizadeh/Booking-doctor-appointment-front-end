import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
  const backgroundStyle = {
    backgroundImage: 'url("https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=1380&t=st=1701877546~exp=1701878146~hmac=22799e29f5e4cd0a08101a589e4030d55a55ad9925ae4f87f7c18c1d8093d851")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100" style={backgroundStyle}>
      <div className="p-3 d-flex flex-column justify-content-center align-items-center bg-white rounded-2">
        <h1 className="text-dark">Sign-up Form</h1>
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUpPage;
