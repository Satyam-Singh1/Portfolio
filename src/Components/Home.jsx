import React, { useEffect, useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter, FaCode, FaRocket } from "react-icons/fa";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Create floating particles effect
  const particles = Array.from({ length: 20 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 opacity-30">
        {particles}
      </div>

      {/* Dynamic gradient based on mouse position */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`
        }}
      />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-center lg:text-left space-y-8 transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300">Available for work</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">Building</span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Digital
                </span>
                <span className="block text-white">Experiences</span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 text-lg text-slate-400">
                <FaCode className="text-blue-400" />
                <span>Full Stack Developer</span>
                <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                <span>AI Enthusiast</span>
                <FaRocket className="text-purple-400" />
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Passionate Computer Science student crafting modern web applications with 
              <span className="text-blue-400 font-semibold"> React</span>, 
              <span className="text-green-400 font-semibold"> Node.js</span>, and 
              <span className="text-purple-400 font-semibold"> AI technologies</span>. 
              Turning complex problems into elegant solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <button
                onClick={scrollToPortfolio}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl text-white font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-105"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>View My Work</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 border border-slate-600 hover:border-slate-500 rounded-xl text-slate-300 hover:text-white font-semibold tracking-wide transition-all duration-300 hover:bg-slate-800/50 hover:backdrop-blur-sm"
              >
                <span className="flex items-center space-x-2">
                  <span>Let's Connect</span>
                  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              {[FaGithub, FaLinkedin, FaTwitter].map((Icon, index) => (
                <button
                  key={index}
                  className="group relative p-3 text-slate-400 hover:text-white transition-all duration-300"
                >
                  <Icon size={24} className="relative z-10" />
                  <div className="absolute inset-0 bg-slate-800/50 rounded-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`relative flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative group">
              {/* Glowing background effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                {/* Placeholder for hero image - replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-600 to-slate-700 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                      <FaCode className="text-white text-3xl" />
                    </div>
                    <div className="text-slate-300">
                      <p className="text-sm">Replace this div with:</p>
                      <p className="text-xs text-slate-400 mt-1">
                        &lt;img src="heroimage.jpg" alt="Satyam Singh" className="w-full h-full object-cover" /&gt;
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-1 h-1 bg-pink-400 rounded-full animate-ping"></div>
              </div>

              {/* Floating skill badges */}
              <div className="absolute -top-6 -right-6 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300 shadow-xl animate-float">
                React.js
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300 shadow-xl animate-float animation-delay-1000">
                Node.js
              </div>
              <div className="absolute top-1/4 -left-12 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-300 shadow-xl animate-float animation-delay-2000">
                AI/ML
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}