import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaGraduationCap } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const experiences = [
    {
      id: 1,
      title: "Front-End Developer (Fresher)",
      company: "Currently Seeking Opportunities",
      location: "India",
      period: "Present",
      description: "Passionate BCA student and aspiring Front-End Developer seeking opportunities to apply my skills and learn from real-world projects. Eager to contribute to innovative web applications.",
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Git-hub", "Tailwind CSS", "Vite", ""],
      achievements: [
        "Completed 5+ frontend projects showcasing various skills",
        "Strong foundation in modern web technologies",
        "Eager to learn and grow in professional environment"
      ]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Monad University",
      location: "India",
      period: "2021 - Present",
      description: "Currently pursuing BCA with focus on web development and programming fundamentals. Learning various technologies and building projects to enhance skills.",
      achievements: [
        "Focus on Web Development and Programming",
        "Building projects to enhance practical skills",
        "Learning modern frontend technologies"
      ]
    }
  ];

  return (
    <section id="experience" className="experience section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Experience & Education</h2>
          <p>My learning journey</p>
        </motion.div>

        <div className="experience-content">
          <motion.div
            className="work-experience"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="section-subtitle">
              <FaBriefcase />
              Current Status
            </h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="experience-header">
                      <h4 className="job-title">{exp.title}</h4>
                      <div className="company-info">
                        <span className="company-name">{exp.company}</span>
                        <div className="job-meta">
                          <span className="location">
                            <FaMapMarkerAlt />
                            {exp.location}
                          </span>
                          <span className="period">
                            <FaCalendarAlt />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="job-description">{exp.description}</p>
                    
                    <div className="job-technologies">
                      <h5>Skills & Technologies:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="job-achievements">
                      <h5>Key Highlights:</h5>
                      <ul>
                        {exp.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="education"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="section-subtitle">
              <FaGraduationCap />
              Education
            </h3>
            
            <div className="education-timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="education-item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                >
                  <div className="education-content">
                    <h4 className="degree">{edu.degree}</h4>
                    <div className="institution-info">
                      <span className="institution-name">{edu.institution}</span>
                      <div className="education-meta">
                        <span className="location">
                          <FaMapMarkerAlt />
                          {edu.location}
                        </span>
                        <span className="period">
                          <FaCalendarAlt />
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="education-description">{edu.description}</p>
                    
                    <div className="education-achievements">
                      <h5>Focus Areas:</h5>
                      <ul>
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Ready to start my journey?</h3>
          <p>I'm eager to learn and contribute to exciting projects as a fresher!</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 