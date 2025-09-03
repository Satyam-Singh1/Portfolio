import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

export default function Experience() {
  
  const technologies = [
    {
      id: 1,
      source: html,
      title: 'HTML5',
      style: 'shadow-orange-500',
      color: 'from-orange-500 to-orange-700'
    },
    {
      id: 2,
      source: css,
      title: 'CSS3',
      style: 'shadow-blue-500',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 3,
      source: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      id: 4,
      source: reactImage,
      title: 'React',
      style: 'shadow-cyan-500',
      color: 'from-cyan-500 to-cyan-700'
    },
    {
      id: 5,
      source: tailwind,
      title: 'Tailwind CSS',
      style: 'shadow-teal-500',
      color: 'from-teal-500 to-teal-700'
    },
    {
      id: 6,
      source: null, // You can add Node.js icon here
      title: 'Node.js',
      style: 'shadow-green-500',
      color: 'from-green-500 to-green-700'
    },
    {
      id: 7,
      source: null, // You can add MongoDB icon here
      title: 'MongoDB',
      style: 'shadow-green-600',
      color: 'from-green-600 to-green-800'
    },
    {
      id: 8,
      source: null, // You can add Git icon here
      title: 'Git',
      style: 'shadow-red-500',
      color: 'from-red-500 to-red-700'
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-b from-black to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Tech</span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech) => (
            <div key={tech.id} className="group text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 ${tech.style}`}>
                {tech.source ? (
                  <img src={tech.source} alt={tech.title} className="w-12 h-12 object-contain" />
                ) : (
                  <span className="text-white font-bold text-sm">{tech.title.slice(0, 2).toUpperCase()}</span>
                )}
              </div>
              <p className="text-white font-medium">{tech.title}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Frontend Development</h3>
            <p className="text-gray-400">Creating responsive and interactive user interfaces with modern frameworks and libraries</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">Backend Development</h3>
            <p className="text-gray-400">Building robust server-side applications, RESTful APIs, and database management systems</p>
          </div>
          <div className="p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-3">AI Integration</h3>
            <p className="text-gray-400">Implementing AI-powered features using OpenAI and other machine learning APIs</p>
          </div>
        </div>
      </div>
    </section>
  );
}