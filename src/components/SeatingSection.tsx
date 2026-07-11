import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import seatingPlan from "../assets/zasedaci-poradek.png.asset.json";

const SeatingSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

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
          Najděte si prosím své místo podle plánku níže. Pokud byste si nebyli
          jistí, klidně se ptejte.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-lg border border-border bg-background/50 p-4 md:p-6 overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="block w-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            aria-label="Zobrazit zasedací pořádek na celou obrazovku"
          >
            <img
              src={seatingPlan.url}
              alt="Zasedací pořádek"
              className="w-full h-auto rounded-md"
            />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/90 hover:text-white p-2 rounded-full bg-black/40 hover:bg-black/60 transition"
              aria-label="Zavřít"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={seatingPlan.url}
              alt="Zasedací pořádek"
              className="max-w-full max-h-full object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SeatingSection;
