import { useState } from 'react';
import { 
  Code, Database, GitBranch, Globe, Layout, 
  Layers, Terminal, Lightbulb, Users, Cpu
} from 'lucide-react';

export default function Skills() {
  const skills = [
    { name: "Python", icon: <Terminal className="mr-2" size={18} /> },
    { name: "Django", icon: <Layers className="mr-2" size={18} /> },
    { name: "JavaScript", icon: <Code className="mr-2" size={18} /> },
    { name: "React", icon: <Layout className="mr-2" size={18} /> },
    { name: "TailwindCSS", icon: <Layers className="mr-2" size={18} /> },
    { name: "SQL", icon: <Database className="mr-2" size={18} /> },
    { name: "Git", icon: <GitBranch className="mr-2" size={18} /> },
    { name: "REST APIs", icon: <Globe className="mr-2" size={18} /> },
    { name: "AI Tools", icon: <Cpu className="mr-2" size={18} /> },
    { name: "Leadership", icon: <Users className="mr-2" size={18} /> },
  ];

  const extendedSkills = [
    { category: "Programming languages", items: ["Python", "JavaScript", "CSS", "HTML"] },
    { category: "Frames & Libraries", items: ["Django", "React", "jQuery", "Flask", "Node.js", "Bootstrap", "Tailwind CSS", "OpenAI CLIP", "PyTorch", "FAISS", "Numpy", "Pillow(PIL)"] },
    { category: "Development tools", items: ["Git", "GitHub", "Docker", "Vite", "Kubernetes", "Figma", "Canva", "Postman"] },
    { category: "Web and API Technologies", items: ["REST API design handling", "JSON", "CSRF & CORS Handling", "Frontend-Backend Integration"] },
    { category: "Databases and Storage", items: ["AWS", "SQLite", "PostgreSQL"] },
  ];

  const [activeTab, setActiveTab] = useState('badge');

  return (
    <section id="skills" className="py-20 bg-yellow-50 dark:bg-blue-950">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-yellow-600 dark:text-yellow-300">Skills & Expertise</h2>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setActiveTab('badge')}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${activeTab === 'badge' ? 'bg-yellow-600 text-white border-yellow-700' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100 dark:bg-blue-900 dark:text-white dark:border-blue-800 dark:hover:bg-blue-800'}`}
            >
              Badge View
            </button>
            <button
              onClick={() => setActiveTab('detailed')}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${activeTab === 'detailed' ? 'bg-yellow-600 text-white border-yellow-700' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-100 dark:bg-blue-900 dark:text-white dark:border-blue-800 dark:hover:bg-blue-800'}`}
            >
              Detailed View
            </button>
          </div>
        </div>

        {activeTab === 'badge' && (
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100 rounded-full text-sm flex items-center shadow-sm">
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        )}

        {activeTab === 'detailed' && (
          <div className="space-y-8">
            {extendedSkills.map((category, i) => (
              <div key={i} className="bg-white dark:bg-blue-900 p-6 rounded-lg shadow-md border border-yellow-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold mb-4 text-yellow-600 dark:text-yellow-300 flex items-center">
                  <Lightbulb className="mr-2" size={20} />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, j) => (
                    <span key={j} className="px-3 py-1 bg-yellow-50 dark:bg-blue-800 text-yellow-700 dark:text-yellow-200 rounded border border-yellow-200 dark:border-yellow-800 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}