import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Footer from "@/shared/components/Footer";
import { WOMEN_DATA } from "@/shared/constantes";
import { IWomanGaleries } from "@/shared/models";

const GaleriesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWoman, setSelectedWoman] = useState<IWomanGaleries | null>(
    null
  );

  const openModal = (woman: IWomanGaleries) => {
    setSelectedWoman(woman);
    setIsOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-7"
      >
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-7 py-10"
        >
          Galerie des talents inspirants
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {WOMEN_DATA.map((woman, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="cursor-pointer p-4 text-center bg-white shadow-lg rounded-lg flex flex-col h-full"
            >
              <img
                src={woman.image}
                alt={woman.name}
                className="w-full h-40 sm:h-48 md:h-56 object-contain rounded-lg transition-shadow duration-300"
              />
              <motion.h1 className="text-lg text-center font-bold mt-3">
                {woman.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600 text-center"
              >
                {woman.fonction}
              </motion.h2>
              <div className="flex-grow" />
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 px-4 py-2 text-center text-secondary text-[15px] border border-gray-100 bg-primary rounded-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                onClick={() => openModal(woman)}
              >
                {woman.buttonLabel}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {isOpen && selectedWoman && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50 p-4"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 w-full max-w-4xl rounded-lg shadow-lg overflow-hidden relative p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-center">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    src={selectedWoman.image}
                    alt={selectedWoman.name}
                    className="w-full h-56 sm:h-64 md:h-80 object-contain rounded-lg shadow-md"
                  />
                </div>
                <div className="flex flex-col items-center p-4">
                  <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl font-bold text-center text-gray-800"
                  >
                    {selectedWoman.name}
                  </motion.h1>
                  <motion.h2
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-gray-600 text-center py-2"
                  >
                    {selectedWoman.fonction}
                  </motion.h2>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full h-48 sm:h-60 md:h-72"
                  >
                    <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
                      <p className="text-gray-700 text-justify leading-relaxed p-4 whitespace-pre-line">
                        {selectedWoman.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  ✖
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <Footer />
    </>
  );
};

export default GaleriesPage;
