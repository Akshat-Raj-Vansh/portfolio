import { motion } from 'framer-motion';
import styles from './Experience.module.css';

const experiences = [
  {
    role: "Data Scientist",
    company: "Axtria",
    duration: "Jul 2024 - Present",
    details: [
      "Architected and maintained a production-grade predictive alerting system for ~9K HCPs across 10 alert models, combining XGBoost and LightGBM classifiers/regressors to forecast patient drug-switching behavior within a 90-day horizon; achieved 85%+ AUC through iterative model optimization and feature engineering across multi-source datasets (IQVIA LAAD, Claims, SDOH, Dimensions, Fact, Source of Business tables)",
      "Developed two net-new predictive models from scratch via extensive EDA, expanding HCP targeting reach by ~20% by capturing previously unaddressed market segments",
      "Engineered suppression logic using historical alert data and rep feedback signals to redistribute message IDs, eliminating repetitive alert fatigue with less than 5% impact on total predictive message volume",
      "Conducted Key Driver Analysis using SHAP values to surface clinically interpretable feature importance insights for client stakeholders, translating model outputs into actionable business decisions",
      "Managed end-to-end ML experiment lifecycle using MLflow — tracking parameters, metrics, and artifacts across iterative training cycles — supporting CI/CD-aligned model versioning, reproducibility, and streamlined deployment",
      "Designed and deployed an Evaluation & QC pipeline with integrated data drift monitoring, proactively triggering retraining pipelines on feature distribution shifts and logging model performance month-over-month — reducing per-cycle manual effort by ~2 hours and improving operational efficiency by 5–10%"
    ]
  },
  {
    role: "Data Analyst",
    company: "Axtria",
    duration: "Jul 2023 - Jun 2024",
    details: [
      "Engineered an end-to-end Incentive Compensation (IC) and Sales Crediting pipeline in Python, fully automating a complex multi-step manual process — eliminating a ~20% manual error rate and saving 10+ hours/week in processing time",
      "Guided and mentored two new hires to ensure smooth onboarding in the team"
    ]
  },
  {
    role: "Analyst Intern",
    company: "Axtria",
    duration: "Jan 2023 - Jun 2023",
    details: [
      "Developed and maintained data validation and preprocessing pipelines across sales performance and target-setting datasets, ensuring data quality standards for downstream analytical workflows"
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
