'use client';

import { User, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary-400" />,
      title: 'Desenvolvimento Front-end',
      description: 'Especializado em React, Next.js e TypeScript, criando interfaces modernas e responsivas.'
    },
    {
      icon: <Palette className="w-8 h-8 text-primary-400" />,
      title: 'Design de Interface',
      description: 'Foco em UX/UI, criando experiências intuitivas e visualmente atrativas.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-400" />,
      title: 'Performance & Otimização',
      description: 'Desenvolvimento de aplicações rápidas e eficientes com as melhores práticas.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Sobre </span>
            <span className="gradient-text">Mim</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Desenvolvedor front-end apaixonado por tecnologia e inovação, 
            sempre em busca de aprender e evoluir constantemente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Transformando ideias em experiências digitais
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Com mais de 3 anos de experiência no desenvolvimento front-end, 
                tenho trabalhado em diversos projetos desafiadores que me permitiram 
                aprimorar minhas habilidades técnicas e criativas.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Sou apaixonado por criar interfaces que não apenas funcionam perfeitamente, 
                mas também proporcionam uma experiência memorável para os usuários. 
                Acredito que o código limpo, a performance e a acessibilidade são 
                fundamentais para qualquer projeto de sucesso.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-gray-700 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="btn-primary">
                Ver Meu Trabalho
              </button>
            </div>
          </div>

          {/* Right Column - Image/Stats */}
          <div className="relative">
            <div className="relative z-10">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-1">
                                  <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                    <User className="w-32 h-32 text-blue-400" />
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-600/20 rounded-full blur-xl"></div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-dark-700 border border-dark-600 rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">100%</div>
                <div className="text-sm text-gray-400">Projetos Entregues</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-dark-700 border border-dark-600 rounded-xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-400">24/7</div>
                <div className="text-sm text-gray-400">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
