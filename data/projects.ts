// data/projects.ts

export const projects = [
  {
  slug: 'shadow-keeper',
  title: 'Shadow Keeper v16.0',
  description: 'A high-performance, unified search interface for shadow libraries. Features include: The "Hydra" Engine, Real-time Surveillance Logging, Role-Based Access Control (RBAC), and Intelligent Auto-Splitting for large files.',
  tech: ['Python', 'AsyncIO', 'Telegram API', 'Render', 'Flask'], 
  status: 'Live',
  demoUrl: "https://t.me/shadowkeeperbot",
},
  {
    slug: 'docu-convert-bot',
    title: 'DocuConvert Core',
    description: 'High-performance document manipulation utility. Handles PDF merging, splitting, encryption, and OCR conversion via a Flask backend.',
    tech: ['Python', 'Flask', 'OCR', 'File Processing'],
    status: 'In Development',
    // repoUrl removed
    demoUrl: "https://docu-convert-bot.fly.dev/", 
  },
  {
    slug: 'emotion-detection',
    title: 'Facial Emotion AI',
    description: 'Machine learning pipeline for real-time emotion detection from images. Custom model training script with a Flask API wrapper.',
    tech: ['Python', 'TensorFlow/PyTorch', 'Flask', 'Computer Vision'],
    status: 'Prototype',
    // repoUrl removed
    demoUrl: "", 
  }
];