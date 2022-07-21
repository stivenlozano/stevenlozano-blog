import React, { Suspense } from 'react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'
import { AppRoutes }  from './routes';
import {auth} from './firebase';
import {PATHS} from './constants';

const App = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        auth.currentUser?.getIdToken().then(token => !token && navigate(PATHS.POSTS))
      }
    });
  }, [navigate])
  
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <AppRoutes/>
    </Suspense>
  );
}

const Wrapper = () => {
  return (
    <Router>
      <App/>
    </Router>
  );
}

export default Wrapper;
