import { motion } from "motion/react";
import { useState } from "react";

import Footer from "@/shared/components/Footer";

const DroitsPage = () => {
  const [activeTab, setActiveTab] = useState("comprendre");

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="pt-12">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Navigation tabs */}
        <div className="bg-white shadow-md sticky top-3 z-10">
          <div className="container mx-auto px-4">
            <div className="flex overflow-x-auto py-4 space-x-4">
              <button
                onClick={() => setActiveTab("comprendre")}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === "comprendre"
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-primary hover:bg-secondary"
                }`}
              >
                Comprendre les droits
              </button>

              <button
                onClick={() => setActiveTab("liste")}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === "liste"
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-primary hover:bg-secondary"
                }`}
              >
                Liste des droits
              </button>

              <button
                onClick={() => setActiveTab("international")}
                className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === "international"
                    ? "bg-primary text-secondary"
                    : "bg-secondary text-primary hover:bg-secondary"
                }`}
              >
                Droit international
              </button>
            </div>
          </div>
        </div>

        {/* First section - Understanding women's rights */}
        {activeTab === "comprendre" && (
          <motion.section
            className="bg-primary py-12"
            id="droit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <motion.h1
                className="text-center font-bold py-3 text-4xl bg-gradient-to-r from-secondary to-secondary text-transparent bg-clip-text mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                COMPRENDRE LES DROITS DE LA FEMME
              </motion.h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <motion.article className="mb-8" variants={fadeIn}>
                    <h2 className="text-2xl font-bold mb-4 text-secondary">
                      Qu'est-ce que les droits de la femme?
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Les droits de la femme sont un ensemble de libertés et de
                      droits qui s'exercent sur la femme, seules et
                      exclusivement. Ces droits sont assurés par la loi de
                      l'Union européenne en matière de femmes et de genres (UE
                      LFG).
                    </p>
                  </motion.article>

                  <motion.article className="mb-8" variants={fadeIn}>
                    <h2 className="text-2xl font-bold mb-4 text-secondary">
                      Les droits des femmes sont des droits humains !
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      Toute personne a droit au respect de ses droits humains.
                      Ces droits comprennent le droit de vivre libre de toute
                      violence et discrimination, le droit au meilleur état de
                      santé physique et mentale susceptible d'être atteint, le
                      droit à l'éducation, le droit à la propriété, le droit de
                      voter et le droit à un salaire égal.
                    </p>
                  </motion.article>

                  <motion.article variants={fadeIn}>
                    <h2 className="text-2xl font-bold mb-4 text-secondary">
                      DROITS DES FEMMES ET DROIT INTERNATIONAL
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      La Convention sur l'élimination de toutes les formes de
                      discrimination à l'égard des femmes (1979) est un traité
                      international clé pour la lutte contre la discrimination
                      liée au genre et fournit des protections spécifiques des
                      droits des femmes. Ce texte établit une déclaration
                      internationale des droits des femmes et des filles et
                      définit les obligations des États pour ce qui est de
                      veiller à ce que les intéressées puissent jouir de ces
                      droits. À ce jour, 180 pays l'ont ratifiée.
                    </p>
                    <motion.p
                      className="mt-4 text-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <a
                        href="#"
                        onClick={() => setActiveTab("international")}
                        className="inline-block px-6 py-2 bg-secondary text-white rounded-lg hover:bg-primary hover:text-secondary transition-colors"
                      >
                        En savoir plus
                      </a>
                    </motion.p>
                  </motion.article>
                </motion.div>

                <motion.div
                  className="flex justify-center items-center"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="rounded-xl overflow-hidden shadow-xl lg:w-[50rem]">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/NF6U_Nqvb60"
                      title="Afrique • L'Afrique et l'égalité des Droits des Femmes"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Second section - List of women's rights */}
        {activeTab === "liste" && (
          <motion.section
            className="bg-primary py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <motion.h1
                className="text-center font-bold py-3 text-4xl bg-gradient-to-r from-secondary to-secondary  text-transparent bg-clip-text mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                QUELQUES DROITS FONDAMENTAUX DES FEMMES
              </motion.h1>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Droit de vote et de participation politique",
                    content:
                      "Pendant le 19e siècle et au début du 20e siècle, des personnes ont commencé à se mobiliser en faveur du droit de vote des femmes. En 1893, la Nouvelle-Zélande est devenue le premier pays à accorder aux femmes le droit de vote au niveau national.",
                    icon: "🗳️",
                  },
                  {
                    title: "Droit à l'éducation",
                    content:
                      "Les femmes ont le droit d'accéder à l'éducation, que ce soit dans les écoles, les universités ou d'autres formes de formation. Ce droit est fondamental pour l'autonomie et le développement personnel.",
                    icon: "📚",
                  },
                  {
                    title: "Droit à la liberté de choisir son mariage",
                    content:
                      "Les femmes ont le droit de choisir librement leur conjoint et de décider du nombre et de l'espacement des enfants qu'elles souhaitent avoir.",
                    icon: "💍",
                  },
                  {
                    title: "Droit de circuler librement",
                    content:
                      "Le droit de circuler librement est le droit de se déplacer à sa guise, non seulement dans son pays de résidence, mais également dans d'autres. De nombreuses femmes rencontrent de réels problèmes dans ce domaine.",
                    icon: "🌍",
                  },
                  {
                    title: "Droit à la protection contre la violence",
                    content:
                      "Les femmes ont le droit d'être protégées contre toutes les formes de violence, qu'il s'agisse de violence domestique, de harcèlement sexuel, ou de violences fondées sur le sexe.",
                    icon: "🛡️",
                  },
                  {
                    title: "Droits sexuels et reproductifs",
                    content:
                      "Toutes les femmes et les filles ont des droits sexuels et reproductifs. Cela signifie qu'elles ont le droit à un accès équitable aux services de santé, notamment à la contraception et à un avortement sûr.",
                    icon: "🩺",
                  },
                ].map((right, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="p-6">
                      <div className="text-4xl mb-4">{right.icon}</div>
                      <h2 className="text-xl font-bold mb-3 text-secondary">
                        {right.title}
                      </h2>
                      <p className="text-gray-700">{right.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {/* Third section - International rights */}
        {activeTab === "international" && (
          <motion.section
            className="bg-primary py-12"
            id="international"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="container mx-auto px-4">
              <motion.h1
                className="text-center font-bold py-3 text-4xl bg-gradient-to-r from-secondary to-secondary  text-transparent bg-clip-text mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                DROITS DES FEMMES ET DROIT INTERNATIONAL
              </motion.h1>

              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-secondary">
                  Conventions et traités internationaux
                </h2>

                <div className="space-y-6">
                  <motion.div
                    className="border-l-4 border-secondary pl-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Convention sur l'élimination de toutes les formes de
                      discrimination à l'égard des femmes (CEDAW, 1979)
                    </h3>
                    <p className="text-gray-700">
                      Souvent décrite comme une déclaration internationale des
                      droits des femmes, elle définit ce qui constitue une
                      discrimination à l'égard des femmes et établit un
                      programme d'action national pour y mettre fin.
                    </p>
                  </motion.div>

                  <motion.div
                    className="border-l-4 border-secondary pl-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Déclaration et Programme d'action de Beijing (1995)
                    </h3>
                    <p className="text-gray-700">
                      Adoptés lors de la quatrième Conférence mondiale sur les
                      femmes, ils constituent un programme pour l'autonomisation
                      des femmes et sont considérés comme des documents
                      politiques mondiaux clés sur l'égalité des sexes.
                    </p>
                  </motion.div>

                  <motion.div
                    className="border-l-4 border-secondary pl-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Convention du Conseil de l'Europe sur la prévention et la
                      lutte contre la violence à l'égard des femmes (Convention
                      d'Istanbul, 2011)
                    </h3>
                    <p className="text-gray-700">
                      Premier instrument juridiquement contraignant en Europe
                      qui crée un cadre juridique complet pour protéger les
                      femmes contre toutes les formes de violence.
                    </p>
                  </motion.div>

                  <motion.div
                    className="border-l-4 border-secondary pl-4"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      Objectifs de développement durable (ODD) des Nations Unies
                    </h3>
                    <p className="text-gray-700">
                      L'ODD 5 vise spécifiquement à "parvenir à l'égalité des
                      sexes et autonomiser toutes les femmes et les filles"
                      d'ici 2030, reconnaissant que l'égalité des sexes est non
                      seulement un droit fondamental, mais aussi un fondement
                      nécessaire pour un monde pacifique, prospère et durable.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="mt-8 bg-primary p-6 rounded-lg border border-purple-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <h3 className="text-xl font-semibold mb-3 text-secondary">
                    Importance du droit international
                  </h3>
                  <p className="text-gray-700">
                    Ces instruments internationaux fournissent un cadre
                    juridique et politique essentiel pour promouvoir et protéger
                    les droits des femmes à l'échelle mondiale. Ils établissent
                    des normes que les pays signataires s'engagent à respecter
                    et offrent des mécanismes de suivi et de responsabilisation.
                  </p>
                  <p className="text-gray-700 mt-3">
                    Cependant, malgré ces avancées juridiques, des écarts
                    importants subsistent entre les engagements pris et leur
                    mise en œuvre effective. Le travail de plaidoyer, de
                    sensibilisation et d'action collective reste crucial pour
                    transformer ces promesses en réalité concrète pour toutes
                    les femmes.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </motion.main>

      {/* Call to action section */}
      <motion.section
        className="bg-gradient-to-r from-secondary to-secondary py-12 text-primary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Ensemble, défendons les droits des femmes
          </motion.h2>

          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            La connaissance est le premier pas vers l'action. Informez-vous,
            partagez et engagez-vous pour un monde plus équitable.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/defends/outils"
              className="px-8 py-3 bg-white text-secondary font-bold rounded-full hover:bg-gray-100 transition-colors"
            >
              Découvrir nos outils
            </a>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </section>
  );
};

export default DroitsPage;
