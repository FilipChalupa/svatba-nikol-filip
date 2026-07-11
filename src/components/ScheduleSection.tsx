import { motion } from "framer-motion";

const schedule = [
  { time: "12:00", label: "Sejdeme se na místě — ať nám nic neuteče" },
  { time: "12:30", label: "Obřad" },
  { time: "13:00", label: "Společné focení a focení skupinek" },
  { time: "14:00", label: "Svatební hostina" },
  { time: "17:00", label: "Hudba & první tanec" },
  { time: "18:30", label: "Raut" },
  { time: "19:00", label: "Svatební hry" },
  
  { time: "22:00", label: "DJ" },
  { time: "2:00", label: "Konec" },
];

const ScheduleSection = () => {
  return (
    <section id="harmonogram" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4"
        >
          Harmonogram dne
        </motion.h2>
        <div className="section-ornament mx-auto mb-16" />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-2 bottom-2 w-px bg-primary/20" />

          <div className="space-y-8">
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5 md:gap-6 text-left"
              >
                {/* Outlined dot */}
                <div className="relative z-10 w-12 md:w-16 flex justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-background" />
                </div>
                {/* Time & label */}
                <div className="flex items-baseline gap-3 md:gap-4">
                  <span className="text-foreground font-display text-lg md:text-xl font-medium min-w-[4rem] text-right tabular-nums">
                    {item.time}
                  </span>
                  <span className="text-muted-foreground text-sm md:text-base">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
