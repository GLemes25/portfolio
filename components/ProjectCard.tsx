"use client";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

type ProjectCardPropsType = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
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
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col h-full bg-transparent border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all focus-within:opacity-90"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-white/5 shrink-0">
        <Image
          src={image}
          alt={`Preview do projeto ${title}`}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
      </div>

      <div className="p-5 flex flex-col grow gap-4 bg-[#0a0a0a]">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-md text-gray-300 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-all focus-visible:opacity-90 focus-visible:outline-none"
            aria-label={`Ver código fonte do projeto ${title} no GitHub`}
          >
            <Github className="w-4 h-4" />
            <span className="font-medium">Código</span>
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
              <span className="font-medium">Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
