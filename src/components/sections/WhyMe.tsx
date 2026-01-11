import { motion } from "framer-motion";
import { MessageCircle, Target, Lightbulb, Heart, Award, Users } from "lucide-react";

const qualities = [
  {
    icon: MessageCircle,
    title: "Thoughtful Questions",
    description: "I ask the right questions to understand your real needs",
  },
  {
    icon: Target,
    title: "Self-Directed",
    description: "I follow through without supervision",
  },
  {
    icon: Lightbulb,
    title: "Detail-Oriented",
    description: "I improve things that everyone else ignores",
  },
  {
    icon: Users,
    title: "Clear Communicator",
    description: "I make data easy to understand — no jargon",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Every table, chart, and insight must make sense",
  },
  {
    icon: Heart,
    title: "Genuinely Caring",
    description: "I care about the work and take ownership",
  },
];

const WhyMe = () => {
  return (
    <section id="why-me" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 data-dots opacity-30" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Why Work With Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why People Enjoy Working With Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I believe data should feel simple and human. No jargon. No confusion. Just clarity.
            </p>
          </motion.div>

          {/* Qualities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <quality.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{quality.title}</h3>
                <p className="text-muted-foreground text-sm">{quality.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Promise Section */}
          <motion.div
            className="mt-16 p-8 md:p-10 bg-primary rounded-2xl text-primary-foreground relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-3xl">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                ✨ My Promise
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                If you work with me, you get someone who cares about the work, takes ownership, 
                is hungry to learn, communicates clearly, and makes your team smarter, faster, and more informed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
