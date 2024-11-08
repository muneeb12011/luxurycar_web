// src/components/HeroSection.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: #fff;
  position: relative;
  overflow: hidden;

  /* Parallax effect */
  background-attachment: fixed;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);  /* Gradient overlay for better text contrast */
`;

const HeroText = styled(motion.div)`
  text-align: center;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2rem;
  margin-top: 2rem;
  background-color: #e63946;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d62e42;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <GradientOverlay />
      <HeroText
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Luxury Cars
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore the best car brands in the world
        </Subtitle>
        <CTAButton
          href="#cars"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Now
        </CTAButton>
      </HeroText>
    </HeroContainer>
  );
};

export default HeroSection;
