import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextReplaceAnimation = () => {
  const texts = ["Tout pour la femme", "Tous pour la femme"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Increased duration to 4 seconds for better readability

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: {
      opacity: 0,
      y: 10,
      filter: "blur(10px)",
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(10px)",
      transition: {
        duration: 0.6,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="flex justify-center text-4xl uppercase">
      <div className="text-center text-4xl font-bold">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentTextIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
          >
            {texts[currentTextIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextReplaceAnimation;
