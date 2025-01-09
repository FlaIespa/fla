import React, { useState } from 'react';
import supabase from '../supabase'; // Import Supabase client
import { TextField, Button, Typography, Box } from '@mui/material';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // 'success' or 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage('');
    setStatus('');

    const { data, error } = await supabase
      .from('subscriptions')
      .insert([{ email }])
      .single();

    if (error) {
      setMessage('Oops! Something went wrong or email already exists.');
      setStatus('error');
    } else {
      setMessage('Successfully subscribed to the newsletter!');
      setStatus('success');
      setEmail(''); // Clear the input field
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.heading}>
        Subscribe to My Newsletter
      </Typography>
      <Typography variant="body2" sx={styles.description}>
        Join my creative journey and get updates directly in your inbox!
      </Typography>
      <form onSubmit={handleSubscribe} style={styles.form}>
        <TextField
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          required
          sx={styles.input}
        />
        <Button type="submit" variant="contained" sx={styles.button}>
          Subscribe
        </Button>
      </form>
      {message && (
        <Typography
          sx={status === 'success' ? styles.successMessage : styles.errorMessage}
        >
          {message}
        </Typography>
      )}
    </Box>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#FDF6EE',
    borderRadius: '6px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '0 auto',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    color: '#4A4A4A',
    marginBottom: '10px',
    fontSize: '20px',
  },
  description: {
    fontFamily: '"Inter", sans-serif',
    color: '#4A4A4A',
    fontSize: '12px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  input: {
    width: '100%',
    '& .MuiOutlinedInput-root': {
      borderRadius: '6px',
      fontSize: '12px', // Smaller font size for a cleaner look
    },
    '& .MuiInputLabel-root': {
      fontSize: '12px',
    },
    '& .MuiInputBase-input': {
      padding: '10px', // Adjust padding for compact input
    },
  },
  button: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '8px 16px',
    fontSize: '10px',
    borderRadius: '6px',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
  successMessage: {
    color: '#28A745',
    marginTop: '10px',
    fontSize: '12px',
  },
  errorMessage: {
    color: '#DC3545',
    marginTop: '10px',
    fontSize: '12px',
  },
};

export default NewsletterForm;
