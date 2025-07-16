import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('experience');
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
          key="experience"
          id="experience"
          className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-yellow-50"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background elements */}
          <div className="absolute -right-16 top-10 w-64 h-64 bg-yellow-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute -left-20 bottom-20 w-72 h-72 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-5xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-2 text-center">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Experience & Education
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
              My professional journey, academic background, and leadership roles
            </p>

            {/* Tab navigation */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex p-1 bg-gray-100 rounded-lg shadow-md">
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeTab === 'experience'
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeTab === 'education'
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  Education
                </button>
                <button
                  onClick={() => setActiveTab('leadership')}
                  className={`px-4 py-2 rounded-md transition-all ${
                    activeTab === 'leadership'
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  Leadership
                </button>
              </div>
            </div>

            {/* Experience Tab Content */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                
                <div className="timeline-item">
                  <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <div className="md:w-1/4">
                      <span className="text-yellow-600 font-medium">Summer 2024</span>
                      <h3 className="text-xl font-bold mt-1">Research Assistant</h3>
                      <p className="text-gray-600">Arkansas Summer Research Institute (ASRI)</p>
                      <p className="text-gray-600">Remote</p>
                    </div>
                    <div className="md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        <li>Conducted research on battery efficiency data, developing backend systems using Python, Pandas, SQL, and Jupyter Notebooks.</li>
                        <li>Preprocessed, structured, and created pipelines for data to train machine learning models.</li>
                        <li>Analyzed battery efficiency data across the U.S. to suggest sustainable tech improvements.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Education Tab Content */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                <div className="timeline-item">
                  <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <div className="md:w-1/4">
                      <span className="text-yellow-600 font-medium">Expected Dec 2027</span>
                      <h3 className="text-xl font-bold mt-1">Bachelor of Science</h3>
                      <p className="text-gray-600">Computer Science</p>
                      <p className="text-yellow-500 font-semibold">GPA: 4.0</p>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="font-bold text-gray-800">Grambling State University</h4>
                      <p className="text-gray-600 mb-3">Grambling, LA</p>

                      <div>
                        <h5 className="font-semibold text-gray-700">Relevant Coursework:</h5>
                        <p className="text-gray-700">DSA, Web Development, Android development, OOP, AI, Cyber Security, Codepath TIP 102, Calculus, Statistics</p>
                      </div>

                      <div className="mt-3">
                        <h5 className="font-semibold text-gray-700">Awards:</h5>
                        <p className="text-gray-700">Academic/Presidential scholarship</p>
                      </div>

                      <div className="mt-3">
                        <h5 className="font-semibold text-gray-700">Certificates:</h5>
                        <p className="text-gray-700">Codepath Intermediate Technical Interview, IBM Cyber Security, IBM Intro to Artificial Intelligence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Leadership Tab Content */}
            {activeTab === 'leadership' && (
              <div className="space-y-8">
                <div className="timeline-item">
                  <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <div className="md:w-1/4">
                      <span className="text-yellow-600 font-medium">Jun 2024 - Present</span>
                      <h3 className="text-xl font-bold mt-1">Tutor</h3>
                      <p className="text-gray-600">SAT and Abroad Scholarship Applications</p>
                    </div>
                    <div className="md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        <li>Mentor high-achieving students from Africa in SAT preparation and international scholarship applications. I provide structured academic guidance, share effective test-taking strategies, and assist with personal statements, application forms, and interview readiness. My goal is to help students confidently navigate the path to studying abroad and unlock global academic opportunities.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <div className="md:w-1/4">
                      <span className="text-yellow-600 font-medium">2024 - Present</span>
                      <h3 className="text-xl font-bold mt-1">GSU Choir Leadership Council</h3>
                      <p className="text-gray-600">Grambling State Concert Choir</p>
                      <p className="text-gray-600">Grambling State University</p>
                    </div>
                    <div className="md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        <li>Contribute to planning and organizing choir events, actively support coordination during tours, and assist in maintaining discipline and productivity during rehearsals. I help bridge communication between choir members and directors, ensuring smooth operations and strong team engagement throughout performances and practices.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="flex flex-col md:flex-row gap-4 bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
                    <div className="md:w-1/4">
                      <span className="text-yellow-600 font-medium">Program Participant</span>
                      <h3 className="text-xl font-bold mt-1">LS-LAMP Program</h3>
                    </div>
                    <div className="md:w-3/4">
                      <ul className="list-disc ml-5 space-y-2 text-gray-700">
                        <li>Guided a group of students through a gene extraction lab practical, displaying leadership in hands-on scientific exploration.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
