import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "LLM-Powered Personal Finance Tracker",
    type: "Project",
    description: "Developed an end-to-end RAG pipeline using LangChain and FAISS to ingest and semantically search over personal finance documents. Enabled natural language querying over transaction history with Ollama Cloud APIs, reducing manual lookup time significantly.",
    link: "#",
    techStack: ["LangChain", "FAISS", "RAG", "Ollama Cloud APIs", "Python", "Vector Search"]
  },
  {
    title: "Realtime Atrial Fibrillation Detection System for IoMT Using Hybrid ML Classification",
    type: "Research Publication",
    description: "Published in IEEE Xplore (Nov 2023). Developed a high-accuracy, realtime machine learning classification system tailored for Internet of Medical Things (IoMT) deployments.",
    link: "https://ieeexplore.ieee.org/",
    techStack: ["Scikit-Learn", "IoT", "Data Classification", "Python", "Hybrid ML", "IoMT"]
  },
  {
    title: "An ECG Heartbeat Classification Strategy using Deep Learning for Automated Cardiocare Application",
    type: "Research Publication",
    description: "Published in IEEE Xplore (Nov 2021). Designed a deep learning classification strategy for automated electrocardiogram (ECG) heartbeat classification to support advanced cardiocare applications.",
    link: "https://ieeexplore.ieee.org/",
    techStack: ["Deep Learning", "ECG", "Neural Networks", "TensorFlow", "Python"]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable scroll when modal is open
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <section className={styles.projectsSection}>
      <div className="container">
        <h2 className="heading" style={{ fontSize: '3rem', marginBottom: '3rem' }}>Projects & Publications</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '0.5rem' }}>{project.type}</div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <button 
                onClick={() => setSelectedProject(project)} 
                className={styles.link}
              >
                View Details <ExternalLink size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className={styles.modalHeader}>
                <div style={{ color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '1rem' }}>
                  {selectedProject.type}
                </div>
                <h2>{selectedProject.title}</h2>
              </div>
              
              <div className={styles.modalBody}>
                <p>{selectedProject.description}</p>
                
                <div className={styles.techStack}>
                  <h4>Technologies Used</h4>
                  <div className={styles.pillContainer}>
                    {selectedProject.techStack?.map((tech, i) => (
                      <span key={i} className={styles.techPill}>{tech}</span>
                    ))}
                  </div>
                </div>

                {selectedProject.link !== "#" && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={styles.externalLinkBtn}>
                    Open Project <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
