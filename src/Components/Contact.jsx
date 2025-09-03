import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaRocket, FaCheckCircle, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <HiOutlineMail className="text-2xl" />,
      label: "Email",
      value: "satyamrajput9956@gmail.com",
      href: "mailto:satyamrajput9956@gmail.com",
      gradient: "from-red-500 to-pink-500",
      description: "Send me a direct email"
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/satyam-singh-9a8325256/",
      gradient: "from-blue-500 to-cyan-500",
      description: "Let's connect professionally"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/Satyam-Singh1/",
      gradient: "from-gray-600 to-gray-800",
      description: "Check out my code"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Greater Noida, UP, IN",
      href: null,
      gradient: "from-green-500 to-teal-500",
      description: "Based in India"
    }
  ];

  const whyWorkWithMe = [
    {
      icon: <FaCheckCircle className="text-green-400" />,
      title: "Modern Development",
      description: "Clean, maintainable code with modern practices"
    },
    {
      icon: <FaRocket className="text-purple-400" />,
      title: "Responsive Design",
      description: "Mobile-first, pixel-perfect user interfaces"
    },
    {
      icon: <FaPaperPlane className="text-blue-400" />,
      title: "AI Integration",
      description: "Cutting-edge AI features and implementations"
    },
    {
      icon: <FaClock className="text-orange-400" />,
      title: "Timely Delivery",
      description: "Clear communication and on-time project completion"
    }
  ];

  const availabilityTypes = [
    {
      title: "Freelance Projects",
      subtitle: "Custom Solutions",
      gradient: "from-cyan-500/20 to-blue-500/20",
      border: "border-cyan-500/30",
      icon: <FaRocket className="text-cyan-400" />
    },
    {
      title: "Full-time Roles",
      subtitle: "Career Opportunities", 
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      icon: <FaCheckCircle className="text-purple-400" />
    },
    {
      title: "Collaborations",
      subtitle: "Open Source",
      gradient: "from-green-500/20 to-teal-500/20",
      border: "border-green-500/30",
      icon: <FaGithub className="text-green-400" />
    },
    {
      title: "Consulting",
      subtitle: "Technical Advice",
      gradient: "from-orange-500/20 to-red-500/20",
      border: "border-orange-500/30",
      icon: <HiOutlineMail className="text-orange-400" />
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-6">
            <FaPaperPlane className="text-cyan-400" />
            <span className="text-slate-300">Get In Touch</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Let's </span>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or collaboration opportunity
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-400 font-medium">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-cyan-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-white font-medium">{info.value}</span>
                        )}
                        <p className="text-xs text-slate-500 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                {whyWorkWithMe.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Available For</h3>
              <div className="grid grid-cols-2 gap-4">
                {availabilityTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`group p-4 bg-gradient-to-br ${type.gradient} backdrop-blur-sm border ${type.border} rounded-xl hover:scale-[1.02] transition-all duration-300 text-center`}
                  >
                    <div className="flex justify-center mb-3">
                      {type.icon}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{type.title}</h4>
                    <p className="text-slate-400 text-xs">{type.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Let's discuss your project"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Your Message *</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, and requirements..."
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors resize-none"
                    required
                  />
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
                
                <p className="text-slate-400 text-sm text-center">
                  I typically respond within 24 hours • All information is kept confidential
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
              Let's turn your ideas into reality. Whether it's a web application, AI integration, 
              or a complete digital solution, I'm here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:satyamrajput9956@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 font-semibold hover:scale-105"
              >
                <HiOutlineMail size={20} />
                Email Me Directly
              </a>
              <a 
                href="https://linkedin.com/in/satyam-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 font-semibold"
              >
                <FaLinkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}