import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Database, LineChart } from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "What's working",
  },
  {
    icon: Database,
    title: "What's not",
  },
  {
    icon: LineChart,
    title: "What the data is secretly trying to say",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
                What I Do
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Making Data Work for You
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I help businesses understand their numbers through dashboards, structured datasets, 
                and clean analysis. I make it easier for teams to make decisions and move with clarity.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="font-display text-lg font-medium">{feature.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Stats Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-card rounded-2xl shadow-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
                
                <h3 className="font-display text-2xl font-bold mb-6">My Toolkit</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {["Excel", "SQL", "Power BI", "Python", "Data Cleaning", "Data Quality", "Dashboarding", "Insight Storytelling"].map((tool, index) => (
                    <motion.div
                      key={tool}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 hover:bg-accent/10 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">{tool}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
