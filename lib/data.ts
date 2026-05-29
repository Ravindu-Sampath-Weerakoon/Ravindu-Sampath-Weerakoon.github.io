export const personalInfo = {
  name: "Ravindu Weerakoon",
  title: "BSc Hons in Computer Science Undergraduate",
  summary: "Computer Science undergraduate at the University of Peradeniya with practical experience in machine learning, cybersecurity, and full-stack development. Interested in building intelligent, secure, and scalable software systems through research and engineering.",
  contact: {
    phone: "+94 71 880 6546",
    email: "contact@ravinduweerakoon.me",
    secondaryEmail: "w.m.t.ravindusampath@gmail.com",
    github: "github.com/Ravindu-Sampath-Weerakoon",
    linkedin: "linkedin.com/in/ravindu-s-weerakoon",
    website: "ravinduweerakoon.me"
  }
};

export const projects = [
  {
    slug: "behavioral-biometric",
    title: "Behavioral Biometric Authentication System",
    type: "Research",
    date: "Jan 2026 – Present",
    stack: ["Python", "PyTorch", "ML"],
    description: "Engineered a privacy-preserving authentication system using Keystroke and Mouse Trajectory (KMT) dynamics.",
    details: "Applied the Johnson-Lindenstrauss Lemma for secure dimensionality reduction. Designed a curriculum learning pipeline with Deep SVDD for anomaly detection, leveraging feature entropy and Optuna tuning to maximize statistical robustness and model convergence."
  },
  {
    slug: "biomedical-ner",
    title: "Biomedical Named Entity Recognition Pipeline",
    type: "ML & Deep Learning",
    date: "May 2026 – Present",
    stack: ["Python", "PyTorch", "Transformers", "BERT", "ELMo"],
    description: "Developed a sequence-labeling pipeline for token-level BIO-tag disease extraction.",
    details: "Benchmarked 5 embedding types and 3 tokenizers to execute token-level BIO-tag disease extraction via Bi-LSTM architectures."
  },
  {
    slug: "tea-leaf-disease",
    title: "Tea Leaf Disease Classifier",
    type: "ML & Deep Learning",
    date: "Apr 2026 – May 2026",
    stack: ["Python", "PyTorch", "OpenCV"],
    description: "Engineered a 4-stage progressive unfreezing CNN pipeline with 90.54% accuracy.",
    details: "Featured custom Otsu’s segmentation and an intelligent F1-score weighted Hybrid Ensemble (ResNet50/VGG16) that boosted diagnostic accuracy."
  },
  {
    slug: "git-workflow-automation",
    title: "Git Workflow Automation CLI",
    type: "AI Automation Tool",
    date: "Feb 2026 – Mar 2026",
    stack: ["Python", "Git API", "GitHub CLI", "Ollama", "LLMs"],
    description: "Local LLM and GitHub CLI-driven automation tool for repository management.",
    details: "Featuring AI staging and context-aware commit generation from diff streams—while building a robust stdin-streamed pipeline with UTF-8 fallback and soft-reset history recovery."
  },
  {
    slug: "secure-system",
    title: "Cryptographically Secure System",
    type: "Cybersecurity",
    date: "Jan 2026 – Mar 2026",
    stack: ["Python", "Cryptography", "Blockchain"],
    description: "Zero-trust, end-to-end encrypted distributed platform.",
    details: "Using SECP256k1 ECC, ephemeral ECIES transport security, and Shamir’s Secret Sharing to enforce multi-party threshold consensus for secure bid decryption."
  },
  {
    slug: "rms",
    title: "Resource Management System (RMS)",
    type: "System Design",
    date: "Jan 2025 – Dec 2025",
    stack: ["Next.js", "MySQL", "Prisma", "Railway"],
    description: "Multi-tenant full-stack platform optimizing relational database schemas.",
    details: "Implemented connection pooling for heavy traffic and deployed automated CI/CD staging pipelines via GitHub Actions."
  }
];

export const experience = [
  {
    role: "Freelance Full-Stack Developer & Graphic Designer",
    company: "Freelancer.com & Local Clients",
    date: "Jan 2020 – Present",
    points: [
      "Execute global freelance contracts focusing on high-fidelity graphic design and interactive React front-end development.",
      "Engineered a high-reliability commercial platform deployed via Vercel with 3rd-party Google Review API integrations."
    ]
  },
  {
    role: "Web Development Team Member",
    company: "Hackers' Club, University of Peradeniya",
    date: "Jan 2024 – Present",
    points: [
      "Engineered and maintained the club’s official Next.js static production website.",
      "Managed event-driven deployment countdowns and digital infrastructure modifications."
    ]
  }
];

export const skills = {
  languages: ["Python", "C", "C++", "C#", "JavaScript/TypeScript", "SQL", "Bash/Shell", "Java"],
  frameworks: ["PyTorch", "TensorFlow/Keras", "Scikit-Learn", "Next.js", "React", "Flask", "FastAPI", "OpenCV", "OpenGL", "Transformers"],
  tools: ["Git/GitHub", "GitHub Actions", "Vercel", "Railway", "MySQL", "Prisma", "Optuna", "Ollama", "Anaconda"],
  expertise: ["Machine Learning", "NLP", "Computer Vision", "Cybersecurity", "Cryptography", "System Design", "Full-Stack Dev"]
};
