import { motion } from "framer-motion";

const SeatingSection = () => {
  return (
    <section id="zasedaci-poradek" className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4"
        >
          Zasedací pořádek
        </motion.h2>
        <div className="section-ornament mx-auto mb-10" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-muted-foreground mb-10 leading-relaxed max-w-xl mx-auto"
        >
          Najděte si svůj stůl podle plánku níže. Pokud byste si nebyli jistí, klidně se zeptejte — rádi navedeme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-lg border border-border bg-background/50 p-12 md:p-20 text-muted-foreground italic"
        >
          Plánek bude brzy doplněn.
        </motion.div>
      </div>
    </section>
  );
};

export default SeatingSection;
