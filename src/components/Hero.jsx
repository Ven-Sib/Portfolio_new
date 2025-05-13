import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center text-center px-4 bg-gradient-to-b from-yellow-50 to-white overflow-hidden"
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-yellow-300 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-yellow-400 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-yellow-200 blur-3xl"></div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-20 right-20 w-6 h-6 bg-yellow-400 rounded-full animate-pulse hidden md:block"></div>
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-yellow-500 rounded-full animate-ping hidden md:block"></div>
      <div className="absolute top-48 left-1/4 w-10 h-10 border-2 border-yellow-300 rounded-full animate-spin hidden lg:block" style={{ animationDuration: '8s' }}></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">
            Hi, I'm Vensen Sibanda
          </h1>

          <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
            Full Stack Developer | AI Enthusiast | Leader
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="#projects" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-md transform hover:-translate-y-1"
            >
              Contact Me
            </a>
            <a 
              href="https://docs.google.com/document/d/17M36NOBMNoptXdy_8jXQ0BmORKKxlefi/edit?usp=sharing&ouid=104141331939696056388&rtpof=true&sd=true" 
              className="bg-white border border-yellow-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-all hover:shadow-md transform hover:-translate-y-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/Ven-Sib/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition-colors">
              {/* GitHub Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vensen-sibanda-b2997b2a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW0DiosPfS2q3rH3ApOa0kQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-yellow-600 transition-colors">
              {/* LinkedIn Icon */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
