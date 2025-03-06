import Footer from "@/shared/components/Footer";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-16 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto mt-10 p-6 flex flex-col items-center max-w-7xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-gray-800 tracking-tight text-center"
          >
            Développez vos compétences, construisez votre avenir
          </motion.h1>

          <motion.section
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            id="mentorat"
            className="mb-10 bg-white p-8 shadow-xl rounded-2xl lg:w-2/3 w-full text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">
              Mentorat
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Rejoignez nos experts pour un accompagnement personnalisé et
              développez vos compétences avec des mentors expérimentés.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/apprendre/mentorat")}
              className="mt-6 px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-yellow-400 hover:shadow-lg"
            >
              En savoir plus
            </motion.button>
          </motion.section>

          <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
            <motion.section
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              id="webinaires"
              className="bg-white p-8 shadow-xl rounded-2xl flex-1 text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">
                Webinaires & Conférences
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Participez à des webinaires interactifs et assistez à des
                conférences inspirantes animées par des professionnels du
                secteur.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/apprendre/webinaires-et-conferences")}
                className="mt-6 px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-yellow-400 hover:shadow-lg"
              >
                En savoir plus
              </motion.button>
            </motion.section>

            <motion.section
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              id="forum"
              className="bg-white p-8 shadow-xl rounded-2xl flex-1 text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 tracking-tight">
                Forum
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Échangez avec une communauté engagée, posez vos questions et
                partagez vos connaissances sur notre forum dynamique.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/apprendre/forums")}
                className="mt-6 px-8 py-3 bg-primary text-secondary font-semibold rounded-lg hover:bg-yellow-400 hover:shadow-lg"
              >
                En savoir plus
              </motion.button>
            </motion.section>
          </div>
        </motion.div>
      </motion.article>

      <Footer />
    </>
  );
};
export default HomePage;
