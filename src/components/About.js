import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaCode, FaHeart, FaLightbulb } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const personalInfo = [
    { icon: <FaGraduationCap />, label: "Education", value: "BCA (Bachelor of Computer Applications)" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "India" },
    { icon: <FaCalendarAlt />, label: "Experience", value: "Fresher (No professional experience)" },
    { icon: <FaCode />, label: "Projects", value: "6+ Frontend Projects" }
  ];

  const achievements = [
    { number: "6+", label: "Frontend Projects" },
    { number: "100%", label: "Learning Focus" },
    { number: "0+", label: "Years Experience" },
    { number: "24/7", label: "Learning Available" }
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Who I Am</h3>
            <p>
              I'm Chetan Singh, a passionate BCA student and aspiring Front-End Developer. 
              I love creating beautiful, functional, and user-friendly web applications that provide 
              excellent user experiences.
            </p>
            
            <p>
              As a fresher in the field of web development, I'm eager to learn and grow. 
              I've been working on various frontend projects to build my skills in React, 
              JavaScript, HTML, CSS, and other modern web technologies. I'm always excited 
              to take on new challenges and learn from every opportunity.
            </p>

            <div className="personal-info">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <span className="info-icon">{info.icon}</span>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    <span className="info-value">{info.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-container">
              <div className="image-placeholder">
                <span>📸</span>
              </div>
              <div className="image-glow"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="achievements"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                className="achievement-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-values"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>My Values</h3>
          <div className="values-grid">
            <motion.div
              className="value-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="value-icon">
                <FaCode />
              </div>
              <h4>Clean Code</h4>
              <p>I write clean, readable, and well-structured code that follows best practices and is easy to maintain.</p>
            </motion.div>

            <motion.div
              className="value-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <div className="value-icon">
                <FaLightbulb />
              </div>
              <h4>Continuous Learning</h4>
              <p>I'm always eager to learn new technologies and improve my skills to stay updated with industry trends.</p>
            </motion.div>

            <motion.div
              className="value-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <div className="value-icon">
                <FaHeart />
              </div>
              <h4>User Focus</h4>
              <p>I prioritize user experience and create intuitive interfaces that users find easy to navigate and enjoy using.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 