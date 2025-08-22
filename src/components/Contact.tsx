"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Aqui você pode implementar a lógica real de envio
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Mostrar mensagem de sucesso (você pode implementar um toast)
    alert("Mensagem enviada com sucesso!");
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary-400" />,
      title: "Email",
      value: "seu-email@exemplo.com",
      link: "mailto:seu-email@exemplo.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-400" />,
      title: "Telefone",
      value: "+55 (11) 99999-9999",
      link: "tel:+5511999999999",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary-400" />,
      title: "Localização",
      value: "São Paulo, SP - Brasil",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/seu-usuario",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/in/seu-usuario",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com/seu-usuario",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(59,130,246,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-white">Vamos </span>
            <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tem um projeto em mente ou quer apenas bater um papo sobre
            tecnologia? Estou sempre aberto a novas oportunidades e conexões
            interessantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envie uma mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                    placeholder="seu-email@exemplo.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300"
                  placeholder="Qual o assunto da sua mensagem?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors duration-300 resize-none"
                  placeholder="Conte-me sobre seu projeto ou ideia..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Informações de Contato
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-dark-700 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-dark-700 rounded-lg text-gray-400 ${social.color} transition-colors duration-300 hover:bg-dark-600`}
                    title={social.name}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-dark-700 border border-dark-600 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                Disponibilidade
              </h4>
              <p className="text-gray-400 mb-4">
                Estou sempre aberto a novos projetos e oportunidades
                interessantes. Respondo todas as mensagens em até 24 horas.
              </p>
              <div className="flex items-center space-x-2 text-primary-400">
                <div className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Disponível para projetos
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
