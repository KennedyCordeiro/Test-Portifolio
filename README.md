# 🚀 Portfólio Profissional - Desenvolvedor Front-end

Um portfólio moderno e responsivo desenvolvido com **Next.js 14**, **TypeScript** e **Tailwind CSS**, integrando um sistema de animações personalizado baseado em Intersection Observer.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com tema escuro e gradientes
- 📱 **Totalmente Responsivo**: Otimizado para todos os dispositivos
- 🎭 **Animações Suaves**: Sistema de animações baseado em scroll
- ⚡ **Performance Otimizada**: Construído com Next.js 14 e TypeScript
- 🎯 **SEO Otimizado**: Meta tags e estrutura semântica
- 🔧 **Fácil Customização**: Componentes modulares e reutilizáveis

## 🛠️ Tecnologias Utilizadas

- **Framework**: Next.js 14
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Animações**: CSS Animations + Intersection Observer
- **Ícones**: Lucide React
- **Deploy**: Vercel (recomendado)

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio.git
cd portfolio
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── ObserverComponent.tsx  # Sistema de animações
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── Hero.tsx           # Seção principal
│   ├── About.tsx          # Sobre mim
│   ├── Skills.tsx         # Habilidades técnicas
│   ├── Projects.tsx       # Projetos
│   ├── Experience.tsx     # Experiência profissional
│   ├── Contact.tsx        # Formulário de contato
│   ├── Footer.tsx         # Rodapé
│   └── styles.css         # Animações CSS
└── lib/                   # Utilitários e configurações
```

## 🎭 Sistema de Animações

O portfólio inclui um sistema de animações personalizado que:

- **Detecta elementos** quando entram na viewport
- **Aplica animações** baseadas em classes CSS
- **Remove animações** quando elementos saem da tela
- **Suporta delays** para sequências de animação

### Como Funciona

1. **Intersection Observer**: Monitora quando elementos entram/saem da tela
2. **Classes CSS**: Aplica/remove classes `.show` para ativar animações
3. **Keyframes**: Define diferentes tipos de animações (slide, fade, blur)
4. **Performance**: Otimizado para não impactar a performance da página

### Animações Disponíveis

- `slide-in-blurred-left`: Desliza da esquerda com blur
- `slide-in-top`: Desliza do topo com blur
- `slide-in-bck-right`: Desliza do fundo pela direita
- `slide-left`: Desliza da esquerda com profundidade

## 🎨 Customização

### Cores

Edite o arquivo `tailwind.config.js` para personalizar as cores:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... outras variações
  },
  dark: {
    50: '#f8fafc',
    // ... outras variações
  }
}
```

### Conteúdo

1. **Informações Pessoais**: Edite os componentes para suas informações
2. **Projetos**: Adicione/remova projetos no componente `Projects.tsx`
3. **Experiência**: Atualize o histórico profissional em `Experience.tsx`
4. **Habilidades**: Modifique as habilidades técnicas em `Skills.tsx`

### Animações

Personalize as animações editando `src/components/styles.css`:

```css
@keyframes sua-animacao {
  0% { /* estado inicial */ }
  100% { /* estado final */ }
}

.seu-elemento.show {
  animation: sua-animacao 1s ease-out both;
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

### Outras Plataformas

- **Netlify**: Compatível com Next.js
- **AWS Amplify**: Suporte nativo
- **GitHub Pages**: Requer configuração adicional

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento local
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
```

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar conforme suas necessidades.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Suporte

Se você tiver dúvidas ou precisar de ajuda:

- Abra uma issue no GitHub
- Entre em contato através do formulário do portfólio

---

**Desenvolvido com ❤️ por [Seu Nome]**

*Transformando ideias em experiências digitais excepcionais*
