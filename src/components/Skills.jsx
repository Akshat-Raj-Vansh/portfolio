import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  "Python", "SQL", "PySpark", "AWS", "Databricks",
  "Scikit-learn", "XGBoost", "LightGBM", "Feature Engineering", "Statistical Modeling",
  "LLMs / GenAI", "RAG", "LangChain", "FAISS / ChromaDB", "Transformers",
  "MLflow", "CI/CD / Docker", "Data Pipelines", "Model Deployment", "Streamlit",
  "Forecasting", "A/B Testing", "Causal Inference", "Data Visualization", "NLP"
];

const Skills = () => {
  return (
    <section className={styles.skillsSection}>
      <div className="container">
        <h2 className="heading text-center" style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Technical Arsenal</h2>
        <div className={styles.grid}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillBadge}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
