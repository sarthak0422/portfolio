import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFlutter,
  SiMongodb,
  SiFirebase,
  SiPhp,
  SiNodedotjs,
  SiGit,
  SiPostman,
  SiGithub,
  SiFigma,
  SiCanva,
  SiOpenai,
  SiGoogle,
  SiElevenlabs,
  SiGithubcopilot,
  SiSaturn,
} from "react-icons/si";
import { FaCode, FaHeart, FaRobot, FaTools } from "react-icons/fa";
import { GiSpermWhale } from "react-icons/gi";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
};

export type Skill = {
  name: string;
  icon: React.ElementType;
  level?: number;
  category: "frontend" | "backend" | "design" | "tools" | "ai";
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A full-featured e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard.",
    image: "/assets/ecommerce.png",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Stripe", "Firebase"],
    demoUrl: "https://halloweenk.vercel.app/",
    githubUrl: "https://github.com/sarthak0422/React_Ecommerce_Website.git",
  },
  {
    id: 2,
    title: "Decentralized File Storage",
    description:
      "Smart task management app that uses AI to prioritize and categorize tasks, with team collaboration features.",
    image: "/assets/decenteralizedfilestorage.png",
    tags: ["Python", "Html", "CSS", "SQLite", "Flask"],
    demoUrl:
      "https://sarthak0422.github.io/Blockchain-based-File-Storage-main/",
    githubUrl:
      "https://github.com/sarthak0422/Blockchain-based-File-Storage-main.git",
  },
  {
    id: 3,
    title: "🎃 PumpkinAI: Voice-Activated Intelligent Assistant",
    description: "PumpkinAI is a sleek desktop assistant with a futuristic dark, pumpkin-orange design that combines local system control with advanced AI. It lets you use voice or text to open apps, search the web, manage tasks, and chat intelligently using Google’s Gemini model—all in a fast, smooth, non-blocking experience.",
    image: "/assets/pumpkinai.png",
    tags: ["Python", "Google_Studio", "PyQT6", "pyttsx3",],
    demoUrl: "https://sarthak0422.github.io/PumpkinAi/",
    githubUrl: "https://github.com/sarthak0422/PumpkinAi.git",
  },
  {
    id: 4,
    title: "Weather App",
    description:
      "It is a modern weather forecasting application built with React JS, TypeScript, and Tailwind CSS, featuring real-time data from the OpenWeather API, advanced data fetching using Tanstack Query, and interactive charts with Recharts, all styled using Shadcn UI.",
    image: "/assets/climateapp.png",
    tags: ["React JS","TypeScript","Tailwind CSS","Tanstack Query","Recharts","OpenWeather API","Shadcn UI",],
    demoUrl: "https://climate-sarthak.vercel.app/",
    githubUrl: "https://github.com/sarthak0422/ClimatEApp",
  },
  {
  id: 5,
  title: "College Placement Management System",
  description: "The College Placement Management System is a web-based platform developed by final-year students of A.C. Patil College of Engineering to digitize and streamline the placement process.",
  image: "assets/college.png",
  tags: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS", "Bootstrap"],
  demoUrl: "https://example.com",
  githubUrl: "https://github.com/sarthak0422/PlacementSystem"
},
  // {
  //   id: 6,
  //   title: "6",
  //   description: "Comprehensive fitness tracking app with personalized workout plans, nutrition tracking, and progress analytics.",
  //   image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg",
  //   tags: ["React Native", "GraphQL", "Node.js", "Firebase", "TensorFlow"],
  //   demoUrl: "https://example.com",
  //   githubUrl: "https://github.com",
  // },

  {
  id: 7,
  title: "Food Delivery App",
  description: "Food Delivery App – A Flutter app for browsing restaurants, ordering food, and managing your cart with ease.",
  image: "assets/food_delivery_login_screen.jpg",
  tags: ["Flutter", "Dart", "Firebase", "Food Delivery", "Mobile App", "UI/UX", "Android", "iOS", "Provider", "Cart System"],
  demoUrl: "https://sarthakfoodeliveryapp.vercel.app/",
  githubUrl: "https://github.com/sarthak0422/Food_Delivery_App.git",
},

{
  id: 8,
  title: "Mango Store",
  description: "Mango Store – A React app for browsing and purchasing fresh mangoes with ease.",
  image: "assets/mango_store.jpg",
  tags: ["React", "Vite", "Firebase", "E-commerce", "Tailwind CSS", "Provider", "Cart System", "Razorpay"],
  demoUrl: "https://sarthaktambde.vercel.app/",
  githubUrl: "https://github.com/sarthak0422/Mango_Store.git",
},



];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React.js", icon: SiReact, category: "frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "frontend" },
  { name: "HTML5", icon: SiHtml5, category: "frontend" },
  { name: "CSS3", icon: SiCss3, category: "frontend" },
  { name: "Flutter", icon: SiFlutter, category: "frontend" },

  // Backend
  { name: "MongoDB", icon: SiMongodb, category: "backend" },
  { name: "Firebase", icon: SiFirebase, category: "backend" },
  { name: "PHP", icon: SiPhp, category: "backend" },
  { name: "Node.js", icon: SiNodedotjs, category: "backend" },

  // Tools
  { name: "Git", icon: SiGit, category: "tools" },
  { name: "VS Code", icon: FaCode, category: "tools" },
  { name: "Postman", icon: SiPostman, category: "tools" },
  { name: "GitHub", icon: SiGithub, category: "tools" },

  // Design
  { name: "Figma", icon: SiFigma, category: "design" },
  { name: "Canva", icon: SiCanva, category: "design" },

  // AI
  { name: "ChatGPT", icon: SiOpenai, category: "ai" },
  { name: "Gemini", icon: SiGoogle, category: "ai" },
  { name: "Google AI Studio", icon: SiGoogle, category: "ai" },
  { name: "Lovable", icon: FaHeart, category: "ai" },
  { name: "DeepSeek", icon: GiSpermWhale, category: "ai" },
  { name: "Gamma", icon: SiGoogle, category: "ai" },
  { name: "Copilot", icon: SiGithubcopilot, category: "ai" },
  { name: "Grok", icon: SiSaturn, category: "ai" },
  { name: "Elevenlabs", icon: SiElevenlabs, category: "ai" },
];
