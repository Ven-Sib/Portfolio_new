import { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.section
          key="contact"
          id="contact"
          className="py-20 bg-yellow-50 dark:bg-blue-950"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-yellow-600 dark:text-yellow-300">
              Let's Connect
            </h2>
            <p className="mb-8 text-gray-700 dark:text-gray-300">
              I'm open to internships, collaborations, and mentorship. Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              {/* Email Contact */}
              <div className="bg-white dark:bg-blue-900 p-6 rounded-lg shadow-md flex flex-col items-center border border-yellow-200 dark:border-blue-800">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">sibandavensen@gmail.com</p>
                <a 
                  href="mailto:vensen@example.com" 
                  className="inline-block bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition-colors"
                >
                  Send Email
                </a>
              </div>

              {/* Phone Contact */}
              <div className="bg-white dark:bg-blue-900 p-6 rounded-lg shadow-md flex flex-col items-center border border-yellow-200 dark:border-blue-800">
                <div className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">+1 (318) 394 7733</p>
                <a 
                  href="tel:+11234567890" 
                  className="inline-block bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition-colors"
                >
                  Call Me
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-5 mb-8">
              <a 
                href="https://www.linkedin.com/in/vensen-sibanda-b2997b2a6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BW0DiosPfS2q3rH3ApOa0kQ%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full text-yellow-600 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Ven-Sib/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-yellow-100 dark:bg-yellow-900 p-3 rounded-full text-yellow-600 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              
            </div>

            <p className="text-gray-600 dark:text-gray-400">
              I'll get back to you as soon as possible!
            </p>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
