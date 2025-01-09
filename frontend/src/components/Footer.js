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
    padding: '20px 0', // Reduced padding
    borderTop: '1px solid #DDE6D5', // Thinner border
    textAlign: 'center',
  },
  container: {
    maxWidth: '1000px', // Reduced maximum width
    margin: '0 auto',
    padding: '0 20px', // Reduced horizontal padding
  },
  text: {
    fontSize: '12px', // Smaller text size
    color: '#4A4A4A', // Dark gray text
    fontFamily: '"Open Sans", sans-serif', // Clean font for readability
    margin: '0', // No margin
  },
  subtext: {
    fontSize: '10px', // Even smaller subtext
    color: '#4A4A4A', // Dark gray for a softer tone
    fontFamily: '"Gloria Hallelujah", cursive', // Fun font for a personal touch
    marginTop: '5px', // Reduced margin
  },
};

export default Footer;
