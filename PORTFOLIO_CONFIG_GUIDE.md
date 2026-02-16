# Portfolio Configuration Guide

This portfolio is built to be easily configurable. You can update all the content without touching the React code!

## How to Update Your Portfolio

All portfolio content is stored in the configuration file:
**`src/config/portfolioData.js`**

### What You Can Configure:

#### 1. Personal Information
Update your name, title, bio, email, and social media links:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "Your bio/tagline",
  email: "your@email.com",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername", // Optional
    portfolio: "https://yourwebsite.com", // Optional
  }
};
```

#### 2. Skills
Add or modify your skills by category:
```javascript
export const skills = [
  {
    category: "Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3"]
  },
  // Add more categories...
];
```

#### 3. Projects
Add your projects with details:
```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["Tech 1", "Tech 2"],
    githubUrl: "https://github.com/...",
    demoUrl: "https://demo.com", // Optional - leave empty to hide
  },
  // Add more projects...
];
```

#### 4. Education & Work Experience
Update your timeline:
```javascript
export const timeline = [
  {
    type: "work", // or "education"
    period: "2020 - Present",
    title: "Job Title or Degree",
    organization: "Company or University",
    description: "Brief description",
  },
  // Add more entries...
];
```

#### 5. Theme Colors
Customize the color scheme:
```javascript
export const theme = {
  heroBackground: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  primaryColor: "#667eea",
  secondaryColor: "#764ba2",
};
```

## Running the Portfolio

### Development Mode
```bash
cd frontend/Aditya-Portfolio
npm install
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Tips

- **Social Links**: Leave any social link empty ("") to hide that button
- **Demo URLs**: Leave demoUrl empty to hide the demo button on projects
- **Timeline**: Mix work and education entries - they'll be styled differently automatically
- **Skills**: You can add as many skill categories as you want
- **Projects**: Add as many projects as you need - they'll automatically arrange in a grid

## Need Help?

If you need to add more customization:
1. The configuration file is in `src/config/portfolioData.js`
2. Component files are in `src/components/` (only edit these if you want to change the layout/design)
3. Styling uses Material-UI (MUI) - check their docs for advanced customization

Enjoy your portfolio! 🚀
