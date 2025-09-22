import React from 'react';

interface NavItem {
  label: string;
  link: string;
}

interface NavbarProps {
  items?: NavItem[];
}

export default function Navbar({ 
  items = [
    { label: 'Home', link: '#home' },
    { label: 'About Me', link: '#about' },
    { label: 'Project', link: '#project' },
    { label: 'Contact Us', link: '#contact' }
  ]
}: NavbarProps) {
  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center space-x-8">
          {items.map(({ label, link }) => (
            <button
              key={label}
              onClick={() => handleNavigate(link)}
              className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-sm uppercase tracking-wider
                         relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white 
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}