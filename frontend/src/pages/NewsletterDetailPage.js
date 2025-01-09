import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import supabase from '../supabase';

function NewsletterDetailPage() {
  const { newsletterId } = useParams();
  const [newsletter, setNewsletter] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNewsletter = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('newsletters')
        .select('*')
        .eq('id', newsletterId)
        .single();

      if (error) {
        console.error('Error fetching newsletter:', error);
      } else {
        setNewsletter(data);
      }
      setLoading(false);
    };

    fetchNewsletter();
  }, [newsletterId]);

  const handleSubscribeClick = () => {
    navigate('/#NewsletterForm');
    setTimeout(() => {
      const element = document.getElementById('NewsletterForm');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 200);
  };

  if (loading) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h6">Loading...</Typography>
      </Box>
    );
  }

  if (!newsletter) {
    return (
      <Box sx={styles.container}>
        <Typography variant="h6" sx={styles.error}>
          Newsletter not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.paper}>
        <Box sx={styles.accentLine}>
          <span style={styles.leaf}>🍃</span>
          <span style={styles.line}></span>
          <span style={styles.leaf}>🍃</span>
        </Box>
        <Typography variant="h6" sx={styles.title}>
          {newsletter.title}
        </Typography>
        <Typography variant="body2" sx={styles.content}>
          {newsletter.content}
        </Typography>
        <Box sx={styles.ctaContainer}>
          <Button sx={styles.ctaButton} onClick={handleSubscribeClick}>
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
    minHeight: '80vh',
    backgroundColor: '#FDF6EE',
    padding: '20px',
  },
  paper: {
    width: '90%',
    maxWidth: '800px',
    padding: '20px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'left',
    border: '1px solid #DDE6D5',
    overflow: 'hidden',
  },
  accentLine: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '15px',
  },
  line: {
    width: '80px',
    height: '2px',
    backgroundColor: '#97A97C',
    margin: '0 5px',
  },
  leaf: {
    fontSize: '14px',
    color: '#97A97C',
  },
  title: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '20px',
    color: '#4A4A4A',
    marginBottom: '15px',
    textAlign: 'center',
  },
  content: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '12px',
    color: '#4A4A4A',
    lineHeight: 1.6,
    marginBottom: '15px',
    whiteSpace: 'pre-line',
  },
  ctaContainer: {
    textAlign: 'center',
    marginTop: '15px',
  },
  ctaButton: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px',
    fontSize: '10px',
    borderRadius: '6px',
    textTransform: 'none',
    fontWeight: 'bold',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
  error: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    marginTop: '20px',
    fontSize: '14px',
  },
};

export default NewsletterDetailPage;
