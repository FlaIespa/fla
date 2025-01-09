import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Box, Typography, Button, Divider } from '@mui/material';

function NewsletterSection() {
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative Accent Line */}
      <Box sx={styles.accentLine}>
        🌿
      </Box>

      {/* Heading and Description */}
      <Box sx={styles.textContainer}>
        <Typography variant="h5" sx={styles.heading}>
          Join My Creative Journey
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          I've always wanted to have my own blog. After multiple attempts with Wix years ago, I now have some technical knowledge to build one of those myself.
          My own space for exploring design, coding, and most importantly, the artist in me. If you are interested in participating in this search with me,
          you are more than welcome.
        </Typography>
      </Box>

      {/* Divider */}
      <Divider sx={styles.divider} />

      {/* Subtle Quote */}
      <Typography variant="body2" sx={styles.quote}>
        "Be yourself; everyone else is already taken." - Oscar Wilde
      </Typography>

      {/* Call-to-Action Button */}
      <Button
        variant="contained"
        style={styles.ctaButton}
        href="/newsletters"
      >
        Explore Newsletters
      </Button>
    </motion.div>
  );
}

const styles = {
  container: {
    padding: '40px 20px', // Reduced padding
    backgroundColor: '#FDF6EE', // Soft beige
    borderTop: '2px solid #DDE6D5',
    textAlign: 'center',
  },
  accentLine: {
    fontSize: '20px', // Decorative icon
    marginBottom: '10px',
    color: '#97A97C', // Sage green
  },
  textContainer: {
    maxWidth: '600px', // Limit the width of the text to 600px
    margin: '0 auto', // Center the container horizontally
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '24px', // Reduced font size
    color: '#4A4A4A',
    marginBottom: '10px',
  },
  description: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px', // Reduced font size
    color: '#4A4A4A',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  divider: {
    width: '40px', // Reduced width
    height: '3px',
    backgroundColor: '#97A97C',
    margin: '10px auto',
    borderRadius: '2px',
  },
  quote: {
    fontStyle: 'italic',
    fontFamily: '"Inter", sans-serif',
    fontSize: '10px', // Reduced font size
    color: '#4A4A4A',
    marginBottom: '20px',
  },
  ctaButton: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px', // Reduced padding
    fontSize: '14px', // Reduced font size
    borderRadius: '6px',
    fontWeight: 'bold',
    textTransform: 'none',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
};

export default NewsletterSection;
