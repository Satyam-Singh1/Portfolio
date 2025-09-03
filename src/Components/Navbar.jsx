import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Experience", to: "experience" },
    { id: 4, name: "Portfolio", to: "portfolio" },
    { id: 5, name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setNav(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <FaCode className="text-white text-lg" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Satyam Singh
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-wider">
                FULL STACK DEVELOPER
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map(({ id, name, to }) => (
              <button
                key={id}
                onClick={() => scrollTo(to)}
                className="relative px-6 py-3 text-slate-300 hover:text-white font-medium tracking-wide transition-all duration-300 group"
              >
                <span className="relative z-10">{name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 blur-sm"></div>
                <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-300"></div>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setNav(!nav)}
            className="md:hidden relative p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-300 hover:bg-slate-700/50"
          >
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
          <div className="px-6 py-6 space-y-2">
            {links.map(({ id, name, to }) => (
              <button
                key={id}
                onClick={() => scrollTo(to)}
                className="block w-full text-left px-6 py-4 text-lg text-slate-300 hover:text-white font-medium tracking-wide transition-all duration-300 rounded-xl hover:bg-slate-800/50 hover:backdrop-blur-sm"
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}