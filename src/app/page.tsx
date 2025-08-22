"use client";

import { useState } from "react";
import ObserverComponent from "@/components/ObserverComponent";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-900">
      <ObserverComponent />
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
