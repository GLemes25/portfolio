import { menuItems } from "@/datas/navigations";
import { profileData } from "@/datas/profile";
import { projects } from "@/datas/projects";
import dayjs from "dayjs";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  const currentYear = dayjs().year();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-15 pb-8 px-6">
      <div className="max-w-300 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-6 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#hero"
              className="inline-block mb-6 focus-visible:opacity-90 focus-visible:outline-none"
            >
              <span className="text-2xl font-bold text-white tracking-tight">
                Dev{" "}
                <span className="text-purple-500">{profileData.shortName}</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-sm">
              Construindo soluções web modernas, escaláveis e focadas na
              experiência do usuário. Transformando problemas complexos em
              interfaces elegantes.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={profileData.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none group"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={profileData.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none group"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none group"
              >
                <Mail className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={profileData.phone.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none group"
              >
                <FaWhatsapp className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-semibold mb-6">Navegação</h4>
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm focus-visible:opacity-90 focus-visible:outline-none inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-white font-semibold mb-6">Projetos</h4>
            <ul className="space-y-4 w-full">
              {projects.map((project) => {
                const targetUrl = project.liveUrl || project.githubUrl;
                const isDemo = !!project.liveUrl;

                return (
                  <li key={project.title}>
                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-purple-400 transition-colors text-sm focus-visible:opacity-90 focus-visible:outline-none w-full"
                    >
                      <span>{project.title}</span>
                      {isDemo ? (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      ) : (
                        <Github className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} {profileData.shortName}. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors focus-visible:opacity-90 focus-visible:outline-none"
            >
              Feito com Next.js
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
