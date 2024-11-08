// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const BrandLink = styled(motion.div)`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: #222;
  text-decoration: none;
`;

const Home = () => {
  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
        Explore the Best Car Brands
      </motion.h1>
      <motion.p initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1.2 }}>
        Luxury cars await you. Select a brand to learn more.
      </motion.p>
      
      <BrandLink whileHover={{ scale: 1.1 }} as={Link} to="/brands/mercedes">
        Mercedes
      </BrandLink>
      <BrandLink whileHover={{ scale: 1.1 }} as={Link} to="/brands/bmw">
        BMW
      </BrandLink>
      <BrandLink whileHover={{ scale: 1.1 }} as={Link} to="/brands/ferrari">
        Ferrari
      </BrandLink>
      <BrandLink whileHover={{ scale: 1.1 }} as={Link} to="/brands/pagani">
        Pagani
      </BrandLink>
      <BrandLink whileHover={{ scale: 1.1 }} as={Link} to="/brands/gtr">
        GTR
      </BrandLink>
    </HomeContainer>
  );
};

export default Home;
