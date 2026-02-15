import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench, Cpu } from "lucide-react";
import SkillBadge from "./SkillBadge";

const CATEGORIES = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Web & Frameworks",
    icon: Globe,
    skills: ["React", "Node.js", "Express.js", "Next.js", "TailwindCSS", "Bootstrap"],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: ["MongoDB", "SQL", "GitHub", "VS Code"],
  },
  {
    title: "Others",
    icon: Wrench,
    skills: ["Generative AI", "Power BI", "R", "Figma", "Photoshop", "Canva"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BentoSkills() {
  return (
    <section id="skills" className="relative px-4 py-16 sm:py-20 md:px-8 md:py-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <Cpu className="h-9 w-9 shrink-0 text-orange-500 sm:h-10 sm:w-10 md:h-12 md:w-12" />
        <div className="min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-1 text-lg text-white/60 sm:mt-2 sm:text-xl md:text-2xl"
          >
            Technologies I work with
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 sm:mt-14 md:gap-6 lg:grid-cols-4"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            whileHover={{ y: -5 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-4 backdrop-blur-md transition hover:border-orange-500/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] sm:p-5 md:p-6 lg:p-8"
          >
            <div className="mb-4 flex items-center gap-2 sm:mb-5 md:mb-6 md:gap-3">
              <cat.icon className="h-8 w-8 shrink-0 text-orange-500 sm:h-10 sm:w-10 md:h-12 md:w-12" />
              <span className="font-heading text-lg font-semibold text-white sm:text-xl md:text-2xl truncate">
                {cat.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cat.skills.map((skill) => (
                <SkillBadge key={skill} name={skill} size="md" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
