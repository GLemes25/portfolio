"use client";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "alex.johnson@example.com",
      href: "mailto:alex.johnson@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@alexjohnson",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Alex Johnson",
      href: "https://linkedin.com",
    },
    {
      icon: Twitter,
      label: "Twitter",
      username: "@alexjohnson",
      href: "https://twitter.com",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or opportunities
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
            <h3 className="text-xl font-bold text-white mb-6">
              Contact Information
            </h3>
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-purple-600/50 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-600/10 border border-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-all">
                  <method.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{method.label}</p>
                  <p className="text-white font-medium">{method.value}</p>
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
            <h3 className="text-xl font-bold text-white mb-6">Social Media</h3>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-purple-600/50 transition-all group"
              >
                <div className="w-12 h-12 bg-purple-600/10 border border-purple-600/20 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-all">
                  <social.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{social.label}</p>
                  <p className="text-white font-medium">{social.username}</p>
                </div>
              </a>
            ))}

            <div className="pt-4">
              <a
                href="mailto:alex.johnson@example.com"
                className="block w-full px-6 py-4 bg-purple-600 hover:bg-purple-700 text-white text-center rounded-xl transition-all font-semibold"
              >
                Send me an email
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
          <div className="bg-linear-to-r from-purple-600/10 to-violet-600/10 border border-purple-600/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Looking for a developer?
            </h3>
            <p className="text-gray-400 mb-6">
              Im available for freelance projects and full-time opportunities.
              Lets build something amazing together!
            </p>
            <a
              href="mailto:alex.johnson@example.com"
              className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all font-semibold"
            >
              Start a conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
