// data/projects.ts

export interface Project {
  title: string;
  description: string;
  tech: string[];
  slug: string;        // Used for the URL ID (if you kept pages)
  repoUrl: string;     // <--- NEW: Link to GitHub
  demoUrl?: string;    // <--- NEW: Link to Live Site (Optional, marked by ?)
  image?: string;      // Optional screenshot
  status: 'Live' | 'In Development' | 'Prototype';
};

export const projects: Project[] = [
  {
    slug: 'shadow-keeper',
    title: 'The Shadow Keeper',
    description: 'A librarian-themed Telegram bot for the Enchanted Shadow Book Coven. Manages rulebooks and group interactions with a mystical personality.',
    tech: ['Python', 'Telegram API', 'Replit', 'NoSQL'],
    status: 'In Development',
    repoUrl: 'https://github.com/GreyHound257/ShadowKeeper',
    demoUrl: "https://edayoobatewose.vercel.app/", //Replace with actual URL
  },
  {
    slug: 'docu-convert-bot',
    title: 'DocuConvert Core',
    description: 'High-performance document manipulation utility. Handles PDF merging, splitting, encryption, and OCR conversion via a Flask backend.',
    tech: ['Python', 'Flask', 'OCR', 'File Processing'],
    status: 'In Development',
    repoUrl: 'https://github.com/GreyHound257/docu-convert-bot',
    demoUrl: "https://docu-convert-bot.fly.dev/", //Replace with actual URL
  },
  {
    slug: 'emotion-detection',
    title: 'Facial Emotion AI',
    description: 'Machine learning pipeline for real-time emotion detection from images. Custom model training script with a Flask API wrapper.',
    tech: ['Python', 'TensorFlow/PyTorch', 'Flask', 'Computer Vision'],
    status: 'Prototype',
    repoUrl: 'https://github.com/GreyHound257/emotion-detection-web-app',
    demoUrl: "https://emotion-detection-web-app.fly.dev/", //Replace with actual URL
  }
];