import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SlideNotification({ message }) {
  const [showAlert, setShowAlert] = useState(true);

  // Hide alert after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 min-h-screen flex flex-col items-center mt-4 z-50">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
