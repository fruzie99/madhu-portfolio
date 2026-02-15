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
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 md:px-8 lg:px-12"
    >
      {/* Fun floating decorations */}
      <FloatingDecor className="left-4 top-28 md:left-8 md:top-32" delay={0.3}>
        <Monitor className="h-12 w-12 text-red-500/25 md:h-16 md:w-16" />
      </FloatingDecor>
      <FloatingDecor className="right-4 top-36 md:right-12 md:top-40" delay={0.5}>
        <Gift className="h-10 w-10 text-orange-500/20 md:h-14 md:w-14" />
      </FloatingDecor>
      <FloatingDecor className="bottom-32 left-6 md:bottom-40 md:left-16" delay={0.4}>
        <Laptop className="h-11 w-11 text-red-500/20 md:h-14 md:w-14" />
      </FloatingDecor>
      <FloatingDecor className="bottom-28 right-8 md:bottom-36 md:right-20" delay={0.6}>
        <Sparkles className="h-10 w-10 text-orange-400/25 md:h-12 md:w-12" />
      </FloatingDecor>
      <FloatingDecor className="left-[10%] top-1/2 -translate-y-1/2 hidden xl:block" delay={0.2}>
        <Sparkles className="h-8 w-8 text-red-500/15" />
      </FloatingDecor>
      <FloatingDecor className="right-[8%] top-1/2 -translate-y-1/2 hidden xl:block" delay={0.7}>
        <Gift className="h-9 w-9 text-orange-500/15" />
      </FloatingDecor>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: Larger profile image + glow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ rotate: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative flex items-center justify-center"
          >
            {/* Large glowing red circular backdrop */}
            <div
              className="absolute h-[380px] w-[380px] rounded-full md:h-[460px] md:w-[460px] lg:h-[520px] lg:w-[520px]"
              style={{
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.2) 40%, transparent 70%)",
                boxShadow: "0 0 100px rgba(239, 68, 68, 0.35), 0 0 160px rgba(249, 115, 22, 0.2)",
              }}
            />
            <div className="absolute h-[340px] w-[340px] rounded-full bg-red-500/30 blur-2xl md:h-[400px] md:w-[400px] lg:h-[460px] lg:w-[460px]" />
            {/* Profile photo */}
            <div className="relative overflow-hidden rounded-full border-2 border-white/10 bg-[#0a0a0a] shadow-2xl">
              <img
                src="/pfp.jpeg"
                alt="Madhurisha Vaddeswarapu"
                className="aspect-square w-64 rounded-full object-cover md:w-80 lg:w-96"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Bigger text, social, CTA */}
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
          >
            Hi, It&apos;s <span className="accent-gradient">Madhurisha</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-lg text-white/60 md:text-xl lg:text-2xl"
          >
            {DESCRIPTION}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            {SOCIAL.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-red-500/80 text-white transition hover:border-red-500 hover:bg-red-500/10 md:h-16 md:w-16"
                aria-label={label}
              >
                <Icon size={26} className="md:h-7 md:w-7" />
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex justify-center lg:justify-start"
          >
            <MagneticButton
              href="#contact"
              className="rounded-xl border-2 border-red-500 bg-transparent px-10 py-4 text-lg font-semibold text-white transition hover:bg-red-500/10 md:px-12 md:py-4 md:text-xl"
            >
              Hire me
            </MagneticButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
