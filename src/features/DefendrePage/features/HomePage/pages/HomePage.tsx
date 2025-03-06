import { motion } from "motion/react";
import { Link } from "react-router-dom";

import Footer from "@/shared/components/Footer";

const HomePage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section>
      {/* <!-- Hero Section avec disposition en 2 colonnes --> */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[20rem] flex items-center bg-cover bg-center px-6 lg:px-16"
        style={{ backgroundImage: "url('/assets/images/thomas.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* <!-- Titre à gauche --> */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white bg-opacity-20 p-6 rounded-lg m-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-yellow-400 text-transparent bg-clip-text">
              Ensemble pour l'égalité <br /> et la dignité des femmes
            </h1>
          </motion.div>
        </div>
      </motion.header>

      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto py-16 px-6"
      >
        {/* <!-- Ligne + Titre --> */}
        <motion.div
          variants={fadeIn}
          className="border-t-4 border-black w-12 mb-4"
        ></motion.div>
        <motion.h2 variants={fadeIn} className="text-3xl font-bold">
          L'égalité des droits : un enjeu fondamental pour notre société
        </motion.h2>

        {/* <!-- Contenu --> */}
        <motion.p variants={fadeIn} className="mt-4 text-lg">
          L'égalité des droits entre les femmes et les hommes représente un
          pilier essentiel de toute société démocratique et équitable. Cette
          quête transcende les frontières et les cultures, touchant aux
          fondements mêmes de la justice sociale et du progrès humain. Pourtant,{" "}
          <strong className="font-bold">des millions de femmes</strong>{" "}
          continuent de faire face à des obstacles systémiques qui limitent leur
          potentiel et leur épanouissement.
        </motion.p>

        <motion.p variants={fadeIn} className="mt-4 text-lg">
          La défense des droits des femmes est{" "}
          <strong className="font-bold">une responsabilité collective</strong>{" "}
          qui nécessite l'engagement de tous les acteurs de la société. Notre
          vision est celle d'un monde où chaque femme peut s'épanouir
          pleinement, exercer ses droits fondamentaux et contribuer à la société
          selon ses aspirations. Les inégalités persistantes et les violences
          basées sur le genre ont des répercussions profondes qui affectent non
          seulement les victimes directes mais aussi les générations futures.
        </motion.p>

        <motion.p variants={fadeIn} className="mt-4 text-lg">
          L'autonomisation des femmes est la clé pour briser
          <strong className="font-bold"> le cycle des inégalités</strong> et
          construire une société plus juste et prospère pour tous.
        </motion.p>
      </motion.section>

      {/* <!-- Deuxième section --> */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto py-16 px-6"
      >
        {/* <!-- Ligne + Titre --> */}
        <motion.div
          variants={fadeIn}
          className="border-t-4 border-black w-12 mb-4"
        ></motion.div>
        <motion.h2 variants={fadeIn} className="text-3xl font-bold">
          Comprendre et agir contre les discriminations
        </motion.h2>

        {/* <!-- Contenu --> */}
        <motion.p variants={fadeIn} className="mt-4 text-lg">
          Les discriminations envers les femmes se manifestent sous de multiples
          formes, certaines évidentes, d'autres plus insidieuses. De l'inégalité
          salariale aux violences domestiques, en passant par le harcèlement et
          les stéréotypes de genre, ces injustices persistent dans toutes les
          sphères de la société.
        </motion.p>

        <motion.p variants={fadeIn} className="mt-4 text-lg">
          Dans notre monde contemporain,{" "}
          <span className="text-orange-500 font-semibold">
            l'accès à l'éducation, à l'emploi et aux postes de décision
          </span>{" "}
          reste un défi majeur pour de nombreuses femmes, perpétuant ainsi les
          inégalités structurelles.
        </motion.p>
      </motion.section>

      {/* Section des ressources clés */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-100 py-16 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeIn}
            className="border-t-4 border-black w-12 mb-4 mx-auto"
          ></motion.div>
          <motion.h2
            variants={fadeIn}
            className="text-3xl font-bold text-center mb-12"
          >
            Ressources essentielles pour défendre vos droits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-40 bg-yellow-400 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">
                  Comprendre mes droits
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Découvrez les droits fondamentaux des femmes et comment ils
                  s'appliquent dans votre quotidien.
                </p>
                <Link
                  to="/defendres/comprendre-mes-droits"
                  className="inline-block w-full text-center px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
                >
                  Explorer
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-40 bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">Lois et conventions</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Consultez les textes juridiques nationaux et internationaux
                  qui protègent les droits des femmes.
                </p>
                <Link
                  to="/defendres/lois-et-conventions"
                  className="inline-block w-full text-center px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
                >
                  Consulter
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="h-40 bg-purple-600 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">Outils pour agir</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Accédez à des ressources pratiques pour défendre vos droits et
                  soutenir d'autres femmes.
                </p>
                <Link
                  to="/defendres/outils-pour-agir"
                  className="inline-block w-full text-center px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
                >
                  Découvrir
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* <!-- Section principale --> */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white py-16 px-6"
      >
        <motion.div
          transition={{ type: "spring", stiffness: 300 }}
          className="max-w-4xl mx-auto border-2 border-black p-8 shadow-lg bg-white"
        >
          {/* <!-- Ligne + Titre --> */}
          <motion.div
            variants={fadeIn}
            className="border-t-4 border-black w-12 mb-4"
          ></motion.div>
          <motion.h2 variants={fadeIn} className="text-3xl font-bold">
            Notre engagement
          </motion.h2>

          {/* <!-- Contenu --> */}
          <motion.p variants={fadeIn} className="mt-4">
            La voix des femmes mérite d'être entendue, amplifiée et respectée.
          </motion.p>

          <motion.p variants={fadeIn} className="mt-4">
            Depuis sa création, AVIF s'est imposée comme une force motrice dans
            la lutte pour les droits des femmes, intervenant là où les besoins
            sont les plus criants et où notre impact peut être le plus
            significatif.
          </motion.p>

          <motion.p variants={fadeIn} className="mt-4">
            Notre approche est holistique : nous ne nous contentons pas
            d'apporter une aide immédiate, nous travaillons à transformer les
            systèmes et les mentalités qui perpétuent les inégalités. C'est en
            s'attaquant aux racines profondes des discriminations que nous
            pourrons créer un changement durable.
          </motion.p>

          <motion.p variants={fadeIn} className="mt-4 font-semibold">
            Ensemble, nous pouvons construire un avenir plus équitable.
          </motion.p>

          {/* <!-- Logo (exemple texte stylisé) --> */}
          <motion.div className="mt-6 text-black font-bold text-xl">
            AGISSONS MAINTENANT POUR UN CHANGEMENT DURABLE
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </section>
  );
};
export default HomePage;
