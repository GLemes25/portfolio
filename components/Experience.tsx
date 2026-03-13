"use client";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    type: "work",
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead development of microservices architecture serving 1M+ users. Mentored junior developers and improved system performance by 40%.",
    technologies: ["Java", "Spring Boot", "AWS", "PostgreSQL", "Docker"],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Built and deployed multiple web applications from scratch. Implemented CI/CD pipelines and established coding standards for the team.",
    technologies: ["React", "Node.js", "MongoDB", "Kubernetes", "Jenkins"],
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "2019 - 2020",
    description:
      "Developed features for enterprise applications and contributed to API design. Participated in code reviews and agile ceremonies.",
    technologies: ["Java", "Spring MVC", "MySQL", "JavaScript", "Git"],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    period: "2015 - 2019",
    description:
      "Graduated with honors. Focused on software engineering, algorithms, and distributed systems. Led the university coding club.",
    technologies: ["Data Structures", "Algorithms", "System Design", "AI/ML"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 bg-purple-600 rounded-full border-4 border-[#0a0a0a] z-10" />

                {/* Content */}
                <div className="flex-1 ml-20 md:ml-0">
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-[#111111] border border-white/10 rounded-xl p-6 hover:border-purple-600/50 transition-all hover:shadow-lg hover:shadow-purple-600/10">
                      {/* Icon */}
                      <div
                        className={`inline-flex items-center justify-center w-12 h-12 bg-purple-600/10 border border-purple-600/20 rounded-lg mb-4 ${
                          index % 2 === 0 ? "md:float-right md:ml-4" : "md:mr-4"
                        }`}
                      >
                        {exp.type === "work" ? (
                          <Briefcase className="w-6 h-6 text-purple-600" />
                        ) : (
                          <GraduationCap className="w-6 h-6 text-purple-600" />
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-sm">
                            {exp.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white">
                          {exp.title}
                        </h3>

                        <p className="text-purple-400 font-medium">
                          {exp.company}
                        </p>

                        <p className="text-gray-500 text-sm">{exp.location}</p>

                        <p className="text-gray-400 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400 text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
