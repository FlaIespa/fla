import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import supabase from '../supabase'; // Import Supabase client

function NewsletterDetailPage() {
  const { newsletterId } = useParams(); // Get the dynamic route parameter
  const [newsletter, setNewsletter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsletter = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('newsletters')
        .select('*')
        .eq('id', newsletterId)
        .single(); // Fetch a single newsletter by ID

      if (error) {
        console.error('Error fetching newsletter:', error);
      } else {
        setNewsletter(data);
      }
      setLoading(false);
    };

    fetchNewsletter();
  }, [newsletterId]);

  if (loading) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }

  if (!newsletter) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h4" sx={styles.error}>
          Newsletter not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.paper}>
        {/* Hanging Accent Line */}
        <Box sx={styles.accentLine}>
          <span style={styles.leaf}>🍃</span>
          <span style={styles.line}></span>
          <span style={styles.leaf}>🍃</span>
        </Box>

        {/* Title */}
        <Typography variant="h3" sx={styles.title}>
          {newsletter.title}
        </Typography>

        {/* Content */}
        <Typography variant="body1" sx={styles.content}>
          {newsletter.content}
        </Typography>

        {/* Call-to-Action Button */}
        <Box sx={styles.ctaContainer}>
          <Button sx={styles.ctaButton} href="#newsletter-subscribe">
            Subscribe to the Newsletter
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#FDF6EE', // Background color for the page
    padding: '40px',
  },
  paper: {
    width: '90%',
    maxWidth: '1200px',
    padding: '60px 80px',
    backgroundColor: '#FFFFFF', // White background for the "sheet"
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    textAlign: 'left',
    border: '1px solid #DDE6D5',
    overflow: 'hidden',
  },
  accentLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  line: {
    display: 'inline-block',
    width: '120px',
    height: '2px',
    backgroundColor: '#97A97C',
    margin: '0 10px',
  },
  leaf: {
    fontSize: '18px',
    color: '#97A97C',
  },
  title: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '36px',
    color: '#4A4A4A',
    marginBottom: '30px',
    textAlign: 'center',
    lineHeight: 1.4,
  },
  content: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '18px',
    color: '#4A4A4A',
    lineHeight: 1.8,
    whiteSpace: 'pre-line',
  },
  ctaContainer: {
    marginTop: '40px',
    textAlign: 'center',
  },
  ctaButton: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'none',
    ':hover': {
      backgroundColor: '#7B9464', // Slightly darker sage green on hover
    },
  },
  error: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    marginTop: '40px',
  },
};

export default NewsletterDetailPage;
