import dayjs from "dayjs";
import { Code2, Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";

export const Footer = () => {
  const currentYear = dayjs().year();

  const footerLinks = {
    sections: [
      {
        title: "Navigation",
        links: [
          { label: "Home", href: "#hero" },
          { label: "Projects", href: "#projects" },
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Projects",
        links: [
          { label: "E-Commerce Platform", href: "#projects" },
          { label: "Task Management API", href: "#projects" },
          { label: "Analytics Dashboard", href: "#projects" },
          { label: "View All", href: "#projects" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "GitHub", href: "https://github.com" },
          { label: "LinkedIn", href: "https://linkedin.com" },
          { label: "Twitter", href: "https://twitter.com" },
          { label: "Email", href: "mailto:alex.johnson@example.com" },
        ],
      },
    ],
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <a href="#hero" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 bg-linear-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DevPortfolio</span>
            </a>
            <p className="text-gray-400 text-sm mb-4">
              Building exceptional web applications with modern technologies.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="mailto:alex.johnson@example.com"
                className="w-10 h-10 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </div>

          {footerLinks.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Alex Johnson. Made with{" "}
              <Heart className="w-4 h-4 text-purple-600 fill-purple-600" /> and
              React
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
