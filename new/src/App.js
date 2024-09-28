import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import SignInSignUp from './pages/SigninSignup';
import './App.css';

function App() {
  return (
    <Router> {/* Ensure Router wraps all the components using React Router */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInSignUp />} />
        </Routes>
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
