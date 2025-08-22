import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgb(17, 24, 39) 0%, rgb(31, 41, 55) 50%, rgb(17, 24, 39) 100%);
`;

export const RadialGradient = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
`;

export const FloatingElement = styled.div<{ position: 'top-left' | 'bottom-right' }>`
  position: absolute;
  width: ${({ position }) => position === 'top-left' ? '8rem' : '10rem'};
  height: ${({ position }) => position === 'top-left' ? '8rem' : '10rem'};
  background: ${({ position }) => 
    position === 'top-left' 
      ? 'rgba(59, 130, 246, 0.1)' 
      : 'rgba(37, 99, 235, 0.1)'
  };
  border-radius: 50%;
  filter: blur(24px);
  
  ${({ position }) => position === 'top-left' 
    ? `
      top: 5rem;
      left: 5rem;
    ` 
    : `
      bottom: 5rem;
      right: 5rem;
    `
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
  position: relative;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const MainContent = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(135deg, rgb(96, 165, 250) 0%, rgb(37, 99, 235) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgb(209, 213, 219);
  margin-bottom: 2rem;
  line-height: 1.75;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.125rem;
  color: rgb(156, 163, 175);
  margin-bottom: 3rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 4rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const PrimaryButton = styled.button`
  background: rgb(37, 99, 235);
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  transform: scale(1);
  
  &:hover {
    background: rgb(29, 78, 216);
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid rgb(37, 99, 235);
  color: rgb(37, 99, 235);
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  transform: scale(1);
  
  &:hover {
    background: rgb(37, 99, 235);
    color: white;
    transform: scale(1.05);
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;
`;

export const SocialLink = styled.a`
  color: rgb(156, 163, 175);
  padding: 0.75rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    color: rgb(96, 165, 250);
    background: rgb(31, 41, 55);
  }
`;

export const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ScrollText = styled.span`
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

export const ScrollButton = styled.button`
  color: rgb(156, 163, 175);
  transition: color 0.3s ease;
  animation: bounce 2s infinite;
  
  &:hover {
    color: rgb(96, 165, 250);
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export const StatsContainer = styled.div`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 3rem;
  text-align: center;
`;

export const StatItem = styled.div``;

export const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(96, 165, 250);
`;

export const StatLabel = styled.div`
  font-size: 0.875rem;
  color: rgb(107, 114, 128);
`;
