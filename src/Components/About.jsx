import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-800 to-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Computer Science student with a strong foundation in modern web development technologies. 
              My journey in programming started with curiosity and has evolved into a deep passion for creating 
              innovative digital solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building full-stack applications using the latest technologies like React, Node.js, 
              and various databases. I'm particularly interested in AI integration and creating user-centric applications 
              that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-cyan-400">10+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-cyan-400">2+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Frontend</h3>
                <p className="text-gray-400">React, JavaScript, Tailwind CSS, HTML5, CSS3</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-xl border border-green-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Backend</h3>
                <p className="text-gray-400">Node.js, Express.js, MongoDB, REST APIs</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-600/10 rounded-xl border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">AI/ML</h3>
                <p className="text-gray-400">OpenAI API, Gemini AI, Machine Learning</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-xl border border-orange-500/20">
                <h3 className="text-lg font-semibold text-white mb-2">Tools</h3>
                <p className="text-gray-400">Git, VS Code, Postman, Docker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}