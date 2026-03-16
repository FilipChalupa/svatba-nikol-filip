import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import botanicalBorder from "@/assets/botanical-border.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Botanical border at the bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40%] bg-bottom bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${botanicalBorder})` }}
      />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-muted-foreground text-base tracking-[0.3em] uppercase mb-8"
        >
          Zveme vás na naši svatbu
        </motion.p>

        {/* Names with heart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic text-foreground">
            Nikol
          </h1>
          <Heart className="w-6 h-6 md:w-8 md:h-8 text-secondary fill-secondary flex-shrink-0" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display italic text-foreground">
            Filip
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="h-px w-16 bg-primary/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          <span className="h-px w-16 bg-primary/30" />
        </motion.div>

        {/* Invitation text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="space-y-2 mb-10"
        >
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            našli jsme se, zamilovali a nyní Vám s radostí oznamujeme,
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            že svou lásku <span className="text-foreground font-medium">7. srpna 2026</span> ve <span className="text-foreground font-medium">14:00</span> hodin
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            v <span className="text-foreground font-medium">Třebovickém mlýně</span> v Ostravě
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-display italic text-lg md:text-xl mt-4">
            proměníme v manželství.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="#info"
            className="inline-block border border-primary/30 px-8 py-3 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:bg-primary/10 transition-colors rounded-sm"
          >
            Více informací
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
