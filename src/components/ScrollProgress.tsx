import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 overflow-hidden bg-white/5">
      <motion.div
        className="h-full origin-left rounded-r-full"
        style={{
          scaleX,
          background: "linear-gradient(to right, #f97316, #ef4444)",
        }}
      />
    </div>
  );
}
