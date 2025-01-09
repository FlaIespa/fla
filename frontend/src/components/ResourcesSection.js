import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { motion } from 'framer-motion';

function ResourcesSection() {
  return (
    <Box id="ResourcesSection" sx={styles.container}>
      {/* Section Heading */}
      <Typography variant="h5" sx={styles.heading}>
        Support and Collaborate
      </Typography>

      {/* Resources Grid */}
      <Box sx={styles.grid}>
        {/* Portfolio */}
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={styles.icon}>💻</Box>
          <Typography variant="h6" sx={styles.cardTitle}>
            Professional Portfolio
          </Typography>
          <Typography variant="body2" sx={styles.cardText}>
            Discover my coding projects and journey.
          </Typography>
          <Link
            href="https://flavia-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.link}
          >
            Visit Portfolio
          </Link>
        </motion.div>

        {/* Zelle */}
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Box sx={styles.icon}>💸</Box>
          <Typography variant="h6" sx={styles.cardTitle}>
            Support via Zelle
          </Typography>
          <Typography variant="body2" sx={styles.cardText}>
            Send contributions directly to:
          </Typography>
          <Typography variant="body2" sx={styles.supportDetail}>
            flavia.iespa@uni.minerva.edu
          </Typography>
        </motion.div>

        {/* Venmo */}
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Box sx={styles.icon}>📱</Box>
          <Typography variant="h6" sx={styles.cardTitle}>
            Support via Venmo
          </Typography>
          <Typography variant="body2" sx={styles.cardText}>
            Contribute with ease using Venmo:
          </Typography>
          <Typography variant="body2" sx={styles.supportDetail}>
            @flaiespa
          </Typography>
        </motion.div>

        {/* Pix */}
        <motion.div
          style={styles.card}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box sx={styles.icon}>🌎</Box>
          <Typography variant="h6" sx={styles.cardTitle}>
            Support via Pix (Brazil)
          </Typography>
          <Typography variant="body2" sx={styles.cardText}>
            Use Pix to support my journey:
          </Typography>
          <Typography variant="body2" sx={styles.supportDetail}>
            flavia.iespa@uni.minerva.edu
          </Typography>
        </motion.div>
      </Box>

      {/* General Call-to-Action */}
      <Typography variant="body2" sx={styles.generalText}>
        If you don’t have access to these options but feel called to contribute, reach me at:
        <br />
        <Link href="mailto:flavia.iespa@uni.minerva.edu" sx={styles.link}>
          flavia.iespa@uni.minerva.edu
        </Link>
      </Typography>

      <Button
        variant="contained"
        sx={styles.ctaButton}
        href="mailto:flavia.iespa@uni.minerva.edu"
      >
        Get in Touch
      </Button>
    </Box>
  );
}

const styles = {
  container: {
    backgroundColor: '#FDF6EE',
    padding: '40px 250px', // Further reduced padding
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '24px', // Further reduced size
    color: '#4A4A4A',
    marginBottom: '20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Smaller cards
    gap: '15px', // Reduced gap
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#97A97C',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Softer shadow
    borderRadius: '10px', // Slightly sharper corners
    padding: '15px', // Reduced padding
    textAlign: 'center',
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    ':hover': {
      transform: 'scale(1.03)',
      backgroundColor: '#F7EAD6',
    },
  },
  icon: {
    fontSize: '24px', // Reduced icon size
    marginBottom: '10px',
    color: '#97A97C',
  },
  cardTitle: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '16px', // Reduced size
    color: '#FFFFFF',
    marginBottom: '8px',
  },
  cardText: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px', // Smaller text
    color: '#FFFFFF',
    marginBottom: '8px',
  },
  supportDetail: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px', // Matching smaller text
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  generalText: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px', // Reduced size
    color: '#4A4A4A',
    marginBottom: '15px',
  },
  link: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  ctaButton: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px', // Smaller button
    fontSize: '10px', // Reduced size
    borderRadius: '6px', // Smaller border radius
    fontWeight: 'bold',
    textTransform: 'none',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
};

export default ResourcesSection;
