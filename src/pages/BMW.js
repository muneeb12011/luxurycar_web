// src/pages/BMW.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const BMWContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #222, #555);
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

const BMWImage = styled(motion.img)`
  width: 80%;
  border-radius: 15px;
  margin-top: 2rem;
`;

const BMW = () => {
  return (
    <BMWContainer>
      <Title
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        BMW
      </Title>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Explore the ultimate driving machine from BMW, where precision
        and luxury come together.
      </Description>
      <BMWImage
        src="/images/bmw.jpg"
        alt="BMW"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      />
    </BMWContainer>
  );
};

export default BMW;
