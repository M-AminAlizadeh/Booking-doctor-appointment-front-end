import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper />
    </BrowserRouter>
  );
}
export default App;
