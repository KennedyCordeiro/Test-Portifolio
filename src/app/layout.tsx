import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfólio - Desenvolvedor Front-end",
  description:
    "Portfólio profissional de um desenvolvedor front-end com experiência em React, Next.js e tecnologias modernas",
  keywords: [
    "desenvolvedor",
    "front-end",
    "react",
    "next.js",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Seu Nome" }],
  creator: "Seu Nome",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-portfolio.com",
    title: "Portfólio - Desenvolvedor Front-end",
    description: "Portfólio profissional de um desenvolvedor front-end",
    siteName: "Portfólio Dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio - Desenvolvedor Front-end",
    description: "Portfólio profissional de um desenvolvedor front-end",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
