import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Newsletter from '../components/Newsletter';
import { Typography, Box } from '@mui/material';
import supabase from '../supabase'; // Import Supabase client

function NewslettersPage() {
  const [newsletters, setNewsletters] = useState([]);

  useEffect(() => {
    const fetchNewsletters = async () => {
      const { data, error } = await supabase.from('newsletters').select('*');
      if (error) {
        console.error('Error fetching newsletters:', error);
      } else {
        setNewsletters(data);
      }
    };
    fetchNewsletters();
  }, []);

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Box sx={styles.contentWrapper}>
        <Typography variant="h3" sx={styles.heading}>
          My Newsletters
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          Dive into my reflections. Open invite to reflect with me. 
        </Typography>
        <Box sx={styles.newslettersContainer}>
          {newsletters.map((newsletter) => (
            <Newsletter
              key={newsletter.id} // Use unique ID from Supabase
              title={newsletter.title}
              date={new Date(newsletter.date).toDateString()} // Format the date
              content={newsletter.preview} // Use "preview" from the database
              buttonLink={`/newsletters/${newsletter.id}`} // Dynamic link to the detail page
            />
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

const styles = {
  container: {
    minHeight: '100vh', // Full viewport height
    backgroundColor: '#FDF6EE', // Beige background
    display: 'flex',
    flexDirection: 'column', // Stack content vertically
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center',
    padding: '40px',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1200px', // Limit the width for readability
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '28px',
    color: '#4A4A4A',
    marginBottom: '20px',
  },
  description: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    color: '#4A4A4A',
    marginBottom: '40px',
    lineHeight: 1.8,
  },
  newslettersContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    paddingBottom: '40px', // Add some spacing at the bottom
  },
};

export default NewslettersPage;
