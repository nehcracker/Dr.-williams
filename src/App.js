import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.scss';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;

