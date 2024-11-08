// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #111;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
`;

const Logo = styled.h1`
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
  position: relative;
  padding: 0.5rem 0;
  &:hover {
    color: #e63946;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  span {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLinks = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #111;
    padding: 1rem;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hoverAnimation = {
    scale: 1.2,
    color: "#e63946",
  };

  return (
    <NavbarContainer>
      <Logo>Luxury Cars</Logo>
      <NavLinks>
        <motion.div whileHover={hoverAnimation}>
          <NavLink to="/">Home</NavLink>
        </motion.div>
        <motion.div whileHover={hoverAnimation}>
          <NavLink to="/brands/mercedes">Mercedes</NavLink>
        </motion.div>
        <motion.div whileHover={hoverAnimation}>
          <NavLink to="/brands/bmw">BMW</NavLink>
        </motion.div>
        <motion.div whileHover={hoverAnimation}>
          <NavLink to="/brands/ferrari">Ferrari</NavLink>
        </motion.div>
        <motion.div whileHover={hoverAnimation}>
          <NavLink to="/brands/pagani">Pagani</NavLink>
        </motion.div>
        <motion.div whileHover={hoverAnimation}>
          <NavLink to="/contact">Contact</NavLink>
        </motion.div>
      </NavLinks>
      <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenu>
      {isMenuOpen && (
        <MobileNavLinks>
          <motion.div whileHover={hoverAnimation}>
            <NavLink to="/">Home</NavLink>
          </motion.div>
          <motion.div whileHover={hoverAnimation}>
            <NavLink to="/brands/mercedes">Mercedes</NavLink>
          </motion.div>
          <motion.div whileHover={hoverAnimation}>
            <NavLink to="/brands/bmw">BMW</NavLink>
          </motion.div>
          <motion.div whileHover={hoverAnimation}>
            <NavLink to="/brands/ferrari">Ferrari</NavLink>
          </motion.div>
          <motion.div whileHover={hoverAnimation}>
            <NavLink to="/brands/pagani">Pagani</NavLink>
          </motion.div>
          <motion.div whileHover={hoverAnimation}>
            <NavLink to="/contact">Contact</NavLink>
          </motion.div>
        </MobileNavLinks>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
