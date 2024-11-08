// src/components/BrandCard.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CardContainer = styled(motion.div)`
  width: 300px;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

const BrandImage = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
`;

const BrandName = styled.h2`
  color: #222;
  margin: 1rem 0 0.5rem;
  font-size: 1.5rem;
  transition: color 0.3s ease-in-out;
`;

const Description = styled.p`
  color: #555;
  font-size: 1rem;
  transition: color 0.3s ease-in-out;
`;

const BrandCard = ({ brand, imageSrc, description }) => {
  return (
    <CardContainer
      whileHover={{
        scale: 1.05,
        rotate: 2,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <BrandImage 
        src={imageSrc} 
        alt={brand} 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <BrandName>{brand}</BrandName>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default BrandCard;
