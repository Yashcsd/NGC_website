import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUpRight
} from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/#about" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Epson Printer Service",
  "Canon Printer Service",
  "Computer Repair",
  "Cartridge Refilling",
  "AMC Services",
  "On-site Repairs",
];

export const Footer = () => {
  return (
    <footer className="bg-hero-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container-custom relative">
        {/* Main Footer */}
        <div className="section-padding pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center shadow-lg">
                  <Printer className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl">New Generation</div>
                  <div className="text-sm text-primary-foreground/60">Computer</div>
                </div>
              </Link>
              <p className="text-primary-foreground/70 mb-6 leading-relaxed">
                Authorized Epson & Canon service center serving Akola, Washim, and 
                Buldhana with certified technicians and genuine parts.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors inline-flex items-center gap-2 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-display font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-primary-foreground/70">
                    Mahusal Colony, Behind New Bus Stand, Akola
                  </span>
                </li>
                <li>
                  <a 
                    href="tel:9822759586" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    9822759586
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:9373774814" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Phone className="w-5 h-5 text-accent" />
                    9373774814
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:ngcakola@gmail.com" 
                    className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="w-5 h-5 text-accent" />
                    ngcakola@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 New Generation Computer. All rights reserved.</p>
            <p>
              Authorized Epson & Canon Service Center | Akola, Washim, Buldhana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
