import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const RsvpSection = () => {
  const [form, setForm] = useState({ name: "", email: "", guests: "1", message: "" });
  const [attending, setAttending] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error("Prosím vyplňte své jméno.");
      return;
    }
    if (attending === null) {
      toast.error("Prosím potvrďte svou účast.");
      return;
    }
    toast.success("Děkujeme za odpověď! 🌸");
    setForm({ name: "", email: "", guests: "1", message: "" });
    setAttending(null);
  };

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
        <div className="section-ornament mx-auto mb-16" />

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Jméno a příjmení *</label>
            <Input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background border-border"
              placeholder="Jan Novák"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">E-mail</label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background border-border"
              placeholder="jan@email.cz"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Zúčastníte se? *</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`flex-1 py-3 rounded-sm border text-sm tracking-wide transition-colors ${
                  attending === true
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                Ano, přijdu 🥂
              </button>
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`flex-1 py-3 rounded-sm border text-sm tracking-wide transition-colors ${
                  attending === false
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                Bohužel nemohu
              </button>
            </div>
          </div>
          {attending && (
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Počet osob</label>
              <Input
                type="number"
                min="1"
                max="10"
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="bg-background border-border w-24"
              />
            </div>
          )}
          <div>
            <label className="block text-sm text-muted-foreground mb-2">Vzkaz pro novomanžele</label>
            <Textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-background border-border"
              placeholder="Těšíme se na vás!"
              rows={3}
            />
          </div>
          <Button
            type="submit"
            className="w-full py-6 tracking-[0.15em] uppercase text-sm"
          >
            Odeslat odpověď
          </Button>
        </motion.form>
      </div>
    </section>
  );
};

export default RsvpSection;
