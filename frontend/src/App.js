import React from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage'; // Importing HomePage component
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Uncomment to include Header if needed */}
      <Header />
      <main>
        {/* HomePage integrates MainPage and NewsletterForm */}
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
