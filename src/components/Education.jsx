import { motion } from 'framer-motion';
import styles from './Education.module.css';

const educationData = [
  {
    degree: "M.Tech | Artificial Intelligence and Machine Learning",
    institution: "National Institute of Technology, Hamirpur",
    grade: "Grade - 8.91/10",
    year: "2023"
  },
  {
    degree: "B.Tech / B.E. | Computer Science and Engineering (CSE)",
    institution: "National Institute of Technology, Hamirpur",
    grade: "Grade - 9.21/10",
    year: "2023"
  }
];

const Education = () => {
  return (
    <section className={styles.educationSection}>
      <div className="container">
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Education
        </motion.h2>
        <div className={styles.grid}>
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className={styles.header}>
                <span className={styles.year}>{edu.year}</span>
                <span className={styles.grade}>{edu.grade}</span>
              </div>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <h4 className={styles.institution}>{edu.institution}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
