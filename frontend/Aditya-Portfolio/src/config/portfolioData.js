// Portfolio Configuration File
// Edit this file to update your portfolio content without touching the code

export const personalInfo = {
  name: "Aditya Gupta",
  title: "Full Stack Developer & Cloud Consultant",
  bio: "Passionate about building scalable web applications and cloud solutions. Master's in Computer Science from Stevens Institute of Technology.",
  email: "contact@adityagupta.dev",
  socialLinks: {
    github: "https://github.com/AdityaGupta017",
    linkedin: "https://linkedin.com/in/adityagupta017",
    twitter: "", // Optional - leave empty to hide
    portfolio: "", // Optional - leave empty to hide
  }
};

export const skills = [
  {
    category: "Frontend Development",
    items: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Material-UI", "Tailwind CSS", "Vite"]
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Express", "Python", "Java", "RESTful APIs", "GraphQL"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "VS Code", "Postman", "Jira", "Agile/Scrum"]
  },
  {
    category: "Security & Best Practices",
    items: ["OAuth", "JWT", "HTTPS", "CORS", "Code Review", "Testing"]
  }
];

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration using Stripe.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    githubUrl: "https://github.com/AdityaGupta017",
    demoUrl: "", // Optional - leave empty to hide demo button
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Automated cloud infrastructure deployment using Terraform and AWS. Includes VPC setup, EC2 instances, RDS databases, and load balancers.",
    technologies: ["AWS", "Terraform", "Python", "Docker", "CI/CD"],
    githubUrl: "https://github.com/AdityaGupta017",
    demoUrl: "",
  },
  {
    title: "Real-Time Chat Application",
    description: "A real-time chat application with WebSocket support, user authentication, message persistence, and file sharing capabilities.",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
    githubUrl: "https://github.com/AdityaGupta017",
    demoUrl: "",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management system with project boards, task assignments, deadlines, and team collaboration features.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL"],
    githubUrl: "https://github.com/AdityaGupta017",
    demoUrl: "",
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React and Material-UI, featuring smooth animations and dark mode support.",
    technologies: ["React", "Material-UI", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/AdityaGupta017/portfolio",
    demoUrl: "",
  },
  {
    title: "API Gateway & Microservices",
    description: "Microservices architecture with API gateway, service discovery, load balancing, and distributed tracing.",
    technologies: ["Node.js", "Docker", "Kubernetes", "AWS", "Nginx"],
    githubUrl: "https://github.com/AdityaGupta017",
    demoUrl: "",
  }
];

export const timeline = [
  {
    type: "work", // "work" or "education"
    period: "2024 - Present",
    title: "Freelance Web Developer & Cloud Consultant",
    organization: "",
    description: "Building scalable web applications and providing cloud infrastructure solutions for clients. Specializing in full-stack development and AWS/Azure cloud services.",
  },
  {
    type: "education",
    period: "2022 - 2024",
    title: "Master's in Computer Science",
    organization: "Stevens Institute of Technology, NYC, US",
    description: "Focus: Cloud Computing, Web Technologies, and Distributed Systems",
  },
  {
    type: "work",
    period: "2018 - 2022",
    title: "Systems Engineer",
    organization: "CRZ Consultants, New Delhi, India",
    description: "Worked on enterprise applications, database management, and system integration projects.",
  },
  {
    type: "education",
    period: "2014 - 2018",
    title: "Bachelor's in Information Technology",
    organization: "University of Mumbai, India",
    description: "Foundation in programming, databases, and software engineering",
  }
];

export const theme = {
  heroBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  primaryColor: "#667eea",
  secondaryColor: "#764ba2",
};
