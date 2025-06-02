import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber, 
  message = "Olá! Gostaria de mais informações sobre seus serviços."
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Configure o número formatado corretamente para o link do WhatsApp
  const formattedNumber = phoneNumber.replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${formattedNumber}?text=${encodeURIComponent(message)}`;

  // Controle de visibilidade baseado no scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Se está rolando para baixo e já passou 200px do topo
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Adicionar efeito de pulsar periódico para chamar atenção
  useEffect(() => {
    // Pulsar uma vez após 5 segundos para chamar atenção
    const initialPulse = setTimeout(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1500);
    }, 5000);

    // Depois pulsar a cada 30 segundos
    const pulseInterval = window.setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1500);
    }, 30000);

    return () => {
      clearTimeout(initialPulse);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <div 
      className={`fixed right-5 transition-all duration-500 flex items-center z-40 ${
        isVisible ? 'bottom-5 opacity-100' : 'bottom-[-100px] opacity-0'
      }`}
    >
      {/* Tooltip/Mensagem */}
      <div 
        className={`mr-4 bg-white px-4 py-3 rounded-lg shadow-lg relative transition-all duration-300 max-w-[240px] ${
          showTooltip ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2 pointer-events-none'
        }`}
      >
        <p className="text-sm font-poppins text-[#1a1a1a]">
          <span className="font-medium text-[#4a54c7]">Fale direto comigo! 💬</span>
          <br />
          Tire suas dúvidas e comece sua transformação no Instagram!
        </p>
        {/* Seta do tooltip */}
        <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-white"></div>
      </div>
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${
          isPulsing ? 'animate-pulse-subtle' : ''
        }`}
        onClick={() => {
          setShowTooltip(false);
          setIsPulsing(false);
        }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Ícone do WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-white"
        >
          <path
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
        <span className="sr-only">Fale conosco pelo WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton; 