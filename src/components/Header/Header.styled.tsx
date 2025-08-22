import styled from 'styled-components';

export const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.3s ease;
  background: ${({ isScrolled }) => 
    isScrolled 
      ? 'rgba(17, 24, 39, 0.95)' 
      : 'transparent'
  };
  backdrop-filter: ${({ isScrolled }) => 
    isScrolled ? 'blur(12px)' : 'none'
  };
  border-bottom: ${({ isScrolled }) => 
    isScrolled ? '1px solid rgb(55, 65, 81)' : 'none'
  };
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  border-radius: 0.5rem;
`;

export const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
`;

export const DesktopNavigation = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
`;

export const NavButton = styled.button`
  color: rgb(209, 213, 219);
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  color: white;
  padding: 0.5rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavigation = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-top: 1px solid rgb(55, 65, 81);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileNavContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
`;

export const MobileNavButton = styled.button`
  color: rgb(209, 213, 219);
  font-weight: 500;
  transition: color 0.3s ease;
  text-align: left;
  padding: 0.5rem 0;
  
  &:hover {
    color: white;
  }
`;
