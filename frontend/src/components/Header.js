import React from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling
import { Link } from 'react-router-dom'; // For routing to other pages
import '@fontsource/gloria-hallelujah';
import '@fontsource/open-sans';

function Header() {
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
          onClick={() => window.location.href = '/'} // Direct navigation on logo click
        >
          Fla Iespa
        </h1>
        <nav style={styles.nav}>
          {/* ScrollLink for smooth scrolling */}
          <ScrollLink to="MainSection" smooth duration={800} offset={-50} style={styles.navLink}>
            About
          </ScrollLink>
          <ScrollLink to="ArtSection" smooth duration={800} offset={-50} style={styles.navLink}>
            Art
          </ScrollLink>
          <Link to="/newsletters" style={styles.navLink}>
            Newsletters
          </Link>
          <ScrollLink to="ResourcesSection" smooth duration={800} offset={-50} style={styles.navLink}>
            Resources
          </ScrollLink>
          {/* Link for routing to Poems page */}
          <Link to="/poems" style={styles.navLink}>
            Poems
          </Link>
        </nav>
      </div>
      <div style={styles.separator}></div>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#FDF6EE',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  topBar: {
    backgroundColor: '#DDE6D5',
    padding: '3px 0', // Further reduced padding
    textAlign: 'center',
  },
  topBarText: {
    fontSize: '10px', // Smaller text size
    color: '#4A4A4A',
    fontFamily: '"Open Sans", sans-serif',
  },
  container: {
    maxWidth: '1100px', // Narrower container width
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 15px', // Reduced padding
  },
  logoText: {
    fontSize: '28px', // Smaller font size for logo
    color: '#4A4A4A',
    fontFamily: '"Gloria Hallelujah", cursive',
    margin: 0,
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    gap: '15px', // Closer spacing between navigation links
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  navLink: {
    textDecoration: 'none',
    color: '#4A4A4A',
    fontSize: '12px', // Reduced font size for links
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '500',
    textTransform: 'capitalize',
    padding: '4px 8px', // Smaller padding for links
    borderRadius: '4px',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer',
  },
  separator: {
    height: '1px', // Thinner separator
    backgroundColor: '#DDE6D5',
    marginTop: '3px',
  },
};

export default Header;
