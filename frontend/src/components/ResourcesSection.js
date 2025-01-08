import React from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import { motion } from 'framer-motion';

function ResourcesSection() {
  return (
    <Box id="ResourcesSection" sx={styles.container}>
      {/* Section Heading */}
      <Typography variant="h4" sx={styles.heading}>
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
          <Typography variant="body1" sx={styles.cardText}>
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
          <Typography variant="body1" sx={styles.cardText}>
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
          <Typography variant="body1" sx={styles.cardText}>
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
          <Typography variant="body1" sx={styles.cardText}>
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
    backgroundColor: '#FDF6EE', // Match overall theme
    padding: '80px 40px',
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '36px',
    color: '#4A4A4A',
    marginBottom: '50px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    marginBottom: '50px',
  },
  card: {
    backgroundColor: '#FAF2E8', // Soft muted beige
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Lighter shadow
    borderRadius: '16px',
    padding: '30px',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out, background-color 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#F7EAD6', // Slightly darker beige on hover
    },
  },
  icon: {
    fontSize: '48px',
    marginBottom: '20px',
    color: '#97A97C', // Sage green for icons
  },
  cardTitle: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '22px',
    color: '#4A4A4A',
    marginBottom: '15px',
  },
  cardText: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '16px',
    color: '#4A4A4A',
    marginBottom: '15px',
  },
  supportDetail: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    color: '#4A4A4A',
    fontWeight: 'bold',
  },
  generalText: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '16px',
    color: '#4A4A4A',
    marginBottom: '30px',
  },
  link: {
    color: '#97A97C',
    fontWeight: 'bold',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
  ctaButton: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '14px 28px',
    fontSize: '18px',
    borderRadius: '12px',
    fontWeight: 'bold',
    textTransform: 'none',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
};

export default ResourcesSection;
