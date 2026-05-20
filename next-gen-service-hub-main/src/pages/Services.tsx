import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Printer, 
  Monitor, 
  HardDrive, 
  Wrench, 
  Cloud, 
  MapPin, 
  Settings, 
  Cpu, 
  Droplets,
  FileCheck,
  ArrowRight,
  CheckCircle,
  Phone
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const allServices = [
  {
    icon: Printer,
    title: "Authorized Epson Printer Service",
    description: "As an authorized Epson service center, we provide warranty repairs, genuine parts replacement, and expert maintenance for all Epson printer models including InkTank, EcoTank, and laser printers.",
    features: ["Warranty repairs", "Genuine Epson parts", "All model support", "Quick turnaround"],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Printer,
    title: "Authorized Canon Printer Service",
    description: "Official Canon repair center offering complete service for Canon inkjet, laser, and multifunction printers. Factory-trained technicians ensure your Canon printer performs at its best.",
    features: ["Official Canon service", "Certified technicians", "Original parts", "Extended support"],
    color: "from-red-500 to-red-600",
  },
  {
    icon: Wrench,
    title: "All-Brand Printer Repair",
    description: "Expert repair services for HP, Brother, Samsung, Ricoh, Kyocera, and all major printer brands. From simple fixes to complex repairs, we handle it all.",
    features: ["Multi-brand expertise", "Affordable pricing", "Same-day repairs", "Quality parts"],
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Computer & Laptop Repair",
    description: "Complete PC and laptop diagnostics, repair, and upgrade services. We fix hardware issues, replace components, and optimize performance for all brands.",
    features: ["Desktop & laptop", "All brands", "Hardware upgrades", "Data recovery"],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Droplets,
    title: "Cartridge Refilling",
    description: "High-quality ink refilling services for all printer cartridge types. Our premium-grade inks ensure excellent print quality at a fraction of the cost.",
    features: ["Premium inks", "All cartridge types", "Cost-effective", "Quality prints"],
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: FileCheck,
    title: "Printer AMC & Maintenance",
    description: "Annual Maintenance Contracts tailored for businesses. Regular servicing, priority support, and discounted repairs to keep your printers running smoothly.",
    features: ["Customized plans", "Priority support", "Regular maintenance", "Discounted repairs"],
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: MapPin,
    title: "On-site Repair Service",
    description: "Doorstep repair services across Akola, Washim, and Buldhana districts. Our technicians come to your location for convenient, hassle-free repairs.",
    features: ["Doorstep service", "3 district coverage", "Flexible scheduling", "Professional setup"],
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Cpu,
    title: "Hardware Troubleshooting",
    description: "Expert diagnosis and repair of all hardware issues. From motherboard repairs to component replacements, we solve complex hardware problems.",
    features: ["Expert diagnosis", "Component repair", "Upgrades", "Performance optimization"],
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Settings,
    title: "Complete Software Solutions",
    description: "Comprehensive software services including OS installation, virus removal, driver updates, and performance optimization for all systems.",
    features: ["OS installation", "Virus removal", "Driver updates", "System optimization"],
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Cloud,
    title: "Cloud Storage Service",
    description: "Coming soon! Secure cloud backup solution for your valuable data. Access your files from anywhere with enterprise-grade security and local support.",
    features: ["Secure backup", "Remote access", "Auto sync", "Local support"],
    color: "from-violet-500 to-violet-600",
    badge: "Coming Soon",
  },
];

const ServiceCard = ({ service, index }: { service: typeof allServices[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group"
    >
      {/* Badge */}
      {service.badge && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold z-10">
          {service.badge}
        </div>
      )}

      <div className="p-8">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
        >
          <service.icon className="w-8 h-8 text-primary-foreground" />
        </motion.div>

        {/* Content */}
        <h3 className="font-display text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <div className="space-y-2">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - New Generation Computer | Printer Repair, Computer Services Akola</title>
        <meta 
          name="description" 
          content="Complete printer repair and IT services: Epson & Canon authorized service, all-brand repairs, computer repair, cartridge refilling, AMC, on-site repairs in Akola, Washim, Buldhana." 
        />
        <meta 
          name="keywords" 
          content="printer repair Akola, computer repair Akola, Epson service Washim, Canon service Buldhana, cartridge refilling, printer AMC Maharashtra" 
        />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Complete IT & Printer{" "}
                <span className="text-accent">Solutions</span>
              </h1>
              <p className="text-lg text-primary-foreground/70">
                From authorized printer repairs to comprehensive IT support, we provide 
                end-to-end solutions for all your technology needs across Akola, Washim, and Buldhana.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8">
              {allServices.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12 text-center max-w-4xl mx-auto"
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Get Your Device Fixed?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for expert printer and computer repair services. 
                Our certified technicians are ready to help!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Book Service Now
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <a href="tel:9822759586">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline-glow inline-flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call: 9822759586
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Services;
