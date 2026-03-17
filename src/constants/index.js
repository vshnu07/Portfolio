import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  python,
  ai,
  ml,
  linkedIn,
  github,
  cert_nodejs,
  cert_oracle_devops,
  cert_oracle_genai,
  cert_js_essentials,
  cert_dynamic_web,
  cert_ml_guide,
  cert_java_prog,
  cert_dev_foundations,
  cert_dsa_lpu,
  cert_oop_lpu,
  cert_google_net,
  cert_responsive_web,
  cert_static_web,
  bankingLedger,
  expenseTracker,
  musicStreaming,
  fakeAccounts,
  imageClassification,
  stockPrediction,
  rubiks_cube,
  dsa_custom,
} from "../assets";

const navigationPaths = {
  about: "about",
  experience: "work",
  tech: "tech",
  works: "certifications",
  achievements: "achievements",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.experience,
    title: "Projects",
  },
  {
    id: navigationPaths.works,
    title: "Certifications",
  },
  {
    id: navigationPaths.achievements,
    title: "Achievements",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "AI & ML Enthusiast",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Data Analysis",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Machine Learning",
    icon: ml,
  },
  {
    name: "Artificial Intelligence",
    icon: ai,
  },
];


const experiences = [
  {
    title: "Banking Ledger Backend Application",
    company_name: "FinTech Development",
    company_website: "https://github.com/vshnu07/banking-ledger-v1",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2026",
    image: bankingLedger,
    points: [
      "Engineered a core banking backend with MVC architecture, multi-user role-based access, and JWT security.",
      "Integrated complex ACID-compliant transaction logic for high reliability in financial operations.",
      "Optimized data querying for large-scale operations using advanced MongoDB aggregation pipelines.",
      "Implemented secure authentication and precise authorization flows for distinct user roles.",
    ],
  },
  {
    title: "Expense Tracker",
    company_name: "Personal Finance Management",
    company_website: "https://github.com/vshnu07/expense-tracker-v1",
    icon: backend,
    iconBg: "#383E56",
    date: "Apr 2026",
    image: expenseTracker,
    points: [
      "Developed a full-stack expense tracker for personal finance management, enabling users to monitor income and expenses.",
      "Designed an intuitive dashboard for visualizing spending patterns and financial summaries.",
      "Utilized Node.js, Express.js, and MongoDB to build a robust backend with RESTful API architecture.",
      "Implemented user authentication and data persistence to ensure secure and reliable financial tracking.",
    ],
  },
  {
    title: "TuneStream - Music Streaming API",
    company_name: "Media Streaming Platform",
    company_website: "https://github.com/vshnu07/tunestream-v1",
    icon: creator,
    iconBg: "#383E56",
    date: "Apr 2026",
    image: musicStreaming,
    points: [
      "Architected a scalable backend for a music streaming application using Node.js, Express.js, and MongoDB.",
      "Structured the application with MVC architecture for modularity and future feature expansion.",
      "Engineered comprehensive RESTful APIs for managing user profiles, media operations, and data flow.",
      "Secured user endpoints and sensitive data with robust JWT-based authentication and authorization.",
    ],
  },
  {
    title: "Fake Social Media Account Detection",
    company_name: "AI & ML Research",
    company_website: "https://github.com/vshnu07/fake-social-media-accounts-detection-v1",
    icon: creator,
    iconBg: "#383E56",
    date: "Jan 2026",
    image: fakeAccounts,
    points: [
      "Developed a machine learning model to detect and classify fake social media accounts with high accuracy.",
      "Performed extensive data preprocessing, feature engineering, and exploratory data analysis on social media datasets.",
      "Trained and evaluated multiple classification algorithms to identify fraudulent account patterns.",
      "Achieved strong accuracy metrics by fine-tuning model hyperparameters and optimizing feature selection.",
    ],
  },
  {
    title: "Image Classification Pipeline",
    company_name: "Computer Vision Project",
    company_website: "https://github.com/vshnu07/image-classification-v1",
    icon: mobile,
    iconBg: "#383E56",
    date: "Nov 2025",
    image: imageClassification,
    points: [
      "Constructed an end-to-end image classification pipeline for accurate multi-class object detection.",
      "Applied advanced feature extraction methods including Histogram of Oriented Gradients (HOG) to capture spatial visual patterns.",
      "Utilized Support Vector Machines (SVM) for high-dimensional data classification and model robustness.",
      "Integrated the pipeline with scikit-learn for streamlined training, validation, and performance benchmarking.",
    ],
  },
  {
    title: "Stock Movement Prediction",
    company_name: "Big Data & ML Project",
    company_website: "https://github.com/vshnu07/Stock-Movement-Prediction",
    icon: creator,
    iconBg: "#383E56",
    date: "Oct 2025",
    image: stockPrediction,
    points: [
      "Architected a high-performance system for stock market trend prediction using regression and time-series analysis.",
      "Managed large-scale datasets by performing comprehensive cleaning, normalization, and feature scaling.",
      "Leveraged scikit-learn for model training and deployment, focusing on minimizing Mean Squared Error (MSE).",
      "Conducted detailed data visualization to interpret market trends and validate model outcome metrics.",
    ],
  },
];

const projects = [
  // Sorted newest → oldest
  {
    name: "Node JS",
    description: "Completed Node.js certification covering server-side development, REST APIs, and backend best practices.",
    tags: [{ name: "NxtWave", color: "blue-text-gradient" }],
    image: cert_nodejs,
    hosted_link: "https://certificates.ccbp.in/intensive/node-js?id=XNOHUPYCID",
  },
  {
    name: "JavaScript Essentials",
    description: "Certification covering core JavaScript concepts, asynchronous programming, and DOM manipulation.",
    tags: [{ name: "NxtWave", color: "blue-text-gradient" }],
    image: cert_js_essentials,
    hosted_link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=JTXPWIWPBD",
  },
  {
    name: "Oracle OCI 2025 DevOps Professional",
    description: "Oracle Certified Professional certification for DevOps on Oracle Cloud Infrastructure.",
    tags: [{ name: "Oracle", color: "blue-text-gradient" }],
    image: cert_oracle_devops,
    hosted_link: "#",
  },
  {
    name: "Oracle OCI 2025 GenAI Professional",
    description: "Oracle Certified Professional certification for Generative AI on Oracle Cloud Infrastructure.",
    tags: [{ name: "Oracle", color: "blue-text-gradient" }],
    image: cert_oracle_genai,
    hosted_link: "#",
  },
  {
    name: "Dynamic Web Application",
    description: "Certification for building dynamic web applications with hands-on project-based learning and modern web technologies.",
    tags: [{ name: "NxtWave", color: "blue-text-gradient" }],
    image: cert_dynamic_web,
    hosted_link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=EFGVYQITWU",
  },
  {
    name: "ML & Data Science Training",
    description: "Comprehensive training in Machine Learning and Data Science covering supervised learning and data preprocessing.",
    tags: [{ name: "Cipher Schools", color: "pink-text-gradient" }],
    image: cert_ml_guide,
    hosted_link: "https://www.cipherschools.com/certificate/preview?id=6885f90cca64e035786b267d",
  },
  {
    name: "Java Programming",
    description: "Certification in Java programming covering core concepts, syntax, and application development.",
    tags: [{ name: "LPU", color: "blue-text-gradient" }],
    image: cert_java_prog,
    hosted_link: "#",
  },
  {
    name: "Developer Foundations",
    description: "Certification in core developer foundations including programming logic and software development principles.",
    tags: [{ name: "NxtWave", color: "blue-text-gradient" }],
    image: cert_dev_foundations,
    hosted_link: "https://certificates.ccbp.in/intensive/developer-foundations?id=DEBQQPGDRC",
  },
  {
    name: "Data Structures & Algorithms",
    description: "Certification focused on core DSA concepts including arrays, trees, and problem-solving techniques.",
    tags: [{ name: "LPU", color: "blue-text-gradient" }],
    image: cert_dsa_lpu,
    hosted_link: "#",
  },
  {
    name: "Object-Oriented Programming",
    description: "Certification covering OOP principles — encapsulation, inheritance, polymorphism, and abstraction.",
    tags: [{ name: "LPU", color: "blue-text-gradient" }],
    image: cert_oop_lpu,
    hosted_link: "#",
  },
  {
    name: "Computer Networking",
    description: "Google certification for bits and bytes of computer networking, covering protocols and architecture.",
    tags: [{ name: "Google", color: "blue-text-gradient" }],
    image: cert_google_net,
    hosted_link: "#",
  },
  {
    name: "Responsive Website",
    description: "Certification for building responsive websites that look great on any device or screen size.",
    tags: [{ name: "NxtWave", color: "blue-text-gradient" }],
    image: cert_responsive_web,
    hosted_link: "https://certificates.ccbp.in/intensive/responsive-website?id=MNWIDHHZXO",
  },
  {
    name: "Static Website",
    description: "Certification for building fast, static websites using semantic HTML and CSS best practices.",
    tags: [{ name: "NxtWave", color: "blue-text-gradient" }],
    image: cert_static_web,
    hosted_link: "https://certificates.ccbp.in/intensive/static-website?id=VXHGARYZUQ",
  },
];

const achievements = [
  {
    title: "Secured 2nd Prize in District-Level Rubik’s Cube Competition",
    icon: rubiks_cube,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Demonstrated exceptional speed and mental agility in a competitive environment.",
      "Recognized for technical proficiency and consistent performance under pressure.",
    ],
  },
  {
    title: "Achieved Top 5 Team Ranking in Code Off Duty – A Web Hackathon",
    icon: web, 
    iconBg: "#E6DEDD",
    date: "2024",
    points: [
      "Collaborated in a high-intensity environment to design and develop a functional web solution.",
      "Contributed to core logic and UI implementation, ensuring a seamless user experience.",
    ],
  },
  {
    title: "Completed Data Structures & Algorithms Certification",
    icon: dsa_custom,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Mastered core DSA concepts including trees, graphs, and dynamic programming.",
      "Focused on optimizing algorithm efficiency and solving complex computational problems.",
    ],
  },
];

const personalInfo = {
  name: "Vishnu",
  fullName: "Golla Vishnu",
  email: "vishnugolla46@gmail.com",
  mobile: "+91-7989552369",
  role: "Software & AI/ML Engineer",
  about: `I'm Golla Vishnu, a Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University, Phagwara. I'm a passionate Software Developer who thrives on building scalable, secure, and production-ready backend systems using Node.js, Express.js, and MongoDB, while following best practices like MVC architecture, JWT-based authentication, role-based access control, and ACID-compliant transaction logic. With a solid foundation in Data Structures, Algorithms, Object-Oriented Programming, Operating Systems, DBMS, and Computer Networks, I approach every problem with a structured and analytical mindset. On the AI and ML front, I enjoy designing end-to-end machine learning pipelines, performing feature engineering, and training models that generalize well on real-world data — with hands-on experience in HOG feature extraction, SVM classifiers, and scikit-learn. I'm a firm believer in continuous learning and clean code, always looking for smarter and more impactful ways to solve complex problems at the intersection of software development, artificial intelligence, and machine learning.`,
  projectsIntro: `Here are the certifications I have earned through dedicated learning and training programs. Each one reflects my commitment to continuous growth across backend development, machine learning, data science, and core computer science fundamentals.`,
};

const publicUrls = {
  resumes: {
    general: "https://drive.google.com/file/d/10eIEyTdsA__xlOHtcZwgZ1l8GTK07kTy/view?usp=sharing",
    specialised: "https://drive.google.com/file/d/19AJxMVyIAirvzeY7swbZ4tbaCXl91jAv/view?usp=drive_link",
  },
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/golla-vishnu",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/vshnu07",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  achievements,
  navigationPaths,
  personalInfo,
  publicUrls,
};