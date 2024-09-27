import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features-section" id="features">
      <h2>Features That Keep You Ahead</h2>
      <div className="feature-blocks">
        <div className="feature-block">
          <h3>Real-Time Heart Rate Monitoring</h3>
          <p>Track your heart rate in real-time with precision sensors that adjust based on your activity levels.</p>
        </div>
        <div className="feature-block">
          <h3>Sleep Analysis</h3>
          <p>Analyze your sleep patterns and get insights into deep sleep, REM sleep, and awake time.</p>
        </div>
        <div className="feature-block">
          <h3>Multi-Sport Tracking</h3>
          <p>Choose from a range of workout modes such as running, cycling, swimming, and weightlifting.</p>
        </div>
        <div className="feature-block">
          <h3>Built-In GPS</h3>
          <p>Track your outdoor runs, hikes, and cycling routes without needing to carry your phone.</p>
        </div>
        <div className="feature-block">
          <h3>Smart Notifications</h3>
          <p>Get alerts for calls, messages, and app notifications directly on your wrist.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;