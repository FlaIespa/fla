import React from 'react';
import MainSection from '../components/MainSection'; // Correct path to MainSection.js
import NewsletterSection from '../components/NewsletterSection'; // Correct path to NewsletterSection.js
import ArtSection from '../components/ArtSection'; // Correct path to ArtSection.js
import NewsletterForm from '../components/NewsletterForm'; // Correct path to NewsletterForm.js
import ResourcesSection from '../components/ResourcesSection'; // Correct path to ResourcesSection.js


function HomePage() {
  return (
    <div style={styles.container}>
      {/* Main Section */}
      <div id="MainSection">
        <MainSection />
      </div>

      {/* Art Section */}
      <div id="ArtSection">
        <ArtSection />
      </div>

      {/* Newsletter Section */}
      <div id="NewsletterSection">
        <NewsletterSection />
      </div>

      {/* Resources Section */}
      <div id="ResourcesSection">
        <ResourcesSection />
      </div>

      {/* Newsletter Form Section */}
      <div id="NewsletterForm" style={styles.newsletterContainer}>
        <NewsletterForm />
      </div>

    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    backgroundColor: '#FDF6EE', // Light beige background for the entire page
  },
  newsletterContainer: {
    padding: '80px 60px',
    backgroundColor: '#FDF6EE', // Match the theme's beige background
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderTop: '2px solid #DDE6D5', // Sage green separator for sections
  },
};

export default HomePage;
