import React from 'react';
import { Button, Box } from '@mui/material';
import Lottie from 'react-lottie';
import plantsAnimation from '../assets/animations/plants.json';
import { motion } from 'framer-motion';
import '@fontsource/gloria-hallelujah';
import '@fontsource/open-sans';
import { Link } from 'react-router-dom';

function MainSection() {
  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1,
        when: 'beforeChildren',
        staggerChildren: 0.3,
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
      preserveAspectRatio: 'none',
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
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2 style={styles.subheading} variants={itemVariant}>
            EXPLORER | WRITER | CODER
          </motion.h2>
          <motion.h1 style={styles.greeting} variants={itemVariant}>
            Hello, I’m Fla!
          </motion.h1>
          <motion.p style={styles.description} variants={itemVariant}>
            Welcome to my cozy corner of reflection. This is a chance for me to share what’s alive
            for me, how it is a culmination of my life so far, and plans for the future. Welcome to
            a little corner of my soul.
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
          viewport={{ once: true, amount: 0.5 }}
        >
        <Lottie options={lottieOptions} height={750} width={450}></Lottie>
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
    height: '80vh', // Reduced height
    backgroundColor: '#FDF6EE',
    overflow: 'hidden',
  },
  contentWrapper: {
    display: 'flex',
    maxWidth: '1100px', // Reduced max width
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: '10px', // Reduced gap between text and animation
    padding: '0 20px',
  },
  textSection: {
    flex: 1,
    paddingRight: '10px', // Reduced padding
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
    fontSize: '12px', // Smaller subheading
    fontWeight: '600',
    letterSpacing: '1.5px',
    color: '#97A97C',
    marginBottom: '10px',
    fontFamily: '"Open Sans", sans-serif',
  },
  greeting: {
    fontSize: '32px', // Smaller greeting text
    color: '#4A4A4A',
    marginBottom: '20px',
    fontFamily: '"Gloria Hallelujah", cursive',
  },
  description: {
    fontSize: '14px', // Smaller paragraph font size
    color: '#4A4A4A',
    fontFamily: '"Open Sans", sans-serif',
    lineHeight: 1.6, // Reduced line height
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px', // Smaller padding
    fontSize: '12px', // Reduced font size
    borderRadius: '4px',
    textTransform: 'none',
    fontWeight: '500',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default MainSection;
