"use client";
import { Award, BookOpen, Code2, Rocket } from "lucide-react";
import { motion } from "motion/react";

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "2+ Anos de Experiência",
      description: "Desenvolvendo aplicações web e APIs",
    },
    {
      icon: Rocket,
      title: "Projetos Reais",
      description: "Sistemas corporativos e aplicações web/mobile",
    },
    {
      icon: Award,
      title: "Experiência Profissional",
      description: "Atuação em empresa e projetos governamentais",
    },
    {
      icon: BookOpen,
      title: "Aprendizado Contínuo",
      description: "Evoluindo constantemente na área de tecnologia",
    },
  ];

  const skills = [
    "Desenvolvimento Backend (Java, C#)",
    "Desenvolvimento Frontend (React)",
    "APIs REST e Web Services",
    "Banco de Dados (SQL Server, MongoDB)",
    "Integração de Sistemas",
    "Versionamento com Git",
    "Metodologias Ágeis (Scrum)",
    "Desenvolvimento Full Stack",
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
            Sobre Mim
          </h2>
          <p className="text-gray-400 text-lg">
            Conheça mais sobre minha trajetória e experiência como desenvolvedor
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Perfil */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-linear-to-br from-purple-600 to-violet-600 rounded-full flex items-center justify-center text-4xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    Gabriel Lemes
                  </h3>
                  <p className="text-purple-400">
                    Desenvolvedor Full Stack Júnior
                  </p>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                Desenvolvedor com cerca de 2 anos de experiência atuando no
                desenvolvimento de aplicações web, APIs e sistemas corporativos.
                Tenho experiência prática com Java (Spring Boot), C#, React e
                banco de dados relacionais e não relacionais.
              </p>

              <p className="text-gray-400 leading-relaxed mb-6">
                Já atuei em projetos reais, incluindo sistemas para o setor
                público, com foco em desempenho, estabilidade e integração de
                sistemas. Tenho familiaridade com metodologias ágeis (Scrum) e
                boas práticas de desenvolvimento.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Busco uma oportunidade como Desenvolvedor Júnior ou Full Stack
                para continuar evoluindo tecnicamente e contribuir com soluções
                eficientes e bem estruturadas.
              </p>
            </div>
          </motion.div>

          {/* Right - Destaques + Skills */}
          <div className="space-y-6">
            {/* Highlights */}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Principais Competências
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

            {/* Formação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-[#0a0a0a] border border-white/10 rounded-xl p-8"
            >
              <h4 className="text-xl font-bold text-white mb-4">Formação</h4>

              <div>
                <h5 className="text-white font-semibold">
                  Engenharia da Computação
                </h5>
                <p className="text-gray-400 text-sm">
                  Anhanguera-Uniderp • 2020 - 2026 (em andamento)
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
