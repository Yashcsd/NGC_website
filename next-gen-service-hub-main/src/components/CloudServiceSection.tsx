import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cloud, Shield, Smartphone, Zap, Lock, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption to keep your data safe",
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    description: "View your files from any device, anytime",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Quick uploads and downloads with our optimized servers",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your data belongs to you - we never share or sell",
  },
  {
    icon: RefreshCw,
    title: "Auto Backup",
    description: "Set it and forget it - automatic scheduled backups",
  },
];

export const CloudServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08),transparent_70%)]" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Cloud Illustration */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Glowing Background */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
              />
              
              {/* Main Cloud Icon */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex items-center justify-center h-full"
              >
                <div className="glass-card p-16 rounded-full glow-effect animate-glow">
                  <Cloud className="w-32 h-32 text-primary" />
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <div className="w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8"
              >
                <div className="absolute bottom-0 right-0">
                  <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Coming Soon</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Introducing Our{" "}
              <span className="gradient-text">Cloud Storage</span> Service
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Keep your important documents, photos, and business data safe with our 
              upcoming cloud storage solution. Designed specifically for our customers, 
              it combines enterprise-grade security with local support you can trust.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-card inline-flex items-center gap-4 px-6 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Be the first to know!</div>
                <div className="text-sm text-muted-foreground">
                  Contact us to get notified when we launch
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
