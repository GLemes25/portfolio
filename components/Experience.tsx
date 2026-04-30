"use client";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    type: "work",
    title: "Desenvolvedor Trainee",
    company: "GEOI2 Tecnologia da Informação LTDA",
    location: "Campo Grande - MS, Brasil",
    period: "02/2023 - 03/2024",
    description:
      "Atuação no desenvolvimento e manutenção de sistemas corporativos para a Secretaria da Fazenda do MS. Desenvolvimento de APIs e Web Services utilizando Java, Spring Boot e Maven com integração ao SQL Server. Experiência com C# e ASP.NET MVC, além de participação em equipes ágeis com Scrum, contribuindo na análise de requisitos e melhorias contínuas.",
    technologies: [
      "Java",
      "Spring Boot",
      "C#",
      "ASP.NET MVC",
      "SQL Server",
      "Scrum",
    ],
  },
  {
    type: "work",
    title: "Estagiário em Desenvolvimento de Software",
    company: "Mensurepec",
    location: "Brasil",
    period: "02/2021 - 06/2022",
    description:
      "Desenvolvimento e manutenção de aplicações web e mobile utilizando React.js, React Native, TypeScript e MobX. Criação de APIs com Node.js, Express e GraphQL integradas ao MongoDB. Participação em projetos de sistemas de gestão e publicação de aplicações mobile.",
    technologies: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "GraphQL",
    ],
  },
  {
    type: "education",
    title: "Engenharia da Computação (Graduação em andamento)",
    company: "Anhanguera - Uniderp",
    location: "Campo Grande - MS",
    period: "2020 - 2026",
    description:
      "Formação com foco em desenvolvimento de software, banco de dados e engenharia de sistemas. Aplicação prática dos conceitos em projetos acadêmicos e profissionais.",
    technologies: [
      "Algoritmos",
      "Estruturas de Dados",
      "Banco de Dados",
      "Engenharia de Software",
    ],
  },
];

export const Experience = () => {
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
            Experiência & Formação
          </h2>
          <p className="text-gray-400 text-lg">
            Minha trajetória profissional e acadêmica na área de tecnologia
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
                        <span className="px-3 py-1 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-sm">
                          {exp.period}
                        </span>

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

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
