import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, CheckCircle, Zap } from "lucide-react";

const areas = [
  {
    name: "Akola",
    description: "Our headquarters with walk-in service center",
    features: ["Walk-in Service", "24hr Support", "Same Day Repair"],
    isHQ: true,
    delay: 0,
  },
  {
    name: "Washim",
    description: "On-site service & pickup/drop facility",
    features: ["On-site Repairs", "Pickup Service", "Quick Response"],
    isHQ: false,
    delay: 0.2,
  },
  {
    name: "Buldhana",
    description: "Complete coverage with doorstep service",
    features: ["Doorstep Service", "AMC Support", "Regular Visits"],
    isHQ: false,
    delay: 0.4,
  },
];

const AreaCard = ({ area, index }: { area: typeof areas[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: area.delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={`relative glass-card p-8 text-center group overflow-hidden ${
        area.isHQ ? "ring-2 ring-primary/50" : ""
      }`}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* HQ Badge with pulse */}
      {area.isHQ && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute top-4 right-4"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1"
          >
            <Zap className="w-3 h-3" />
            Headquarters
          </motion.div>
        </motion.div>
      )}

      {/* Animated Map Pin */}
      <div className="relative mx-auto mb-6">
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="w-10 h-10 text-primary" />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Multiple pulse rings */}
        <motion.div
          animate={{ scale: [1, 2], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border-2 border-primary/30 mx-auto"
          style={{ width: 80, height: 80, left: "50%", marginLeft: -40 }}
        />
        <motion.div
          animate={{ scale: [1, 2.5], opacity: [0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="absolute inset-0 rounded-full border border-accent/20 mx-auto"
          style={{ width: 80, height: 80, left: "50%", marginLeft: -40 }}
        />
      </div>

      <motion.h3 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: area.delay + 0.3 }}
        className="font-display text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors"
      >
        {area.name}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: area.delay + 0.4 }}
        className="text-muted-foreground mb-6"
      >
        {area.description}
      </motion.p>

      {/* Features with staggered animation */}
      <div className="space-y-3">
        {area.features.map((feature, i) => (
          <motion.div
            key={feature}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: area.delay + 0.5 + i * 0.1 }}
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: area.delay + 0.6 + i * 0.1, type: "spring" }}
            >
              <CheckCircle className="w-4 h-4 text-accent" />
            </motion.div>
            <span>{feature}</span>
          </motion.div>
        ))}
      </div>

      {/* Corner glow */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

export const ServiceAreasSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-secondary/30 to-transparent" />
      
      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.path
          d="M 20% 50% Q 50% 30% 80% 50%"
          fill="none"
          stroke="url(#areaGradient)"
          strokeWidth="2"
          strokeDasharray="10 5"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 1 }}
        />
        <defs>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="100%" stopColor="hsl(190, 95%, 50%)" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="container-custom relative" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
          >
            Coverage Area
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Serving Across{" "}
            <span className="gradient-text">3 Districts</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            Whether you're in Akola, Washim, or Buldhana, our expert technicians 
            are ready to serve you with quick and reliable solutions.
          </motion.p>
        </motion.div>

        {/* Areas Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <AreaCard key={area.name} area={area} index={index} />
          ))}
        </div>

        {/* Contact CTA with animation */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card inline-flex flex-col sm:flex-row items-center gap-6 px-8 py-6"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <Phone className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Call us anytime</div>
                <a href="tel:9822759586" className="font-display text-xl font-bold text-foreground hover:text-primary transition-colors">
                  9822759586
                </a>
              </div>
            </div>
            <div className="h-12 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <Clock className="w-6 h-6 text-accent" />
              </motion.div>
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Working Hours</div>
                <div className="font-semibold text-foreground">Mon - Sat: 10AM - 8PM</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
