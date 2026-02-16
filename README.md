# Portfolio Website

A modern, responsive portfolio website showcasing education, work experience, skills, and projects.

![Portfolio Preview](https://github.com/user-attachments/assets/29ddd6cb-363e-4f3e-98d9-8b37c35c1aee)

## ✨ Features

- **Fully Configurable**: Update all content without touching code - just edit `src/config/portfolioData.js`
- **Modern Design**: Built with React + Material-UI with smooth animations and hover effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Navbar with smooth scrolling to different sections
- **Professional Sections**:
  - Hero section with name, title, and social links
  - Skills categorized by expertise
  - Featured projects with technologies
  - Education & work experience timeline

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Running

```bash
# Navigate to the frontend directory
cd frontend/Aditya-Portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will run at `http://localhost:5173/`

## 📝 Customizing Your Portfolio

All portfolio content can be easily updated by editing the configuration file:

**`frontend/Aditya-Portfolio/src/config/portfolioData.js`**

### What You Can Customize:

1. **Personal Information** - Name, title, bio, email, social links
2. **Skills** - Add/remove skill categories and items
3. **Projects** - Add your projects with descriptions, technologies, and links
4. **Timeline** - Education and work experience entries
5. **Theme** - Colors and styling

### Example: Adding a New Project

```javascript
// In src/config/portfolioData.js
export const projects = [
  {
    title: "Your Project Name",
    description: "Brief description of your project",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/yourusername/project",
    demoUrl: "https://your-demo-url.com", // Optional
  },
  // ... more projects
];
```

See **[PORTFOLIO_CONFIG_GUIDE.md](PORTFOLIO_CONFIG_GUIDE.md)** for detailed customization instructions.

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Vite** - Build tool and dev server
- **Material-UI** - Component library
- **Tailwind CSS** - Utility-first CSS

### Backend (Optional)
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database

## 📁 Project Structure

```
portfolio/
├── frontend/
│   └── Aditya-Portfolio/
│       ├── src/
│       │   ├── components/     # React components
│       │   │   ├── Hero.jsx
│       │   │   ├── Skills.jsx
│       │   │   ├── Projects.jsx
│       │   │   ├── timeline.jsx
│       │   │   └── navbar.jsx
│       │   ├── config/
│       │   │   └── portfolioData.js  # ⭐ Edit this file to update content
│       │   ├── App.jsx
│       │   └── main.jsx
│       ├── package.json
│       └── vite.config.js
├── backend/                    # Optional backend server
├── PORTFOLIO_CONFIG_GUIDE.md   # Detailed configuration guide
└── README.md                   # This file
```

## 🎨 Sections Overview

### 1. Hero Section
- Personal introduction
- Professional title
- Bio/tagline
- Social media links (GitHub, LinkedIn, etc.)

### 2. Skills & Expertise
- Organized by categories (Frontend, Backend, Cloud, etc.)
- Interactive cards with hover effects
- Easy to add/remove skills

### 3. Featured Projects
- Project cards with descriptions
- Technology tags
- Links to GitHub repositories and live demos

### 4. Education & Experience Timeline
- Visual timeline of career and education
- Alternating layout for visual appeal
- Icons for education vs work experience

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📄 License

This project is open source and available under the ISC License.

## 👤 Author

**Aditya Gupta**
- GitHub: [@AdityaGupta017](https://github.com/AdityaGupta017)
- LinkedIn: [Aditya Gupta](https://linkedin.com/in/adityagupta017)

---

**Made with ❤️ using React + Vite + Material-UI**
