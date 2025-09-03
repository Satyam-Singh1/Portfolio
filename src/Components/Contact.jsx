import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
      icon: <HiOutlineMail className="text-cyan-400 text-xl" />,
      label: "Email",
      value: "satyamrajput9956@gmail.com",
      href: "mailto:satyamrajput9956@gmail.com"
    },
    {
      icon: <FaLinkedin className="text-cyan-400 text-xl" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/satyam-singh"
    },
    {
      icon: <FaGithub className="text-cyan-400 text-xl" />,
      label: "GitHub",
      value: "View my repositories",
      href: "https://github.com/satyam"
    },
    {
      icon: <FaMapMarkerAlt className="text-cyan-400 text-xl" />,
      label: "Location",
      value: "Greater Noida, Uttar Pradesh, IN",
      href: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">Let's discuss your next project or collaboration opportunity</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    {info.icon}
                    <div className="flex-1">
                      <p className="text-sm text-gray-400">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-cyan-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-gray-300">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Modern development practices & clean code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Responsive and user-friendly designs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span>AI integration and cutting-edge technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Timely delivery and clear communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-cyan-400">✓</span>
                  <span>Full-stack development expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <h3 className="text-lg font-bold text-white mb-3">Available For</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <p className="text-cyan-400 font-medium">Freelance</p>
                  <p className="text-gray-400 text-sm">Projects</p>
                </div>
                <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-blue-400 font-medium">Full-time</p>
                  <p className="text-gray-400 text-sm">Opportunities</p>
                </div>
                <div className="text-center p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <p className="text-purple-400 font-medium">Collaboration</p>
                  <p className="text-gray-400 text-sm">Open Source</p>
                </div>
                <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                  <p className="text-green-400 font-medium">Consulting</p>
                  <p className="text-gray-400 text-sm">Technical</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    required
                  />
                </div>
                
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                  required
                />
                
                <textarea
                  name="message"
                  placeholder="Your Message *"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                  required
                />
                
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                <p className="text-gray-400 text-sm text-center">
                  I typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl border border-cyan-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Whether it's a web application, AI integration, 
            or a complete digital solution, I'm here to help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:satyamrajput9956@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Email Me Directly
            </a>
            <a 
              href="https://linkedin.com/in/satyam-singh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-cyan-500/50 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}