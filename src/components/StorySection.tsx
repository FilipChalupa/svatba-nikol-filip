import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const StorySection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4"
        >
          Náš příběh
        </motion.h2>
        <div className="section-ornament mx-auto mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-7 h-7 text-primary" />
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Každý velký příběh lásky má svůj začátek. Ten náš začal nečekaně,
            ale o to krásněji. Od prvního setkání jsme věděli, že spolu chceme
            prožít celý život.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Po mnoha společných dobrodružstvích, smíchu i výzvách jsme se
            rozhodli udělat ten nejkrásnější krok — říct si ANO.
          </p>
          <p className="text-muted-foreground italic">
            A rádi bychom tento okamžik sdíleli právě s vámi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
