"use client";
import {
  Boxes,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Laptop,
  Server,
} from "lucide-react";
import { motion } from "motion/react";

const technologies = [
  { name: "Java", icon: Code2, category: "Backend" },
  { name: "Spring Boot", icon: Server, category: "Framework" },
  { name: "React", icon: Laptop, category: "Frontend" },
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "Node.js", icon: Server, category: "Runtime" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "Git", icon: GitBranch, category: "Version Control" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "Kubernetes", icon: Boxes, category: "Orchestration" },
  { name: "REST APIs", icon: Server, category: "Architecture" },
];

export const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with to build modern applications
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
              className="group"
            >
              <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-purple-600/50 transition-all hover:shadow-lg hover:shadow-purple-600/10">
                <tech.icon className="w-10 h-10 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
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
