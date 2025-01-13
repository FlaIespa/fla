import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NewslettersPage from './pages/NewslettersPage';
import NewsletterDetailPage from './pages/NewsletterDetailPage'; // Import the new detail page
import PoemsPage from './pages/PoemsPage';
import PoemDetailsPage from './pages/PoemDetailsPage'; // Import PoemDetailsPage

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/newsletters" element={<NewslettersPage />} />
          <Route path="/poems" element={<PoemsPage />} />
          <Route path="/poems/:id" element={<PoemDetailsPage />} /> {/* Add this route */}
          <Route path="/newsletters/:newsletterId" element={<NewsletterDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
