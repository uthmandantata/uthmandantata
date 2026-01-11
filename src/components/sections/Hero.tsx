import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 data-dots" />
      
      {/* Floating Data Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 right-20 w-48 h-48 rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
              Available for Projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Hi, I'm{" "}
            <span className="text-gradient">Uthman Dantata</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-2xl md:text-3xl font-display text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I turn messy data into stories that make sense.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Data analyst who believes numbers should be clear, decisions should be confident, 
            and insights should be actionable. I don't just analyze data — I make it useful.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Let's Work Together
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
