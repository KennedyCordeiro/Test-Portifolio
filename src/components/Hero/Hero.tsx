"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import {
  HeroSection,
  BackgroundGradient,
  RadialGradient,
  FloatingElement,
  Container,
  ContentWrapper,
  MainContent,
  Title,
  GradientText,
  Subtitle,
  Description,
  CTAButtons,
  PrimaryButton,
  SecondaryButton,
  SocialLinks,
  SocialLink,
  ScrollIndicator,
  ScrollText,
  ScrollButton,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
} from "./Hero.styled";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroSection id="home">
      <BackgroundGradient />
      <RadialGradient />
      
      <FloatingElement position="top-left" />
      <FloatingElement position="bottom-right" />
      
      <Container>
        <ContentWrapper>
          <MainContent>
            <Title>
              <span style={{ color: 'white' }}>Olá, eu sou </span>
              <GradientText>Seu Nome</GradientText>
            </Title>
            <Subtitle>
              Desenvolvedor Front-end apaixonado por criar experiências digitais
              <span style={{ color: 'rgb(96, 165, 250)' }}> excepcionais</span> e 
              <span style={{ color: 'rgb(96, 165, 250)' }}> inovadoras</span>
            </Subtitle>
            <Description>
              Especializado em React, Next.js e TypeScript. Transformando ideias
              em interfaces intuitivas e responsivas que encantam usuários.
            </Description>
          </MainContent>

          <CTAButtons>
            <PrimaryButton>Ver Projetos</PrimaryButton>
            <SecondaryButton>Baixar CV</SecondaryButton>
          </CTAButtons>

          <SocialLinks>
            <SocialLink
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </SocialLink>
            <SocialLink href="mailto:seu-email@exemplo.com">
              <Mail size={24} />
            </SocialLink>
          </SocialLinks>

          <ScrollIndicator>
            <ScrollText>Role para descobrir mais</ScrollText>
            <ScrollButton onClick={scrollToNext}>
              <ArrowDown size={24} />
            </ScrollButton>
          </ScrollIndicator>
        </ContentWrapper>
      </Container>

      <StatsContainer>
        <StatItem>
          <StatNumber>3+</StatNumber>
          <StatLabel>Anos de Experiência</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>50+</StatNumber>
          <StatLabel>Projetos Concluídos</StatLabel>
        </StatItem>
        <StatItem>
          <StatNumber>100%</StatNumber>
          <StatLabel>Satisfação do Cliente</StatLabel>
        </StatItem>
      </StatsContainer>
    </HeroSection>
  );
};

export default Hero;
