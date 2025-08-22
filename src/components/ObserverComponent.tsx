"use client";

import { useEffect } from "react";
import "./styles.css";

const ObserverComponent = (): null => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // Remover um possível timeout anterior para evitar remoções indesejadas da classe
            const timeoutId = entry.target.getAttribute("data-timeout-id");
            if (timeoutId) {
              clearTimeout(parseInt(timeoutId));
            }
          } else {
            const timeoutId = setTimeout(() => {
              entry.target.classList.remove("show");
            }, 1000);

            entry.target.setAttribute("data-timeout-id", timeoutId.toString());
          }
        });
      },
      {
        threshold: 0.1, // Ajuste o threshold conforme necessário
      }
    );

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((element) => observer.observe(element));
    console.log(hiddenElements);

    return () => {
      hiddenElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return null;
};

export default ObserverComponent;
