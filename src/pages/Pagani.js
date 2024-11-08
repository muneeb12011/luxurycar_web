// src/pages/Pagani.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PaganiContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1e1e1e, #4b0082);
  color: #fff;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1.5px;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const PaganiImage = styled(motion.img)`
  width: 80%;
  border-radius: 15px;
  margin-top: 2rem;
`;

const Pagani = () => {
  return (
    <PaganiContainer>
      <Title
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Pagani
      </Title>
      <Description
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Discover the artistry and performance of Pagani. Unmatched in elegance
        and precision, each model is a masterpiece.
      </Description>
      <PaganiImage
        src="/images/pagani.jpg"
        alt="Pagani"
        initial={{ scale: 0.8, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.4 }}
      />
    </PaganiContainer>
  );
};

export default Pagani;
