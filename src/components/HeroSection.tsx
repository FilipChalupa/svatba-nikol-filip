import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--hero-gradient)" }}
      />
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground text-lg tracking-[0.3em] uppercase mb-4"
        >
          Zveme vás na naši svatbu
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-display italic text-foreground mb-6"
        >
          Nikol & Filip
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-4 text-muted-foreground"
        >
          <span className="h-px w-12 bg-primary/40" />
          <p className="text-lg tracking-widest">7. srpna 2026 · Ostrava</p>
          <span className="h-px w-12 bg-primary/40" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 text-2xl font-display text-foreground/80"
        >
          Třebovický mlýn
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12"
        >
          <a
            href="#info"
            className="inline-block border border-primary/30 px-8 py-3 text-sm tracking-[0.2em] uppercase text-foreground/70 hover:bg-primary/10 transition-colors rounded-sm"
          >
            Více informací
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
