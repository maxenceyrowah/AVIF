import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { WOMEN_DATA } from "@/shared/constantes";
import { IWomanGaleries } from "@/shared/models";
import Footer from "@/shared/components/Footer";

const GaleriesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWoman, setSelectedWoman] = useState<IWomanGaleries | null>(
    null
  );

  const openModal = (woman: {
    image: string;
    name: string;
    fonction: string;
    description: string;
  }) => {
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
          className="text-3xl sm:text-4xl md:text-5xl text-center font-bold mb-10 py-7"
        >
          Gallerie des talents inspirants
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
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="cursor-pointer p-4 text-center bg-white shadow-lg rounded-lg"
            >
              <img
                src={woman.image}
                alt={woman.name}
                className="w-full h-40 sm:h-48 md:h-56 object-contain rounded-lg hover:shadow-xl transition-shadow duration-300"
              />
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg text-center font-bold mt-3"
              >
                {woman.name}
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600 text-center pb-4"
              >
                {woman.fonction}
              </motion.h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-3 py-1.5 text-center text-white text-[15px] border border-gray-800 bg-yellow-600 rounded-lg hover:bg-yellow-700 transition duration-300"
                onClick={() => openModal(woman)}
              >
                Voir la biographie
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
                    className="w-full h-56 sm:h-64 md:h-80 object-center rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-center p-4">
                  <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-xl font-bold text-center"
                  >
                    {selectedWoman.name}
                  </motion.h1>
                  <motion.h2
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-600 text-center py-2"
                  >
                    {selectedWoman.fonction}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-700 text-justify overflow-y-auto h-48 sm:h-60 md:h-72 p-3"
                  >
                    {selectedWoman.description}
                  </motion.p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-2 right-2 text-white bg-gray-800 p-1 rounded-full"
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
