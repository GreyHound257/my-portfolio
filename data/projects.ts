// data/projects.ts

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[]; // Renamed from 'tags' to 'tech' for clarity
  link?: string;
  status: 'Live' | 'In Development' | 'Prototype';
};

export const projects: Project[] = [
  {
    slug: 'shadow-keeper',
    title: 'The Shadow Keeper',
    description: 'A librarian-themed Telegram bot for the Enchanted Shadow Book Coven. Manages rulebooks and group interactions with a mystical personality.',
    tech: ['Python', 'Telegram API', 'Replit', 'NoSQL'],
    status: 'In Development',
    link: 'https://github.com/GreyHound257/ShadowKeeper', 
  },
  {
    slug: 'docu-convert-bot',
    title: 'DocuConvert Core',
    description: 'High-performance document manipulation utility. Handles PDF merging, splitting, encryption, and OCR conversion via a Flask backend.',
    tech: ['Python', 'Flask', 'OCR', 'File Processing'],
    status: 'In Development',
    link: 'https://github.com/GreyHound257/docu-convert-bot',
  },
  {
    slug: 'emotion-detection',
    title: 'Facial Emotion AI',
    description: 'Machine learning pipeline for real-time emotion detection from images. Custom model training script with a Flask API wrapper.',
    tech: ['Python', 'TensorFlow/PyTorch', 'Flask', 'Computer Vision'],
    status: 'Prototype',
    link: 'https://github.com/GreyHound257/emotion-detection-web-app',
  }
];