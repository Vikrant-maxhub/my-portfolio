import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaMobile } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiFirebase, SiTailwindcss } from 'react-icons/si';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Weather App",
      description: "A responsive weather application with real-time weather data, location-based forecasts, and beautiful UI design. Features include current weather, 5-day forecast, and location search.",
      image: "🌤️",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS3", "Weather API"],
      icons: [<FaReact />, <SiJavascript />],
      github: "https://github.com/Vikrant-maxhub/my-weather-app",
      live: "https://my-weather-app0010.netlify.app",
      featured: true
    },
    {
      id: 2,
      title: "Car Rental App",
      description: "A modern car rental platform with vehicle browsing, booking system, and user authentication. Features include car filtering, booking management, and responsive design.",
      image: "🚗",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      icons: [<FaReact />, <SiJavascript />],
      github: "https://github.com/Vikrant-maxhub/car-rental-apponline",
      live: "https://car-rental-apponline.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Flipkart Clone",
      description: "A comprehensive e-commerce clone with product catalog, shopping cart, user authentication, and payment integration. Mimics the original Flipkart's design and functionality.",
      image: "🛒",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS3", "Mock API"],
      icons: [<FaReact />, <SiJavascript />],
      github: "https://github.com/Vikrant-maxhub/flipkart-clone",
      live: "https://shopping-clone-001.netlify.app",
      featured: true
    },
    {
      id: 4,
      title: "Employee Management App/crud application",
      description: "A complete employee management system with CRUD operations, employee profiles, department management, and data visualization. Features include employee search and filtering.",
      image: "👥",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      icons: [<FaReact />, <SiJavascript />],
      github: "https://github.com/Vikrant-maxhub/crud-application",
      live: "https://employee-management-app896.netlify.app",
      featured: false
    },
    {
      id: 5,
      title: "User Admin Dashboard",
      description: "A comprehensive admin dashboard with user management, analytics, and administrative controls. Features include user CRUD operations, data visualization, and responsive design.",
      image: "📊",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS3", "Chart.js"],
      icons: [<FaReact />, <SiJavascript />],
      github: "https://github.com/Vikrant-maxhub/user-admin-dashboard",
      live: "https://user-admin-dashboard1.netlify.app",
      featured: false
    },
    {
      id: 6,
      title: "Personal Portfolio",
      description: "A modern, responsive personal portfolio website built with React, featuring smooth animations, beautiful design, and all the essential sections that interviewers look for.",
      image: "📋",
      category: "frontend",
      technologies: ["React", "JavaScript", "CSS3", "bootstrap", "Tailwind CSS"],
      icons: [<FaReact />, <SiJavascript />],
      github: "https://github.com/Vikrant-maxhub/my-portfolio",
      live: "https://my-personal-portfolioapp.netlify.app",
      featured: false
    }
  ];

  const filters = [
    { name: 'all', label: 'All Projects' },
    { name: 'frontend', label: 'Frontend' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>My Projects</h2>
          <p>Some of my recent frontend work</p>
        </motion.div>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.name}
              className={`filter-btn ${activeFilter === filter.name ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span>{project.image}</span>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    <div className="tech-icons">
                      {project.icons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="tech-icon">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Interested in working together?</h3>
          <p>I'm eager to learn and contribute to exciting projects!</p>
          <motion.a
            href="#contact"
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 