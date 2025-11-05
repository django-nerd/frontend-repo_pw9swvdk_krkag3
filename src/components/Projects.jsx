import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'Stream processing pipeline with live charts and alerts.',
    tech: ['Next.js', 'Golang', 'PostgreSQL', 'WebSockets'],
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mobile Commerce App',
    desc: 'High-performance storefront with offline support.',
    tech: ['React Native', 'TypeScript', 'REST'],
    img: 'https://images.unsplash.com/photo-1520975693412-35a001c0d116?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Containerized CI Platform',
    desc: 'Self-hosted CI/CD with Docker runners and caching.',
    tech: ['Docker', 'Golang', 'Redis'],
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5">
                  <a
                    href="#contact"
                    className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm transition-transform duration-200 hover:scale-[1.02]"
                  >
                    View Details
                    <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
