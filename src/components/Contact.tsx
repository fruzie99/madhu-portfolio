import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import Toast from "./Toast";

const EMAIL = "vmadhurisha99@gmail.com";
const PHONE = "+91 7989085349";

export default function Contact() {
  const [toast, setToast] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setToast(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: could wire to Formspree or API
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative px-4 py-24 md:px-8 lg:px-12">
      <Toast message="Email copied to clipboard!" visible={toast} onClose={() => setToast(false)} />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-2 text-xl text-white/60 md:text-2xl"
      >
        Let&apos;s build something together
      </motion.p>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <button
            type="button"
            onClick={copyEmail}
            className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-5 text-left backdrop-blur-md transition hover:border-orange-500/30 hover:bg-[#0a0a0a] md:p-6"
          >
            <Mail className="h-8 w-8 shrink-0 text-orange-500 md:h-9 md:w-9" />
            <span className="font-mono text-base text-white/90 md:text-lg">{EMAIL}</span>
          </button>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-5 text-left backdrop-blur-md transition hover:border-orange-500/30 hover:bg-[#0a0a0a] md:p-6"
          >
            <Phone className="h-8 w-8 shrink-0 text-orange-500 md:h-9 md:w-9" />
            <span className="font-mono text-base text-white/90 md:text-lg">{PHONE}</span>
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-4 text-white/80 transition hover:border-orange-500/50 hover:text-orange-400"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 p-4 text-white/80 transition hover:border-orange-500/50 hover:text-orange-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-6 backdrop-blur-md md:p-8"
        >
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-base text-white placeholder:text-white/50 focus:border-orange-500/50 focus:outline-none md:text-lg"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-base text-white placeholder:text-white/50 focus:border-orange-500/50 focus:outline-none md:text-lg"
            required
          />
          <textarea
            placeholder="Message"
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            rows={5}
            className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-base text-white placeholder:text-white/50 focus:border-orange-500/50 focus:outline-none md:text-lg"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-4 text-lg font-semibold text-white transition hover:shadow-lg hover:shadow-orange-500/25 md:py-4 md:text-xl"
          >
            Send
            <Send size={22} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
