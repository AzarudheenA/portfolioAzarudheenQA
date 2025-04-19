import React from 'react';

const About = () => (
  <section className="page about">
    <h2>About Me — Stat Sheet & Origin Story</h2>
    <div className="character-card">
      <h3>Azarudheen A</h3>
      <p>Automation Level: 8</p>
      <div className="xp-bar"><div className="fill" /></div>
      <p>Origin: Mechanical Engineer turned QA Automation Expert</p>

      <h4>Weapons (Languages & Frameworks)</h4>
      <ul>
        <li>Selenium</li>
        <li>Appium</li>
        <li>Robot Framework</li>
      </ul>

      <h4>Power Boosts (Certifications)</h4>
      <ul>
        <li>ISTQB</li>
        <li>Salesforce Admin</li>
        <li>API Testing</li>
      </ul>
    </div>
  </section>
);

export default About;
