import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ExperienceContact from './components/ExperienceContact';

function App() {
  useEffect(() => {
    // Global smooth scrolling between anchors
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'smooth';
    return () => {
      root.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm/0">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm text-white/80">
          <a href="#home" className="font-semibold text-white hover:text-white">SL</a>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <ExperienceContact />
      </main>
    </div>
  );
}

export default App;
