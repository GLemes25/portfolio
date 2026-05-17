"use client";
import { motion } from "motion/react";
import { DiMsqlServer } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
  SiDotnet,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { TbApi, TbBrandCSharp } from "react-icons/tb";

const technologies = [
  { name: "Java", icon: FaJava, category: "Backend", color: "#CC2927" },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    category: "Framework",
    color: "#6DB33F",
  },
  { name: "C#", icon: TbBrandCSharp, category: "Backend", color: "#9B4F96" },
  {
    name: "ASP.NET MVC",
    icon: SiDotnet,
    category: "Framework",
    color: "#512BD4",
  },
  { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Language",
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    category: "Language",
    color: "#3178C6",
  },
  { name: "Node.js", icon: SiNodedotjs, category: "Runtime", color: "#339933" },
  {
    name: "SQL Server",
    icon: DiMsqlServer,
    category: "Database",
    color: "#CC2927",
  },
  { name: "MongoDB", icon: SiMongodb, category: "Database", color: "#47A248" },
  {
    name: "REST APIs",
    icon: TbApi,
    category: "Architecture",
    color: "#38BDF8",
  },
  { name: "Git", icon: SiGit, category: "Versionamento", color: "#F05032" },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tecnologias
          </h2>
          <p className="text-gray-400 text-lg">
            Tecnologias que utilizo no desenvolvimento de aplicações modernas
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group focus-within:opacity-90 transition-opacity"
              style={{ "--tech-color": tech.color } as React.CSSProperties}
            >
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-(--tech-color) transition-all hover:shadow-lg h-full flex flex-col items-center text-center">
                <tech.icon className="w-10 h-10 text-gray-500 mb-4 group-hover:text-(--tech-color) group-hover:scale-110 transition-all duration-300" />
                <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                <p className="text-gray-500 text-sm">{tech.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
