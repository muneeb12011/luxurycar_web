// src/pages/GTR.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GTRContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #000, #444);
  color: #fff;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #ff0000;
  text-shadow: 1px 1px 10px rgba(255, 0, 0, 0.5);
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const GTRImage = styled(motion.img)`
  width: 80%;
  border-radius: 15px;
  margin-top: 2rem;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.3);
`;

const GTR = () => {
  return (
    <GTRContainer>
      <Title
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Nissan GTR
      </Title>
      <Description
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Unleash the power of the Nissan GTR, where innovation meets raw
        performance. Experience the thrill of driving perfection.
      </Description>
      <GTRImage
        src="/images/gtr.jpg"
        alt="GTR"
        initial={{ scale: 0.9, rotate: 5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
      />
    </GTRContainer>
  );
};

export default GTR;
