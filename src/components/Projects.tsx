"use client";

import { useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Plataforma completa de e-commerce com React, Next.js e Stripe. Inclui sistema de autenticação, carrinho de compras e painel administrativo.",
      image: "/api/placeholder/400/250",
      category: "frontend",
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Stripe",
        "Tailwind CSS",
      ],
      liveUrl: "https://projeto-ecommerce.com",
      githubUrl: "https://github.com/seu-usuario/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Dashboard interativo para análise de dados com gráficos em tempo real, filtros avançados e exportação de relatórios.",
      image: "/api/placeholder/400/250",
      category: "fullstack",
      technologies: ["React", "Node.js", "Chart.js", "MongoDB", "Express"],
      liveUrl: "https://dashboard-analytics.com",
      githubUrl: "https://github.com/seu-usuario/dashboard",
      featured: true,
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Aplicativo de gerenciamento de tarefas com drag & drop, notificações em tempo real e sincronização entre dispositivos.",
      image: "/api/placeholder/400/250",
      category: "frontend",
      technologies: [
        "React",
        "TypeScript",
        "Framer Motion",
        "Firebase",
        "Tailwind",
      ],
      liveUrl: "https://task-app.com",
      githubUrl: "https://github.com/seu-usuario/task-app",
      featured: false,
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Site de portfólio responsivo com animações suaves, modo escuro e otimizado para SEO.",
      image: "/api/placeholder/400/250",
      category: "frontend",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://portfolio.com",
      githubUrl: "https://github.com/seu-usuario/portfolio",
      featured: false,
    },
    {
      id: 5,
      title: "API REST Service",
      description:
        "Serviço de API REST robusto com autenticação JWT, validação de dados e documentação Swagger.",
      image: "/api/placeholder/400/250",
      category: "backend",
      technologies: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
      liveUrl: "https://api-service.com",
      githubUrl: "https://github.com/seu-usuario/api-service",
      featured: false,
    },
    {
      id: 6,
      title: "Mobile App UI Kit",
      description:
        "Kit de componentes UI para aplicativos móveis com design system consistente e componentes reutilizáveis.",
      image: "/api/placeholder/400/250",
      category: "design",
      technologies: ["React Native", "Styled Components", "Figma", "Storybook"],
      liveUrl: "https://ui-kit.com",
      githubUrl: "https://github.com/seu-usuario/ui-kit",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", name: "Todos" },
    { id: "frontend", name: "Front-end" },
    { id: "backend", name: "Back-end" },
    { id: "fullstack", name: "Full-stack" },
    { id: "design", name: "Design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Meus </span>
            <span className="gradient-text">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma seleção dos projetos que desenvolvi, demonstrando minhas
            habilidades e paixão por criar soluções inovadoras
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-700 p-2 rounded-xl border border-dark-600">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-dark-600"
                }`}>
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="w-full h-48 bg-gradient-to-br from-dark-700 to-dark-600 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">
                    Imagem do Projeto
                  </span>
                </div>

                {/* Overlay with Actions */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors duration-300">
                    <Eye size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-dark-700 rounded-full text-white hover:bg-dark-600 transition-colors duration-300">
                    <Github size={20} />
                  </a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Destaque
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-dark-700 text-gray-300 text-sm rounded-full border border-dark-600">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300 text-sm font-medium">
                    <ExternalLink size={16} />
                    <span>Ver Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm font-medium">
                    <Github size={16} />
                    <span>Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-dark-700 border border-dark-600 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-gray-300 mb-6">
              Vamos conversar sobre como posso ajudar a transformar sua ideia em
              realidade
            </p>
            <button className="btn-primary">Vamos Conversar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
