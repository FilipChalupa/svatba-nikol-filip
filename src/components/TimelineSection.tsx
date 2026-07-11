import { motion } from "framer-motion";
import { Baby, Users, Heart, Gem, Church } from "lucide-react";

const milestones = [
  { icon: Baby, label: "Filip se narodil", date: "21. 9. 1993" },
  { icon: Baby, label: "Nikol se narodila", date: "22. 8. 1994" },
  { icon: Users, label: "První rande a začátek společné cesty", date: "8. 8. 2022" },
  { icon: Gem, label: "Filip poklekl a Nikol řekla ANO", date: "21. 12. 2025" },
  { icon: Church, label: "Řekneme si ANO", date: "7. 8. 2026" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const TimelineSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4 text-center"
        >
          Náš příběh
        </motion.h2>
        <div className="section-ornament mx-auto mb-16" />

        {/* Timeline */}
        <div className="flex items-end justify-between gap-2 md:gap-4 relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-[52px] md:bottom-[60px] left-[10%] right-[10%] h-px bg-primary/20 origin-left"
          />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center flex-1"
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-2 font-medium min-h-[2.5rem] flex items-end justify-center">
                {m.label}
              </p>
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 relative z-10">
                <m.icon className="w-4 h-4 md:w-6 md:h-6 text-primary/60" />
              </div>
              <p className="text-xs md:text-sm text-foreground/70 font-display italic">
                {m.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
