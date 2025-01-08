import React from 'react';
import { Button, Box } from '@mui/material';
import Lottie from 'react-lottie';
import plantsAnimation from '../assets/animations/plants.json';
import { motion } from 'framer-motion';
import '@fontsource/gloria-hallelujah';
import '@fontsource/open-sans';
import { Link } from 'react-router-dom'; // Import Link from React Router

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

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: plantsAnimation,
    rendererSettings: {
      preserveAspectRatio: 'none', // Ensure animation scales properly
    },
  };

  return (
    <motion.div
      style={styles.container}
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <Box style={styles.contentWrapper}>
        {/* Left Section: Text */}
        <motion.div
          style={styles.textSection}
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
        >
          <motion.h2 style={styles.subheading} variants={itemVariant}>
            EXPLORER | WRITER | CODER
          </motion.h2>
          <motion.h1 style={styles.greeting} variants={itemVariant}>
            Hello, I’m Fla!
          </motion.h1>
          <motion.p style={styles.description} variants={itemVariant}>
            Welcome to my cozy corner of reflection. This is chance for me to share what 
            is alive for me for me, how it is a culmination of my life so far and plans for the future. 
            It's a little blog if blogs still existed. 
            After a CS Degree, it's my chance to let the artist, spiritual being come to life. 
            Welcome to a little corner of my soul. 
          </motion.p>
          <motion.div variants={itemVariant}>
            <Button
              variant="contained"
              style={styles.button}
              component={Link}
              to="/newsletters"
            >
              More yapping on me
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Section: Plant Animation */}
        <motion.div
          style={styles.animationContainer}
          variants={itemVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% in view
        >
          <Lottie options={lottieOptions} height="100%" width="100%" />
        </motion.div>
      </Box>
    </motion.div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#FDF6EE',
    overflow: 'hidden', // Hide overflow for animations
  },
  contentWrapper: {
    display: 'flex',
    maxWidth: '1400px', // Increase the maximum width for the entire section
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around', // Provide more balanced spacing between text and animation
    gap: '20px', // Add spacing between the two columns
    height: '100%', // Ensure the height is consistent with the parent container
    padding: '0 40px', // Add padding consistent with the header
  },
  textSection: {
    flex: 1,
    paddingRight: '20px',
  },
  animationContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    width: '100%',
    height: '100%',
  },
  subheading: {
    fontSize: '20px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: '#97A97C', // Sage green
    marginBottom: '20px',
    fontFamily: '"Open Sans", sans-serif',
  },
  greeting: {
    fontSize: '68px',
    color: '#4A4A4A',
    marginBottom: '30px',
    fontFamily: '"Gloria Hallelujah", cursive',
  },
  description: {
    fontSize: '22px',
    color: '#4A4A4A',
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  button: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '16px 32px',
    fontSize: '18px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 'bold',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default MainSection;
