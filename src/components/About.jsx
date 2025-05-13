import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '../assets/ven.jpg';

export default function About() {
  const photoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scale-100');
          entry.target.classList.remove('scale-90');
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        }
      },
      { threshold: 0.1 }
    );

    if (photoRef.current) {
      observer.observe(photoRef.current);
    }

    return () => {
      if (photoRef.current) {
        observer.unobserve(photoRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      id="about"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-yellow-50"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Background elements */}
      <div className="absolute -right-16 top-20 w-80 h-80 bg-yellow-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute -left-20 bottom-10 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            About Me
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get to know my background, skills, and aspirations
        </motion.p>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo Container with styling */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div
              ref={photoRef}
              className="relative transition-all duration-1000 transform scale-90 opacity-0"
            >
              <div className="h-120 w-100 rounded-lg overflow-hidden border-4 border-yellow-500 shadow-xl transform transition duration-500 hover:scale-105">
                <img
                  src={profilePhoto}
                  alt="Profile Photo"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Decorative background elements */}
              <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-yellow-500 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 h-16 w-16 bg-yellow-400 rounded-full -z-10"></div>

              {/* Added decorative elements */}
              <div className="absolute top-1/2 -right-6 h-4 w-4 bg-yellow-300 rounded-full animate-ping"></div>
              <div className="absolute bottom-1/3 -left-6 h-3 w-3 bg-yellow-600 rounded-full animate-pulse"></div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="w-full md:w-2/3 mt-8 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-yellow-600">
              Computer Science Student at Grambling State University
            </h3>

            <p className="text-lg text-gray-700 mb-6">
              I'm passionate about creating digital solutions that have real-world impact.
              I've worked on AI tools, full-stack web apps, and led multiple student initiatives.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              My long-term goal is to build AI-powered platforms that solve real-world problems at scale — particularly in underserved communities. I aim to create intelligent web-based systems that adapt to local needs in areas like education, agriculture, and public health. Ultimately, I want to lead a tech organization that not only builds advanced AI tools, but also empowers others by making data, digital infrastructure, and opportunity more accessible globally. This means combining AI, full-stack engineering, and social impact into solutions that matter.
            </p>

            {/* Quick Facts/Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                {
                  title: 'Education',
                  value: 'Computer Science, Grambling State University',
                },
                {
                  title: 'Focus Areas',
                  value: 'AI, Web Development, Machine Learning',
                },
                {
                  title: 'Languages',
                  value: 'English (Fluent), Spanish (Beginner)',
                },
                {
                  title: 'Current Projects',
                  value: 'Visual Search Engine, Portfolio Development',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                >
                  <h4 className="font-bold text-yellow-600">{item.title}</h4>
                  <p className="text-gray-700">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
