import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "@/shared/components/Footer";

const LoisPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
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

  // Sections data for better organization and maintainability
  const sections = {
    social: {
      title: "Droits Sociaux",
      description:
        "lois concernant l'égalité d'accès à l'éducation, la santé, et la protection sociale des femmes...",
      fullText: `La législation ivoirienne a évolué pour renforcer les droits sociaux des femmes, garantissant l'accès à l'éducation, aux soins de santé et à la protection sociale. Ces lois visent à éliminer les obstacles structurels qui limitent l'épanouissement des femmes dans la société.`,
      image: "/asset/social.jpeg",
      color: "from-secondary to-secondary",
    },
    economic: {
      title: "Droits Économiques",
      description: "lois concernant l'égalité salariale, l'accès à l'emploi...",
      fullText: `En Côte d'Ivoire, 75% des femmes du milieu rural contribuent activement à l'économie, mais font face à des inégalités persistantes. Les lois économiques visent à garantir l'égalité salariale, l'accès au crédit, à la propriété et aux opportunités professionnelles pour toutes les femmes.`,
      image: "/asset/economique.jpeg",
      color: "from-secondary to-secondary",
    },
    political: {
      title: "Droits Politiques",
      description: "lois concernant la participation politique des femmes...",
      fullText: `Il est essentiel de mettre en place des mesures pour renforcer la participation des femmes à la vie politique. Les lois actuelles encouragent la représentation équilibrée dans les instances décisionnelles et protègent le droit des femmes à voter et à se présenter aux élections sans discrimination.`,
      image: "/asset/politique.jpeg",
      color: "from-secondary to-secondary",
    },
  };

  // Conventions data
  const conventions = [
    {
      title:
        "Convention sur l'élimination de toutes les formes de discrimination à l'égard des femmes (CEDEF ou CEDAW)",
      description:
        "Adoptée par l'ONU en 1979 et ratifiée par la Côte d'Ivoire en 1995...",
      points: [
        "Assurer l'égalité des sexes dans la législation et l'application des lois",
        "Lutter contre les violences basées sur le genre",
        "Garantir aux femmes l'accès à l'éducation, à l'emploi et aux soins de santé",
        "Encourager la participation des femmes à la vie politique et publique",
      ],
    },
    {
      title: "Protocole de Maputo",
      description:
        "Protocole à la Charte africaine des droits de l'homme et des peuples relatif aux droits des femmes en Afrique, adopté en 2003...",
      points: [
        "Éliminer toutes les formes de discrimination et de violence à l'égard des femmes",
        "Garantir les droits à la santé et à la reproduction",
        "Protéger les droits économiques et au bien-être social",
        "Assurer la participation des femmes au processus politique et décisionnel",
      ],
    },
    {
      title: "Déclaration et Programme d'action de Beijing",
      description:
        "Adoptés lors de la quatrième Conférence mondiale sur les femmes en 1995...",
      points: [
        "Éliminer la pauvreté qui pèse sur les femmes",
        "Assurer l'égalité d'accès à l'éducation et à la formation",
        "Éliminer la violence à l'égard des femmes",
        "Promouvoir l'accès égal aux ressources économiques",
      ],
    },
  ];

  const toggleExpand = (key: string) => {
    if (expandedSection === key) {
      setExpandedSection(null);
    } else {
      setExpandedSection(key);
    }
  };

  return (
    <section className="pt-16 min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header section */}
        <motion.header
          className="relative h-[300px] flex items-center justify-center mb-16 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-secondary opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/asset/header-bg.jpg')] bg-cover bg-center mix-blend-overlay"></div>

          <motion.div
            className="relative z-10 text-center px-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Lois et Conventions
              <span className="block mt-2">
                Protégeant les Droits des Femmes
              </span>
            </h1>
            <motion.div
              className="w-32 h-1 bg-white mx-auto mt-5"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </motion.header>

        {/* Main content sections */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {Object.entries(sections).map(([key, section]) => (
            <motion.div
              key={key}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${section.color} opacity-80`}
                ></div>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${section.image})` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white px-4 text-center">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <motion.div
                  animate={{
                    height: expandedSection === key ? "auto" : "100px",
                    overflow: expandedSection === key ? "visible" : "hidden",
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 overflow-hidden"
                >
                  {expandedSection === key ? (
                    <p>{section.fullText}</p>
                  ) : (
                    <p>{section.description}</p>
                  )}
                </motion.div>

                <motion.button
                  onClick={() => toggleExpand(key)}
                  className="mt-4 px-4 py-2 bg-secondary text-primary font-bold rounded-lg hover:bg-primary hover:text-secondary transition-colors"
                >
                  {expandedSection === key ? "Voir moins" : "En savoir plus"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Conventions section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center mb-12">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold uppercase"
            >
              Conventions Internationales
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 bg-yellow-400 ml-6"
            />
          </div>

          <motion.div
            className="bg-gradient-to-r from-secondary to-secondary shadow-lg p-8 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              className="text-3xl font-bold text-white text-center mb-10"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Engagements Internationaux pour les Droits des Femmes
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {conventions.map((convention, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-white p-6 rounded-xl shadow-md"
                >
                  <h4 className="text-xl font-semibold text-black mb-4">
                    {convention.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{convention.description}</p>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    {convention.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <Footer />
    </section>
  );
};

export default LoisPage;
