import React from 'react';
import { Link } from '@mui/material';
import '@fontsource/gloria-hallelujah'; // Funky font for the name
import '@fontsource/open-sans'; // Clean font for navigation

function Header() {
  const navLinks = ["about", "newsletter", "art", "resources"];

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <p style={styles.topBarText}>
          🌿 Simplify and elevate your life with creativity and reflection
        </p>
      </div>
      <div style={styles.container}>
        <h1 style={styles.logoText}>Fla Iespa</h1>
        <nav style={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              style={styles.navLink}
            >
              {link}
            </Link>
          ))}
        </nav>
      </div>
      <div style={styles.separator}></div>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#FDF6EE', // Light beige background
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow for depth
  },
  topBar: {
    backgroundColor: '#DDE6D5', // Sage green bar
    padding: '10px 0',
    textAlign: 'center',
  },
  topBarText: {
    fontSize: '14px',
    color: '#4A4A4A', // Dark gray text
    fontFamily: '"Open Sans", sans-serif',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between', // Spread logo and navigation
    alignItems: 'center',
    padding: '20px 40px', // Adjusted padding
  },
  logoText: {
    fontSize: '48px',
    color: '#4A4A4A', // Dark gray for logo
    fontFamily: '"Gloria Hallelujah", cursive', // Personal and fun font
    margin: 0,
    flexShrink: 0, // Prevent logo from shrinking
    textAlign: 'left', // Explicitly align text to the left
  },
  nav: {
    display: 'flex',
    gap: '40px', // Wider spacing between navigation links
    flexGrow: 1, // Push navigation to fill remaining space
    justifyContent: 'flex-end', // Align links to the right
  },
  navLink: {
    textDecoration: 'none',
    color: '#4A4A4A', // Dark gray for links
    fontSize: '18px',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '500',
    textTransform: 'capitalize',
    padding: '10px 20px', // Add padding for a button-like feel
    borderRadius: '8px', // Rounded edges for a friendly design
    transition: 'color 0.3s ease, background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#DDE6D5', // Sage green on hover
      color: '#FDF6EE', // Light beige text for contrast
    },
  },
  separator: {
    height: '3px',
    backgroundColor: '#DDE6D5', // Sage green horizontal line
    marginTop: '10px',
  },
};

export default Header;
