// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  margin: 1rem 0;
`;

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    color: #e63946;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Your Company. All Rights Reserved.</FooterText>
      <SocialLinks>
        <SocialLink href="https://www.facebook.com" target="_blank">Facebook</SocialLink>
        <SocialLink href="https://www.twitter.com" target="_blank">Twitter</SocialLink>
        <SocialLink href="https://www.instagram.com" target="_blank">Instagram</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;
