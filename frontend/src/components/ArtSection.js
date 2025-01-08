import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { motion } from 'framer-motion'; // For animations
import CloseIcon from '@mui/icons-material/Close';

function ArtSection() {
  const [selectedImage, setSelectedImage] = useState(null); // State to manage the selected image
  const cards = [
    { image: '/images/image1.jpeg', caption: 'Pier 39 in Christmas season' },
    { image: '/images/image2.jpeg', caption: 'Sunrise at Twin Peaks' },
    { image: '/images/image3.jpeg', caption: 'Home food away from home' },
    { image: '/images/image4.jpeg', caption: 'Bay Bridge from Google Deep Mind' },
    { image: '/images/image5.jpeg', caption: 'SF Symphony' },
    { image: '/images/image6.jpeg', caption: 'Pier 39 after a run on a sunny day' },
    { image: '/images/image7.jpeg', caption: 'Sunset at Ocean Beach' },
    { image: '/images/image8.jpeg', caption: 'Break Dance in Embarcadero' },
    { image: '/images/image9.jpeg', caption: 'View from my window' },
    { image: '/images/image10.jpeg', caption: 'Home food away from home, part 2' },
    { image: '/images/image11.jpeg', caption: 'Public library square' },
    { image: '/images/image13.jpeg', caption: 'Capitola Beach' },
    { image: '/images/image15.jpeg', caption: 'Golden Gate Bridge from NYE trail' },
    { image: '/images/image16.jpeg', caption: 'Candies I will bring my niece to try' },
  ];

  const handleOpenModal = (card) => {
    setSelectedImage(card); // Set the selected image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Clear the selected image
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.heading}>
        The Art in Me
      </Typography>

      {/* Horizontal Scrollable Gallery */}
      <Box sx={styles.sliderContainer}>
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={styles.cardContainer}
          >
            <Box
              sx={styles.card}
              onClick={() => handleOpenModal(card)} // Open modal on click
            >
              <img src={card.image} alt={card.caption} style={styles.image} />
              <Typography variant="body1" sx={styles.caption}>
                {card.caption}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      {/* Modal for Expanded Image */}
      <Modal open={!!selectedImage} onClose={handleCloseModal}>
        <Box sx={styles.modalContainer}>
          <IconButton sx={styles.closeButton} onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <>
              <img
                src={selectedImage.image}
                alt={selectedImage.caption}
                style={styles.modalImage}
              />
              <Typography variant="h6" sx={styles.modalCaption}>
                {selectedImage.caption}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
}

const styles = {
  container: {
    backgroundColor: '#FDF6EE',
    padding: '60px 20px',
    textAlign: 'center',
  },
  heading: {
    fontFamily: '"Gloria Hallelujah", cursive',
    fontSize: '36px',
    color: '#4A4A4A',
    marginBottom: '40px',
  },
  sliderContainer: {
    display: 'flex',
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    gap: '20px',
    padding: '10px 0',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  cardContainer: {
    flexShrink: 0,
    scrollSnapAlign: 'start',
  },
  card: {
    backgroundColor: '#FFF',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    borderRadius: '12px',
    textAlign: 'center',
    padding: '15px',
    minWidth: '400px',
    maxWidth: '400px',
    cursor: 'pointer', // Add cursor to indicate clickability
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
  modalContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFFFFF',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto',
  },
  modalImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  modalCaption: {
    fontFamily: '"Inter", sans-serif',
    fontSize: '16px',
    color: '#4A4A4A',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#FFFFFF',
    color: '#4A4A4A',
    ':hover': {
      backgroundColor: '#F5F5F5',
    },
  },
};

export default ArtSection;
