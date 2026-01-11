import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BarChart3, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Nigerian Graduate Data Analysis",
    description: "A full data exploration project uncovering academic patterns across Nigerian states and regions. Analyzed most popular fields of study, states producing the highest First-Class graduates, and regional trends.",
    tags: ["SQL", "Data Cleaning", "Data Analysis", "Data Visualization", "Education Data"],
    status: "completed",
    icon: BarChart3,
    highlights: ["Regional trends analysis", "Performance patterns", "Clean data presentation"],
    link: "https://github.com/uthmandantata/nigerian-graduate-sql-analysis",
  },
  {
    title: "Salary & Remote Jobs Dashboard",
    description: "A dashboard analyzing remote job trends and salaries across multiple countries. Providing insights into compensation patterns in the remote work landscape.",
    tags: ["Power BI", "Dashboard", "Salary Data"],
    status: "coming",
    icon: Briefcase,
    highlights: ["Multi-country analysis", "Salary trends", "Remote work insights"],
    link: " ",
  },
  {
    title: "End-to-End Analytics Case Study",
    description: "A complete analytics workflow demonstration: From raw CSV → cleaning → SQL queries → dashboard → insights → recommendations.",
    tags: ["SQL", "ETL", "Full Pipeline"],
    status: "coming",
    icon: BarChart3,
    highlights: ["Complete workflow", "SQL expertise", "Actionable recommendations"],
    link: " ",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6">
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
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Projects I've Built
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real projects showcasing my ability to clean, visualize, and present insights clearly.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  key={project.title}
                  className="group relative bg-card rounded-2xl shadow-card overflow-hidden hover:shadow-glow transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Top Gradient Bar */}
                  <div className="h-1 w-full bg-gradient-to-r from-accent via-accent/60 to-transparent" />

                  <div className="p-6">
                    {/* Icon and Status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-accent" />
                      </div>
                      {project.status === "coming" ? (
                        <Badge variant="secondary" className="gap-1">
                          <Clock className="w-3 h-3" />
                          Coming Soon
                        </Badge>
                      ) : (
                        <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                          Completed
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
