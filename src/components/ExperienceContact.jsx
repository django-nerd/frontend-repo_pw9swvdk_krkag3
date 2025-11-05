import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const timeline = [
  {
    role: 'Senior Software Engineer',
    org: 'Acme Systems',
    period: '2023 — Present',
    desc: 'Leading platform modernization, focusing on performance and developer experience.',
  },
  {
    role: 'Backend Engineer',
    org: 'Nimbus Cloud',
    period: '2021 — 2023',
    desc: 'Designed resilient services in Go with observability and autoscaling.',
  },
  {
    role: 'Full‑Stack Developer',
    org: 'Startup Studio',
    period: '2019 — 2021',
    desc: 'Delivered web and mobile apps with React, Next.js, and React Native.',
  },
];

export default function ExperienceContact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="experience" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="mt-8">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-3 top-2 h-3 w-3 rounded-full bg-white" />
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-base font-semibold">{item.role}</h3>
                      <span className="text-xs text-white/60">{item.period}</span>
                    </div>
                    <p className="text-sm text-white/70">{item.org}</p>
                    <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div id="contact" className="mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-semibold tracking-tight"
          >
            Contact
          </motion.h2>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-sm text-white/80">
                Want to collaborate or have a project in mind? Drop a message and I’ll get back soon.
              </p>
              <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="mailto:steward@example.com"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4" /> Email
                </a>
              </div>
            </motion.div>

            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              {!submitted ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="mb-1 text-xs text-white/60">Name</label>
                    <input
                      required
                      type="text"
                      className="rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="mb-1 text-xs text-white/60">Email</label>
                    <input
                      required
                      type="email"
                      className="rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="sm:col-span-2 flex flex-col">
                    <label className="mb-1 text-xs text-white/60">Message</label>
                    <textarea
                      required
                      rows={5}
                      className="rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/30"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="mt-1 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-transform duration-200 hover:scale-[1.02]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-white/80">Thank you! Your message has been received.</div>
              )}
            </motion.form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © 2025 Steward Lumowa — Built with Flames.blue
        </div>
      </div>
    </section>
  );
}
