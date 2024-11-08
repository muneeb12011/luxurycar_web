// src/pages/Mercedes.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MercedesContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #000, #333);
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

const MercedesImage = styled(motion.img)`
  width: 80%;
  border-radius: 15px;
  margin-top: 2rem;
`;

const Mercedes = () => {
  return (
    <MercedesContainer>
      <Title
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        Mercedes-Benz
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Discover the luxury, performance, and heritage of Mercedes-Benz.
        The pinnacle of German engineering awaits you.
      </Description>
      <MercedesImage
        src="/images/mercedes.jpg"
        alt="Mercedes"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </MercedesContainer>
  );
};

export default Mercedes;
