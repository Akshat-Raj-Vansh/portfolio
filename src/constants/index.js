import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a Data Scientist with 3+ years of hands-on experience in building end-to-end AI solutions, advanced analytics pipelines, and GenAI-powered applications, primarily in the pharmaceutical and healthcare analytics domain. My expertise spans Python, PyTorch, TensorFlow, SQL, and cloud platforms like AWS and GCP. I am passionate about leveraging machine learning, deep learning, and large language models (LLMs) to solve complex business problems and drive real-world impact.`;

export const ABOUT_TEXT = `I am a dedicated Data Scientist with deep expertise in machine learning, deep learning, NLP, time series forecasting, and building robust analytics solutions for large-scale enterprise data. With professional experience at Axtria and a track record of impactful pharma analytics projects, I have developed ML models for classification, forecasting, and GenAI-powered insights using cutting-edge tools like PyTorch, Hugging Face Transformers, scikit-learn, and MLflow. I thrive in collaborative and innovative environments, continually upskilling in emerging AI technologies. Beyond work, I enjoy open-source contributions, research, and exploring new advancements in AI.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Data Scientist",
    company: "Axtria",
    description: `Developed an Activation module with RNNs and attention in PyTorch for dynamic spend strategy modeling; led hyperparameter optimization and A/B testing, resulting in a 20% engagement boost. Built advanced regression solutions with interactions, Lasso/Ridge, and SHAP for ROI analytics. Automated CI/CD with MLflow, GitHub Actions, and Docker.`,
    technologies: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "MLflow",
      "DVC",
      "GitHub Actions",
      "Docker",
      "SHAP",
    ],
  },
  {
    year: "2023 - 2024",
    role: "Data Analyst",
    company: "Axtria",
    description: `Built physician adoption classifiers (Random Forest/XGBoost: 82/84% accuracy) to optimize pharma marketing. Developed async KPI scraper (Selenium, API monitoring, anomaly detection) and a parallelized Boto3 S3 uploader (reduced time by 20%, cost by 10%).`,
    technologies: [
      "Python",
      "XGBoost",
      "Random Forest",
      "Selenium",
      "Boto3",
      "AWS S3",
      "API Monitoring",
    ],
  },
];

export const PROJECTS = [
  {
    title: "GenAI-Based Pharma Insights",
    image: project1,
    description:
      "Automated KPI extraction from pharma reports using local LLMs, LangChain, and FAISS; applied few-shot learning and fine-tuning, cutting manual review time by 50% while achieving 95% summary accuracy.",
    technologies: [
      "Python",
      "LLMs",
      "LangChain",
      "FAISS",
      "Few-shot Learning",
      "NLP",
    ],
  },
  {
    title: "Agentic Task Planner",
    image: project2,
    description:
      "Personal AI agent leveraging RAG, BERT/GPT, and contextual embeddings for email parsing, multi-turn task summarization, and automated replies—boosting workflow efficiency by 30% via automation and intent recognition.",
    technologies: ["Python", "RAG", "BERT", "GPT", "NLP", "Automation"],
  },
  {
    title: "Atrial Fibrillation Detection",
    image: project3,
    description:
      "Multi-class classifier (XGBoost + CNN-LSTM) for atrial fibrillation detection from IoT ECG data, achieving 90% sensitivity to enable scalable early diagnosis and remote monitoring.",
    technologies: ["XGBoost", "CNN-LSTM", "IoT", "ECG", "Time Series"],
  },
  {
    title: "Voice Sentiment Analysis",
    image: project4,
    description:
      "End-to-end pipeline with speech-to-text, RoBERTa, and Wav2Vec2 for emotion recognition in voice; classified 8+ emotions, improving SER model accuracy using data augmentation and transfer learning.",
    technologies: [
      "Speech-to-Text",
      "RoBERTa",
      "Wav2Vec2",
      "Transfer Learning",
      "SER",
    ],
  },
];

export const CONTACT = {
  address: "Noida, India",
  phoneNo: "+91 7355026029",
  email: "rajvanshakshat@gmail.com",
};
