"use client";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-linear-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-[1200px] w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-sm">
                Disponível para oportunidades
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Olá, eu sou{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Gabriel Lemes
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Desenvolvedor Full Stack
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Desenvolvedor com experiência em construção de aplicações web
              modernas e APIs escaláveis. Trabalho com Java, Spring Boot, C#,
              React e JavaScript, focado em performance, organização de código e
              entrega de soluções eficientes.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all flex items-center gap-2 group"
              >
                Ver Projetos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all border border-white/10"
              >
                Contato
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/GLemes25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </a>

              <a
                href="https://linkedin.com/in/gabriel-lemes-G25"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>

              <a
                href="mailto:seuemail@email.com"
                className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?auto=format&fit=crop&w=1080&q=80"
                alt="Workspace de desenvolvimento"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-linear-to-t from-purple-600/20 to-transparent" />
            </div>

            {/* Glow Effects */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
