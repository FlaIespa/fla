import React from 'react';
import MainSection from '../components/MainSection';
import NewsletterSection from '../components/NewsletterSection';
import ArtSection from '../components/ArtSection';
import NewsletterForm from '../components/NewsletterForm';
import ResourcesSection from '../components/ResourcesSection';

function HomePage() {
  return (
    <div style={styles.container}>
      <div id="MainSection">
        <MainSection />
      </div>
      <div id="ArtSection">
        <ArtSection />
      </div>
      <div id="NewsletterSection">
        <NewsletterSection />
      </div>
      <div id="ResourcesSection">
        <ResourcesSection />
      </div>
      <div id="NewsletterForm" style={styles.newsletterContainer}>
        <NewsletterForm />
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    backgroundColor: '#FDF6EE',
  },
  newsletterContainer: {
    padding: '40px 30px', // Reduced padding for compactness
    backgroundColor: '#FDF6EE',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderTop: '1px solid #DDE6D5', // Thinner separator
  },
};

export default HomePage;
