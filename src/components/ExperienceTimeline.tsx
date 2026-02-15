import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Trophy, Award } from "lucide-react";

const MILESTONES = [
  {
    type: "intern",
    icon: Briefcase,
    title: "Intern – Research, Operations & Social Media Strategy",
    org: "PowerScale Ventures (T-Hub)",
    points: [
      "Supported technical operations and early-stage startup evaluations.",
      "Contributed to social media strategy to enhance audience engagement.",
      "Collaborated with founders, gaining exposure to networking and startup ecosystem operations.",
    ],
  },
  {
    type: "hackathons",
    icon: Trophy,
    title: "Hackathons & Achievements",
    items: [
      "Krithomedh Coding Contest (Top 10/370); Top 5 teams – GDSC Webathon.",
      "Winner – Google GDSC WOW Quiz (Apr 2024).",
      "Smart India Hackathon 2024; participated in Innovasia 2023, VJ Hackathon 2024.",
      "Participated in ICPC, Turing Cup, Smart Interviews coding contests.",
    ],
  },
  {
    type: "leadership",
    icon: Award,
    title: "Leadership & Extracurricular",
    items: [
      "Organized Navigator: Career Guidance Orientation, Web Development Competition, FLASHFORTE 2K24 under CSI.",
      "Core committee member of Hult Prize VNRVJIET, managing logistics and speaker coordination.",
      "Member of Stentorian (English Literary Club).",
    ],
  },
  {
    type: "certs",
    icon: Award,
    title: "Certifications",
    items: [
      "Artificial Intelligence Primer – Infosys Springboard",
      "Oracle Cloud Infrastructure 2024 Generative AI Professional",
      "Programming, Data Structures & Algorithms using Python – IIT Madras (NPTEL)",
    ],
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section id="experience" className="relative px-4 py-16 sm:py-20 md:px-8 md:py-24 lg:px-12" ref={containerRef}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
      >
        Experience & Achievements
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-1 text-lg text-white/60 sm:mt-2 sm:text-xl md:text-2xl"
      >
        Journey so far
      </motion.p>

      <div className="relative mt-10 sm:mt-14 md:mt-16">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 sm:left-6 md:left-8 lg:left-10" />
        <motion.div
          className="absolute left-5 top-0 w-px bg-gradient-to-b from-orange-500 to-red-500 sm:left-6 md:left-8 lg:left-10"
          style={{
            height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          }}
        />

        <ul className="space-y-6 sm:space-y-8 md:space-y-10">
          {MILESTONES.map((m, i) => (
            <motion.li
              key={m.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex gap-4 pl-14 sm:gap-6 sm:pl-16 md:gap-8 md:pl-20 lg:pl-24"
            >
              <div className="absolute left-2 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-500/50 bg-[#050505] sm:left-3 sm:h-9 sm:w-9 md:left-5 md:h-10 md:w-10 lg:left-7">
                <m.icon className="h-4 w-4 text-orange-500 sm:h-5 sm:w-5 md:h-6 md:w-6" />
              </div>
              <div className="min-w-0 rounded-2xl border border-white/10 bg-[#0a0a0a]/80 p-4 backdrop-blur-md sm:p-5 md:p-6 lg:p-8">
                <h3 className="font-heading text-base font-semibold text-white sm:text-lg md:text-xl lg:text-2xl">{m.title}</h3>
                {"org" in m && <p className="mt-1 text-sm text-orange-400 sm:mt-2 sm:text-base md:text-lg lg:text-xl">{m.org}</p>}
                {"points" in m && (
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-white/75 sm:mt-4 sm:space-y-2 sm:pl-5 sm:text-base md:text-lg">
                    {(m.points ?? []).map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                )}
                {"items" in m && (
                  <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-white/75 sm:mt-4 sm:space-y-2 sm:pl-5 sm:text-base md:text-lg">
                    {(m.items ?? []).map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
