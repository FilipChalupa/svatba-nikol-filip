import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const InfoSection = () => {
  const items = [
    {
      icon: CalendarDays,
      title: "Datum",
      lines: ["7. srpna 2026"],
    },
    {
      icon: Clock,
      title: "Harmonogram",
      lines: [
        "12:30 — Obřad",
        "13:30 — Společné foto & gratulace",
        "14:00 — Svatební hostina",
        "16:00 — Krájení dortu",
        "17:00 — Házení kytice & první tanec",
        "18:00 — Večerní raut & zábava",
        "22:00 — Půlnoční překvapení",
      ],
    },
    {
      icon: MapPin,
      title: "Místo",
      lines: ["Třebovický mlýn", "Na Heleně 5004/2", "722 00 Ostrava-Třebovice"],
    },
  ];

  return (
    <section id="info" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4"
        >
          Kdy & Kde
        </motion.h2>
        <div className="section-ornament mx-auto mb-16" />

        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display mb-3 text-foreground">{item.title}</h3>
              {item.lines.map((line) => (
                <p key={line} className="text-muted-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
