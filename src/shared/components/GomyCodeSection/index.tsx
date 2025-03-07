import { motion } from "motion/react";

const GomyCodeSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Notre Partenaire Principal
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-64 h-64 relative"
          >
            <img
              src="/assets/images/gomy.jpg"
              alt="GOMYCODE Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">GOMYCODE</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              GOMYCODE, leader dans l'éducation technologique en Afrique, a joué
              un rôle crucial dans la réalisation de ce projet. Leur expertise
              en développement web et leur engagement envers l'innovation
              numérique ont permis de donner vie à notre vision d'une plateforme
              moderne et accessible pour la défense des droits des femmes.
            </p>
            <motion.a
              href="https://gomycode.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-8 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Découvrir GOMYCODE
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GomyCodeSection;
