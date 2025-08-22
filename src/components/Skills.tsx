'use client';

import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      name: 'Front-end',
      skills: [
        { name: 'React', level: 95, color: 'from-blue-500 to-blue-600' },
        { name: 'Next.js', level: 90, color: 'from-gray-500 to-gray-600' },
        { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-700' },
        { name: 'JavaScript', level: 92, color: 'from-yellow-500 to-yellow-600' },
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Sass/SCSS', level: 80, color: 'from-pink-500 to-pink-600' },
      ]
    },
    backend: {
      name: 'Back-end',
      skills: [
        { name: 'Node.js', level: 75, color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 70, color: 'from-gray-500 to-gray-600' },
        { name: 'MongoDB', level: 65, color: 'from-green-600 to-green-700' },
        { name: 'PostgreSQL', level: 60, color: 'from-blue-500 to-blue-600' },
        { name: 'REST APIs', level: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'GraphQL', level: 65, color: 'from-pink-500 to-pink-600' },
      ]
    },
    tools: {
      name: 'Ferramentas',
      skills: [
        { name: 'Git', level: 85, color: 'from-orange-500 to-orange-600' },
        { name: 'Docker', level: 70, color: 'from-blue-500 to-blue-600' },
        { name: 'Webpack', level: 75, color: 'from-blue-600 to-blue-700' },
        { name: 'Vite', level: 80, color: 'from-yellow-500 to-yellow-600' },
        { name: 'Figma', level: 75, color: 'from-purple-500 to-purple-600' },
        { name: 'VS Code', level: 90, color: 'from-blue-500 to-blue-600' },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Minhas </span>
            <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-800 p-2 rounded-xl border border-dark-700">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-dark-700'
                }`}
              >
                {skillCategories[category as keyof typeof skillCategories].name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <div key={index} className="card group">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-primary-400 font-medium">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              
              {/* Skill Level Indicator */}
              <div className="mt-2 text-right">
                <span className="text-sm text-gray-500">
                  {skill.level >= 90 ? 'Expert' : 
                   skill.level >= 80 ? 'Avançado' : 
                   skill.level >= 70 ? 'Intermediário' : 'Básico'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Sempre aprendendo e evoluindo
            </h3>
            <p className="text-gray-300 mb-6">
              Estou constantemente explorando novas tecnologias e metodologias para 
              manter-me atualizado com as últimas tendências do desenvolvimento web.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                Aprendendo
              </span>
              <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                Em evolução
              </span>
              <span className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-medium">
                Próximo passo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
