export type ExperienceType = {
  type: "work" | "education";
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
};

export const experiences: ExperienceType[] = [
  {
    type: "work",
    title: "Desenvolvedor Full Stack Freelance",
    company: "Autônomo",
    location: "Remoto",
    period: "01/2026 - Atual",
    description:
      "Desenvolvimento de soluções web e mobile sob medida para clientes. Atuação no ciclo completo de engenharia, desde o design de UI até a implementação de arquiteturas complexas, como ERPs para gestão de eventos (BarOps) e aplicativos móveis integrados com Inteligência Artificial (Chef IA). Foco em performance, Clean Architecture e interfaces responsivas.",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Groq API",
    ],
  },
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
