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
      <Typography variant="h4" sx={styles.heading}>
        Join My Creative Journey
      </Typography>
      <Typography variant="body1" sx={styles.description}>
        Weekly thoughts, insights, and inspiration directly to your inbox.
        Let’s grow together, one idea at a time.
      </Typography>

      {/* Divider */}
      <Divider sx={styles.divider} />

      {/* Subtle Quote */}
      <Typography variant="body2" sx={styles.quote}>
        "Every journey begins with a spark of inspiration."
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
    padding: '80px 40px',
    backgroundColor: '#FDF6EE', // Soft beige
    borderTop: '2px solid #DDE6D5',
    textAlign: 'center',
  },
  accentLine: {
    fontSize: '28px', // Decorative icon
    marginBottom: '20px',
    color: '#97A97C', // Sage green
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '32px',
    color: '#4A4A4A',
    marginBottom: '20px',
  },
  description: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '18px',
    color: '#4A4A4A',
    marginBottom: '30px',
    lineHeight: 1.8,
  },
  divider: {
    width: '60px',
    height: '4px',
    backgroundColor: '#97A97C',
    margin: '20px auto',
    borderRadius: '2px',
  },
  quote: {
    fontStyle: 'italic',
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    marginBottom: '30px',
  },
  ctaButton: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'none',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
};

export default NewsletterSection;
