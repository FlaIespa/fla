import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Newsletter({ title, date, content, buttonLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
      style={styles.container}
    >
      <Typography variant="h5" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="subtitle2" sx={styles.date}>
        {date}
      </Typography>
      <Divider sx={styles.divider} />
      <Typography variant="body1" sx={styles.content}>
        {content}
      </Typography>
      <Button
        variant="contained"
        sx={styles.button}
        href={buttonLink} // Use the buttonLink prop to dynamically navigate
        target="_blank" // Open the link in a new tab (optional)
        rel="noopener noreferrer" // For security
      >
        Read More
      </Button>
    </motion.div>
  );
}

const styles = {
  container: {
    backgroundColor: '#FDF6EE', // Match the theme
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    textAlign: 'left',
    maxWidth: '800px',
    margin: '0 auto', // Center the card on the page
  },
  title: {
    fontFamily: '"Gloria Hallelujah", cursive',
    color: '#4A4A4A', // Dark gray
    marginBottom: '10px',
  },
  date: {
    fontFamily: '"Inter", sans-serif',
    color: '#97A97C', // Sage green
    marginBottom: '10px',
  },
  divider: {
    margin: '10px 0',
    backgroundColor: '#DDE6D5',
  },
  content: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    lineHeight: 1.8,
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#97A97C', // Sage green button
    color: '#FFFFFF',
    padding: '10px 20px',
    fontSize: '14px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#7B9464', // Slightly darker sage green on hover
    },
  },
};

export default Newsletter;
