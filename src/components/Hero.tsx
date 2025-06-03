import React, { useEffect, useState } from 'react';
import Button from './Button';
import { Instagram, Star, ArrowRight, MousePointer } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-10 sm:py-0"
    >
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-[#252361] via-[#2a2a6a] to-[#4a54c7]/20"
        style={{
          backgroundPosition: `${mousePosition.x * 20}% ${mousePosition.y * 20}%`,
          transition: 'background-position 0.5s ease-out'
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-white opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className={`w-full md:w-1/2 text-center md:text-left transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-[#eee7e9] mb-6 border border-white/20">
              <Instagram className="w-4 h-4" />
              <span className="font-poppins text-sm">Marketing Digital & Instagram</span>
            </div>
            
            <h1 className="font-marilde text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Transforme seu{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]">Instagram</span>{' '}
              em resultados
            </h1>
            
            <p className="font-poppins text-white/80 text-lg md:text-xl mb-8 max-w-lg">
              Estratégias personalizadas para transformar seguidores em clientes reais e fiéis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                onClick={() => window.location.href = '#contato'}
                className="w-full sm:w-auto"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Fale com a Carol
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.location.href = '#serviços'}
                className="w-full sm:w-auto"
                size="lg"
              >
                Nossos serviços
              </Button>
            </div>

            
          </div>
          
          <div 
            className={`w-full md:w-1/2 flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#4a54c7] to-[#252361] rounded-xl opacity-75 group-hover:opacity-100 transition duration-700 group-hover:duration-200 blur-xl"></div>
              
              <div className="relative">
                <img 
                  src="images/Editadas/PSX_20250325_205915.jpg" 
                  alt="Pessoa sorrindo enquanto usa o celular" 
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252361]/50 to-transparent rounded-xl"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl transform group-hover:translate-y-[-8px] transition-transform duration-500">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#4a54c7]" />
                  <div>
                    <div className="text-[#252361] font-marilde text-xl">+300%</div>
                    <div className="text-[#1a1a1a]/60 text-sm">Crescimento médio</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <MousePointer className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <div className="text-white/60 text-sm mb-2">Scroll</div>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;