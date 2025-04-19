import React from 'react';
import './HeroCard.css';

const HeroCard = () => {
  return (
    <div className="hero-card">
      <div className="card-header">
        <h1>AZARUDHEEN A</h1>
        <h2>AUTOMATION HERO</h2>
      </div>

      <div className="automation-level">
        <span>AUTOMATION LEVEL 8</span>
        <div className="level-bar"><div className="fill" /></div>
      </div>

      <div className="card-content">
        <div className="avatar">
          <img src="/azarudheen-avatar.png" alt="Azarudheen Avatar" />
        </div>

        <div className="details">
          <div className="section">
            <h3>BACKGROUND</h3>
            <p>From mechanical engineering to QA tech pro</p>
          </div>

          <div className="section">
            <h3>WEAPONS</h3>
            <ul>
              <li>Selenium</li>
              <li>Appium</li>
              <li>Robot Framework</li>
              <li>Postman</li>
            </ul>
          </div>

          <div className="section">
            <h3>POWER BOOSTS</h3>
            <ul>
              <li>ISTQB</li>
              <li>Salesforce Admin</li>
              <li>API Testing</li>
              <li>Robot Framework Mentor</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="stats">
        <div><span>Speed</span><div className="bar"><div className="fill speed" /></div></div>
        <div><span>Accuracy</span><div className="bar"><div className="fill accuracy" /></div></div>
        <div><span>Coverage</span><div className="bar"><div className="fill coverage" /></div></div>
      </div>
    </div>
  );
};

export default HeroCard;
