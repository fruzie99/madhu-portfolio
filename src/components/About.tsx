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
    <section id="about" className="relative px-4 py-24 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <User className="h-10 w-10 text-orange-500 md:h-12 md:w-12" />
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-xl text-white/60 md:text-2xl"
          >
            More than a resume
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-12 max-w-4xl text-xl leading-relaxed text-white/85 md:text-2xl"
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
        className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        {HIGHLIGHTS.map((h) => (
          <div
            key={h.title}
            className="rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-8 backdrop-blur-md"
          >
            <h.icon className="mb-5 h-14 w-14 text-orange-500 md:h-16 md:w-16" />
            <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">{h.title}</h3>
            <p className="mt-4 text-lg text-white/75 md:text-xl">{h.text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-14 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-8 backdrop-blur-md md:flex-row md:items-start md:gap-6"
      >
        <GraduationCap className="h-14 w-14 shrink-0 text-orange-500 md:h-16 md:w-16" />
        <div>
          <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">Education</h3>
          <p className="mt-4 font-mono text-lg text-orange-400 md:text-xl">
            VNR VJIET, Hyderabad · B.Tech CSE · CGPA 8.85/10
          </p>
          <p className="mt-2 font-mono text-lg text-white/65 md:text-xl">
            Sri Chaitanya Junior College, Vijayawada · Intermediate 88.7%
          </p>
        </div>
      </motion.div>
    </section>
  );
}
