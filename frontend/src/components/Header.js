import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll'; // Import for smooth scrolling
import { useNavigate } from 'react-router-dom';
import '@fontsource/gloria-hallelujah'; // Funky font for the name
import '@fontsource/open-sans'; // Clean font for navigation

function Header() {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <header style={styles.header}>
      <div style={styles.topBar}>
        <p style={styles.topBarText}>
          🌿 Everyone you see, you say to them, "Love me."
        </p>
      </div>
      <div style={styles.container}>
        <h1
          style={styles.logoText}
          onClick={() => navigate('/')} // Navigate to home page
        >
          Fla Iespa
        </h1>
        <nav style={styles.nav}>
          <ScrollLink
            to="MainSection"
            smooth={true}
            duration={800}
            offset={-70} // Adjust offset for header height
            style={styles.navLink}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="ArtSection"
            smooth={true}
            duration={800}
            offset={-70}
            style={styles.navLink}
          >
            Art
          </ScrollLink>
          <ScrollLink
            to="NewsletterSection"
            smooth={true}
            duration={800}
            offset={-70}
            style={styles.navLink}
          >
            Newsletter
          </ScrollLink>
          <ScrollLink
            to="ResourcesSection"
            smooth={true}
            duration={800}
            offset={-70}
            style={styles.navLink}
          >
            Resources
          </ScrollLink>
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
    cursor: 'pointer', // Add pointer cursor for interactivity
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
    cursor: 'pointer', // Add pointer cursor for interactivity
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
