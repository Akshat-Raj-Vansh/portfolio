import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  "Python", "SQL", "PySpark", "Databricks",
  "Machine Learning", "Predictive Analytics", "Statistical Modeling", "Regression",
  "Scikit-Learn", "XGBoost", "Gradient Boosting", "LightGBM", "Feature Engineering",
  "Generative AI", "Retrieval Augmented Generation", "LangChain", "FAISS / ChromaDB", "LLMs",
  "LSTM", "Deep Learning", "Artificial Neural Networks", "Natural Language Processing", "NLP",
  "MLflow", "Ci/Cd", "Customer Segmentation", "KPI Analysis", "Data Visualization", "Data Pipelines"
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
