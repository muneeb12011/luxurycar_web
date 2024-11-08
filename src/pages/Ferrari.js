// src/pages/Ferrari.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FerrariContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #b00, #800);
  color: #fff;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const FerrariImage = styled(motion.img)`
  width: 80%;
  border-radius: 15px;
  margin-top: 2rem;
`;

const Ferrari = () => {
  return (
    <FerrariContainer>
      <Title
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Ferrari
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Experience the thrill of speed and luxury with Ferrari.
        Italian craftsmanship at its finest.
      </Description>
      <FerrariImage
        src="/images/ferrari.jpg"
        alt="Ferrari"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </FerrariContainer>
  );
};

export default Ferrari;
