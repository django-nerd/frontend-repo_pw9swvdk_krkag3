import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
    }),
    []
  );

  return (
    <section id="home" className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Spline background with light parallax */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient vignette edges */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 pt-32 pb-24 sm:pt-40 lg:pt-48 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight"
        >
          Steward Lumowa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-base sm:text-lg text-white/80"
        >
          Software Engineer specializing in modern web and backend systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            View Projects
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium backdrop-blur-sm transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
