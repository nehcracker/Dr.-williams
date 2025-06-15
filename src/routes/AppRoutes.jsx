import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import SubmitProject from '../pages/SubmitProject';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/submit-project" element={<SubmitProject />} />
      
    </Routes>
  );
};

export default AppRoutes;
