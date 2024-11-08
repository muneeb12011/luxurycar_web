// src/App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'; // Hero Section for landing page
import ContactForm from './components/ContactForm'; // Contact form for user inquiries
import BrandCard from './components/BrandCard'; // Showcase of featured car brands
import ScrollToTop from './components/ScrollToTop'; // Handles scroll behavior on route change
import Loading from './components/Loading'; // Loading component for lazy loading fallback
import Footer from './components/Footer'; // Footer with additional information

// Lazy load pages for performance optimization
const Home = lazy(() => import('./pages/Home'));
const Pagani = lazy(() => import('./pages/Pagani'));
const BMW = lazy(() => import('./pages/BMW'));
const Ferrari = lazy(() => import('./pages/Ferrari'));
const GTR = lazy(() => import('./pages/GTR'));
const CarBrandPage = lazy(() => import('./pages/CarBrandPage')); // Correct case
const NotFound = lazy(() => import('./pages/NotFound')); // Page not found fallback

const App = () => {
  return (
    <Router>
      {/* ScrollToTop ensures that page scrolls to top when route changes */}
      <ScrollToTop />

      {/* Navbar displayed on all pages */}
      <Navbar />

      <Suspense fallback={<Loading />}> {/* Suspense for lazy-loaded components */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section: Visible on the main page */}
          <section id="hero" role="region" aria-labelledby="hero-title">
            <h1 id="hero-title">Welcome to Luxury Cars</h1>
            <p>Explore the best car brands in the world.</p>
            <a href="#brands" className="cta-button">Explore Now</a>
          </section>

          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagani" element={<Pagani />} />
            <Route path="/bmw" element={<BMW />} />
            <Route path="/ferrari" element={<Ferrari />} />
            <Route path="/gtr" element={<GTR />} />
            <Route path="/:brand" element={<CarBrandPage />} /> {/* Dynamic route for each car brand */}
            <Route path="*" element={<NotFound />} /> {/* 404 page */}
          </Routes>

          {/* BrandCard showcasing featured brands */}
          <section id="brands" role="region" aria-labelledby="brands-title">
            <h2 id="brands-title">Car Brands</h2>
            <BrandCard />
          </section>

          {/* ContactForm for user interaction */}
          <ContactForm />
        </motion.div>
      </Suspense>

      {/* Footer displayed on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
