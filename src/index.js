// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'; // Global styles
import './styles/animations.css'; // Additional animation styles
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Using React.StrictMode for enforcing best practices and highlighting potential issues in development
ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* AnimatePresence manages exit animations on route change */}
      <AnimatePresence exitBeforeEnter>
        <App />
      </AnimatePresence>
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // Assumes there's an HTML element with id 'root' in index.html
);
