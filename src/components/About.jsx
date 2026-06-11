import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        <div className={styles.bentoGrid}>
          <motion.div 
            className={`${styles.card} ${styles.cardWide}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className={styles.description}>
              Data Scientist with 3+ years of experience building and shipping production ML systems — from <span className={styles.highlightText}>gradient boosting models</span> and <span className={styles.highlightText}>RAG pipelines</span> to automated monitoring and retraining infrastructure.
            </p>
          </motion.div>

          <motion.div 
            className={`${styles.card} ${styles.cardTall}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={`text-gradient ${styles.statNumber}`}>3+</div>
            <div className={styles.statLabel}>Years of Experience</div>
          </motion.div>

          <motion.div 
            className={`${styles.card} ${styles.cardWide}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className={styles.description}>
              Experienced in end-to-end <span className={styles.highlightText}>ML lifecycle management</span> (MLflow, CI/CD, Databricks), feature engineering across complex multi-source datasets, and translating model outputs into <span className={styles.highlightText}>measurable business impact</span>.
            </p>
          </motion.div>

          {/* Add more bento items if needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
