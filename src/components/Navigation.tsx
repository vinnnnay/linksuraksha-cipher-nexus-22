
import { useState, useEffect } from 'react';
import { Shield } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#security', label: 'Security' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#faq', label: 'FAQ' },
    { href: '#mobile-app', label: 'Mobile App' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-linksuraksha-glow animate-glow-pulse" />
                <div className="absolute inset-0 animate-pulse">
                  <Shield className="w-8 h-8 text-linksuraksha-purple opacity-50" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-linksuraksha-glow to-linksuraksha-purple bg-clip-text text-transparent">
                LinkSuraksha
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300 font-medium"
                >
                  {link.label}
                </a>
              ))}
              <button className="neumorphic-btn px-6 py-3 text-white font-semibold">
                Get Early Access
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 z-50"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        
        {/* Mobile Menu Tray */}
        <div className={`absolute right-0 top-0 h-full w-80 max-w-[80vw] glassmorphism border-l border-white/20 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full pt-20 px-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-linksuraksha-glow transition-colors duration-300 font-medium py-4 border-b border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.label}
              </a>
            ))}
            <button 
              className="neumorphic-btn px-6 py-4 text-white font-semibold mt-8"
              onClick={() => setIsOpen(false)}
            >
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
