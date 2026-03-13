"use client";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#111111]"
    >
      <div className="max-w-[1200px] w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-purple-600/10 border border-purple-600/20 rounded-full text-purple-400 text-sm">
                Available for work
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, Im{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Alex Johnson
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
              Full Stack Software Developer
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              I build scalable web applications with modern technologies.
              Specialized in Java, Spring Boot, React, and cloud-native
              solutions. Passionate about clean code and exceptional user
              experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-all border border-white/10"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Github className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </a>
              <a
                href="mailto:alex@example.com"
                className="w-12 h-12 bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-600/50 rounded-lg flex items-center justify-center transition-all"
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2UlMjBkYXJrfGVufDF8fHx8MTc3MzMyNzY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Developer workspace"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
