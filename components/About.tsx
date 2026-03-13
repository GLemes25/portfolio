"use client";
import { Award, BookOpen, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "5+ Years Experience",
      description: "Building scalable web applications",
    },
    {
      icon: Rocket,
      title: "50+ Projects",
      description: "Delivered across various industries",
    },
    {
      icon: Award,
      title: "Certified Developer",
      description: "AWS & Oracle certified professional",
    },
    {
      icon: BookOpen,
      title: "Continuous Learner",
      description: "Always exploring new technologies",
    },
  ];

  const skills = [
    "Backend Development",
    "Frontend Development",
    "REST API Design",
    "Database Design",
    "Cloud Architecture",
    "DevOps & CI/CD",
    "Microservices",
    "System Design",
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-lg">
            Get to know more about my background and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Alex Johnson
                  </h3>
                  <p className="text-purple-400">Full Stack Developer</p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Im a passionate software developer with expertise in building
                modern web applications. With a strong foundation in both
                frontend and backend technologies, I create robust, scalable
                solutions that solve real-world problems.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                My journey in software development started with Java and Spring
                Boot, and has expanded to include modern JavaScript frameworks,
                cloud technologies, and DevOps practices. I believe in writing
                clean, maintainable code and following industry best practices.
              </p>

              <p className="text-gray-400 leading-relaxed">
                When Im not coding, I enjoy contributing to open-source
                projects, writing technical blog posts, and mentoring aspiring
                developers.
              </p>
            </div>
          </motion.div>

          {/* Right - Highlights & Skills */}
          <div className="space-y-6">
            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0a] border border-white/10 rounded-xl p-6 hover:border-purple-600/50 transition-all"
                >
                  <highlight.icon className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="text-white font-semibold mb-1">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Core Competencies
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-gray-400"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-4">Education</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-white font-semibold">
                    B.S. Computer Science
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Stanford University • 2015-2019
                  </p>
                </div>
                <div>
                  <h5 className="text-white font-semibold">
                    AWS Solutions Architect
                  </h5>
                  <p className="text-gray-400 text-sm">
                    Amazon Web Services • 2021
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
