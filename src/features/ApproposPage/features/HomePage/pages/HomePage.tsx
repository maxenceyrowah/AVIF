import { Users, Trophy, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

import Footer from "@/shared/components/Footer";
import { TEAM_MEMBERS } from "@/shared/constantes";

function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-400 text-white py-12 sm:py-24"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative text-center">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 animate-bounce" />
            <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
              Notre Vision
            </h1>
            <p className="text-base sm:text-xl leading-relaxed italic max-w-4xl mx-auto">
              "Notre vision est de devenir des développeurs full stack
              compétents et innovants, capables de créer des applications web
              robustes et performantes. Nous explorons les multiples dimensions
              du développement web, du front-end au back-end, en passant par la
              gestion des bases de données et l'intégration des API. Nous
              aspirons à maîtriser les technologies modernes et à les utiliser
              pour résoudre des problèmes réels et apporter des solutions
              efficaces.""
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        </motion.section>

        {/* Notre Equipe */}
        <motion.section
          variants={itemVariants}
          className="container mx-auto px-4 py-8 sm:py-16 bg-white rounded-2xl shadow-2xl p-6 sm:p-12 mb-8"
        >
          <div className="text-center mb-8 sm:mb-16">
            <Users className="w-8 h-8 sm:w-12 sm:h-12 text-amber-500 mx-auto" />
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text">
              Notre Équipe
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform"
              >
                <div className="relative mb-4 sm:mb-6">
                  <motion.div
                    className="aspect-square overflow-hidden rounded-full w-32 sm:w-40 mx-auto"
                    whileHover={{ y: -10 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center uppercase">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-medium mb-3 text-center">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </>
  );
}

export default HomePage;
