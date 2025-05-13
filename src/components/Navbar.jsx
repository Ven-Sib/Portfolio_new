import { useState, useEffect } from 'react';

function Navbar({ sectionRefs }) {
  const [activeTab, setActiveTab] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  // Add scroll event listener to dynamically update the active tab
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adding offset for better accuracy
      
      // Find the section that is currently in view
      for (const id in sectionRefs) {
        const element = sectionRefs[id].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Call once on mount to set initial active tab
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  const scrollToSection = (id) => {
    setActiveTab(id);
    sectionRefs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-amber-500 shadow-md">
      <div className="w-full">
        <div className="flex justify-center md:justify-start px-2 py-3">
          <div className="flex flex-wrap md:flex-nowrap">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 font-medium transition-colors duration-200 ease-in-out ${
                  activeTab === item.id
                    ? 'text-amber-900 font-bold' // Changed highlight style to text color
                    : 'text-white hover:text-amber-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute right-4 top-3 flex items-center sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-amber-900 focus:outline-none"
              aria-expanded={menuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } sm:hidden bg-amber-500`} // Changed bg color to match the navbar
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-3 py-2 font-medium transition-colors ${
                activeTab === item.id
                  ? 'text-amber-900 font-bold' // Changed highlight style to text color
                  : 'text-white hover:text-amber-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;