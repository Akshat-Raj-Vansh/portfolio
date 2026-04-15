import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: "Scalable Hybrid Recommendation Engine",
    type: "Project",
    description: "Engineered a hybrid recommendation microservice (Content-Based + Collaborative Filtering) processing 100k+ ratings with sub-100ms inference latency. Containerized the application using Docker and exposed predictions via a FastAPI endpoint to simulate real-world production integration.",
    link: "#",
    techStack: ["Python", "FastAPI", "Docker", "Machine Learning", "Pandas"]
  },
  {
    title: "Realtime Atrial Fibrillation Detection System for IoMT Using Hybrid ML Classification",
    type: "Research Publication",
    description: "Published in IEEE Xplore (NOV 2023). Developed a high-accuracy, realtime machine learning classification system tailored for Internet of Medical Things (IoMT) deployments.",
    link: "https://ieeexplore.ieee.org/",
    techStack: ["Scikit-Learn", "IoT", "Data Classification", "Python"]
  },
  {
    title: "Enterprise RAG Agent for Document QA",
    type: "Project",
    description: "Architected a custom autonomous AI assistant using LangChain and ChromaDB to synthesize complex unstructured enterprise documents. Achieved higher retrieval relevance using advanced semantic search, significantly cutting down manual research time.",
    link: "#",
    techStack: ["LangChain", "ChromaDB", "LLMs", "Vector Search"]
  },
  {
    title: "Customer Churn Predictive Pipeline",
    type: "Project",
    description: "Built an end-to-end Machine Learning pipeline utilizing LightGBM to predict early customer churn. Integrated automated feature engineering and deployed model endpoints that triggered preemptive retention alerts for account managers.",
    link: "#",
    techStack: ["LightGBM", "Data Engineering", "CI/CD", "Predictive Modeling"]
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
