import React from 'react';
import { Button } from '@mui/material';
import { motion } from 'framer-motion'; // Import Framer Motion
import '@fontsource/gloria-hallelujah'; // Header font
import '@fontsource/open-sans'; // Modern sans-serif font

function MainSection() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        when: "beforeChildren", // Animate children after the container
        staggerChildren: 0.3, // Stagger animations for child elements
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      {/* Text Section */}
      <motion.div
        style={styles.textSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
        variants={containerVariant}
      >
        <motion.h2 style={styles.subheading} variants={itemVariant}>
          EXPLORER | WRITER | CODER
        </motion.h2>
        <motion.h1 style={styles.greeting} variants={itemVariant}>
          Hello, I’m Fla!
        </motion.h1>
        <motion.p style={styles.description} variants={itemVariant}>
          Welcome to my cozy corner of creativity and reflection. Inspired by
          the warmth of the sun and the vibrancy of Rio de Janeiro, I aim to
          create a space that feels inviting, thoughtful, and full of life.
          Explore my journey and subscribe to my newsletter for more stories!
        </motion.p>
        <motion.div variants={itemVariant}>
          <Button
            variant="contained"
            style={styles.button}
            href="#newsletter"
          >
            Check Newsletter Section
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center', // Vertically center the content
    justifyContent: 'center', // Horizontally center the content
    height: '100vh', // Full viewport height
    padding: '0 40px', // Add padding for responsiveness
    backgroundColor: '#FDF6EE', // Light beige background
    textAlign: 'center', // Center-align the text
    overflow: 'hidden', // Hide overflow for animations
  },
  textSection: {
    maxWidth: '800px', // Limit text width for readability
  },
  subheading: {
    fontSize: '20px', // Slightly larger subheading
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#97A97C', // Sage green
    marginBottom: '20px',
    fontFamily: '"Open Sans", sans-serif',
  },
  greeting: {
    fontSize: '68px', // Slightly larger greeting for impact
    color: '#4A4A4A', // Dark gray for grounding
    marginBottom: '30px',
    fontFamily: '"Gloria Hallelujah", cursive', // Fun and modern font
  },
  description: {
    fontSize: '22px', // Slightly larger description for readability
    color: '#4A4A4A', // Dark gray
    fontFamily: '"Open Sans", sans-serif', // Modern, clean font
    lineHeight: '1.8', // Increased line height for readability
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#97A97C', // Sage green button
    color: '#FFFFFF',
    padding: '16px 32px', // Larger button for emphasis
    fontSize: '18px', // Slightly larger font size for the button
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 'bold',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    transition: 'background-color 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#7B9464', // Slightly darker sage green on hover
    },
  },
};

export default MainSection;
