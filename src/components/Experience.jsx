import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Senior Associate / Data Scientist",
    company: "Axtria",
    duration: "MAY 2024 - Present",
    details: [
      "Engineered a predictive modeling framework using XGBoost and Regression to perform propensity modeling for HIV brand switching.",
      "Orchestrated CI/CD pipelines to deploy classification and regression models to production, utilizing A/B testing and Causal Inference.",
      "Synthesized heterogeneous datasets leveraging SHAP to optimize targeting strategies, increasing brand reach by 20%.",
      "Architected a PoC AI Agent leveraging RAG, Knowledge Graphs, and FastAPI, reducing manual info retrieval time by 60%."
    ]
  },
  {
    role: "Associate / Data Analyst",
    company: "Axtria",
    duration: "JUL 2023 - APR 2024",
    details: [
      "Developed a high-concurrency validation tool using Streamlit and multithreaded Python scripts to parallelize KPI extraction.",
      "Designed scalable ETL workflows in Python and SQL, modernizing legacy manual processes into robust zero-error scripts.",
      "Mentored and upskilled junior team members, accelerating onboarding and best practices adoption."
    ]
  },
  {
    role: "Intern / Data Analyst Trainee",
    company: "Axtria",
    duration: "JAN 2023 - JUN 2023",
    details: [
      "Acquired deep pharmaceutical domain expertise by translating business requirements into rigorous analytical frameworks.",
      "Streamlined comprehensive data preprocessing pipelines incorporating automated data cleaning and validations."
    ]
  }
];

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <div className="container">
        <h2 className="heading text-center" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Experience</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={styles.timelineDot} />
              <h3 className={styles.role}>{exp.role}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <span className={styles.duration}>{exp.duration}</span>
              <ul className={styles.details}>
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
