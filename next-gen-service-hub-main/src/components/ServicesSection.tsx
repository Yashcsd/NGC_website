import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Printer,
    title: "Epson Printer Service",
    description: "Authorized Epson service with genuine parts and certified expertise.",
    color: "from-blue-500 to-blue-600",
    badge: "Authorized",
  },
  {
    icon: Printer,
    title: "Canon Printer Service",
    description: "Official Canon repair center with warranty-backed solutions.",
    color: "from-red-500 to-red-600",
    badge: "Authorized",
  },
  {
    icon: Wrench,
    title: "All-Brand Printer Repair",
    description: "Expert repair for HP, Brother, Samsung, and all major printer brands.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Computer & Laptop Repair",
    description: "Complete PC and laptop diagnostics, repair, and upgrades.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Droplets,
    title: "Cartridge Refilling",
    description: "Quality ink refilling and cartridge restoration services.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: FileCheck,
    title: "Printer AMC & Maintenance",
    description: "Annual maintenance contracts for worry-free printer operation.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: MapPin,
    title: "On-site Repair Service",
    description: "Doorstep repair across Akola, Washim, and Buldhana districts.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Cpu,
    title: "Hardware Troubleshooting",
    description: "Expert diagnosis and repair of all hardware issues.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Settings,
    title: "Software Solutions",
    description: "Complete software installation, repair, and optimization.",
    color: "from-teal-500 to-teal-600",
  },
  {
    icon: Cloud,
    title: "Cloud Storage Service",
    description: "Coming soon! Secure cloud backup for your valuable data.",
    color: "from-violet-500 to-violet-600",
    badge: "Coming Soon",
    featured: true,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -12, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`group relative glass-card p-6 cursor-pointer overflow-hidden ${
        service.featured ? "ring-2 ring-accent/50" : ""
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Animated gradient background on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
        initial={false}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
      />
      
      {/* Glow ring on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
           style={{ boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.1)" }} 
      />
      
      {/* Badge */}
      {service.badge && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.3, type: "spring" }}
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-10 ${
            service.badge === "Coming Soon" 
              ? "bg-accent/20 text-accent" 
              : "bg-primary/20 text-primary"
          }`}
        >
          {service.badge}
        </motion.div>
      )}

      {/* Icon with 3D effect */}
      <motion.div
        whileHover={{ 
          rotate: [0, -10, 10, 0],
          scale: 1.1,
        }}
        transition={{ duration: 0.5 }}
        className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
      >
        {/* Icon glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
        <service.icon className="w-7 h-7 text-primary-foreground relative z-10" />
      </motion.div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Hover Arrow with slide animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <ArrowRight className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Corner decoration */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export const ServicesSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent)/0.08),transparent_50%)]" />
      
      {/* Floating orbs */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
      />

      <div className="container-custom relative">
        {/* Section Header with reveal animation */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Complete IT & Printer{" "}
            <span className="gradient-text">Solutions</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From authorized printer repairs to comprehensive IT support, 
            we provide end-to-end solutions for all your technology needs.
          </motion.p>
        </motion.div>

        {/* Services Grid with staggered animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* CTA with bounce */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2 group"
            >
              View All Services
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
