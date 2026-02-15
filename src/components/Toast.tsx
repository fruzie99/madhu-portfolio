import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

export default function Toast({ message, visible, onClose }: Props) {
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [visible, onClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-1/2 z-[200] -translate-x-1/2 rounded-full border border-white/20 bg-[#0a0a0a] px-5 py-3 font-medium text-white shadow-lg backdrop-blur-md"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
