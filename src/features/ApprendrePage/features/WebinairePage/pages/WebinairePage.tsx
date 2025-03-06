import { motion } from "motion/react";
import Footer from "@/shared/components/Footer";

const WebinairePage = () => {
  const fadeInUp = {
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
    <>
      <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:pt-[2.5rem] pt-4"
        >
          <motion.header
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-white to-primary text-secondary text-center py-6 shadow-lg"
          >
            <motion.h1
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-4xl font-bold"
            >
              Webinaires & Conférences
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="text-lg"
            >
              Découvrez nos événements inspirants
            </motion.p>
          </motion.header>

          <motion.section
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-7xl mx-auto relative z-10 my-5"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-semibold text-left text-black relative"
            >
              Événements à venir
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "16.666667%" }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 bottom-[-8px] h-1 bg-yellow-400"
              />
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mt-6"
            >
              {[
                {
                  img: "/assets/images/nadinezoro.jpeg",
                  title: "Conférence Leadership Féminin",
                  date: "Le 15 mars 2025 - Un panel avec des leaders inspirantes.",
                },
                {
                  img: "/assets/images/naboufall.jpeg",
                  title: "Webinaire Tech & Innovation",
                  date: "Le 22 avril 2025 - Découvrez l'impact des femmes dans la Tech.",
                },
                {
                  img: "/assets/images/raissabanhoro.jpeg",
                  title: "Conférence Inclusion & Égalité",
                  date: "Le 10 mai 2025 - Un échange sur l'égalité professionnelle.",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                >
                  <motion.img
                    src={event.img}
                    alt="Événement"
                    className="w-full rounded-lg"
                  />
                  <h3 className="text-xl font-bold mt-4 text-yellow-500 hover:text-yellow-700">
                    <a href="#">{event.title}</a>
                  </h3>
                  <p className="text-gray-700 mt-2">{event.date}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial="initial"
            animate="animate"
            className="max-w-7xl mx-auto relative z-10 my-5"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-semibold text-left text-black relative"
            >
              Événements passés
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "16.666667%" }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 bottom-[-8px] h-1 bg-yellow-400"
              />
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 mt-6"
            >
              {[
                {
                  img: "/assets/images/eulanie.jpeg",
                  title: "Journée des Droits de la Femme 2024",
                  description:
                    "Une célébration avec des discussions et témoignages inspirants.",
                },
                {
                  img: "/assets/images/edit.jpeg",
                  title: "Webinaire sur l'Autonomisation",
                  description:
                    "Un moment d'échange avec des femmes influentes du secteur.",
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                >
                  <motion.img
                    src={event.img}
                    alt="Événement passé"
                    className="w-full rounded-lg"
                  />
                  <h3 className="text-xl font-bold mt-4 text-yellow-500">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 text-center py-12 bg-primary text-secondary p-6 rounded-lg shadow-lg max-w-7xl mx-auto relative z-10 my-10"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-semibold">
              Ne manquez aucun événement !
            </motion.h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-secondary text-primary font-bold text-lg rounded-lg hover:bg-gray-900"
            >
              S'inscrire
            </motion.button>
          </motion.section>
        </motion.section>

        <Footer />
      </section>
    </>
  );
};

export default WebinairePage;
