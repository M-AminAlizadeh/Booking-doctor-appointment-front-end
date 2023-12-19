import {
  useState, createContext, useContext, useEffect, useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import RenderNavigation from './RenderNavigation';

const AuthContext = createContext();
const APIURL = 'https://booking-doctor-iqa1.onrender.com/v1/users/';
export const AuthData = () => useContext(AuthContext);

export function AuthWrapper() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    token: '', userName: '', email: '', errorMsg: '', isAuthenticated: false,
  });

  useEffect(() => {
    const storedToken = window.sessionStorage.getItem('APITOKEN');
    if (storedToken) {
      setUser((prevUser) => ({
        ...prevUser,
        isAuthenticated: true,
      }));
    } else {
      navigate('/log-in');
    }
  }, [navigate]);

  const login = async (email, password) => {
    const response = await fetch(`${APIURL}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      setUser({
        token: responseData.token,
        userName: responseData.user_details.name,
        email: responseData.user_details.email,
        isAuthenticated: true,
      });
    } else {
      const errorData = await response.json();
      setUser({
        token: '',
        userName: '',
        email: '',
        errorMsg: errorData,
        isAuthenticated: false,
      });
    }
  };

  const signup = async (name, email, password) => {
    const response = await fetch(`${APIURL}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    if (response.ok) {
      const responseData = await response.json();
      setUser({
        token: responseData.token,
        userName: responseData.user_details.name,
        email: responseData.user_details.email,
        isAuthenticated: true,
      });
    } else {
      const errorData = await response.json();
      setUser({
        token: '',
        userName: '',
        email: '',
        errorMsg: errorData,
        isAuthenticated: false,
      });
    }
  };

  const signout = () => {
    setUser({
      token: '',
      userName: '',
      email: '',
      errorMsg: '',
      isAuthenticated: false,
    });
    window.sessionStorage.clear();
  };

  const contextValue = useMemo(
    () => ({
      user,
      login,
      signup,
      signout,
    }),
    [user, login, signup, signout],
  );

  return (
    <AuthContext.Provider value={contextValue}>
      <RenderNavigation />
    </AuthContext.Provider>
  );
}

// Authenticated jamal@gmail.com
