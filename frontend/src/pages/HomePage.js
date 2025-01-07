import React from 'react';
import MainPage from '../components/MainPage'; // Correct path to MainPage.js
import NewsletterForm from '../components/NewsletterForm'; // Correct path to NewsletterForm.js

function HomePage() {
  return (
    <div style={styles.container}>
      {/* Main Page Section */}
      <MainPage />

      {/* Newsletter Form Section */}
      <div style={styles.newsletterContainer}>
        <NewsletterForm />
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: 0, // No margin for the container to avoid gaps
  },
  newsletterContainer: {
    padding: '80px 60px', // Ensures larger padding but still aligned
    backgroundColor: '#FFF4E0', // Match the warm beige background from MainPage
    minHeight: '700px', // Ensure the section is large enough
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // Center the content
    textAlign: 'center',
    marginTop: '0', // No margin at the top to avoid space
  },
};

export default HomePage;
