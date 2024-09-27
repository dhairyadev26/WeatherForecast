import React from "react";
import Spline from '@splinetool/react-spline';
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="main-content">
        <div className="text-section">
          <h1>Track. Improve. Thrive.</h1>
          <p>
            Elevate your fitness journey with our cutting-edge wearable fitness tracker.
          </p>
          <button className="hero-button">Learn More</button>
        </div>
        
          <Spline scene="https://prod.spline.design/bm6K2SsknLf7gSvI/scene.splinecode" />
       
      </div>
    </div>
  );
}

export default Home;
