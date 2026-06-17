"use client";
import { profileData } from "@/datas/profile";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: profileData.email,
      href: `mailto:${profileData.email}`,
    },
    {
      icon: Phone,
      label: "Telefone",
      value: profileData.phone.display,
      href: profileData.phone.tel,
    },
    {
      icon: MapPin,
      label: "Localização",
      value: profileData.location,
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: profileData.socials.github.username,
      href: profileData.socials.github.url,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: profileData.socials.linkedin.username,
      href: profileData.socials.linkedin.url,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-300 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contato
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato para oportunidades como Desenvolvedor Júnior ou
            Full Stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Informações de Contato
            </h3>

            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-brand/50 transition-all group"
              >
                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-lg flex items-center justify-center group-hover:bg-brand/20 transition-all">
                  <method.icon className="w-5 h-5 text-brand" />
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">{method.label}</p>
                  <p className="text-foreground font-medium">{method.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">
              Redes Profissionais
            </h3>

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-brand/50 transition-all group"
              >
                <div className="w-12 h-12 bg-brand/10 border border-brand/20 rounded-lg flex items-center justify-center group-hover:bg-brand/20 transition-all">
                  <social.icon className="w-5 h-5 text-brand" />
                </div>

                <div>
                  <p className="text-muted-foreground text-sm">{social.label}</p>
                  <p className="text-foreground font-medium">{social.username}</p>
                </div>
              </a>
            ))}

            <div className="pt-4 flex gap-4">
              <a
                href={`mailto:${profileData.email}`}
                className="flex-1 px-6 py-4 bg-brand hover:bg-brand-dim text-brand-foreground text-center rounded-xl transition-all font-semibold"
              >
                Enviar Email
              </a>

              <a
                href={profileData.phone.whatsapp}
                target="_blank"
                className="flex-1 px-6 py-4 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground text-center rounded-xl transition-all font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-linear-to-r from-brand/10 to-brand-alt/10 border border-brand/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-3">
              Procurando um desenvolvedor?
            </h3>

            <p className="text-muted-foreground mb-6">
              Estou disponível para oportunidades como Desenvolvedor Júnior ou
              Full Stack. Vamos construir algo juntos!
            </p>

            <a
              href={profileData.phone.whatsapp}
              className="inline-block px-8 py-3 bg-brand hover:bg-brand-dim text-brand-foreground rounded-lg transition-all font-semibold"
            >
              Iniciar conversa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
