
import { supabase } from '../integrations/supabase/client';

export interface ResumeData {
  name: string;
  title: string;
  address: string;
  email: string;
  phone?: string;
  summary: string;
  experiences: {
    company: string;
    position: string;
    period: string;
    responsibilities: string[];
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    details: string[];
  }[];
  education: {
    institution: string;
    degree: string;
    period: string;
  }[];
  certifications: {
    name: string;
    organization: string;
    year: string;
  }[];
  skills: {
    category: string;
    items: string[];
  }[];
}

export const defaultResumeData: ResumeData = {
  name: "SHIN YAW YANG",
  title: "Full-stack Developer",
  address: "816 Dahlia, Brgy. San Agustin, CSFP",
  email: "syty03@gmail.com",
  summary: "Solution-oriented and problem solver with experience in full-stack development. Skilled in building scalable, efficient, and secure software solutions. Proficient in technical documentation, collaboration, and debugging complex systems.",
  experiences: [
    {
      company: "Clark International Airport Corporation",
      position: "Full-Stack Developer Intern",
      period: "Dec 2024 - Apr 2025",
      responsibilities: [
        "Developed and deployed a full-stack HR Management System using React, TypeScript, and Supabase.",
        "Created secure authentication (RBAC, RLS) and optimized database queries for seamless performance.",
        "Designed UI with Tailwind CSS and implemented real-time notifications, scheduling, and document storage.",
        "Worked on system security, debugging, and automation to enhance productivity."
      ]
    },
    {
      company: "Upwork",
      position: "Full-Stack Developer",
      period: "Nov 2024 - Dec 2024",
      responsibilities: [
        "Built a restaurant ordering system with React, Node.js, and PostgreSQL.",
        "Integrated payment processing and optimized UI/UX for user engagement.",
        "Developed a real-time tracking dashboard for managing customer orders and analytics."
      ]
    }
  ],
  projects: [
    {
      title: "NLP-OCR Text Detection and Extraction",
      description: "A Python-based OCR system with machine learning for text extraction.",
      technologies: ["Python", "OpenCV", "tesseract OCR", "Flask", "NLP"],
      details: [
        "Developed a Python-based Optical Character Recognition (OCR) system using OpenCV and tesseract OCR to detect and extract text from images.",
        "Integrated machine learning algorithms to enhance text recognition accuracy.",
        "Deployed the solution as a Flask-based web application, allowing users to upload images and retrieve extracted text.",
        "Built a Natural Language Processing (NLP) model to detect and correct misspelled words in user input.",
        "The model analyzed context and recommended the correct word based on the input."
      ]
    }
  ],
  education: [
    {
      institution: "Holy Angel University (HAU)",
      degree: "Bachelor's Degree in Computer Science",
      period: "2021 - 2025"
    }
  ],
  certifications: [
    {
      name: "Full-Stack Web Development",
      organization: "Udemy",
      year: "2025"
    },
    {
      name: "Front-End Development",
      organization: "Meta",
      year: "2025"
    },
    {
      name: "CyberOps Associate",
      organization: "Cisco",
      year: "2024"
    },
    {
      name: "CyberSecurity",
      organization: "Cisco",
      year: "2021"
    },
    {
      name: "IoT",
      organization: "Cisco",
      year: "2021"
    }
  ],
  skills: [
    {
      category: "Development",
      items: ["Full-Stack Development (React, Next.js, Node.js, TypeScript, Supabase)", "Database Management (PostgreSQL, MongoDB, Firebase)", "UI/UX Design (Tailwind CSS, Figma)", "API Development (REST, GraphQL)"]
    }
  ]
};

export async function fetchResumeData(): Promise<ResumeData> {
  try {
    // In the future, we can fetch this data from Supabase
    // const { data, error } = await supabase.from('resume').select('*').single();
    // if (error) throw error;
    // return data as ResumeData;
    
    // For now, return the default data
    return defaultResumeData;
  } catch (error) {
    console.error("Error fetching resume data:", error);
    return defaultResumeData;
  }
}
