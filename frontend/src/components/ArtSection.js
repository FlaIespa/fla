import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArtSection() {
    const cards = [
        { image: '/images/image1.jpeg', caption: 'Pier 39 in Christmas season' },
        { image: '/images/image2.jpeg', caption: 'Sunrise at Twin Peaks' },
        { image: '/images/image3.jpeg', caption: 'Home food away from home' },
        { image: '/images/image4.jpeg', caption: 'Bay Bridge from Google Deep Mind' },
        { image: '/images/image5.jpeg', caption: 'SF Symphony' },
        { image: '/images/image6.jpeg', caption: 'Pier 39 after a run on a sunny day' },
        { image: '/images/image7.jpeg', caption: 'Sunset at Ocean Beach' },
        { image: '/images/image8.jpeg', caption: 'Break Dance in Embarcardero' },
        { image: '/images/image9.jpeg', caption: 'View from my window' },
        { image: '/images/image10.jpeg', caption: 'Home food away from home, part 2' },
        { image: '/images/image11.jpeg', caption: 'Public library square' },
        // { image: '/images/image12.jpeg', caption: 'Charming village streets' },
        { image: '/images/image13.jpeg', caption: 'Capitola Beach' },
        // { image: '/images/image14.jpeg', caption: 'Tranquil river reflections' },
        { image: '/images/image15.jpeg', caption: 'Golden Gate Bridge from NYE trail' },
        { image: '/images/image16.jpeg', caption: 'Candies I will bring my niece to try' },
      ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 8 cards at a time
    slidesToScroll: 1, // Scroll one at a time
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.heading}>
        The Art in me
      </Typography>

      {/* Carousel */}
      <Box sx={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box sx={styles.card}>
                <img src={card.image} alt={card.caption} style={styles.image} />
                <Typography variant="body1" sx={styles.caption}>
                  {card.caption}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    backgroundColor: '#FDF6EE',
    padding: '60px 0',
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '36px',
    color: '#4A4A4A',
    marginBottom: '40px',
  },
  sliderContainer: {
    width: '100%', // Take up the full width of the page
    maxWidth: '100%',
    margin: '0 auto',
  },
  card: {
    backgroundColor: '#FFF',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    textAlign: 'center',
    padding: '15px',
    margin: '10px',
  },
  image: {
    height: '400px',
    objectFit: 'cover',
    borderRadius: '8px',
    width: '100%',
    marginBottom: '10px',
  },
  caption: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '14px',
    color: '#4A4A4A',
    marginTop: '10px',
  },
};

export default ArtSection;
