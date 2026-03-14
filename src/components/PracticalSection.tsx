import { motion } from "framer-motion";
import { Shirt, Gift, Hotel, Phone } from "lucide-react";

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
      text: "Semiiformální — dámy v šatech, pánové v obleku. Vyhněte se prosím bílé a krémové barvě.",
    },
    {
      icon: Gift,
      title: "Dary",
      text: "Vaše přítomnost je pro nás tím největším darem. Pokud nás chcete obdarovat, budeme vděční za příspěvek na svatební cestu.",
    },
    {
      icon: Hotel,
      title: "Ubytování",
      text: "Doporučená ubytování v okolí budou upřesněna. Rádi vám pomůžeme s rezervací.",
    },
    {
      icon: Phone,
      title: "Kontakt",
      text: "V případě dotazů nás neváhejte kontaktovat. Kontaktní údaje budou doplněny.",
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
