/* eslint-disable */
import { Route, Routes } from 'react-router-dom';
import { AuthData } from './AuthWrapper';
import navigation from './Navigation';

function RenderNavigation() {
  const { user } = AuthData();
  return (
    <Routes>
      { navigation.map((r) => {
        if (r.isPrivate && user.isAuthenticated) {
          return <Route key={Math.floor(Math.random() * 1000)} path={r.path} element={r.element} />;
        } 
        if (!r.isPrivate) {
          return <Route key={Math.floor(Math.random() * 1000)} path={r.path} element={r.element} />;
        } 
        return false;
      })}
    </Routes>
  );
}

export default RenderNavigation;
