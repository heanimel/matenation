import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function ModernMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg shadow-black/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span>Menu</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute left-0 top-0 h-full w-80 bg-[#1a1d3d]/95 backdrop-blur-2xl border-r border-white/10 p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mt-20">
                <nav className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="block text-2xl text-white hover:text-pink-400 transition-colors py-2"
                    >
                      • {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
