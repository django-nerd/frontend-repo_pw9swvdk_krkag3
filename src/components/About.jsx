import { motion } from 'framer-motion';

const skills = ['Next.js', 'Golang', 'Docker', 'React Native', 'PostgreSQL'];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-3xl text-white/80"
        >
          I’m a software engineer focused on building scalable web apps using Next.js, Golang, and React Native.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {skills.map((s) => (
            <span
              key={s}
              className="select-none rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 shadow-sm backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
