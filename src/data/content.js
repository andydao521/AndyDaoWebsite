// Central source of truth for all resume/portfolio content.
// Swap values here to update the site — no need to touch component files.

import headshot from "../assets/andy-headshot.jpg";

export const profile = {
  name: "Andy Dao",
  initials: "AD",
  role: "Software Engineer",
  tagline:
    "Computer Science student at the University of Houston, building full-stack apps and machine learning models that turn data into decisions.",
  location: "Houston, TX",
  email: "andydao521@gmail.com",
  phone: "346-971-2305",
  linkedin: "https://www.linkedin.com/in/andy-h-dao",
  // Set to a real URL once available; the GitHub link/icon is hidden while this is empty.
  github: "",
  // Drop resume.pdf into /public and this button will work automatically.
  resumeHref: "/resume.pdf",
  photo: headshot,
  badges: ["Python", "React", "JavaScript", "SQL"],
};

export const about = {
  paragraphs: [
    "I'm a senior at the University of Houston studying Computer Science with a minor in Mathematics, graduating December 2027. I like building things end-to-end — from training a model on messy data to shipping the interface someone actually clicks on.",
    "Outside of coursework, I direct coding competitions for Code Coogs and coordinate the Filipino Student Association's sports program, which has taught me as much about organizing people as writing code has taught me about organizing logic.",
  ],
  facts: [
    { label: "Based in", value: "Houston, TX" },
    { label: "Studying", value: "B.S. Computer Science, Math Minor" },
    { label: "Graduating", value: "December 2027" },
    { label: "Focus", value: "Full-stack & applied ML" },
  ],
};

export const education = {
  school: "University of Houston",
  location: "Houston, TX",
  degree: "Bachelor of Science in Computer Science, Minor in Mathematics",
  dates: "Aug 2023 — Dec 2027",
  gpa: "3.20",
  honors: ["Academic Excellence Scholarship", "Dean's List"],
};

export const projects = [
  {
    name: "NBA Playoff Prediction Model",
    date: "April 2026",
    description:
      "Machine learning model trained on 10 seasons of NBA game data to predict outcomes from offensive rating, defensive rating, pace, and rest days.",
    tags: ["Python", "Pandas", "scikit-learn", "nba_api", "Matplotlib"],
  },
  {
    name: "Movie Database Web Application",
    date: "January 2026",
    description:
      "Full-stack movie site where users search films via the TMDB API and manage their own reviews.",
    tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "HTML/CSS"],
  },
  {
    name: "Delivery Route Planner",
    date: "July 2026",
    description:
      "Full-stack app that calculates efficient delivery routes for drivers handling 20+ stops.",
    tags: ["Python", "Flask", "React", "PostgreSQL", "Maps API"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["C++", "C#", "Python", "JavaScript", "SQL", "HTML/CSS", "R", "MATLAB"],
  },
  {
    category: "Frameworks & Technologies",
    items: ["React", "Flask", "Express.js", "Node.js", "Pandas", "scikit-learn", "Matplotlib", "nba_api"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "RStudio", "Unity", "MongoDB Compass"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
