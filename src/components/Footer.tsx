import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-6 text-center">
      <p className="text-3xl font-display italic text-foreground mb-4">
        Nikol & Filip
      </p>
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <span>S láskou</span>
        <Heart className="w-3 h-3 text-primary fill-primary" />
        <span>Ostrava</span>
      </div>
    </footer>
  );
};

export default Footer;
