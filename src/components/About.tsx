import React, { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { CheckCircle2, Globe, Target } from 'lucide-react';

const FeatureCard: React.FC<{icon: React.ElementType, title: string, description: string, delay: number, isVisible: boolean}> = ({ 
  icon: Icon, 
  title, 
  description,
  delay,
  isVisible
}) => {
  return (
    <div 
      className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: '1000ms' }}
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4a54c7]/10 to-[#6a4bc7]/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-[#4a54c7]/20 group-hover:to-[#6a4bc7]/20 transition-all duration-500">
        <Icon className="w-6 h-6 text-[#4a54c7] transition-transform duration-500 group-hover:rotate-12" />
      </div>
      
      <h3 className="font-marilde text-xl text-[#252361] mb-3 group-hover:text-[#4a54c7] transition-colors duration-300">{title}</h3>
      
      <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
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

  const features = [
    {
      icon: Target,
      title: 'Estratégia Personalizada',
      description: 'Desenvolvimento de estratégias exclusivas para seu perfil, considerando seu nicho, público e objetivos.'
    },
    {
      icon: CheckCircle2,
      title: 'Engajamento Real',
      description: 'Técnicas comprovadas para atrair seguidores genuínos que realmente se interessam pelo seu conteúdo.'
    },
    {
      icon: Globe,
      title: 'Visibilidade Ampliada',
      description: 'Aumente seu alcance e autoridade no Instagram com técnicas avançadas de otimização.'
    }
  ];

  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
      {/* Background with dynamic parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] to-[#eee7e9]"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#4a54c7] opacity-10 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a54c7]/10 text-[#252361] mb-6 backdrop-blur-sm transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="font-poppins text-sm">Sobre Nós</span>
          </div>
          
          <h2 
            className={`font-marilde text-4xl md:text-5xl text-[#252361] mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Transformando perfis comuns em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]">referências digitais</span>
          </h2>
          
          <p 
            className={`font-poppins text-[#1a1a1a]/70 text-lg md:text-xl mb-6 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            Estratégias personalizadas para impulsionar sua presença no Instagram e transformar seguidores em clientes fiéis.
          </p>
        </div>
      
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="space-y-6 mb-12">
              <p className="font-poppins text-[#1a1a1a]/80 leading-relaxed">
                Desde que me apaixonei pelo mundo digital, tenho ajudado pessoas e empresas a alcançarem seu 
                potencial máximo no Instagram. Com estratégias personalizadas e uma abordagem focada em 
                resultados, transformo perfis comuns em contas que não apenas atraem seguidores, 
                mas geram engajamento real e conversões.
              </p>
              
              <p className="font-poppins text-[#1a1a1a]/80 leading-relaxed">
                Minha missão é fazer com que sua marca se destaque no universo digital, 
                criando uma presença autêntica que ressoa com seu público-alvo e 
                transforma seguidores em clientes fiéis.
              </p>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index} 
                  {...feature} 
                  delay={600 + (index * 100)}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
          
          <div 
            className={`order-1 lg:order-2 transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative">
              {/* 3D floating effect container */}
              <div 
                className="relative rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]"
                style={{ 
                  transform: isVisible ? `perspective(1000px) rotateX(${mousePosition.y * 6}deg) rotateY(${-mousePosition.x * 6}deg)` : 'none',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.5s ease-out'
                }}
              >
                {/* Main image */}
                <img 
                  src="/src/assets/PSX_20250325_210252.jpg" 
                  alt="Carol Lemos" 
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252361]/50 to-transparent rounded-2xl"></div>
                
                {/* Decorative elements with 3D effect */}
                <div 
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-bl from-[#4a54c7]/30 via-[#6a4bc7]/20 to-transparent rounded-full blur-xl transform translate-z-10"
                  style={{ transform: 'translateZ(20px)' }}
                ></div>
                <div 
                  className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-tr from-[#252361]/30 via-[#4a54c7]/20 to-transparent rounded-full blur-xl transform translate-z-10"
                  style={{ transform: 'translateZ(20px)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;