import { motion } from 'framer-motion';
import { FaLinkedin as Linkedin, FaGithub as Github, FaEnvelope as Mail } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer className={styles.contactSection}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Get in touch.
      </motion.h2>

      <div className={styles.links}>
        <motion.a 
          href="https://linkedin.com/in/akshat-r-0589b4b1" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.contactLink}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Linkedin /> LinkedIn
        </motion.a>
        <motion.a 
          href="https://github.com/Akshat-Raj-Vansh-X" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.contactLink}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Github /> GitHub
        </motion.a>
        <motion.a 
          href="mailto:rajvanshakshat@gmail.com" 
          className={styles.contactLink}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Mail /> Email
        </motion.a>
      </div>

      <motion.div 
        className={styles.signatureFooter}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        arv
      </motion.div>

      <div className={styles.footerText}>
        <p>© {new Date().getFullYear()} Akshat Raj Vansh. Designed with minimal aesthetics.</p>
      </div>
    </footer>
  );
};

export default Contact;
