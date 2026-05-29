"use client";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "BarOps",
    description:
      "Um mini-ERP full-stack especializado no gerenciamento de coquetelaria e eventos. Desenvolvido para controlar custos de bebidas, inventário e gestão de eventos com uma interface altamente responsiva.",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/GLemes25/barops",
    liveUrl: "", // Deixe vazio se não houver link em produção
    image: "/images/barops-preview.png", // Sugestão: coloque um print real aqui
  },
  {
    title: "Chef IA",
    description:
      "Aplicativo mobile que utiliza inteligência artificial para gerar receitas customizadas. Integração direta com a API do Groq utilizando o modelo llama-3.1-8b-instant para processamento rápido de prompts gastronômicos.",
    technologies: ["React Native", "Expo", "TypeScript", "Groq API", "Llama 3"],
    githubUrl: "https://github.com/GLemes25/chef-ia",
    liveUrl: "",
    image: "/images/chefia-preview.png",
  },
  {
    title: "Brivanna Hotel",
    description:
      "Otimização e desenvolvimento web focado em conversão e experiência do hóspede para o setor de hotelaria, entregando alta performance e design focado no usuário.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/GLemes25/brivanna-hotel",
    liveUrl: "https://brivanna.com", // Exemplo de link real
    image: "/images/brivanna-preview.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 text-lg">
            Aplicações reais desenvolvidas para resolver problemas reais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
