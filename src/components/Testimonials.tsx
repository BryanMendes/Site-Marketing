import React, { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare, User, Award, Sparkles } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TestimonialCard: React.FC<{
  testimonial: any; 
  isActive: boolean;
  index: number;
}> = ({ testimonial, isActive, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center ${
        isActive ? 'opacity-100 z-10 transform-none' : 'opacity-0 z-0 scale-95'
      }`}
      style={{ 
        transform: isActive ? 'none' : `translateX(${index < 0 ? '-' : ''}85%)`,
        transitionDelay: isActive ? '0ms' : '0ms'
      }}
    >
      <div 
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 mx-4 md:mx-0 max-w-2xl w-full transform transition-all duration-500 hover:shadow-2xl relative overflow-hidden group"
        style={{ 
          transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 blur-md group-hover:animate-shine"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4a54c7]/10 to-transparent rounded-full blur-xl transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#252361]/10 to-transparent rounded-full blur-xl transform -translate-x-8 translate-y-8"></div>
        
        {/* Quote icon */}
        <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] rounded-full flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-3 transition-all duration-500">
          <Quote size={20} className="text-white" />
        </div>

        <div className="relative z-10">
          {/* Content */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
            <div className="flex-shrink-0 relative">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden group-hover:shadow-lg transition-all duration-500 border-2 border-white">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover transform transition-transform duration-10000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] rounded-full p-2 shadow-md">
                {testimonial.badge === 'verified' ? (
                  <Award size={16} className="text-white" />
                ) : (
                  <MessageSquare size={16} className="text-white" />
                )}
              </div>
            </div>
            
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-poppins font-semibold text-lg text-[#252361] group-hover:text-[#4a54c7] transition-colors duration-300">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < testimonial.rating ? 'text-[#4a54c7]' : 'text-gray-300'} fill-current`}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-poppins text-sm text-[#1a1a1a]/60">{testimonial.role}</p>
                <span className="h-1 w-1 bg-[#1a1a1a]/20 rounded-full"></span>
                <p className="font-poppins text-sm text-[#4a54c7] font-medium">{testimonial.location}</p>
              </div>
            </div>
          </div>

          <blockquote className="font-poppins text-lg text-[#1a1a1a]/80 leading-relaxed mb-6 italic relative">
            <div className="absolute -left-2 -top-2 opacity-10 text-[#4a54c7]">
              <Quote size={40} />
            </div>
            <p className="relative z-10">{testimonial.text}</p>
          </blockquote>

          {/* Highlight metrics row */}
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex-1 min-w-[130px] bg-gradient-to-br from-[#4a54c7]/5 to-[#6a4bc7]/10 rounded-xl p-4 group-hover:from-[#4a54c7]/10 group-hover:to-[#6a4bc7]/20 transition-all duration-300 backdrop-blur-sm border border-white/40">
              <div className="font-marilde text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]">{testimonial.highlight}</div>
              <div className="text-sm text-[#1a1a1a]/60">{testimonial.highlightLabel}</div>
            </div>
            
            <div className="flex-1 min-w-[130px] bg-gradient-to-br from-[#4a54c7]/5 to-[#6a4bc7]/10 rounded-xl p-4 group-hover:from-[#4a54c7]/10 group-hover:to-[#6a4bc7]/20 transition-all duration-300 backdrop-blur-sm border border-white/40">
              <div className="font-marilde text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]">{testimonial.duration}</div>
              <div className="text-sm text-[#1a1a1a]/60">Tempo de trabalho</div>
            </div>
          </div>
          
          <div className="mt-6 text-right">
            <p className="text-xs text-[#1a1a1a]/40 italic">Publicado em {testimonial.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Influenciadora Digital",
      location: "São Paulo",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "A Carol transformou completamente minha presença no Instagram. Em apenas 3 meses, meu engajamento aumentou significativamente e comecei a atrair convites para parcerias comerciais de marcas que eu sempre sonhei em colaborar. A estratégia personalizada fez toda a diferença!",
      rating: 5,
      highlight: "+200%",
      highlightLabel: "Aumento no engajamento",
      duration: "3 meses",
      date: "Outubro 2023",
      badge: "verified"
    },
    {
      name: "João Santos",
      role: "Dono de E-commerce",
      location: "Rio de Janeiro",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Depois da consultoria com a Carol, nossas vendas pelo Instagram triplicaram. A análise detalhada do nosso perfil e as sugestões de melhoria foram precisas. Além disso, a estratégia de conteúdo aumentou significativamente nossa taxa de conversão. Resultado real e mensurável!",
      rating: 5,
      highlight: "3x",
      highlightLabel: "Aumento nas vendas",
      duration: "6 meses",
      date: "Janeiro 2024",
      badge: "verified"
    },
    {
      name: "Ana Costa",
      role: "Artista Digital",
      location: "Belo Horizonte",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "As estratégias da Carol são incríveis! Meu perfil ganhou mais visibilidade e agora consigo viver da minha arte. Além do aumento de seguidores, o mais importante foi a qualidade das conexões que estabeleci. Hoje tenho clientes recorrentes e um fluxo constante de pedidos.",
      rating: 5,
      highlight: "100%",
      highlightLabel: "Independência financeira",
      duration: "12 meses",
      date: "Março 2024",
      badge: "client"
    }
  ];

  useEffect(() => {
    if (!isVisible || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, testimonials.length, isAutoPlaying]);
  
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

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] to-[#eee7e9]"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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
        <div 
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4a54c7]/10 text-[#252361] mb-6 backdrop-blur-sm">
            <MessageSquare className="w-4 h-4" />
            <span className="font-poppins text-sm">O que nossos clientes dizem</span>
          </div>
          
          <h2 className="font-marilde text-4xl md:text-5xl text-[#252361] mb-6">
            Histórias de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]">sucesso</span> que inspiram
          </h2>
          
          <p className="font-poppins text-[#1a1a1a]/70 text-lg md:text-xl">
            Resultados reais de quem confiou em nosso trabalho e transformou sua presença no Instagram
          </p>
        </div>

        <div 
          className={`relative h-[550px] md:h-[500px] mt-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              isActive={index === activeIndex}
              index={index - activeIndex}
            />
          ))}
          
          {/* Navigation controls */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center mt-8 px-4 md:px-12">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#4a54c7]/10 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-[#252361] group-hover:text-[#4a54c7] transition-colors duration-300" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'bg-[#4a54c7] w-8'
                      : 'bg-[#4a54c7]/30 hover:bg-[#4a54c7]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-[#4a54c7]/10 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-[#252361] group-hover:text-[#4a54c7] transition-colors duration-300" />
            </button>
          </div>
        </div>

        <div 
          className={`mt-24 flex justify-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl flex items-center gap-8 hover:shadow-2xl transition-all duration-500 border border-white/50 group relative overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 blur-md group-hover:animate-shine"></div>
            
            <div className="relative z-10 flex items-center gap-8">
              <div className="flex -space-x-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="relative w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-110 hover:z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] flex items-center justify-center border-2 border-white shadow-md transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div className="h-12 w-px bg-gray-200"></div>
              
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-[#4a54c7] fill-current" />
                    ))}
                  </div>
                  <span className="font-marilde text-xl text-[#252361]">4.9</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60">Avaliação média de 50+ clientes</p>
              </div>
              
              <div className="pl-8 border-l border-gray-200">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#4a54c7]" />
                  <span className="font-marilde text-xl text-[#252361]">+95%</span>
                </div>
                <p className="text-sm text-[#1a1a1a]/60">Taxa de satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;