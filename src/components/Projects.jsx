import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "AI Image Search Engine",
    description: "Semantic image search engine using OpenAI CLIP and FAISS for fast, accurate visual matching.",
    tech: ["PyTorch", "React", "Django", "CLIP", "FAISS"],
    link: "https://github.com/Ven-Sib/clip-search-engine",
    featured: true,
  },
  {
    title: "Movie Tracker Site",
    description: "Responsive movie browsing app with favorites, ratings, and TMDb API integration.",
    tech: ["React", "Tailwind", "TMDb API", "Context API"],
    link: "https://ven-sib.github.io/your-repository/",
    featured: false,
  },
  {
    title: "Freshman Companion App",
    description: "Helping new students navigate college with mentorship, career tools, and campus tips.",
    tech: ["React", "Tailwind", "Firebase", "Django", "Framer Motion", "Django Rest framework and API integration"],
    link: "https://youtu.be/sJugH1STHCQ",
    featured: false,
  },
  {
    title: "Ticketing System",
    description: "Full-stack ticket booking app with admin analytics, PDF receipts, and email integration.",
    tech: ["Django", "React", "REST API"],
    link: "https://github.com/Ven-Sib/Ticketing-app",
    featured: false,
  },
  {
    title: "University Registration System",
    description: "Secure registration platform for managing students, courses, and enrollment. Built for academic institutions.",
    tech: ["Django", "Python", "Bootstrap", "PostgreSQL"],
    link: "https://github.com/Ven-Sib/Registration_system",
    featured: false,
  }
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(projects);
  const [animateCards, setAnimateCards] = useState(false);
  const [show, setShow] = useState(false);

  const techOptions = ['all', 'React', 'Django', 'Python', 'AI'];

  useEffect(() => {
    setShow(false);
    const timer = setTimeout(() => setShow(true), 10);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setAnimateCards(true);

    if (activeFilter === 'all') {
      setVisibleProjects(projects);
    } else if (activeFilter === 'AI') {
      setVisibleProjects(projects.filter(project =>
        project.tech.some(tech => ['PyTorch', 'CLIP', 'FAISS'].includes(tech))
      ));
    } else {
      setVisibleProjects(projects.filter(project =>
        project.tech.includes(activeFilter)
      ));
    }
  }, [activeFilter]);

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, y: -30, transition: { duration: 0.5 } }
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.section
          key="projects"
          id="projects"
          className="py-20 relative overflow-hidden bg-gradient-to-b from-yellow-50 to-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background elements */}
          <div className="absolute -left-16 top-20 w-80 h-80 bg-yellow-100 rounded-full opacity-40 blur-3xl"></div>
          <div className="absolute -right-20 bottom-20 w-96 h-96 bg-yellow-200 rounded-full opacity-30 blur-3xl"></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills in web development, AI, and software engineering.
            </p>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {techOptions.map((tech) => (
                <button
                  key={tech}
                  onClick={() => {
                    setAnimateCards(false);
                    setTimeout(() => {
                      setActiveFilter(tech);
                      setAnimateCards(true);
                    }, 300);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === tech
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                  }`}
                >
                  {tech.charAt(0).toUpperCase() + tech.slice(1)}
                </button>
              ))}
            </div>

            {/* Projects grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col ${
                    animateCards
                      ? 'opacity-100 transform translate-y-0'
                      : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className={`h-2 ${project.featured
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-600'
                    : 'bg-gradient-to-r from-yellow-300 to-yellow-500'}`}
                  ></div>

                  {project.featured && (
                    <div className="absolute top-0 right-0">
                      <span className="inline-block bg-yellow-500 text-white text-xs px-2 py-1 font-semibold rounded-bl-lg">
                        Featured
                      </span>
                    </div>
                  )}

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-yellow-600">{project.title}</h3>
                    <p className="mb-4 text-gray-700">{project.description}</p>

                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="bg-yellow-50 px-3 py-1 rounded-full text-xs font-medium text-yellow-700 border border-yellow-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 transform hover:-translate-y-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {visibleProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">No projects found with the selected filter.</p>
                <button
                  onClick={() => setActiveFilter('all')}
                  className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors"
                >
                  Show All Projects
                </button>
              </div>
            )}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
