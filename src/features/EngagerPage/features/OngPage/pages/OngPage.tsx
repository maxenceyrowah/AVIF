import Footer from "@/shared/components/Footer";
import { motion } from "motion/react";

const OngPage = () => {
  return (
    <section className="min-h-screen">
      {/* Hero Section */}
      <div className="md:flex flex-row bg-[url('/assets/images/couverture.jpg')] bg-cover bg-center bg-no-repeat h-[50vh] md:h-[70vh] w-full">
        <div className="bg-black bg-opacity-40 flex items-center justify-center w-full h-full">
          <div className="header-content">
            <img
              src="/assets/images/avf.png"
              alt="logo AVIF"
              className="w-auto h-60"
            />
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-gray-800 text-white">
        <div className="text-center py-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            NOS PARTENAIRES
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-white text-gray-900 rounded-2xl p-8 flex flex-col relative shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://ci.ambafrance.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start mb-4"
              >
                <img
                  src="/assets/images/france.png"
                  alt="Logo France"
                  className="w-16 h-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700 ml-4">
                  Ambassade de France
                </h2>
              </a>

              <div className="flex flex-col space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  C'est avec l'appui de l'ambassade de France que nous avons
                  réalisé un grand rassemblement d'ONG féministes à l'occasion
                  des 16 jours d'activisme contre les violences faites aux
                  femmes et aux filles. Dix-sept organisations de la société
                  civile y ont participé et 224 personnes ont été sensibilisées
                  aux violences basées sur le genre lors de cet événement.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-white text-gray-900 rounded-2xl p-8 flex flex-col relative shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://www.engenderhealth.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start mb-4"
              >
                <img
                  src="/assets/images/Logo-Engender-768x467.webp"
                  alt="Logo EngenderHealth"
                  className="w-16 h-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700 ml-4">
                  EngenderHealth
                </h2>
              </a>

              <div className="flex flex-col space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  EngenderHealth travaille en Côte d'Ivoire depuis 2008. Cette
                  organisation internationale soutient le Ministère de la Santé
                  et les organisations locales qui travaillent pour améliorer
                  les prestations des services de santé sexuelle et reproductive
                  (SSR). EngenderHealth plaide pour un meilleur accès à des
                  soins d'avortement complets, en mettant l'accent sur
                  l'amplification de la voix des femmes et des jeunes, ainsi que
                  sur le soutien d'efforts de coordination nationaux et
                  régionaux efficaces.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-white text-gray-900 rounded-2xl p-8 flex flex-col relative shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://www.gov.uk/world/organisations/british-embassy-abidjan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start mb-4"
              >
                <img
                  src="/assets/images/UK-AID_RGB_AW-768x662.webp"
                  alt="Logo UK Aid"
                  className="w-16 h-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700 ml-4">
                  Ambassade Royaume-Uni en Côte d'Ivoire
                </h2>
              </a>

              <div className="flex flex-col space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Dans le cadre de son engagement en faveur de la défense des
                  droits des femmes, l'Ambassade Royaume-Uni à Abidjan a
                  généreusement financé l'équipement du centre de prise en
                  charge ainsi que du foyer d'hébergement. Cette action reflète
                  l'engagement de UK Aid, l'organisme britannique de
                  développement international, à soutenir les initiatives de
                  lutte contre les violences basées sur le genre dont les femmes
                  et les enfants sont les principales victimes.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-white text-gray-900 rounded-2xl p-8 flex flex-col relative shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://www.afd.fr/fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start mb-4"
              >
                <img
                  src="/assets/images/LOGO-FEA-feministes.webp"
                  alt="Logo Féministes en Action"
                  className="w-16 h-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700 ml-4">
                  Féministes en Action
                </h2>
              </a>

              <div className="flex flex-col space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Féministes en Action est une initiative qui a pour objectif de
                  donner aux organisations féministes de 30 pays des Suds des
                  moyens d'agir et de construire un monde plus respectueux des
                  droits des femmes et des filles. Dans le cadre du FSOF (le
                  Fonds de Solidarité avec les Organisations Féministes),
                  co-piloté par le Ministère de l'Europe et des Affaires
                  Étrangères (MEAE) et l'Agence Française de Développement
                  (AFD), l'initiative Féministes en Action veut proposer des
                  réponses au manque de ressources et de considération dont
                  souffrent la plupart des organisations féministes des Suds.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-white text-gray-900 rounded-2xl p-8 flex flex-col relative shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://www.lamaisondesfemmes.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start mb-4"
              >
                <img
                  src="/assets/images/Soutien-amical-LMDF-StDenis.png"
                  alt="Logo Maison des femmes"
                  className="w-16 h-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700 ml-4">
                  La Maison des femmes de Saint-Denis
                </h2>
              </a>

              <div className="flex flex-col space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  La Maison des femmes de Saint-Denis est un lieu de prise en
                  charge unique des femmes en difficulté ou victimes de
                  violences. Ce centre d'aide et d'accompagnement est une
                  solution concrète et pragmatique à des problématiques
                  spécifiques, qui touchent particulièrement les femmes en
                  situation de forte précarité et auxquelles les structures
                  médicales de plus grande envergure ne peuvent pas répondre. La
                  Maison des femmes, c'est une unité du Centre hospitalier de
                  Saint-Denis, une structure médico-sociale où des soignants et
                  des acteurs du monde de la police, de la justice et du droit,
                  mais aussi des thérapeutes, des artistes et des sportifs,
                  coopèrent pour accompagner les patientes vers la guérison et
                  l'autonomie.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="card bg-white text-gray-900 rounded-2xl p-8 flex flex-col relative shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <a
                href="https://famille.gouv.ci/mffe/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start mb-4"
              >
                <img
                  src="/assets/images/logo_mffe_3.webp"
                  alt="Logo Ministère"
                  className="w-16 h-auto"
                />
                <h2 className="text-2xl font-semibold text-gray-700 ml-4">
                  Ministère de la Femme, de la Famille et de l'Enfant
                </h2>
              </a>

              <div className="flex flex-col space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Le Ministère de la Femme, de la Famille et de l'Enfant en Côte
                  d'Ivoire est une institution gouvernementale dédiée à la
                  promotion des droits et du bien-être des femmes, des familles
                  et des enfants. Il œuvre pour l'autonomisation des femmes, la
                  protection des enfants et le renforcement des familles à
                  travers des politiques, programmes et initiatives visant à
                  réduire les inégalités de genre, lutter contre les violences
                  basées sur le genre et promouvoir l'éducation et la santé des
                  enfants.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="bg-[url('/assets/images/capture.png')] bg-cover bg-center bg-no-repeat py-20">
          <div className="bg-black bg-opacity-50 flex items-center justify-center w-full h-full py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <h2 className="text-2xl font-bold mb-6 text-white">
                Consultez la liste des organisations de défense
                <br />
                des droits des femmes en Côte d'Ivoire !
              </h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/assets/images/Cartographie_ODDF_intervenants_en_CI_AOUT_2024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white font-bold py-3 px-8 rounded-md shadow-md transition-all hover:bg-orange-600 hover:shadow-lg"
                >
                  Télécharger la liste
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default OngPage;
