import styled from "styled-components";

export const AboutSection = styled.section`
  padding: 5rem 0;
  background: rgb(31, 41, 55);
  position: relative;
  overflow: hidden;
`;

export const BackgroundRadial = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 30% 70%,
    rgba(59, 130, 246, 0.05) 0%,
    transparent 50%
  );
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 10;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const GradientText = styled.span`
  background: linear-gradient(
    135deg,
    rgb(96, 165, 250) 0%,
    rgb(37, 99, 235) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: rgb(209, 213, 219);
  max-width: 48rem;
  margin: 0 auto;
`;

export const ContentGrid = styled.div`
  display: grid;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const MainTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  color: rgb(209, 213, 219);
  line-height: 1.75;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const FeatureIcon = styled.div`
  flex-shrink: 0;
  padding: 0.75rem;
  background: rgb(55, 65, 81);
  border-radius: 0.5rem;
`;

export const FeatureContent = styled.div``;

export const FeatureTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin-bottom: 0.5rem;
`;

export const FeatureDescription = styled.p`
  color: rgb(156, 163, 175);
`;

export const CTAButton = styled.button`
  background: rgb(37, 99, 235);
  color: white;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  transform: scale(1);
  align-self: flex-start;

  &:hover {
    background: rgb(29, 78, 216);
    transform: scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

export const RightColumn = styled.div`
  position: relative;
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const ProfileImageWrapper = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  background: linear-gradient(
    135deg,
    rgb(59, 130, 246) 0%,
    rgb(37, 99, 235) 100%
  );
  border-radius: 1rem;
  padding: 0.25rem;
`;

export const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(31, 41, 55);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FloatingElement = styled.div<{
  position: "top-right" | "bottom-left";
}>`
  position: absolute;
  width: ${({ position }) => (position === "top-right" ? "6rem" : "8rem")};
  height: ${({ position }) => (position === "top-right" ? "6rem" : "8rem")};
  background: ${({ position }) =>
    position === "top-right"
      ? "rgba(59, 130, 246, 0.2)"
      : "rgba(37, 99, 235, 0.2)"};
  border-radius: 50%;
  filter: blur(20px);

  ${({ position }) =>
    position === "top-right"
      ? `
      top: -1rem;
      right: -1rem;
    `
      : `
      bottom: -1rem;
      left: -1rem;
    `}
`;

export const StatsCard = styled.div<{ position: "top-right" | "bottom-left" }>`
  position: absolute;
  background: rgb(55, 65, 81);
  border: 1px solid rgb(75, 85, 99);
  border-radius: 0.75rem;
  padding: 1rem;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  text-align: center;

  ${({ position }) =>
    position === "top-right"
      ? `
      top: -2rem;
      right: -2rem;
    `
      : `
      bottom: -2rem;
      left: -2rem;
    `}
`;

export const StatsNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(96, 165, 250);
  margin-bottom: 0.5rem;
`;

export const StatsLabel = styled.div`
  font-size: 0.875rem;
  color: rgb(156, 163, 175);
`;
