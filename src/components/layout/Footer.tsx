import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} Uthman Dantata.</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-accent" /> for data
            </span>
          </div>

          <div className="font-display text-sm text-muted-foreground">
            Making data make sense
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
