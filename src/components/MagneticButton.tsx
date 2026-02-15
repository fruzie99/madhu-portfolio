import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MAGNETIC = 0.4;

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function MagneticButton({ href, children, className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * MAGNETIC;
    const y = (e.clientY - rect.top - rect.height / 2) * MAGNETIC;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.a>
  );
}
