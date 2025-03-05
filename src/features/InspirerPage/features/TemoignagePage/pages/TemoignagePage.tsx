import { motion } from "motion/react";
import { useState } from "react";

import { INSPIRING_WOMEN } from "@/shared/constantes";
import { IWomenInspiration } from "@/shared/models";
import Footer from "@components/Footer";

const TemoignagePage = () => {
  const [selectedWoman, setSelectedWoman] = useState<IWomenInspiration | null>(
    null
  );

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 backdrop-blur-sm" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <h1 className="text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-200">
            Témoignages et Portraits de Femmes Inspirantes
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {INSPIRING_WOMEN.map((woman, index) => (
              <motion.div
                key={woman.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedWoman(woman)}
              >
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img
                    src={woman.image}
                    alt={woman.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {selectedWoman && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedWoman(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
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
              </button>
              <img
                src={selectedWoman.image}
                alt={selectedWoman.name}
                className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
              />
              <h2 className="text-3xl font-bold text-purple-900 mb-2">
                {selectedWoman.name}
              </h2>
              <span className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                {selectedWoman.role}
              </span>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedWoman.longDescription}
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  Key Achievements
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedWoman.achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-900 mb-3">
                  Bibliography
                </h3>
                <div className="bg-purple-50 rounded-xl p-4">
                  <ul className="list-none space-y-2">
                    {selectedWoman.bibliography.map((event, index) => (
                      <li
                        key={index}
                        className="text-gray-700 flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </>
  );
};

export default TemoignagePage;
