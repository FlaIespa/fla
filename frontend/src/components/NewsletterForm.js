import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Join My Newsletter</h2>
      <p style={styles.subtext}>
        Stay updated with stories, insights, and reflections straight to your inbox.
      </p>
      <div style={styles.inputContainer}>
        <TextField
          label="Enter your email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          InputProps={{
            style: {
              backgroundColor: '#FFFFFF',
              borderRadius: '8px',
            },
          }}
        />
        <Button type="submit" variant="contained" style={styles.button}>
          Subscribe Now
        </Button>
      </div>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '80px 60px', // Larger padding for more space
    background: '#FFF4E0', // Matches the page background
    textAlign: 'center',
  },
  heading: {
    fontSize: '48px',
    color: '#5A3E36',
    fontFamily: '"Gloria Hallelujah", cursive',
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '20px',
    color: '#5A3E36',
    fontFamily: '"Open Sans", sans-serif',
    marginBottom: '40px',
    maxWidth: '800px', // Wider text area
    lineHeight: '1.8',
  },
  inputContainer: {
    display: 'flex',
    gap: '20px', // Space between the input field and the button
    width: '100%',
    maxWidth: '600px', // Center the form elements
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    backgroundColor: '#F4A261',
    color: '#FFFFFF',
    padding: '15px 30px',
    fontSize: '16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#E07A5F',
    },
  },
};

export default NewsletterForm;
