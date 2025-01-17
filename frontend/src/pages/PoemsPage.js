import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // For navigation
import supabase from '../supabase'; // Your supabase.js file

function PoemsPage() {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchPoems = async () => {
      const { data, error } = await supabase.from('poems').select('*');
      if (error) {
        console.error('Error fetching poems:', error);
      } else {
        setPoems(data);
      }
    };
    fetchPoems();
  }, []);

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h3" sx={styles.heading}>
        My Poems
      </Typography>
      <Box sx={styles.poemsContainer}>
        {poems.map((poem) => (
          <Box sx={styles.poemCard} key={poem.id}>
            <Typography variant="h6" sx={styles.poemTitle}>
              {poem.title}
            </Typography>
            <Typography variant="body2" sx={styles.feeling}>
              Feeling: {poem.feeling}
            </Typography>
            <Divider sx={styles.divider} />
            <Typography variant="caption" sx={styles.toSection}>
              To: {poem.to}
            </Typography>
            <Link to={`/poems/${poem.id}`}>
              <Button variant="contained" sx={styles.button}>Read More</Button>
            </Link>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FDF6EE', // Beige background
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '40px',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '28px',
    color: '#4A4A4A',
    marginBottom: '20px',
  },
  poemsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // Forces exactly 3 columns
    gap: '20px',
    paddingBottom: '40px',
    width: '100%', // Ensures container takes full width
    maxWidth: '1200px', // Optional: prevents cards from getting too wide on large screens
  },

  poemCard: {
    backgroundColor: '#FDF6EE', // Beige background for the card
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // Floating shadow
    textAlign: 'center',
    width: '300px',
    height: 'auto', // Flexible height
    margin: '0 auto',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Spacing between elements
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
    },
  },
  poemTitle: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '20px',
    color: '#4A4A4A',
    marginBottom: '10px',
    textAlign: 'center',
  },
  feeling: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    color: '#97A97C',
    marginBottom: '15px',
  },
  toSection: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px',
    color: '#4A4A4A',
    marginTop: '10px',
  },
  divider: {
    margin: '10px 0',
    backgroundColor: '#DDE6D5',
  },
  button: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px',
    fontSize: '12px',
    borderRadius: '6px',
    textTransform: 'none',
    fontWeight: 'bold',
    marginTop: '15px',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
};

export default PoemsPage;
