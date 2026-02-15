import { motion } from "framer-motion";

type Props = {
  name: string;
  category?: string;
  size?: "sm" | "md" | "lg";
};

export default function SkillBadge({ name, category, size = "md" }: Props) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm md:text-base",
    md: "px-5 py-2.5 text-base md:text-lg",
    lg: "px-6 py-3 text-lg md:text-xl",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative cursor-default rounded-xl border border-white/10 bg-[#0a0a0a]/80 px-5 py-2.5 backdrop-blur-md transition hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]"
    >
      <span className={`font-mono font-medium text-white/90 ${sizeClasses[size]}`}>{name}</span>
      {category && (
        <span className="ml-2 font-sans text-sm text-white/50 md:text-base">{category}</span>
      )}
    </motion.div>
  );
}
