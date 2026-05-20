import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner, Akola",
    content: "Excellent service! They repaired my Epson printer within 24 hours. The technicians are knowledgeable and use genuine parts. Highly recommend New Generation Computer!",
    rating: 5,
  },
  {
    name: "Priya Deshmukh",
    role: "School Administrator, Washim",
    content: "We have an AMC with them for our 15 printers. Their on-site service is prompt and professional. Best printer service center in the region.",
    rating: 5,
  },
  {
    name: "Amit Patil",
    role: "CA, Buldhana",
    content: "Professional team with quick turnaround. They fixed my Canon printer that other shops couldn't repair. Genuine authorized service makes all the difference.",
    rating: 5,
  },
  {
    name: "Sunita Kale",
    role: "Shop Owner, Akola",
    content: "Great cartridge refilling service! The quality is excellent and prices are reasonable. Been using their services for 5 years now.",
    rating: 5,
  },
  {
    name: "Vikram Jadhav",
    role: "IT Manager, Washim",
    content: "Their computer repair service is top-notch. Fast diagnostics and transparent pricing. The team goes above and beyond for customer satisfaction.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navigate = (dir: number) => {
    setDirection(dir);
    setCurrentIndex((prev) => {
      if (dir === 1) return (prev + 1) % testimonials.length;
      return prev === 0 ? testimonials.length - 1 : prev - 1;
    });
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 15 : -15,
    }),
  };

  return (
    <section className="section-padding bg-hero-gradient relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.15),transparent_70%)]" />
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-accent/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-4"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-display text-3xl md:text-5xl font-bold mb-6 text-primary-foreground"
          >
            What Our <span className="text-accent">Customers</span> Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-primary-foreground/70 max-w-2xl mx-auto text-lg"
          >
            Don't just take our word for it. Here's what our valued customers 
            have to say about our services.
          </motion.p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto" style={{ perspective: "1000px" }}>
          {/* Quote Icon with animation */}
          <motion.div 
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-8 left-8 opacity-20"
          >
            <Quote className="w-24 h-24 text-primary" />
          </motion.div>

          {/* Slider Container */}
          <div className="relative overflow-hidden min-h-[320px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="glass-card p-8 md:p-12 text-center bg-card/10 backdrop-blur-xl border-primary-foreground/10"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Stars with staggered animation */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0, rotate: -180 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Content with reveal */}
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed italic"
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>

                {/* Author with slide up */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="font-display text-xl font-bold text-primary-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-primary-foreground/60">
                    {testimonials[currentIndex].role}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots with active animation */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    width: index === currentIndex ? 32 : 10,
                    backgroundColor: index === currentIndex ? "hsl(190, 95%, 50%)" : "rgba(255,255,255,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-2.5 rounded-full"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.15, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(1)}
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
