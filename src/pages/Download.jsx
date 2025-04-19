import React from 'react';

const Download = () => (
  <section className="page download">
    <h2>Secure Vault</h2>
    <button onClick={() => window.open('/resume.pdf')}>Download Resume</button>
    <button onClick={() => window.open('/portfolio.pdf')}>Download Portfolio</button>
  </section>
);

export default Download;
