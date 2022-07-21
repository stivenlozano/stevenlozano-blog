import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRoutes }  from './routes';
import './App.css';

const App = () => {
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
