import React from 'react';
import { Link } from '@mui/material';
import '@fontsource/gloria-hallelujah'; // Funky font for the name
import '@fontsource/open-sans'; // Clean font for navigation

function Header() {
  const navLinks = ["about", "newsletter", "resources"];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <h1 style={styles.logoText}>
          Fla Iespa
        </h1>
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
    </header>
  );
}const styles = {
  header: {
    width: '100%',
    backgroundColor: '#FFF4E0', // Warm beige background
    padding: '20px 0', // Adjusted padding for alignment
    borderBottom: '2px solid #F4A261', // Terracotta orange border
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },
  container: {
    maxWidth: '1200px', // Match the MainPage layout width
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between', // Spread the logo and navigation
    alignItems: 'center',
    padding: '0 60px', // Same padding as MainPage
  },
  logoText: {
    fontSize: '48px',
    color: '#5A3E36', // Warm brown
    fontFamily: '"Gloria Hallelujah", cursive',
    margin: 0,
  },
  nav: {
    display: 'flex',
    gap: '30px', // Spacing between navigation links
  },
  navLink: {
    textDecoration: 'none',
    color: '#5A3E36',
    fontSize: '20px',
    fontFamily: '"Open Sans", sans-serif',
    fontWeight: '600',
    textTransform: 'capitalize',
    padding: '10px 15px',
    borderRadius: '8px',
    transition: 'color 0.3s ease, background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#FFF4E0',
      color: '#FFF8E1',
    },
  },
};

export default Header;
