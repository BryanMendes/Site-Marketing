import React, { useState, useEffect } from 'react';
import { Instagram, Mail, Heart, ArrowUp, Star, Sparkles, ExternalLink } from 'lucide-react';

const SocialIcon: React.FC<{icon: React.ElementType, href: string, color: string, label: string}> = ({
  icon: Icon,
  href,
  color,
  label
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={label}
    >
      <div className="relative z-10">
        <div 
          className={`w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
            isHovered ? 'shadow-lg' : ''
          }`}
        >
          <Icon className={`w-5 h-5 ${color} transition-all duration-300 group-hover:scale-110`} />
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 ${color.replace('text', 'bg')}/20 rounded-xl blur-lg transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
      
      {/* Tooltip */}
      <div 
        className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1.5 text-xs text-white whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        {label}
      </div>
    </a>
  );
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://instagram.com/carolmarketing', 
      color: 'text-pink-400',
      label: 'Instagram'
    },
    { 
      icon: Mail, 
      href: 'mailto:sparkware2025@gmail.com', 
      color: 'text-blue-400',
      label: 'Email'
    }
  ];
  
  const footerLinks = [
    { title: 'Home', href: '#home' },
    { title: 'Sobre', href: '#sobre' },
    { title: 'Serviços', href: '#serviços' },
    { title: 'Depoimentos', href: '#depoimentos' },
    { title: 'Contato', href: '#contato' }
  ];
  
  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 w-full bg-gradient-to-r from-[#4a54c7] via-[#6a4bc7] to-[#4a54c7]"></div>
      
      {/* Background with animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#0f0f1a]"></div>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#4a54c7]/30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Footer content */}
      <div className="relative z-10 py-16 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="relative h-12 w-12 mr-3">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] rounded-xl opacity-80 blur-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-marilde text-2xl text-white">Carol Lemos</h3>
                <p className="text-sm text-white/60">Assessoria & Social Media</p>
              </div>
            </div>
            
            <p className="text-white/70 text-sm max-w-xs">
              Estratégias de marketing digital e gestão de mídias sociais para transformar 
              sua presença online e impulsionar o crescimento do seu negócio.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <SocialIcon key={index} {...link} />
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]"></span>
              Navegação
            </h3>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact and achievements */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]"></span>
              Atendimento
            </h3>
            
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a54c7] to-[#6a4bc7] flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/90 font-medium">Horário de atendimento</p>
                    <p className="text-white/60 text-sm">Segunda à Sexta, 9h–18h</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/30 flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-white/90 font-medium">Fale por WhatsApp</p>
                    <p className="text-white/60 text-sm">Atendimento rápido</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Carol Lemos • Assessoria & Social Media. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <span>Feito com</span>
            <Heart className="h-3 w-3 text-red-400 animate-pulse" />
            <span>por</span>
            <a 
              href="https://sparkware.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#4a54c7] hover:text-white transition-colors duration-300"
            >
              Sparkware
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] flex items-center justify-center shadow-lg shadow-[#4a54c7]/20 hover:shadow-xl hover:shadow-[#4a54c7]/30 transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  );
};

export default Footer;