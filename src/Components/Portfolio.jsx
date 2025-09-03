import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Mock project images component
const ProjectImage = ({ title, gradient = "from-blue-500 to-purple-600" }) => (
  <div className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
    <span className="text-white font-bold text-xl z-10">{title}</span>
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
  </div>
);

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "LinkUp",
      description: "A modern social media platform with real-time messaging, post sharing, user interactions, and friend connections. Features include live chat, media uploads, and social networking capabilities.",
      gradient: "from-blue-500 to-purple-600",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
      demoUrl: "https://68b56d67b03f1c43e846a422--linkupchatapp.netlify.app/",
      codeUrl: "https://github.com/Satyam-Singh1/LinkUp---A-Real-Time-Chat-App"
    },
    {
      id: 2,
      title: "NeuraChat",
      description: "An AI-powered chat application integrating OpenAI GPT models for intelligent conversations, code assistance, and creative writing with multiple AI personas.",
      gradient: "from-purple-500 to-pink-600",
      tech: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
      demoUrl: "https://neurachat-ai.netlify.app/",
      codeUrl: "https://github.com/Satyam-Singh1/NeuraChat--AI-Assistance"
    },
    {
  id: 4,
  title: "Talent Tracker",
  description: "A web-based application to track student performance, skills, and achievements, with analytics and reporting for talent management and career growth insights.",
  gradient: "from-cyan-500 to-blue-600",
  tech: ["React", "Node.js", "MongoDB", "Express.js"],
  codeUrl: "https://github.com/Satyam-Singh1/Talent_Track",
  demoUrl: "https://github.com/Satyam-Singh1/Talent_Track",
},
    {
  id: 3,
  title: "Resource Walla",
  description: "A tech resource platform built with React.js and Tailwind CSS, providing curated learning materials, categorized resources, and an interactive UI for seamless exploration.",
  gradient: "from-green-500 to-teal-600",
  tech: ["React", "Tailwind CSS", "JavaScript"],
  demoUrl: "https://resource-walla.vercel.app/",
  codeUrl: "https://github.com/Satyam-Singh1/Resource-Walla"
},
{id: 5,
  title: "SVTech",
  description: "A business website designed for SVTech with a modern UI/UX, responsive design, and company information showcasing services and technology solutions.",
  gradient: "from-indigo-500 to-purple-600",
  tech: ["React", "Tailwind CSS", "JavaScript"],
  demoUrl: "https://svtech.netlify.app/",
  codeUrl: "https://github.com/Satyam-Singh1/SVTECH"},

{
  id: 6,
  title: "Xplorer",
  description: "A complete video hosting platform similar to YouTube with video upload, like/dislike, comments, subscriptions, JWT authentication, and secure backend architecture.",
  gradient: "from-orange-500 to-red-600",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose", "Bcrypt"],
  codeUrl: "https://github.com/Satyam-Singh1/Xplorer--Full-Stack-Video-Hosting-Platform",
  demoUrl: "https://github.com/Satyam-Singh1/Xplorer--Full-Stack-Video-Hosting-Platform"
}
  ];

 const handleDemoClick = (url) => {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

const handleCodeClick = (url) => {
  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-b from-gray-800 to-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">My</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Check out my latest projects and applications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all hover:animate-pulse duration-300 hover:scale-105">
              <ProjectImage title={project.title} gradient={project.gradient} />
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-md border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <button 
                    onClick={() => handleDemoClick(project.demoUrl)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm font-medium"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </button>
                  <button 
                    onClick={() => handleCodeClick(project.codeUrl)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-white/5 hover:border-gray-500 transition-all duration-300 text-sm font-medium"
                  >
                    <FaGithub size={14} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">Want to see more projects?</p>
          <button 
            onClick={() => handleCodeClick('https://github.com/Satyam-Singh1/')}
            className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            <FaGithub size={18} />
            View All on GitHub
          </button>
        </div>
      </div>
    </section>
  );
}