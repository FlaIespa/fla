import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          &copy; 2025 Flávia da Silva Iespa. All rights reserved.
        </p>
        <p style={styles.subtext}>
          Designed with warmth and creativity. ✨
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    width: '100%',
    background: '#FDF6EE', // Light beige background
    padding: '40px 0', // Generous padding for better spacing
    borderTop: '2px solid #DDE6D5', // Sage green border to separate the footer
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px', // Keep content centered and aligned with the rest of the site
    margin: '0 auto',
    padding: '0 60px', // Match the same padding as the header and main content
  },
  text: {
    fontSize: '18px',
    color: '#4A4A4A', // Dark gray text for readability
    fontFamily: '"Open Sans", sans-serif', // Clean font for readability
    margin: 0,
  },
  subtext: {
    fontSize: '16px',
    color: '#4A4A4A', // Dark gray for a softer tone
    fontFamily: '"Gloria Hallelujah", cursive', // Fun font for a personal touch
    marginTop: '10px',
  },
};

export default Footer;
