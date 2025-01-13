import React, { useEffect, useState } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import supabase from '../supabase'; // Your supabase.js file
import { useParams } from 'react-router-dom'; // To get the poem id from URL

function PoemDetailsPage() {
  const [poem, setPoem] = useState(null);
  const { id } = useParams(); // Get the poem ID from URL

  useEffect(() => {
    const fetchPoem = async () => {
      const { data, error } = await supabase.from('poems').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching poem:', error);
      } else {
        setPoem(data);
      }
    };
    fetchPoem();
  }, [id]);

  if (!poem) return <Typography>Loading...</Typography>; // Loading state

  return (
    <Box sx={styles.container}>
      <Typography variant="h3" sx={styles.heading}>
        {poem.title}
      </Typography>
      <Divider sx={styles.divider} />
      <Typography variant="body1" sx={styles.poemContent}>
        {poem.content}
      </Typography>
    </Box>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#FDF6EE',
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
  poemContent: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    color: '#4A4A4A',
    lineHeight: '1.6',
    whiteSpace: 'pre-line', // Ensures line breaks are preserved
  },
  divider: {
    margin: '15px 0',
    backgroundColor: '#DDE6D5',
  },
};

export default PoemDetailsPage;
