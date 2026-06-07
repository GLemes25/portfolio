type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
};

export const projects: ProjectType[] = [
  {
    title: "BarOps",
    description:
      "Um mini-ERP full-stack especializado no gerenciamento de coquetelaria e eventos. Desenvolvido para controlar custos de bebidas, inventário e gestão de eventos com uma interface altamente responsiva.",
    technologies: [
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    githubUrl: "https://github.com/GLemes25/barops",
    liveUrl: "https://barops.fremez.com/",
    image: "/projects/barops2.png",
  },
  {
    title: "Chef IA",
    description:
      "Aplicativo mobile que utiliza inteligência artificial para gerar receitas customizadas. Integração direta com a API do Groq utilizando o modelo llama-3.1-8b-instant para processamento rápido de prompts gastronômicos.",
    technologies: ["React Native", "Expo", "TypeScript", "Groq API", "Llama 3"],
    githubUrl: "https://github.com/GLemes25/chef-ia",
    liveUrl: "",
    image: "/projects/chefia.png",
  },
  {
    title: "Brivanna Hotel",
    description:
      "Otimização e desenvolvimento web focado em conversão e experiência do hóspede para o setor de hotelaria, entregando alta performance e design focado no usuário.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/GLemes25/brivanna-hotel",
    liveUrl: "https://www.brivannahotel.com.br/,",
    image: "/projects/brivannahotel2.png",
  },
  {
    title: "Nummus Premium",
    description:
      "Plataforma SaaS full-stack para gestão financeira e wealth management. Integra categorização inteligente de despesas com IA, controle de múltiplas carteiras e uma interface premium com glassmorphism a 90% de opacidade.",
    technologies: [
      "Next.js",
      "Fastify",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Prisma",
    ],
    githubUrl: "https://github.com/GLemes25/nummus-web",
    liveUrl: "",
    image: "/projects/nummus2.png",
  },
  {
    title: "Brivan Sabor",
    description:
      "E-commerce de gastronomia de alto padrão focado em conversão e UX. Construído com arquitetura mobile-first e Luxury Design System (Dark mode e detalhes em dourado), oferecendo catálogo dinâmico, carrinho de compras inteligente e integração fluida com WhatsApp para delivery.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    githubUrl: "https://github.com/GLemes25/brivan-sabor",
    liveUrl: "https://brivan-sabor.vercel.app/",
    image: "/projects/brivansabor.png",
  },
  {
    title: "Previsão do Tempo IA",
    description:
      "Aplicação web moderna que informa o clima em tempo real e utiliza inteligência artificial para sugerir o que vestir. Integra comandos de voz via Web Speech API e processamento de linguagem natural com a Groq API utilizando o modelo Llama 4.",
    technologies: [
      "TypeScript",
      "Vite",
      "OpenWeatherMap API",
      "Groq API",
      "Llama 4",
      "Web Speech API",
    ],
    githubUrl: "https://github.com/GLemes25/weather-AI",
    liveUrl: "",
    image: "/projects/previsao-tempo-ia.png",
  },
  {
    title: "Eskoria OS",
    description:
      "Interface web imersiva que simula o sistema operacional retro-hacker de inicialização (boot) da banda Eskoria. Desenvolvido com uma máquina de estados complexa para o sequenciamento milimétrico de animações de terminal CRT, efeito typewriter e design responsivo mobile-first.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/GLemes25/eskoria-os",
    liveUrl: "https://eskoria-so.vercel.app/",
    image: "/projects/eskoria2.png",
  },
  {
    title: "DNA Doceria",
    description:
      "Cardápio digital avançado focado na experiência visual e temática. Construído com arquitetura mobile-first e identidade única baseada em tons de chocolate, oferecendo vitrine dinâmica, carrinho global persistente sincronizado com banco de dados e integração automatizada para pedidos via WhatsApp.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Neon PostgreSQL",
      "Zustand",
    ],
    githubUrl: "https://github.com/GLemes25/menu-dna-doceria",
    liveUrl: "https://dnadoceria.fremez.com/",
    image: "/projects/dnadoceria2.png",
  },
];
