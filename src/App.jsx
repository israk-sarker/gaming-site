import React from 'react';

export default function App() {
  const pageStyle = {
    backgroundColor: '#000',
    color: '#fff',
    minHeight: '100vh',
    margin: 0,
    padding: '40px',
    fontFamily: 'serif',
    lineHeight: '1.6'
  };

  return (
    <div style={pageStyle}>
      
      <h1>Israk Sarker</h1>
      
      <p>
        I am a student at the <strong>ITIS "C. Zuccante" in Venice</strong>, currently attending the <strong>4^ INF D</strong> class with a specialization in Informatica.
      </p>

      <p>
        I am deeply interested in computer science, specifically Linux systems and server infrastructure. 
        I manage a personal home lab where I experiment with:
      </p>

      <ul>
        <li>Headless Linux server administration</li>
        <li>Nginx reverse proxy configurations</li>
        <li>Docker containerization and self-hosting services like Nextcloud</li>
        <li>Network infrastructure and security</li>
      </ul>

      <p>
        I believe in the philosophy of learning by breaking things and then fixing them. 
        This website is currently served from my own hardware.
      </p>

      <p><em>Status: System active. Focused on the basics.</em></p>

    </div>
  );
}