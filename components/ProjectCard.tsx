"use client";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

type ProjectCardPropsType = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string; // Agora é opcional
  image: string;
};

export const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  image,
}: ProjectCardPropsType) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-purple-600/50 transition-all hover:shadow-lg hover:shadow-purple-600/10 focus-within:opacity-90 flex flex-col h-full"
    >
      <div className="relative h-36 bg-linear-to-br from-purple-600/20 to-violet-600/20 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={`Preview do projeto ${title}`}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-base font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-3 leading-relaxed grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Lógica condicional para os botões */}
        <div className="flex gap-3 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-all focus-visible:opacity-90 focus-visible:outline-none"
            aria-label={`Ver código fonte do projeto ${title} no GitHub`}
          >
            <Github className="w-4 h-4" />
            Código
          </a>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg flex items-center justify-center gap-2 text-white transition-all focus-visible:opacity-90 focus-visible:outline-none"
              aria-label={`Ver demonstração ao vivo do projeto ${title}`}
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
