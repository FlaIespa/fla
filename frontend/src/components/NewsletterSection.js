import React from 'react';
import { motion } from 'framer-motion'; // For animations
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

function NewsletterSection() {
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      {/* Heading */}
      <Box sx={styles.textContainer}>
        <Typography variant="h4" sx={styles.heading}>
          Unlock Creativity and Stay Inspired
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          Join a vibrant community of explorers, writers, and coders. My
          newsletter delivers curated insights, tools, and resources to spark
          creativity and fuel your journey.
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          Whether you’re looking to stay grounded, discover new ideas, or
          reflect on your growth, this is the place for you. Let’s grow and
          create together!
        </Typography>
      </Box>

      {/* Value Proposition */}
      <Box sx={styles.valueProposition}>
        <Typography variant="h5" sx={styles.highlight}>
          What’s inside:
        </Typography>
        <List sx={styles.bulletPoints}>
          <ListItem>🌿 Weekly inspiration for writing, coding, and exploration.</ListItem>
          <ListItem>🌿 Practical tips to stay balanced and creative.</ListItem>
          <ListItem>🌿 Curated tools and resources for your journey.</ListItem>
          <ListItem>🌿 Thoughtful reflections to inspire your growth.</ListItem>
          <ListItem>🌿 Exclusive access to community conversations.</ListItem>
        </List>
      </Box>

      {/* Quote or Call-to-Action */}
      <Box sx={styles.quoteSection}>
        <Typography variant="body2" sx={styles.quote}>
          "Subscribing to this newsletter feels like a warm conversation with a
          friend – thoughtful, inspiring, and full of life."
        </Typography>
        <Divider sx={styles.divider} />
        <Typography variant="body1" sx={styles.cta}>
          Join today and let’s grow together.
        </Typography>
      </Box>
    </motion.div>
  );
}

const styles = {
  container: {
    padding: '80px 40px',
    backgroundColor: '#FDF6EE', // Light beige background
    borderTop: '2px solid #DDE6D5', // Subtle sage green separator
    borderBottom: '2px solid #DDE6D5',
    textAlign: 'center',
    maxWidth: '900px',
    margin: '0 auto',
  },
  textContainer: {
    marginBottom: '30px',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    color: '#4A4A4A', // Dark gray
    marginBottom: '20px',
  },
  description: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    marginBottom: '20px',
    lineHeight: 1.8,
  },
  valueProposition: {
    marginBottom: '30px',
  },
  highlight: {
    fontFamily: '"Gloria Hallelujah", cursive',
    color: '#97A97C', // Sage green
    marginBottom: '15px',
  },
  bulletPoints: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    marginBottom: '20px',
    lineHeight: 1.6,
  },
  quoteSection: {
    marginTop: '20px',
  },
  quote: {
    fontStyle: 'italic',
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    marginBottom: '10px',
  },
  divider: {
    margin: '20px 0',
    backgroundColor: '#DDE6D5',
  },
  cta: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 'bold',
    color: '#4A4A4A',
    marginTop: '10px',
  },
};

export default NewsletterSection;
