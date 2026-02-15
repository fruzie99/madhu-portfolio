import { AnimatePresence } from "framer-motion";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import BentoSkills from "./components/BentoSkills";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Contact from "./components/Contact";

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-[#050505] text-white">
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <BentoSkills />
          <Projects />
          <ExperienceTimeline />
          <Contact />
        </main>
        <footer className="border-t border-white/10 py-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Madhurisha Vaddeswarapu.
        </footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
