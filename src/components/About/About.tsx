'use client';

import { User, Code, Palette, Zap } from 'lucide-react';
import {
  AboutSection,
  BackgroundRadial,
  Container,
  Header,
  SectionTitle,
  GradientText,
  Subtitle,
  ContentGrid,
  LeftColumn,
  ContentBlock,
  MainTitle,
  Paragraph,
  FeaturesList,
  FeatureItem,
  FeatureIcon,
  FeatureContent,
  FeatureTitle,
  FeatureDescription,
  CTAButton,
  RightColumn,
  ProfileImageContainer,
  ProfileImageWrapper,
  ProfileImage,
  FloatingElement,
  StatsCard,
  StatsNumber,
  StatsLabel,
} from './About.styled';

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8" style={{ color: 'rgb(96, 165, 250)' }} />,
      title: 'Desenvolvimento Front-end',
      description: 'Especializado em React, Next.js e TypeScript, criando interfaces modernas e responsivas.'
    },
    {
      icon: <Palette className="w-8 h-8" style={{ color: 'rgb(96, 165, 250)' }} />,
      title: 'Design de Interface',
      description: 'Foco em UX/UI, criando experiências intuitivas e visualmente atrativas.'
    },
    {
      icon: <Zap className="w-8 h-8" style={{ color: 'rgb(96, 165, 250)' }} />,
      title: 'Performance & Otimização',
      description: 'Desenvolvimento de aplicações rápidas e eficientes com as melhores práticas.'
    }
  ];

  return (
    <AboutSection id="about">
      <BackgroundRadial />
      
      <Container>
        <Header>
          <SectionTitle>
            <span style={{ color: 'white' }}>Sobre </span>
            <GradientText>Mim</GradientText>
          </SectionTitle>
          <Subtitle>
            Desenvolvedor front-end apaixonado por tecnologia e inovação, 
            sempre em busca de aprender e evoluir constantemente.
          </Subtitle>
        </Header>

        <ContentGrid>
          <LeftColumn>
            <ContentBlock>
              <MainTitle>
                Transformando ideias em experiências digitais
              </MainTitle>
              <Paragraph>
                Com mais de 3 anos de experiência no desenvolvimento front-end, 
                tenho trabalhado em diversos projetos desafiadores que me permitiram 
                aprimorar minhas habilidades técnicas e criativas.
              </Paragraph>
              <Paragraph>
                Sou apaixonado por criar interfaces que não apenas funcionam perfeitamente, 
                mas também proporcionam uma experiência memorável para os usuários. 
                Acredito que o código limpo, a performance e a acessibilidade são 
                fundamentais para qualquer projeto de sucesso.
              </Paragraph>
            </ContentBlock>

            <FeaturesList>
              {features.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>
                    {feature.icon}
                  </FeatureIcon>
                  <FeatureContent>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureContent>
                </FeatureItem>
              ))}
            </FeaturesList>

            <CTAButton>
              Ver Meu Trabalho
            </CTAButton>
          </LeftColumn>

          <RightColumn>
            <ProfileImageContainer>
              <ProfileImageWrapper>
                <ProfileImage>
                  <User className="w-32 h-32" style={{ color: 'rgb(96, 165, 250)' }} />
                </ProfileImage>
              </ProfileImageWrapper>
            </ProfileImageContainer>
            
            <FloatingElement position="top-right" />
            <FloatingElement position="bottom-left" />
            
            <StatsCard position="bottom-left">
              <StatsNumber>100%</StatsNumber>
              <StatsLabel>Projetos Entregues</StatsLabel>
            </StatsCard>
            
            <StatsCard position="top-right">
              <StatsNumber>24/7</StatsNumber>
              <StatsLabel>Suporte</StatsLabel>
            </StatsCard>
          </RightColumn>
        </ContentGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
