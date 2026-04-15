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
              Data Scientist with a passion for <span className={styles.highlightText}>extracting insights</span> from complex structured and unstructured data. Proficient in forecasting, commercial modeling, and building robust <span className={styles.highlightText}>Machine Learning & GenAI (RAG)</span> solutions that drive strategic decision-making.
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
              Specializing in translating complex business requirements into high-fidelity <span className={styles.highlightText}>predictive models</span> and deploying them using modern <span className={styles.highlightText}>Data Pipelines</span> and CI/CD best practices.
            </p>
          </motion.div>

          {/* Add more bento items if needed */}
        </div>
      </div>
    </section>
  );
};

export default About;
