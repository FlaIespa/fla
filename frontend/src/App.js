import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewslettersPage from './pages/NewslettersPage';
import NewsletterDetailPage from './pages/NewsletterDetailPage'; // Import the new detail page

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newsletters" element={<NewslettersPage />} />
          <Route path="/newsletters/:newsletterId" element={<NewsletterDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
