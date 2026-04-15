import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import styles from './Hero.module.css';

const Hero = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const handleMouseMove = (e) => {
    const rect = document.body.getBoundingClientRect();
    x.set((e.clientX / rect.width) - 0.5);
    y.set((e.clientY / rect.height) - 0.5);
  };

  return (
    <section 
      className={styles.heroSection} 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      <motion.div 
        className={styles.spotlight}
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], ['-30%', '30%']),
          y: useTransform(mouseYSpring, [-0.5, 0.5], ['-30%', '30%'])
        }}
      />
      
      <motion.div 
        className={styles.signatureBg}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          x: useTransform(mouseXSpring, [-0.5, 0.5], ['5%', '-5%']),
          y: useTransform(mouseYSpring, [-0.5, 0.5], ['5%', '-5%'])
        }}
      >
        arv
      </motion.div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className={styles.title}>
              Akshat Raj Vansh
              <br />
              <span className="text-gradient">Data Scientist</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className={styles.subtitle}>
              Specializing in Machine Learning and GenAI. Crafting scalable, data-driven pipelines and robust predictive models that translate raw mechanics into business value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className={styles.ctaButton} onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
              Let's Connect <ArrowRight size={16} />
            </button>
            <a href="https://github.com/Akshat-Raj-Vansh-X" target="_blank" rel="noopener noreferrer" className={styles.secondaryButton}>
              <Github size={16} /> View GitHub
            </a>
          </motion.div>
        </div>

        <motion.div 
          className={styles.modelContainer}
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 0.4 },
            filter: { duration: 1, delay: 0.4 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(255,255,255,0.08)" }}
        >
          <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Akshat Portrait" className={styles.avatarImage} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
