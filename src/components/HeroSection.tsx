import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        {/* Names with heart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-5 md:gap-8 mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic text-foreground">
            Nikol
          </h1>
          <Heart className="w-5 h-5 md:w-7 md:h-7 text-primary fill-primary/30 flex-shrink-0" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic text-foreground">
            Filip
          </h1>
        </motion.div>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="section-ornament mx-auto mb-10"
        />

        {/* Invitation text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="space-y-1.5 mb-12"
        >
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Našli jsme se, zamilovali a rozhodli se jít životem společně.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            S radostí Vás zveme na náš svatební den,
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            který se bude konat <span className="text-foreground font-medium">7. srpna 2026</span> ve <span className="text-foreground font-medium">12:30</span> hodin
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            v <span className="text-foreground font-medium">Třebovickém mlýně</span> v Ostravě.
          </p>
          <p className="text-foreground font-display italic text-lg md:text-xl pt-3">
            Budeme rádi, když tento den prožijete s námi.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="#info"
            className="inline-block border border-primary/40 px-8 py-3 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:bg-primary/10 transition-colors rounded-sm"
          >
            Více informací
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
