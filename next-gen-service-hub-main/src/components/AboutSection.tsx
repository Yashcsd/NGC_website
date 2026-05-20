import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { CheckCircle, Award, Users, Clock, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Genuine Parts",
    description: "We use only authentic OEM parts for all repairs",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Factory-trained experts with years of experience",
  },
  {
    icon: Users,
    title: "10,000+ Customers",
    description: "Trusted by businesses and homes across 3 districts",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Most repairs completed within 24-48 hours",
  },
  {
    icon: Zap,
    title: "On-site Service",
    description: "Doorstep repairs across Akola, Washim & Buldhana",
  },
  {
    icon: CheckCircle,
    title: "Warranty Support",
    description: "Full warranty on all services and parts",
  },
];

// Animated counter hook
const useCounter = (target: number, duration: number = 2, startAnimation: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration, startAnimation]);

  return count;
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,hsl(var(--primary)/0.03)_25%,hsl(var(--primary)/0.03)_50%,transparent_50%,transparent_75%,hsl(var(--primary)/0.03)_75%)] bg-[length:64px_64px]" 
      />

      {/* Floating elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-40 h-40 border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-60 h-60 border border-accent/10 rounded-full"
      />

      <div className="container-custom relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content with reveal animations */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
            >
              About Us
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight"
            >
              Your Trusted Partner for{" "}
              <motion.span 
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="gradient-text"
              >
                Printer & IT Solutions
              </motion.span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-lg mb-6 leading-relaxed"
            >
              <strong className="text-foreground">New Generation Computer</strong> has been serving 
              the Vidarbha region for over 15 years as an authorized Epson and Canon 
              service center. Located in Akola, we provide comprehensive printer repair, 
              computer services, and IT solutions across Akola, Washim, and Buldhana districts.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              Our team of certified technicians is committed to delivering genuine service 
              with authentic parts, ensuring your equipment performs at its best. Whether 
              you need a quick repair or a long-term maintenance contract, we have you covered.
            </motion.p>

            {/* Trust Indicators with hover effects */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border shadow-sm cursor-pointer group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center"
                >
                  <span className="text-xl font-bold text-blue-500">E</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Epson</div>
                  <div className="text-xs text-muted-foreground">Authorized Partner</div>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border shadow-sm cursor-pointer group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center"
                >
                  <span className="text-xl font-bold text-red-500">C</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Canon</div>
                  <div className="text-xs text-muted-foreground">Authorized Partner</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border shadow-sm cursor-pointer group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center"
                >
                  <span className="text-xl font-bold text-yellow-500">T</span>
                </motion.div>
                <div>
                  <div className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">Tally</div>
                  <div className="text-xs text-muted-foreground">Certified Partner</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Features Grid with staggered animation */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="glass-card p-5 group cursor-pointer relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="relative font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                <p className="relative text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
