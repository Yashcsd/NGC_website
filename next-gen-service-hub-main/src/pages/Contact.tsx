import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/supabase";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["9822759586", "9373774814"],
    action: "tel:9822759586",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["ngcakola@gmail.com"],
    action: "mailto:ngcakola@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Mahusal Colony,", "Behind New Bus Stand, Akola"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 10:00 AM - 8:00 PM", "Sunday: Closed"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact").insert([
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service_type: formData.service,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("SUPABASE ERROR:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - New Generation Computer</title>
      </Helmet>

      <main className="min-h-screen">
        <Navbar />

        {/* Decorative Background Section - Fixed SVG error here */}
        <section className="relative pt-32 pb-20 bg-hero-gradient overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
          
          {/* Standards-compliant SVG Path (Removed % from path data) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20" 
            viewBox="0 0 1000 100" 
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 0 50 Q 500 0 1000 50"
              fill="none"
              stroke="url(#contactGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                <stop offset="100%" stopColor="hsl(190, 95%, 50%)" />
              </linearGradient>
            </defs>
          </svg>

          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6">
                Contact Us
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
                Get in <span className="text-accent">Touch</span>
              </h1>
              <p className="text-lg text-primary-foreground/70">
                Have a question or need service? We're here to help. Reach out to us through any of the channels below.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* FORM */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-2">Send us a Message</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and we’ll contact you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select Service</option>
                    <option value="Epson">Epson Printer</option>
                    <option value="Canon">Canon Printer</option>
                    <option value="Computer">Computer Repair</option>
                    <option value="Other">Other</option>
                  </select>

                  <Textarea
                    name="message"
                    placeholder="Describe your issue..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <Button className="w-full sm:w-auto" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </motion.div>

              {/* INFO */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="glass-card p-6">
                      <info.icon className="mb-2 text-primary" />
                      <h3 className="font-bold">{info.title}</h3>
                      {info.details.map((d, i) => (
                        <p key={i} className="text-sm text-muted-foreground">{d}</p>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="glass-card overflow-hidden h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.400346387082!2d77.0064!3d20.7067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDQyJzI0LjEiTiA3N8KwMDAnMjMuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="New Generation Computer Location"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Contact;