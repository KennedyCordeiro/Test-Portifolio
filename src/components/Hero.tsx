"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">Olá, eu sou </span>
              <span className="gradient-text">Seu Nome</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Desenvolvedor Front-end apaixonado por criar experiências digitais
                          <span className="text-blue-400"> excepcionais</span> e 
            <span className="text-blue-400"> inovadoras</span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Especializado em React, Next.js e TypeScript. Transformando ideias
              em interfaces intuitivas e responsivas que encantam usuários.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary">Ver Projetos</button>
            <button className="btn-secondary">Baixar CV</button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-3 hover:bg-dark-800 rounded-full">
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-3 hover:bg-dark-800 rounded-full">
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:seu-email@exemplo.com"
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 p-3 hover:bg-dark-800 rounded-full">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center">
            <span className="text-gray-500 text-sm mb-2">
              Role para descobrir mais
            </span>
            <button
              onClick={scrollToNext}
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 animate-bounce">
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-12 text-center">
        <div>
          <div className="text-2xl font-bold text-blue-400">3+</div>
          <div className="text-sm text-gray-500">Anos de Experiência</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">50+</div>
          <div className="text-sm text-gray-500">Projetos Concluídos</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">100%</div>
          <div className="text-sm text-gray-500">Satisfação do Cliente</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
