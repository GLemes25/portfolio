import { menuItems } from "@/datas/navigations";
import { profileData } from "@/datas/profile";
import dayjs from "dayjs";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = dayjs().year();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-300 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <a
              href="#hero"
              className="flex items-center gap-3 mb-6 group focus-visible:opacity-90 focus-visible:outline-none"
            >
              <span className="text-xl font-bold text-white tracking-wide">
                DEV {profileData.shortName}
              </span>
            </a>

            <p className="text-gray-400 text-sm text-center md:text-left mb-6 leading-relaxed max-w-xs">
              Construindo soluções web modernas, escaláveis e focadas na
              experiência do usuário.
            </p>

            <div className="flex items-center gap-4">
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none"
              >
                <Github className="w-4 h-4 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                aria-label="Email"
                className="w-10 h-10 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500 rounded-lg flex items-center justify-center transition-all focus-visible:opacity-90 focus-visible:outline-none"
              >
                <Mail className="w-4 h-4 text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 text-center sm:text-left">
            <div>
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
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2 text-center md:text-left">
            © {currentYear} {profileData.shortName}. Feito com Next.js.
          </p>

          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors focus-visible:opacity-90 focus-visible:outline-none"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
