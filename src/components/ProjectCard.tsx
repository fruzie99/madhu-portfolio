import { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  index: number;
  onOpen: () => void;
};

export default function ProjectCard({ title, description, tech, image, index, onOpen }: Props) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen()}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md transition hover:border-orange-500/20 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]"
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
          className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2"
        >
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-black/50 px-3 py-1.5 font-mono text-sm text-white/90 backdrop-blur-sm md:text-base"
            >
              {t}
            </span>
          ))}
        </motion.div>
      </div>
      <div className="p-6 md:p-8">
        <h3 className="font-heading text-2xl font-bold text-white md:text-3xl">{title}</h3>
        <p className="mt-3 line-clamp-3 text-base text-white/70 md:text-lg">{description}</p>
      </div>
    </motion.article>
  );
}
