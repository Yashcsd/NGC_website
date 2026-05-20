import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Are you an authorized Epson and Canon service center?",
    answer: "Yes, New Generation Computer is an officially authorized service center for both Epson and Canon printers. We use genuine parts and our technicians are factory-trained to handle all types of repairs covered under warranty.",
  },
  {
    question: "What areas do you provide service in?",
    answer: "We provide comprehensive service across Akola, Washim, and Buldhana districts. Our headquarters is in Akola with walk-in facilities, and we offer on-site doorstep service for customers in Washim and Buldhana.",
  },
  {
    question: "How long does a typical printer repair take?",
    answer: "Most standard repairs are completed within 24-48 hours. For complex issues or if specific parts need to be ordered, it may take 3-5 business days. We always communicate the expected timeline upfront.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Yes, we offer customized AMC plans for printers and computers. Our AMC includes regular maintenance visits, priority support, discounted repairs, and genuine parts replacement to ensure your equipment runs smoothly year-round.",
  },
  {
    question: "What is your cartridge refilling service?",
    answer: "We provide high-quality ink refilling for all major printer cartridge brands. Our refills use premium-grade ink that matches OEM quality, ensuring excellent print output at a fraction of the cost of new cartridges.",
  },
  {
    question: "Do you provide on-site computer and laptop repair?",
    answer: "Yes, we offer doorstep repair services for computers and laptops across all three districts. Our technicians can handle hardware repairs, software troubleshooting, virus removal, data recovery, and system upgrades at your location.",
  },
  {
    question: "What is your upcoming Cloud Storage service?",
    answer: "We're launching a secure cloud backup service designed specifically for our customers. This will allow you to safely store and access your important documents and data from anywhere, with enterprise-grade security and local support.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-foreground pr-4">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--primary)/0.05),transparent_50%)]" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. Find everything you need to know 
            about our services below.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="glass-card inline-flex items-center gap-4 px-8 py-5">
            <HelpCircle className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="font-semibold text-foreground">Still have questions?</div>
              <div className="text-sm text-muted-foreground">
                Call us at{" "}
                <a href="tel:9822759586" className="text-primary hover:underline font-medium">
                  9822759586
                </a>{" "}
                or{" "}
                <a href="mailto:ngcakola@gmail.com" className="text-primary hover:underline font-medium">
                  email us
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
