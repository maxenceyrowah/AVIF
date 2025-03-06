import { motion } from "motion/react";

import Footer from "@/shared/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const MentoratPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 backdrop-blur-sm" />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative z-10"
        >
          {/* <!-- Introduction Section --> */}
          <motion.section className="container mx-auto my-4 px-4">
            <motion.div className="mb-16">
              <h1 className="mb-8 text-4xl font-bold text-gray-900">
                Mentorat pour l'autonomisation des femmes
              </h1>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-2 text-xl font-bold text-gray-700"
              >
                Inspirer, Éduquer, Autonomiser
              </motion.p>
            </motion.div>

            <motion.div className="mt-8">
              <h2 className="text-3xl font-bold text-yellow-500">Bienvenue</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Notre programme de mentorat vise à soutenir et à autonomiser les
                femmes en leur offrant des ressources, des conseils et des
                opportunités pour réussir dans leurs carrières et leurs vies
                personnelles. Rejoignez-nous pour faire partie de cette
                communauté inspirante.
              </p>
            </motion.div>
          </motion.section>

          {/* <!-- Video Section --> */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="container mx-auto my-16 px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-yellow-500 text-center mb-8"
            >
              Vidéos Inspirantes
            </motion.h2>

            <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((index) => (
                <div className="bg-white p-4 rounded-lg shadow-xl">
                  <div className="relative aspect-video">
                    <iframe
                      className="w-full h-full rounded-lg"
                      src={
                        [
                          "https://www.youtube.com/embed/ZjfHzRUsRNo?start=2&autoplay=1&mute=1",
                          "https://www.youtube.com/embed/2E_Kx-MBlEA?start=242&autoplay=1&mute=1",
                          "https://www.youtube.com/embed/hWBaYfMfjjo?autoplay=1&mute=1",
                        ][index - 1]
                      }
                      title={
                        [
                          "Education des femmes",
                          "Inspirer des faits reels",
                          "Automatisation de la femme",
                        ][index - 1]
                      }
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                  </div>
                  <p className="mt-4 text-black font-semibold text-center">
                    {
                      [
                        "Education des femmes",
                        "Inspirer des faits reels",
                        "Automatisation de la femme",
                      ][index - 1]
                    }
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* <!-- Program Details Section --> */}
          <motion.section
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="container mx-auto my-16 px-4"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-yellow-500 text-center mb-8"
            >
              Détails du Programme
            </motion.h2>
            <motion.div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Mentorat Individuel",
                  description:
                    "Recevez un soutien personnalisé de mentors expérimentés pour vous guider dans votre parcours professionnel.",
                },
                {
                  title: "Ateliers et Formations",
                  description:
                    "Participez à des ateliers interactifs et des formations pour développer vos compétences.",
                },
                {
                  title: "Réseautage",
                  description:
                    "Connectez-vous avec d'autres femmes inspirantes et élargissez votre réseau professionnel.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-6 rounded-lg shadow-xl"
                >
                  <h3 className="text-xl font-bold text-yellow-500">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default MentoratPage;
