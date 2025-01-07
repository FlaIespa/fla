import React from 'react';
import { Button } from '@mui/material';
import '@fontsource/gloria-hallelujah'; // Header font
import '@fontsource/open-sans'; // Modern sans-serif font

function MainPage() {
  return (
    <div style={styles.container}>
      {/* Left Section */}
      <div style={styles.leftSection}>
        <h2 style={styles.subheading}>EXPLORER | WRITER | CODER</h2>
        <h1 style={styles.greeting}>Hello, I’m Fla!</h1>
        <p style={styles.description}>
          Welcome to my cozy corner of creativity and reflection. Inspired by the warmth of the sun and the vibrancy of Rio de Janeiro, I aim to create a space that feels inviting, thoughtful, and full of life. Explore my journey and subscribe to my newsletter for more stories!
        </p>
        <Button
          variant="contained"
          style={styles.button}
          href="#newsletter"
        >
          Check Newsletter Section
        </Button>
      </div>

      {/* Right Section */}
      <div style={styles.rightSection}>
        {/* Overlayed Personal Image */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align to the left
    minHeight: '100vh',
    padding: '0 60px', // Shift text to the left by reducing the right padding
    backgroundColor: '#FFF4E0', // Warm beige background for reflection
  },
  leftSection: {
    width: '50%',
    zIndex: '2', // Ensure it stays above the background
    paddingLeft: '40px', // Adjusted padding for more left shift
  },
  subheading: {
    fontSize: '16px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#FF8C42', // Warm orange
    marginBottom: '15px',
    fontFamily: '"Open Sans", sans-serif',
  },
  greeting: {
    fontSize: '64px', // Increased font size for more prominence
    color: '#5A3E36', // Warm brown for grounding
    marginBottom: '30px',
    fontFamily: '"Gloria Hallelujah", cursive', // Fun and modern font
  },
  description: {
    fontSize: '20px', // Adjusted for better readability
    color: '#5A3E36',
    fontFamily: '"Open Sans", sans-serif', // Modern, clean font
    lineHeight: '1.6', // Increased line height for readability
    marginBottom: '40px',
    maxWidth: '550px', // Limit the width for readability
  },
  button: {
    backgroundColor: '#F4A261', // Warm orange button
    color: '#FFFFFF',
    padding: '15px 30px', // Larger button for a modern look
    fontSize: '16px',
    borderRadius: '8px',
    textTransform: 'none',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
    ':hover': {
      backgroundColor: '#E07A5F', // Slightly darker on hover
    },
  },
  rightSection: {
    width: '50%',
    position: 'relative',
    backgroundImage: 'url("/images/background.jpg")', // Path to background image
    backgroundSize: 'cover',
    backgroundPosition: 'center', // Centered background image
    backgroundRepeat: 'no-repeat',
    height: '100vh', // Full height of the page
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default MainPage;
