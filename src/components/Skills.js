import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, 
  FaCode
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiBootstrap, SiVite } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85, color: "#1572B6" },
        { name: "JavaScript", icon: <FaJs />, level: 80, color: "#F7DF1E" },
        { name: "React", icon: <FaReact />, level: 75, color: "#61DAFB" },
        { name: "TypeScript", icon: <SiTypescript />, level: 60, color: "#3178C6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70, color: "#06B6D4" },
        { name: "Bootstrap", icon: <SiBootstrap />, level: 75, color: "#7952B3" }
      ]
    },
    {
      name: "Development Tools",
      skills: [
        { name: "Git-hub", icon: <FaGitAlt />, level: 75, color: "#F05032" },
        { name: "Vite", icon: <SiVite />, level: 70, color: "#646CFF" },
        
      ]
    },
    {
      name: "Learning & Growth",
      skills: [
        { name: "Problem Solving", icon: <FaJs />, level: 80, color: "#4CAF50" },
        { name: "Responsive Design", icon: <FaCss3Alt />, level: 85, color: "#2196F3" },
        { name: "UI/UX Design", icon: <FaFigma />, level: 70, color: "#FF9800" },
        { name: "Code Quality", icon: <FaReact />, level: 75, color: "#9C27B0" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies I'm learning and working with</p>
        </motion.div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.name}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3>Why Choose My Skills?</h3>
          <div className="summary-grid">
            <motion.div
              className="summary-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h4>Frontend Focus</h4>
              <p>I specialize in creating beautiful, responsive, and user-friendly frontend applications with modern technologies.</p>
            </motion.div>

            <motion.div
              className="summary-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <h4>Continuous Learning</h4>
              <p>As a BCA student, I'm constantly learning new technologies and improving my skills to stay updated with industry trends.</p>
            </motion.div>

            <motion.div
              className="summary-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <h4>Eager to Learn</h4>
              <p>I'm passionate about web development and eager to learn from experienced developers and contribute to exciting projects.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 