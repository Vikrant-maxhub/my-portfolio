import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "Front-End Developer",
    "BCA Student", 
    "React Developer",
    "Web Designer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/Vikrant-maxhub", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://github.com/Vikrant-maxhub", label: "LinkedIn" },
    // { icon: <FaTwitter />, url: "https://twitter.com/chetansingh", label: "Twitter" },
    { icon: <FaEnvelope />, url: "mailto:vikrantshishodia896421@gmail.com", label: "Email" }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Chetan Singh
            </motion.h1>
            
            <motion.div 
              className="hero-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span>I'm a </span>
              <span className="animated-text">
                {texts[currentText]}
              </span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Passionate BCA student and aspiring Front-End Developer. I love creating beautiful, 
              functional, and user-friendly web applications. Eager to learn and grow in the world of web development.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <span>👨‍💻</span>
              </div>
              <div className="avatar-glow"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1 }}
            >
              {link.icon}
              <span className="social-tooltip">{link.label}</span>
            </motion.a>
          ))}
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="scroll-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaArrowDown />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 