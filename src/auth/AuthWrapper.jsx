/* eslint-disable */
import { useState, createContext, useContext, useEffect } from 'react';
import RenderNavigation from './RenderNavigation';
import {
  useNavigate,
} from 'react-router-dom';

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
      setUser(prevUser => ({
        ...prevUser,
        isAuthenticated: true,
      }));
    } else {
      navigate('/log-in')
    }
  }, []);

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
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, signout }}>
      <RenderNavigation />
    </AuthContext.Provider>
  );
}

// Authenticated jamal@gmail.com
