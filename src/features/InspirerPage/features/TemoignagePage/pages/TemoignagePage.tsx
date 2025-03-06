import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import { INSPIRING_WOMEN } from "@/shared/constantes";
import { IWomenInspiration } from "@/shared/models";
import Footer from "@components/Footer";

const TemoignagePage = () => {
  const [selectedWoman, setSelectedWoman] = useState<IWomenInspiration | null>(
    null
  );
  const [filterCategory, setFilterCategory] = useState("all");

  const categories = [
    { id: "all", label: "Toutes" },
    { id: "activist", label: "Militantes" },
    { id: "pioneer", label: "Pionnières" },
    { id: "leader", label: "Leaders" },
  ];

  const filteredWomen =
    filterCategory === "all"
      ? INSPIRING_WOMEN
      : INSPIRING_WOMEN.filter((woman) => woman.category === filterCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 backdrop-blur-sm" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h1 className="mb-8 text-4xl font-bold text-gray-900">
              Témoignages et Portraits
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-center mb-12 max-w-3xl mx-auto"
          >
            <p className="text-gray-700 mb-6 mx-4">
              Découvrez les parcours exceptionnels de femmes qui ont marqué
              l'histoire et continuent d'inspirer la lutte pour l'égalité des
              droits. Leurs témoignages nous rappellent l'importance de célébrer
              non seulement le 8 mars, mais chaque jour de l'année.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilterCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    filterCategory === category.id
                      ? "bg-primary text-black"
                      : "bg-yellow-200 text-black hover:bg-primary"
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={filterCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            >
              {filteredWomen.map((woman) => (
                <motion.div
                  key={woman.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedWoman(woman)}
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={woman.image}
                      alt={woman.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <motion.div
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute bottom-0 left-0 right-0 p-8 z-20"
                    >
                      <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20">
                        <h2 className="text-2xl font-bold mb-2 text-purple-900">
                          {woman.name}
                        </h2>
                        <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-3">
                          {woman.role}
                        </span>
                        <p className="text-gray-700 leading-relaxed">
                          {woman.description}
                        </p>
                        {woman.impactQuotes && (
                          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                            <p className="text-purple-700 italic">
                              "{woman.impactQuotes[0]}"
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedWoman && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedWoman(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedWoman(null)}
                  className="absolute right-0 top-0 text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
                <motion.img
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  src={selectedWoman.image}
                  alt={selectedWoman.name}
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-3xl font-bold text-purple-900 mb-2">
                    {selectedWoman.name}
                  </h2>
                  <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                    {selectedWoman.role}
                  </span>

                  {selectedWoman.impactQuotes && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-6 p-4 bg-purple-50 rounded-xl"
                    >
                      <blockquote className="text-xl italic text-purple-800">
                        "{selectedWoman.impactQuotes[0]}"
                      </blockquote>
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedWoman.longDescription}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-purple-900 mb-3">
                        Réalisations Marquantes
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {selectedWoman.achievements.map(
                          (achievement, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + index * 0.1 }}
                              className="text-gray-700"
                            >
                              {achievement}
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-900 mb-3">
                        Parcours de Vie
                      </h3>
                      <div className="bg-purple-50 rounded-xl p-4">
                        <ul className="list-none space-y-2">
                          {selectedWoman.bibliography.map((event, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              className="text-gray-700 flex items-start gap-2"
                            >
                              <span className="text-purple-500 mt-1">•</span>
                              <span>{event}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default TemoignagePage;
