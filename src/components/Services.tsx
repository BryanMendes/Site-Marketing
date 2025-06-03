import React, { useRef } from 'react';
import { TrendingUp, Layout, BarChart, MessageCircle } from 'lucide-react';
import ServiceCard from './ServiceCard';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1 });

  const services = [
    {
      title: 'Crescimento Orgânico',
      description: 'Estratégias personalizadas para aumentar sua base de seguidores de forma natural e sustentável.',
      icon: TrendingUp,
      features: [
        'Análise completa do perfil',
        'Estratégia de hashtags',
        'Otimização do feed',
        'Relatório mensal'
      ],
      serviceDetails: [
        'Análise detalhada do seu perfil e concorrentes',
        'Identificação de pontos fortes e áreas para melhorar',
        'Pesquisa de palavras-chave e hashtags relevantes para o seu nicho',
        'Estratégia personalizada de hashtags para aumentar alcance',
        'Orientações para otimização de biografia e destaques',
        'Planejamento da identidade visual do feed',
        'Recomendações para melhorar o conteúdo existente',
        'Relatório mensal com métricas e insights importantes',
        'Uma sessão de consultoria por vídeo de 45 minutos'
      ],
      price: 'R$ 997',
      delay: 0
    },
    {
      title: 'Gestão Completa',
      description: 'Planejamento e criação de conteúdo que engaja, informa e converte seu público-alvo.',
      icon: Layout,
      features: [
        'Tudo do plano Crescimento',
        'Criação de conteúdo',
        'Calendário editorial',
        'Métricas avançadas'
      ],
      serviceDetails: [
        'Todos os benefícios do plano Crescimento Orgânico',
        'Desenvolvimento de estratégia de conteúdo alinhada com seus objetivos',
        'Planejamento mensal de conteúdo com calendário editorial completo',
        'Criação de 12 posts por mês (feed e stories)',
        'Design personalizado para posts e stories',
        'Copywriting para legendas otimizadas para engajamento',
        'Pesquisa de tendências e tópicos relevantes para seu nicho',
        'Programação dos posts no melhor horário para sua audiência',
        'Monitoramento e resposta aos comentários',
        'Análise semanal de performance e ajustes na estratégia',
        'Duas sessões de consultoria por vídeo de 45 minutos por mês'
      ],
      price: 'R$ 1.997',
      popular: true,
      delay: 150
    },
    {
      title: 'Análise Avançada',
      description: 'Monitoramento detalhado de métricas e performance para otimizar sua estratégia.',
      icon: BarChart,
      features: [
        'Dashboard personalizado',
        'Análise de concorrentes',
        'Relatório semanal',
        'Ajustes em tempo real'
      ],
      serviceDetails: [
        'Dashboard personalizado com as métricas mais importantes para seu negócio',
        'Análise profunda de até 5 concorrentes principais',
        'Benchmarking de performance e identificação de oportunidades',
        'Monitoramento contínuo de tendências do setor',
        'Relatórios semanais detalhados de performance',
        'Análise de conversão e ROI de suas campanhas',
        'Identificação de padrões de engajamento do seu público',
        'Recomendações de otimização baseadas em dados',
        'Ajustes em tempo real na estratégia conforme necessário',
        'Acesso a uma plataforma de análise avançada',
        'Uma sessão de consultoria por vídeo de 60 minutos por mês'
      ],
      price: 'R$ 1.497',
      delay: 300
    },
    {
      title: 'Consultoria VIP',
      description: 'Sessões individuais para avaliar seu perfil e criar um plano de ação personalizado.',
      icon: MessageCircle,
      features: [
        '4 sessões mensais',
        'Acesso direto via WhatsApp',
        'Mentoria personalizada',
        'Suporte prioritário'
      ],
      serviceDetails: [
        '4 sessões de consultoria por vídeo de 60 minutos cada',
        'Acesso direto via WhatsApp para dúvidas e orientações (respostas em até 24h)',
        'Análise detalhada do seu perfil antes de cada sessão',
        'Desenvolvimento de plano de ação personalizado para suas necessidades',
        'Feedback sobre conteúdo e estratégias em andamento',
        'Orientação para implementação das estratégias sugeridas',
        'Suporte prioritário para solução de problemas',
        'Revisão e feedback de materiais antes da publicação',
        'Acesso a recursos exclusivos e templates premium',
        'Desconto especial para contratação de serviços adicionais'
      ],
      price: 'R$ 2.497',
      delay: 450
    }
  ];

  return (
    <section id="serviços" className="py-20 bg-gradient-to-b from-[#252361] to-[#2a2a6a] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-full w-full bg-[url('https://images.pexels.com/photos/3653849/pexels-photo-3653849.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center bg-fixed"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#4a54c7]/20 text-[#eee7e9] mb-6 font-poppins text-sm backdrop-blur-sm">
            Nossos Serviços
          </span>
          <h2 className="font-marilde text-3xl md:text-5xl text-[#eee7e9] mb-6">
            Escolha o plano ideal para o seu negócio
          </h2>
          <p className="font-poppins text-[#eee7e9]/80 text-base md:text-lg max-w-2xl mx-auto">
            Soluções completas para transformar sua presença no Instagram e alcançar resultados reais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-700 h-full ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                icon={service.icon}
                features={service.features}
                price={service.price}
                delay={service.delay}
                popular={service.popular}
                serviceDetails={service.serviceDetails}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-14 md:mt-16 text-center">
          <div className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-[#eee7e9]/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-[#eee7e9]/15">
            <span className="font-poppins text-sm md:text-base text-[#eee7e9]/80">
              Todos os planos incluem suporte por e-mail e acesso à área de membros
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;