import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Floating button that smoothly returns the visitor to the top of the page. */
export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          onClick={toTop}
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-[#2a1602] md:bottom-7 md:right-7"
          style={{
            background:
              "linear-gradient(135deg, #ffe7a6 0%, #f4c95d 35%, #e0a93f 70%, #c98a26 100%)",
            boxShadow:
              "0 10px 30px -8px rgba(217,164,65,0.6), 0 0 0 1px rgba(255,240,200,0.55) inset",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
