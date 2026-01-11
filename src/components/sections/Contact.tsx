import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
    placeholder: "Add your email",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    placeholder: "Add your LinkedIn",
  },
  {
    icon: Github,
    label: "GitHub / Portfolio",
    value: "View my work",
    href: "https://github.com/your-username",
    placeholder: "Add your link",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-medium text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you need a dashboard, a data cleanup, or insight into your numbers — I'd love to help.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                  <link.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                </div>
                <span className="font-display font-bold text-lg mb-1">{link.label}</span>
                <span className="text-muted-foreground text-sm">{link.placeholder}</span>
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="font-display text-2xl font-bold text-foreground mb-6">
              Let's build something smart together.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="w-5 h-5" />
                Send Me a Message
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
