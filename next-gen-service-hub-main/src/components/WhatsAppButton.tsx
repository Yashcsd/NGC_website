import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "919822759586"; // Country code + number
  const message = encodeURIComponent("Hello! I need printer/computer service.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="hidden md:block bg-card px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Chat with us!
      </motion.div>

      {/* Button */}
      <div className="relative">
        {/* Pulse Ring */}
        <motion.div
          animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-green-500"
        />
        
        {/* Main Button */}
        <div className="relative w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow">
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </div>

        {/* Bounce Animation */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-card flex items-center justify-center"
        >
          <span className="text-[10px] font-bold text-white">1</span>
        </motion.div>
      </div>
    </motion.a>
  );
};
