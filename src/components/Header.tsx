import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'sobre', 'serviços', 'contato'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', link: 'home' },
    { name: 'Sobre', link: 'sobre' },
    { name: 'Serviços', link: 'serviços' },
    { name: 'Contato', link: 'contato' }
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 dark:bg-[#252361]/80 backdrop-blur-md shadow-lg py-2 border-b border-white/10' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
            <img 
              src="/identidade visual - carolmedia3.png" 
              alt="Carol Lemos Logo" 
              className="h-12 w-auto mr-2"
            />
            <div className="relative z-10">
              <span className="font-marilde text-2xl text-white">Carol Lemos</span>
              <span className="block text-xs text-white/80 font-poppins">Assessoria & Social Media</span>
            </div>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={`#${item.link}`} 
                className={`font-poppins transition-all duration-300 relative group ${
                  activeSection === item.link 
                    ? 'text-white font-medium' 
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] transition-all duration-300 ${
                  activeSection === item.link ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            <Button 
              onClick={() => window.location.href = '#contato'}
              className="shadow-lg shadow-[#4a54c7]/20 hover:shadow-xl hover:shadow-[#4a54c7]/30"
              icon={<ChevronRight className="w-4 h-4" />}
            >
              Contato
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none relative z-20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-white/20 backdrop-blur-md' 
                  : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
              }`}></div>
              
              <div className="relative z-10">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#252361]/95 backdrop-blur-lg z-10 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={`#${item.link}`} 
                className={`font-poppins text-xl transition-all duration-300 ${
                  activeSection === item.link 
                    ? 'text-white font-medium' 
                    : 'text-white/70'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <span className="relative">
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] transform origin-left transition-transform duration-300 ${
                      activeSection === item.link ? 'scale-x-100' : 'scale-x-0'
                    }`}></span>
                  </span>
                  <ChevronRight className={`ml-2 w-4 h-4 transition-all duration-300 ${
                    activeSection === item.link ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-auto mb-12">
            <Button 
              onClick={() => {
                window.location.href = '#contato';
                setIsMenuOpen(false);
              }}
              className="w-full shadow-lg shadow-[#4a54c7]/20 hover:shadow-xl hover:shadow-[#4a54c7]/30"
              size="lg"
              icon={<ChevronRight className="w-5 h-5" />}
            >
              Entre em contato
            </Button>
            
            <p className="text-white/50 text-xs text-center mt-8">
              Carol Lemos © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;