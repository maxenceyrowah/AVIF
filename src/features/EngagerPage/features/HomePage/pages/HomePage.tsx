import Footer from "@/shared/components/Footer";
import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

const HomePage = () => {
  const partners = [
    "mers.jpg",
    "LyTech.jpg",
    "gomy.jpg",
    "daip.png",
    "e2c.png",
    "celia2.gif",
  ];

  return (
    <>
      <section className="min-h-screen pt-16 px-4 md:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center"
          >
            {/* Rest of the existing grid content */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="row-span-3 p-3 sm:p-4 md:p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 order-2 sm:order-1"
            >
              <img
                className="w-full h-full object-cover rounded-lg"
                src="/assets/images/pow.avif"
                alt=""
              />
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.6 }}
              className="col-span-1 sm:col-span-2 order-1 sm:order-2"
            >
              <motion.h1
                whileHover={{ scale: 1.01 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold m-2 sm:m-4 md:m-6 bg-white rounded-lg p-3 md:p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                "Des hommes solidaires pour les droits des femmes."
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl md:text-xl py-3 sm:py-4 md:py-6 rounded-lg"
              >
                "Parce que l'égalité n'a pas de genre, nous agissons ensemble."
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-700 md:text-xl font-semibold py-3 sm:py-4 md:py-6 rounded-lg"
              >
                - Luttons côte à côte pour un monde où les droits des femmes
                sont respectés.
              </motion.p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-1 sm:col-span-2 row-span-2 rounded-lg hover:shadow-xl transition-shadow duration-300 order-3"
            >
              <img
                className="w-full h-full object-contain p-3 sm:p-4 md:p-6 rounded-lg"
                src="/assets/images/coc.jpg"
                alt=""
              />
            </motion.div>
          </motion.div>

          {/* <!-- Témoignages --> */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="swiper-slide bg-gray-300 p-4 sm:p-5 md:p-6 rounded-lg shadow-lg text-center mt-6 md:mt-8 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4">Nos Témoignages</h2>
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-50 md:w-50 rounded-full mx-auto mb-3 md:mb-4"
              src="/assets/images/denis.jpeg"
              alt=""
            />
            <p className="text-base sm:text-lg font-semibold mb-2">Denis Mukwege</p>
            <span className="text-sm sm:text-base md:text-lg text-gray-700 block leading-relaxed">
              Un Héros des Droits des Femmes. Denis Mukwege est un gynécologue
              congolais et un militant infatigable pour les droits des femmes,
              mondialement reconnu pour son combat contre les violences
              sexuelles utilisées comme armes de guerre. Son travail lui vaut de
              nombreuses distinctions, dont le Prix Nobel de la Paix en 2018,
              qu'il reçoit aux côtés de la militante yazidie Nadia Murad. Il
              utilise sa notoriété pour dénoncer l'impunité des criminels et
              réclamer justice pour les victimes.
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="swiper-slide bg-white p-4 sm:p-5 md:p-6 rounded-lg shadow-lg text-center mt-6 md:mt-8 hover:shadow-xl transition-shadow"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-50 md:w-50 rounded-full mx-auto mb-3 md:mb-4"
              src="/assets/images/mbembe.jpeg"
              alt=""
            />
            <p className="text-base sm:text-lg font-semibold mb-2">Achille Mbembe</p>
            <span className="text-sm sm:text-base md:text-lg text-gray-700 block leading-relaxed">
              Né au Cameroun en 1957, Achille Mbembe a étudié en France avant
              d'enseigner aux États-Unis et en Afrique du Sud. Il est
              aujourd'hui une figure intellectuelle influente sur les questions
              de démocratie, de race et de globalisation. À travers ses
              recherches, il contribue indirectement à la réflexion sur les
              droits des femmes en liant leur émancipation à des dynamiques plus
              vastes de libération et de justice sociale.
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="swiper-slide bg-gray-300 p-4 sm:p-5 md:p-6 rounded-lg shadow-lg text-center mt-6 md:mt-8 hover:shadow-xl transition-shadow"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-50 md:w-50 rounded-full mx-auto mb-3 md:mb-4"
              src="/assets/images/gilbert.jpeg"
              alt=""
            />
            <p className="text-base sm:text-lg font-semibold mb-2">Gilbert Houngbo</p>
            <span className="text-sm sm:text-base md:text-lg text-gray-700 block leading-relaxed">
              À travers ses fonctions à l'OIT et au Programme des Nations Unies
              pour le Développement (PNUD), il œuvre pour l'inclusion économique
              des femmes, la lutte contre les discriminations au travail et la
              promotion de conditions de travail décentes. Il plaide pour
              l'égalité salariale, la lutte contre le harcèlement et le
              renforcement des droits sociaux des travailleuses, notamment dans
              les pays en développement.
            </span>
          </motion.div>

          {/* <!-- Partenaires --> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="relative w-full bg-yellow-150 py-6 sm:py-7 md:py-8 mt-6 md:mt-8"
          >
            <h2 className="text-center text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Nos Partenaires
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto px-2 sm:px-3 md:px-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, shadow: "lg" }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    className="w-full h-full object-contain"
                    src={`/assets/images/${partner}`}
                    alt={`Partner ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
