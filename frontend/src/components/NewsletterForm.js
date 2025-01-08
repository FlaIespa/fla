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
      <Typography variant="h4" sx={styles.heading}>
        Subscribe to My Newsletter
      </Typography>
      <form onSubmit={handleSubscribe} style={styles.form}>
        <TextField
          type="email"
          label="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          required
          fullWidth
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
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    color: '#4A4A4A',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  },
  input: {
    maxWidth: '400px',
  },
  button: {
    backgroundColor: '#97A97C',
    color: '#FFFFFF',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '8px',
    ':hover': {
      backgroundColor: '#7B9464',
    },
  },
  successMessage: {
    color: '#28A745',
    marginTop: '10px',
  },
  errorMessage: {
    color: '#DC3545',
    marginTop: '10px',
  },
};

export default NewsletterForm;
