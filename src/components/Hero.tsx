import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Monitor, Laptop, Sparkles, Gift } from "lucide-react";
import MagneticButton from "./MagneticButton";

const DESCRIPTION =
  "I build elegant interfaces and impactful products. Passionate about clean code and problem solving.";

const SOCIAL = [
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com", icon: Github, label: "GitHub" },
  { href: "mailto:vmadhurisha99@gmail.com", icon: Mail, label: "Email" },
];

function FloatingDecor({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute pointer-events-none ${className ?? ""}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-[100dvh] min-h-screen items-center overflow-hidden px-4 pt-20 pb-12 sm:pt-24 sm:pb-16 md:px-8 lg:px-12"
    >
      {/* Fun floating decorations - hidden on very small screens to avoid clutter */}
      <FloatingDecor className="left-2 top-24 sm:left-4 sm:top-28 md:left-8 md:top-32" delay={0.3}>
        <Monitor className="h-8 w-8 text-red-500/20 sm:h-12 sm:w-12 md:h-16 md:w-16" />
      </FloatingDecor>
      <FloatingDecor className="right-2 top-32 sm:right-4 sm:top-36 md:right-12 md:top-40" delay={0.5}>
        <Gift className="h-7 w-7 text-orange-500/15 sm:h-10 sm:w-10 md:h-14 md:w-14" />
      </FloatingDecor>
      <FloatingDecor className="bottom-24 left-3 sm:bottom-32 sm:left-6 md:bottom-40 md:left-16" delay={0.4}>
        <Laptop className="h-8 w-8 text-red-500/15 sm:h-11 sm:w-11 md:h-14 md:w-14" />
      </FloatingDecor>
      <FloatingDecor className="bottom-20 right-4 sm:bottom-28 sm:right-8 md:bottom-36 md:right-20" delay={0.6}>
        <Sparkles className="h-7 w-7 text-orange-400/20 sm:h-10 sm:w-10 md:h-12 md:w-12" />
      </FloatingDecor>
      <FloatingDecor className="left-[10%] top-1/2 -translate-y-1/2 hidden xl:block" delay={0.2}>
        <Sparkles className="h-8 w-8 text-red-500/15" />
      </FloatingDecor>
      <FloatingDecor className="right-[8%] top-1/2 -translate-y-1/2 hidden xl:block" delay={0.7}>
        <Gift className="h-9 w-9 text-orange-500/15" />
      </FloatingDecor>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: Profile image + glow - scales down on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center order-2 lg:order-1"
        >
          <motion.div
            whileHover={{ rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative flex items-center justify-center"
          >
            <div
              className="absolute h-[260px] w-[260px] rounded-full sm:h-[320px] sm:w-[320px] md:h-[460px] md:w-[460px] lg:h-[520px] lg:w-[520px]"
              style={{
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.2) 40%, transparent 70%)",
                boxShadow: "0 0 80px rgba(239, 68, 68, 0.3), 0 0 120px rgba(249, 115, 22, 0.15)",
              }}
            />
            <div className="absolute h-[220px] w-[220px] rounded-full bg-red-500/30 blur-2xl sm:h-[280px] sm:w-[280px] md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px]" />
            <div className="relative overflow-hidden rounded-full border-2 border-white/10 bg-[#0a0a0a] shadow-2xl">
              <img
                src="/pfp.jpeg"
                alt="Madhurisha Vaddeswarapu"
                className="aspect-square w-48 rounded-full object-cover sm:w-56 md:w-80 lg:w-96"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Text first on mobile for better flow */}
        <div className="text-center lg:text-left order-1 lg:order-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl break-words"
          >
            Hi, It&apos;s <span className="accent-gradient">Madhurisha</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 text-base text-white/60 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl"
          >
            {DESCRIPTION}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4 lg:justify-start"
          >
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex h-12 w-12 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border-2 border-red-500/80 text-white transition hover:border-red-500 hover:bg-red-500/10 active:scale-95 sm:h-14 sm:w-14 md:h-16 md:w-16"
                aria-label={label}
              >
                <Icon size={22} className="sm:h-6 sm:w-6 md:h-7 md:w-7" />
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-8 flex justify-center lg:justify-start sm:mt-10"
          >
            <MagneticButton
              href="#contact"
              className="min-h-[48px] rounded-xl border-2 border-red-500 bg-transparent px-8 py-3.5 text-base font-semibold text-white transition hover:bg-red-500/10 active:scale-95 sm:px-10 sm:py-4 sm:text-lg md:px-12 md:text-xl"
            >
              Hire me
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
