"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  HeaderContainer,
  Nav,
  NavContent,
  LogoContainer,
  LogoIcon,
  LogoText,
  DesktopNavigation,
  NavButton,
  MobileMenuButton,
  MobileNavigation,
  MobileNavContent,
  MobileNavButton,
} from "./Header.styled";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Habilidades", href: "#skills" },
    { name: "Projetos", href: "#projects" },
    { name: "Experiência", href: "#experience" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Nav>
        <NavContent>
          <LogoContainer>
            <LogoIcon />
            <LogoText>Portfolio</LogoText>
          </LogoContainer>

          <DesktopNavigation>
            {navItems.map((item) => (
              <NavButton
                key={item.name}
                onClick={() => scrollToSection(item.href)}>
                {item.name}
              </NavButton>
            ))}
          </DesktopNavigation>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MobileMenuButton>
        </NavContent>

        {isMenuOpen && (
          <MobileNavigation>
            <MobileNavContent>
              {navItems.map((item) => (
                <MobileNavButton
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}>
                  {item.name}
                </MobileNavButton>
              ))}
            </MobileNavContent>
          </MobileNavigation>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
