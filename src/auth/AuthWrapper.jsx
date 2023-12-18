/* eslint-disable */
import { useState, createContext, useContext } from 'react';
import RenderNavigation from './RenderNavigation';

const AuthContext = createContext();
const APIURL = 'https://booking-doctor-iqa1.onrender.com/v1/users/login';
export const AuthData = () => useContext(AuthContext);

export function AuthWrapper() {
  const [user, setUser] = useState({
    token: '', userName: '', email: '', errorMsg:'', isAuthenticated: false,
  });

  const login = async (email, password) => {
    const response = await fetch(APIURL, {
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
      })
    }
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      <RenderNavigation />
    </AuthContext.Provider>
  );
}

// Authenticated jamal@gmail.com
