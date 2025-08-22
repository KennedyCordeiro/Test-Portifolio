'use client';

import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'TechCorp Solutions',
      position: 'Senior Front-end Developer',
      period: '2022 - Presente',
      location: 'São Paulo, SP',
      description: 'Liderando o desenvolvimento front-end de aplicações web complexas, mentorando desenvolvedores juniores e implementando melhores práticas de código.',
      achievements: [
        'Reduziu o tempo de carregamento das aplicações em 40% através de otimizações de performance',
        'Implementou um sistema de design system que aumentou a produtividade da equipe em 30%',
        'Mentorou 5 desenvolvedores juniores, ajudando-os a evoluir profissionalmente'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      companyUrl: 'https://techcorp.com'
    },
    {
      id: 2,
      company: 'Digital Innovations',
      position: 'Front-end Developer',
      period: '2020 - 2022',
      location: 'Rio de Janeiro, RJ',
      description: 'Desenvolveu interfaces responsivas e interativas para clientes de diversos setores, trabalhando em projetos de e-commerce e aplicações corporativas.',
      achievements: [
        'Desenvolveu 15+ projetos de e-commerce com foco em conversão e UX',
        'Implementou sistema de PWA que aumentou o engajamento mobile em 25%',
        'Colaborou com equipes de design para criar experiências visuais impactantes'
      ],
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'Webpack'],
      companyUrl: 'https://digitalinnovations.com'
    },
    {
      id: 3,
      company: 'StartupHub',
      position: 'Junior Front-end Developer',
      period: '2019 - 2020',
      location: 'Belo Horizonte, MG',
      description: 'Iniciou a carreira desenvolvendo landing pages e aplicações web simples, aprendendo as bases do desenvolvimento front-end moderno.',
      achievements: [
        'Desenvolveu 20+ landing pages para campanhas de marketing',
        'Aprendeu e aplicou conceitos de SEO e performance web',
        'Participou de hackathons e eventos de tecnologia'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap'],
      companyUrl: 'https://startuphub.com'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Experiência </span>
            <span className="gradient-text">Profissional</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Minha jornada profissional no desenvolvimento front-end, 
            mostrando evolução constante e conquistas significativas
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-20 bg-gradient-to-b from-primary-500 to-primary-600"></div>
              )}
              
              <div className="flex items-start space-x-6 mb-12">
                {/* Timeline Dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 card">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {experience.position}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm">
                        <div className="flex items-center space-x-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium mt-2 sm:mt-0"
                    >
                      <span>{experience.company}</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wide">
                      Principais Conquistas
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2">
                          <span className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-400 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary-400 mb-2 uppercase tracking-wide">
                      Tecnologias Utilizadas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Sempre em evolução
            </h3>
            <p className="text-gray-300 mb-6">
              Minha jornada no desenvolvimento front-end é marcada por aprendizado contínuo, 
              adaptação às novas tecnologias e busca constante por excelência.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div className="text-gray-400 text-sm">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-2">50+</div>
                <div className="text-gray-400 text-sm">Projetos Concluídos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
