import { useState } from 'react'
import ResponsiveAppBar from './components/navbar'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-black text-white">
      <ResponsiveAppBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Aditya Gupta
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
            Full Stack Developer & Cloud Consultant
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Building innovative web solutions with cutting-edge technologies
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform">
              View Projects
            </button>
            <button className="px-8 py-4 border border-gray-600 rounded-full font-semibold hover:bg-white/5 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience Card 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <div className="text-purple-400 text-sm font-semibold mb-2">2024 - Present</div>
              <h3 className="text-2xl font-bold mb-3">Freelance Web Dev & Cloud Consultant</h3>
              <p className="text-gray-400">Delivering scalable web solutions and cloud infrastructure for diverse clients worldwide.</p>
            </div>
            
            {/* Experience Card 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <div className="text-blue-400 text-sm font-semibold mb-2">2022 - 2024</div>
              <h3 className="text-2xl font-bold mb-3">Masters in Computer Science</h3>
              <p className="text-gray-400">Stevens Institute of Technology, NYC, US</p>
            </div>
            
            {/* Experience Card 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-purple-500/50 transition-all backdrop-blur-sm">
              <div className="text-purple-400 text-sm font-semibold mb-2">2018 - 2022</div>
              <h3 className="text-2xl font-bold mb-3">Systems Engineer</h3>
              <p className="text-gray-400">CRZ Consultants, New Delhi, India</p>
            </div>
            
            {/* Experience Card 4 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-blue-500/50 transition-all backdrop-blur-sm">
              <div className="text-blue-400 text-sm font-semibold mb-2">2014 - 2018</div>
              <h3 className="text-2xl font-bold mb-3">Bachelors in Information Technology</h3>
              <p className="text-gray-400">University of Mumbai, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3">Frontend</h3>
              <p className="text-gray-400">React, JavaScript, TypeScript, Tailwind CSS, Material-UI</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-600/10 to-blue-600/5 border border-blue-500/20">
              <h3 className="text-xl font-bold mb-3">Backend</h3>
              <p className="text-gray-400">Node.js, Express, MongoDB, REST APIs</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-600/10 to-purple-600/5 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-3">Cloud & DevOps</h3>
              <p className="text-gray-400">AWS, Docker, CI/CD, Cloud Architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Aditya Gupta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
