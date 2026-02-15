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
    <section id="skills" className="relative px-4 py-24 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <Cpu className="h-10 w-10 text-orange-500 md:h-12 md:w-12" />
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-xl text-white/60 md:text-2xl"
          >
            Technologies I work with
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {CATEGORIES.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            whileHover={{ y: -5 }}
            className="flex flex-col rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-6 backdrop-blur-md transition hover:border-orange-500/20 hover:shadow-[0_0_30px_rgba(249,115,22,0.08)] md:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <cat.icon className="h-10 w-10 text-orange-500 md:h-12 md:w-12" />
              <span className="font-heading text-xl font-semibold text-white md:text-2xl">
                {cat.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
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
