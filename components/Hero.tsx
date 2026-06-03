"use client";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-12 md:py-24    bg-background"
    >
      <div className="max-w-300 w-full">
        <div className="flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-12 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative md:order-last"
          >
            <div className="hidden md:block relative rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1779047269/eudev_otaswm.png"
                alt="Workspace de desenvolvimento"
                className="w-full h-auto"
                width={920}
                height={920}
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand/20 to-transparent" />
            </div>

            <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand/20 rounded-full blur-3xl hidden md:block" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-brand-alt/20 rounded-full blur-3xl hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:order-first"
          >
            <div className="inline-block mb-4 mt-5">
              <span className="px-4 py-2  bg-brand/10 border border-brand/20 rounded-full text-brand text-sm">
                Disponível para oportunidades
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Olá, eu sou{" "}
              <span className="bg-linear-to-r from-brand to-brand-alt bg-clip-text text-transparent">
                Gabriel Lemes
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Desenvolvedor Full Stack
            </h2>
            <div className="flex justify-center md:hidden">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-brand/20 blur-2xl scale-110" />
                <div className="relative w-72 h-72 rounded-2xl overflow-hidden border border-brand/30 shadow-2xl">
                  <Image
                    src="https://res.cloudinary.com/dk7zfhbrj/image/upload/v1779047269/eudev_otaswm.png"
                    alt="Workspace de desenvolvimento"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand/20 to-transparent" />
                </div>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 mt-8 leading-relaxed">
              Desenvolvedor com experiência em construção de aplicações web
              modernas e APIs escaláveis. Trabalho com Java, Spring Boot, C#,
              React e JavaScript, focado em performance, organização de código e
              entrega de soluções eficientes.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-brand hover:bg-brand-dim text-brand-foreground rounded-lg transition-all flex items-center gap-2 group focus-visible:outline-none focus-visible:opacity-90"
              >
                Ver Projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-foreground/5 hover:bg-foreground/10 text-foreground rounded-lg transition-all border border-border focus-visible:outline-none focus-visible:opacity-90"
              >
                Contato
              </a>
            </div>

            <div className="flex gap-4 mb-5">
              <a
                href="https://github.com/GLemes25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 bg-foreground/5 hover:bg-brand/20 border border-border hover:border-brand/50 rounded-lg flex items-center justify-center transition-all focus-visible:outline-none focus-visible:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/gabriel-lemes-G25"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 bg-foreground/5 hover:bg-brand/20 border border-border hover:border-brand/50 rounded-lg flex items-center justify-center transition-all focus-visible:outline-none focus-visible:opacity-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="mailto:gabriellemes924@gmail.com"
                aria-label="Email"
                className="w-12 h-12 bg-foreground/5 hover:bg-brand/20 border border-border hover:border-brand/50 rounded-lg flex items-center justify-center transition-all focus-visible:outline-none focus-visible:opacity-90"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
