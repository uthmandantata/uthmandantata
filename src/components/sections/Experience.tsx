import { motion } from "framer-motion";
import { Building2, CheckCircle } from "lucide-react";

const responsibilities = [
  "Organizing and validating internal data",
  "Creating simple reference sheets for decision-making",
  "Tracking operational metrics",
  "Spotting inefficiencies and recommending improvements",
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Work Experience
            </h2>
          </motion.div>

          {/* Experience Card */}
          <motion.div
            className="bg-card rounded-2xl shadow-card overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/60 to-transparent" />
            
            <div className="p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                  <Building2 className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <h3 className="font-display text-2xl font-bold">
                      GreenPlus Cleaning Solutions
                    </h3>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent w-fit">
                      6 months
                    </span>
                  </div>
                  
                  <p className="text-accent font-medium mb-4">
                    Data & Operations Support
                  </p>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Supported the company with structured processes, reporting, and operations insights. 
                    This role strengthened my habit of paying attention to details, thinking logically, 
                    and creating order out of chaos.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {responsibilities.map((item, index) => (
                      <motion.div
                        key={item}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-sm text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
