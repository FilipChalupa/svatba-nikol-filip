import { motion } from "framer-motion";
import { Shirt, Gift, Waves, Camera } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 },
  }),
};

const PracticalSection = () => {
  const items = [
    {
      icon: Shirt,
      title: "Dress code",
      text: "Žádná pravidla, žádný stres. Oblečte si to, v čem vám bude dobře — důležité je, abyste se bavili.",
    },
    {
      icon: Gift,
      title: "Dary",
      text: "Vaše přítomnost je pro nás to nejcennější. Pokud byste nás chtěli podpořit i jinak, potěší nás finanční příspěvek.",
    },
    {
      icon: Waves,
      title: "Bazén",
      text: "V místě konání bude k dispozici bazén — kdo má chuť si zaplavat, ať si nezapomene plavky.",
    },
    {
      icon: Camera,
      title: "Fotograf",
      text: "O zachycení vzpomínek se postará profesionální fotograf. Prosíme, mějte během obřadu telefony schované — ať jsou všechny záběry bez rušení.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4"
        >
          Praktické informace
        </motion.h2>
        <div className="section-ornament mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-10 text-left max-w-2xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-display mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalSection;
