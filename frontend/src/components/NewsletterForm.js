import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { motion } from 'framer-motion';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  // Animation variants
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const buttonHover = {
    scale: 1.05,
    backgroundColor: '#F4C7C3', // Soft peach tone for hover
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)',
    transition: { duration: 0.3 },
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      style={styles.form}
      variants={formVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 style={styles.heading}>Join My Newsletter</motion.h2>
      <motion.p style={styles.subtext}>
        Simplify your life with tips, stories, and reflections. Straight to your inbox.
      </motion.p>
      <motion.div style={styles.inputContainer}>
        <TextField
          label="Your Email"
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
        <motion.div
          whileHover={buttonHover}
        >
          <Button type="submit" variant="contained" style={styles.button}>
            Subscribe
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '700px', // Make it slightly wider
    padding: '60px',
    background: '#FFF8F1', // Slightly lighter beige
    border: '1px solid #DCD7C9', // Soft border
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    margin: '40px auto',
  },
  heading: {
    fontSize: '36px',
    color: '#4A4A4A',
    fontFamily: '"Cormorant Garamond", serif', // Elegant serif font
    marginBottom: '20px',
  },
  subtext: {
    fontSize: '18px',
    color: '#4A4A4A',
    fontFamily: '"Open Sans", sans-serif',
    marginBottom: '30px',
    lineHeight: '1.6',
  },
  inputContainer: {
    display: 'flex',
    gap: '15px', // Space between input field and button
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    backgroundColor: '#97A97C', // Sage green
    color: '#FFFFFF',
    padding: '15px 30px',
    fontSize: '16px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'none',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
};

export default NewsletterForm;
