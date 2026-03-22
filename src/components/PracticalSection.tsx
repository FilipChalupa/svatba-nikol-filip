import { motion } from "framer-motion";
import { Shirt, Gift, Phone } from "lucide-react";

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
      text: "Nemusíte řešit oblek ani společenské šaty — přijďte v čemkoliv, v čem se budete cítit dobře a pohodlně.",
    },
    {
      icon: Gift,
      title: "Dary",
      text: "Nechceme žádné věcné dary. Pokud nás ale budete chtít podpořit finančně, budeme moc rádi.",
    },
    {
      icon: Phone,
      title: "Kontakt",
      text: "Pokud máte jakékoliv dotazy, neváhejte kdykoliv napsat nevěstě nebo ženichovi — rádi vám odpovíme.",
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

        <div className="grid md:grid-cols-2 gap-10 text-left">
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
