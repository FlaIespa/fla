import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ArtSection() {
    const cards = [
        { image: '/images/image1.jpeg', caption: 'A beautiful sunrise at the beach' },
        { image: '/images/image2.jpeg', caption: 'Exploring the vibrant streets of Rio' },
        { image: '/images/image3.jpeg', caption: 'Calm evenings with nature' },
        { image: '/images/image4.jpeg', caption: 'Memories of a mountain hike' },
        { image: '/images/image5.jpeg', caption: 'A peaceful countryside escape' },
        { image: '/images/image6.jpeg', caption: 'An unforgettable cityscape' },
        { image: '/images/image7.jpeg', caption: 'Majestic forest adventures' },
        { image: '/images/image8.jpeg', caption: 'Ocean waves at sunset' },
        { image: '/images/image9.jpeg', caption: 'Mountain peaks covered in snow' },
        { image: '/images/image10.jpeg', caption: 'Lush green landscapes' },
        { image: '/images/image11.jpeg', caption: 'City lights at night' },
        { image: '/images/image12.jpeg', caption: 'Charming village streets' },
        { image: '/images/image13.jpeg', caption: 'Golden fields of wheat' },
        { image: '/images/image14.jpeg', caption: 'Tranquil river reflections' },
        { image: '/images/image15.jpeg', caption: 'Vivid autumn colors' },
        { image: '/images/image16.jpeg', caption: 'Starry skies in the desert' },
      ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 8 cards at a time
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
        Discover My Artistic Journey
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
    height: '250px',
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
