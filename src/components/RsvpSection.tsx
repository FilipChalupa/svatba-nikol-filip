import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const RsvpSection = () => {
  return (
    <section id="rsvp" className="py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-display italic text-foreground mb-4"
        >
          Potvrďte účast
        </motion.h2>
        <div className="section-ornament mx-auto mb-8" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-muted-foreground mb-10 leading-relaxed"
        >
          Budeme moc rádi, když nám dáte vědět, zda se zúčastníte. Stačí vyplnit krátký dotazník.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button
            asChild
            size="lg"
            className="py-6 px-10 tracking-[0.15em] uppercase text-sm"
          >
            <a
              href="https://docs.google.com/forms/d/1d4trIhPTIENVKZwbS-98XGLewa4ptIvtFxfDR538xR8/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vyplnit dotazník
              <ExternalLink className="ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default RsvpSection;
