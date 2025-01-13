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
      <Typography variant="h6" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="caption" sx={styles.date}>
        {date}
      </Typography>
      <Divider sx={styles.divider} />
      <Typography variant="body2" sx={styles.content}>
        {content}
      </Typography>
      <Button
        variant="contained"
        sx={styles.button}
        href={buttonLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More
      </Button>
    </motion.div>
  );
}

const styles = {
  container: {
    backgroundColor: '#FDF6EE', // Match the theme
    padding: '15px', // Reduced padding
    marginBottom: '15px', // Reduced margin
    borderRadius: '8px', // Smaller border radius
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.1)', // Lighter shadow
    textAlign: 'left',
    width: '600px', // Reduced max width
    margin: '0 auto',
  },
  title: {
    fontFamily: '"Gloria Hallelujah", cursive',
    color: '#4A4A4A',
    marginBottom: '8px',
    fontSize: '18px', // Reduced size
  },
  date: {
    fontFamily: '"Inter", sans-serif',
    color: '#97A97C',
    marginBottom: '8px',
    fontSize: '12px', // Reduced size
  },
  divider: {
    margin: '8px 0',
    backgroundColor: '#DDE6D5',
  },
  content: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    lineHeight: 1.5, // Slightly reduced line height
    marginBottom: '15px',
    fontSize: '12px', // Reduced size
  },
  button: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px', // Smaller button
    fontSize: '10px', // Reduced font size
    borderRadius: '6px', // Smaller border radius
    textTransform: 'none',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
};

export default Newsletter;
