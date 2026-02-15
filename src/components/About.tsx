import { motion } from "framer-motion";
import { Sparkles, Palette, GraduationCap, User } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Sparkles,
    title: "Problem solving",
    text: "I love breaking down complex problems into clean, scalable solutions.",
  },
  {
    icon: Palette,
    title: "Design sense",
    text: "Code and creativity—I care about both the logic and the experience.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <User className="h-9 w-9 shrink-0 text-orange-500 sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <div className="min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-1 text-lg text-white/60 sm:mt-2 sm:text-xl md:text-2xl"
          >
            More than a resume
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 max-w-4xl text-base leading-relaxed text-white/85 sm:mt-10 sm:text-lg md:mt-12 md:text-xl lg:text-2xl"
      >
        <p>
          I&apos;m a Computer Science student at VNR VJIET, Hyderabad, with a passion for building
          things that matter. I don&apos;t just write code—I think about the problem, the user, and
          the long-term impact. From event platforms to AI-powered tools and research at ICRISAT,
          I&apos;ve learned to ship across the stack and collaborate in fast-paced environments.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:mt-14"
      >
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-5 backdrop-blur-md sm:p-6 md:p-8"
          >
            <h.icon className="mb-4 h-12 w-12 text-orange-500 sm:h-14 sm:w-14 md:h-16 md:w-16" />
            <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl md:text-3xl">{h.title}</h3>
            <p className="mt-3 text-base text-white/75 sm:mt-4 sm:text-lg md:text-xl">{h.text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-5 backdrop-blur-md sm:p-6 md:mt-14 md:flex-row md:items-start md:gap-6 md:p-8"
      >
        <GraduationCap className="h-12 w-12 shrink-0 text-orange-500 sm:h-14 sm:w-14 md:h-16 md:w-16" />
        <div className="min-w-0">
          <h3 className="font-heading text-xl font-semibold text-white sm:text-2xl md:text-3xl">Education</h3>
          <p className="mt-3 font-mono text-sm text-orange-400 sm:text-base md:mt-4 md:text-lg lg:text-xl">
            VNR VJIET, Hyderabad · B.Tech CSE · CGPA 8.85/10
          </p>
          <p className="mt-1 font-mono text-sm text-white/65 sm:text-base md:text-lg lg:text-xl">
            Sri Chaitanya Junior College, Vijayawada · Intermediate 88.7%
          </p>
        </div>
      </motion.div>
    </section>
  );
}
