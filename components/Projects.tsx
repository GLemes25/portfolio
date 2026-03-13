"use client";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with Spring Boot backend, React frontend, and payment integration. Features include product catalog, shopping cart, and order management.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
  },
  {
    title: "Task Management API",
    description:
      "RESTful API for task management with JWT authentication, role-based access control, and real-time notifications. Built with microservices architecture.",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with interactive charts, data visualization, and export capabilities. Integrated with multiple data sources.",
    technologies: ["React", "TypeScript", "Recharts", "TailwindCSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    title: "Cloud File Storage",
    description:
      "Secure cloud storage solution with file sharing, version control, and collaborative features. Deployed on AWS with S3 and CloudFront.",
    technologies: ["Java", "Spring", "AWS S3", "React", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
  },
  {
    title: "Social Media App",
    description:
      "Social networking platform with posts, comments, likes, and real-time messaging. Features include user profiles, feed algorithms, and media uploads.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
  },
  {
    title: "DevOps Pipeline",
    description:
      "Automated CI/CD pipeline with containerization, orchestration, and monitoring. Includes automated testing, deployment, and rollback strategies.",
    technologies: ["Docker", "Kubernetes", "Jenkins", "AWS", "Terraform"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Some of my recent work and personal projects
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
}
