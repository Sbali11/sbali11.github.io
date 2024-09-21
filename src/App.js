// App.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/font-awesome/css/font-awesome.min.css";
import "./assets/lightbox/css/lightbox.css";
import "./assets/textrotator/simpletextrotator.css";
import "./assets/flexslider/flexslider.css";
import "./css/style.css";
import "./css/animate.css";
import "./css/react.css";

import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import Research from './pages/Research';
import Industry from './pages/Industry';
import Projects from './pages/Projects';
import Extracurricular from './pages/Extracurricular';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
      </Routes>
    </Router>
  );
}

export default App;
