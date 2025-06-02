import React, { useState } from 'react';
import { DivideIcon as LucideIcon, Check, ArrowRight, X, Info } from 'lucide-react';
import Button from './Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  price: string;
  popular?: boolean;
  delay?: number;
  serviceDetails?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  features,
  price,
  popular = false,
  delay = 0,
  serviceDetails = []
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div 
      className={`relative rounded-2xl p-5 md:p-6 lg:p-8 border h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group
        ${popular 
          ? 'bg-white/90 backdrop-blur-sm border-[#4a54c7]/40 shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm border-gray-200 shadow-lg'
        }
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 right-8 bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] text-white text-xs md:text-sm font-medium px-3 md:px-4 py-1 rounded-full shadow-lg">
          Mais popular
        </div>
      )}
      
      {/* Background shine effect */}
      <div className="absolute -inset-px rounded-2xl group-hover:animate-shine"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-4 md:mb-5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg
          ${popular 
            ? 'bg-gradient-to-br from-[#4a54c7] to-[#6a4bc7] text-white shadow-md shadow-[#4a54c7]/30' 
            : 'bg-[#4a54c7]/10 text-[#4a54c7]'
          }
        `}>
          <Icon size={24} className={`${popular ? 'text-white' : 'text-[#4a54c7]'} transform transition-transform duration-700 group-hover:rotate-6`} />
        </div>
        
        <h3 className={`font-marilde text-lg md:text-xl lg:text-2xl mb-2 ${popular ? 'text-[#4a54c7]' : 'text-[#252361]'}`}>
          {title}
        </h3>
        
        <p className="font-poppins text-[#1a1a1a]/70 mb-4 md:mb-5 text-xs md:text-sm lg:text-base">{description}</p>
        
        <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6 flex-grow">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start text-[#1a1a1a]/80 group/feature">
              <div className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full ${popular ? 'bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7]' : 'bg-[#4a54c7]/10'} mr-2 md:mr-3 flex items-center justify-center mt-0.5 transition-colors duration-300 group-hover/feature:bg-[#4a54c7]`}>
                <Check className={`w-2.5 h-2.5 md:w-3 md:h-3 ${popular ? 'text-white' : 'text-[#4a54c7]'} group-hover/feature:text-white`} />
              </div>
              <span className="font-poppins text-xs md:text-sm">{feature}</span>
            </div>
          ))}
        </div>

        {serviceDetails.length > 0 && (
          <div className="mb-3 md:mb-4">
            <Button 
              variant="secondary" 
              size="sm"
              className="w-full text-xs md:text-sm"
              onClick={() => setShowDetails(true)}
              icon={<Info className="w-3 h-3 md:w-4 md:h-4" />}
            >
              Ver detalhes
            </Button>
          </div>
        )}
        
        <div className={`mb-4 md:mb-5 bg-[#F8F9FA] rounded-xl p-3 md:p-4 border transition-all duration-300 group-hover:shadow-sm ${popular ? 'border-[#4a54c7]/20' : 'border-gray-100'} group-hover:border-[#4a54c7]/20`}>
          <div className="flex items-end gap-1.5">
            <div className={`font-marilde text-xl md:text-2xl lg:text-3xl ${popular ? 'text-[#4a54c7]' : 'text-[#252361]'}`}>{price}</div>
            <div className="text-[#1a1a1a]/60 text-xs pb-1">/mês</div>
          </div>
          <div className="text-[#1a1a1a]/60 text-xs mt-0.5 md:mt-1">Cancelamento flexível</div>
        </div>
        
        <Button 
          variant={popular ? "primary" : "outline"} 
          className="w-full text-xs md:text-sm"
          onClick={() => window.location.href = '#contato'}
          size="lg"
          icon={<ArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-1" />}
        >
          Começar agora
        </Button>
      </div>
      
      {/* Subtle gradient border for popular card */}
      {popular && (
        <div className="absolute -z-5 -inset-0.5 rounded-2xl bg-gradient-to-br from-[#4a54c7]/20 to-[#6a4bc7]/20 opacity-40 blur-sm"></div>
      )}
      
      {/* Glow effect on hover */}
      <div className={`absolute -z-10 -inset-0.5 rounded-2xl bg-gradient-to-r from-[#4a54c7] to-[#6a4bc7] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 ${popular ? 'group-hover:opacity-40' : ''}`}></div>

      {/* Details Modal */}
      {showDetails && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-5 md:p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative animate-slideUp">
            <button 
              onClick={() => setShowDetails(false)}
              className="absolute right-3 md:right-4 top-3 md:top-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>
            
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 md:mb-6
              ${popular 
                ? 'bg-gradient-to-br from-[#4a54c7] to-[#6a4bc7] text-white' 
                : 'bg-[#4a54c7]/10 text-[#4a54c7]'
              }
            `}>
              <Icon size={20} className="md:w-6 md:h-6" />
            </div>
            
            <h3 className={`font-marilde text-xl md:text-2xl mb-2 ${popular ? 'text-[#4a54c7]' : 'text-[#252361]'}`}>
              {title}
            </h3>
            
            <p className="font-poppins text-[#1a1a1a]/70 mb-5 md:mb-6 text-sm md:text-base">{description}</p>
            
            <h4 className="font-poppins font-semibold text-[#252361] mb-3 text-sm md:text-base">
              Este serviço inclui:
            </h4>
            
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              {serviceDetails.map((detail, index) => (
                <div key={index} className="flex items-start text-[#1a1a1a]/80">
                  <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#4a54c7]/10 mr-2 md:mr-3 flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-[#4a54c7]" />
                  </div>
                  <span className="font-poppins text-xs md:text-sm">{detail}</span>
                </div>
              ))}
            </div>
            
            <Button 
              variant="primary" 
              className="w-full text-xs md:text-sm"
              onClick={() => {
                setShowDetails(false);
                window.location.href = '#contato';
              }}
              size="lg"
              icon={<ArrowRight className="w-3 h-3 md:w-4 md:h-4" />}
            >
              Começar agora
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;