import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Benefits from './pages/Benefits';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing.js';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Features />
      <Benefits />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;