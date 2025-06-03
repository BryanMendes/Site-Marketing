import React, { useRef, useState, useEffect } from 'react';
import { PhoneCall, Instagram, MessageCircle, ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import Button from './Button';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  content: string;
  link: string;
  color: string;
  iconColor: string;
  delay?: number;
  isVisible: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon: Icon, 
  title, 
  content, 
  link, 
  color, 
  iconColor, 
  delay = 0,
  isVisible 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ 
        backgroundColor: 'white',
        transitionDelay: `${delay + 200}ms`,
        boxShadow: '0 10px 40px -15px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4a54c7]/5 to-[#6a4bc7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Hover border effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#4a54c7]/20 rounded-2xl transition-all duration-500"></div>
      
      {/* Icon background with pulsing effect */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full ${color} opacity-30 transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500`}></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className={`flex-shrink-0 w-14 h-14 ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500`}>
          <Icon size={24} className={`${iconColor} transition-transform duration-500 ${isHovered ? 'rotate-12' : ''}`} />
        </div>
        
        <div className="flex-grow pt-1">
          <h3 className="font-marilde text-xl text-[#252361] mb-1">{title}</h3>
          <p className="text-[#1a1a1a]/70 text-sm mb-3">{content}</p>
          
          <div className="flex items-center text-[#4a54c7] font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span>Conectar agora</span>
            <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <ExternalLink size={16} className="text-[#4a54c7]/50" />
        </div>
      </div>
      
      {/* Sparkle effect */}
      {isHovered && (
        <>
          <div className="absolute top-1/4 left-1/4 animate-ping-slow">
            <Sparkles size={16} className="text-[#4a54c7]/30" />
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-ping-slow animation-delay-500">
            <Sparkles size={12} className="text-[#4a54c7]/20" />
          </div>
        </>
      )}
    </a>
  );
};

const Contact: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) - 0.5,
          y: ((e.clientY - rect.top) / rect.height) - 0.5
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const contactInfo = [
    {
      icon: PhoneCall,
      title: 'WhatsApp',
      content: 'Atendimento rápido e personalizado',
      link: 'https://wa.me/5534991806595',
      color: 'bg-green-500/20',
      iconColor: 'text-green-500'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: 'Siga-nos e veja nosso trabalho em tempo real',
      link: 'https://www.instagram.com/carol.media/',
      color: 'bg-purple-500/20',
      iconColor: 'text-purple-500'
    }
  ];

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#eee7e9] to-[#f8f9fa]">
      {/* 3D particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-[#4a54c7] opacity-10 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `translateZ(${Math.random() * 100}px)`
            }}
          ></div>
        ))}
      </div>
      
      {/* Dynamic gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#4a54c7]/5 via-transparent to-[#6a4bc7]/5" 
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a54c7]/10 text-[#252361] mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="font-poppins text-sm">Vamos conversar</span>
          </div>
          
          <h2 className="font-marilde text-4xl md:text-5xl text-[#252361] mb-6">
            Pronto para transformar seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]">
              Instagram?
            </span>
          </h2>
          
          <p className="font-poppins text-[#1a1a1a]/70 text-lg md:text-xl">
            Escolha a maneira mais conveniente para entrar em contato conosco e comece agora mesmo sua jornada de crescimento no Instagram.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <ContactCard
              key={index}
              {...item}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;