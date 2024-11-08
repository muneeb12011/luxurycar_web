// src/components/ContactForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Styled components for the form
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 2rem auto;
  background-color: #f8f8f8;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #e63946;
    outline: none;
    box-shadow: 0 0 5px rgba(230, 57, 70, 0.5);
  }
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

const Textarea = styled.textarea`
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border-color: #e63946;
    outline: none;
    box-shadow: 0 0 5px rgba(230, 57, 70, 0.5);
  }
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem;
  margin-top: 1rem;
  background-color: #e63946;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #d62e42;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  color: #28a745;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError('All fields are required!');
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setFormSubmitted(false);
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setTimeout(() => setFormSubmitted(false), 3000); // Reset after 3 seconds
    }, 2000); // Simulate form submission delay
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <Textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></Textarea>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      {formSubmitted && !error && <SuccessMessage>Message Sent Successfully!</SuccessMessage>}

      <SubmitButton
        type="submit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={isLoading}
      >
        {isLoading ? 'Sending...' : formSubmitted ? 'Sent!' : 'Send Message'}
      </SubmitButton>
    </FormContainer>
  );
};

export default ContactForm;
