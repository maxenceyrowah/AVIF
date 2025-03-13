import { Users, BookOpen, Trophy, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "@/shared/components/Footer";

function HomePage() {
  const navigate = useNavigate();

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

  const teamMembers = [
    {
      name: "TIMITE MARIAM",
      role: "Developpeuse full-stack",
      image: "/assets/team/IMG_8339.jpeg",
    },
    {
      name: "KONE Namemogno",
      role: "Developpeuse full-stack",
      image: "/assets/team/IMG_8336.jpeg",
    },
    {
      name: "ESSIS Sephanie",
      role: "Developpeuse full-stack",
      image: "/assets/team/ESSIS.jpg",
    },
    {
      name: "KOUASSI Edwige",
      role: "Developpeuse full-stack",
      image: "/assets/team/KOUASSI.jpg",
    },
    {
      name: "AKOU Beugre",
      role: "Developpeur full stack",
      image: "/assets/team/AKOU.jpg",
    },
    {
      name: "OROUNLA Arsène",
      role: "Developpeur full stack",
      image: "/assets/team/ASSERNE.jpg",
    },
    {
      name: "GBOKO Amara",
      role: "Developpeur full stack",
      image: "/assets/team/AMARA.jpg",
    },
    {
      name: "KOUASSI Assane",
      role: "Developpeur full stack",
      image: "/assets/team/ASSANE.jpg",
    },
    {
      name: "BENIE Sylvain",
      role: "Developpeur full stack",
      image: "/assets/team/BENIE.jpg",
    },
    {
      name: "COULIBALY ",
      role: "Developpeur full stack",
      image: "/assets/team/COULIBALY.jpg",
    },
    {
      name: "KOFFI Koffi",
      role: "Developpeur full stack",
      image: "/assets/team/KOFFI.jpg",
    },
    {
      name: "OUEDRAOGO Salam",
      role: "Developpeur full stack",
      image: "/assets/team/SALAM.jpg",
    },
    {
      name: "KOUADIO ",
      role: "Developpeur full stack",
      image: "/assets/team/KOUADIO.jpg",
    },
    {
      name: "LECIBORG",
      role: "Developpeur full stack",
      image: "/assets/team/LECIBORG.jpg",
    },
    {
      name: "KALO SOUALIO",
      role: "Developpeur full stack",
      image: "/assets/team/KALO.jpg",
    },
    {
      name: "RAJIB Rajib",
      role: "Developpeur full stack",
      image: "/assets/team/RAJIB.jpg",
    },
    {
      name: "PLACIDE Yves",
      role: "Developpeur full stack",
      image: "/assets/team/YVES.jpg",
    },
    {
      name: "TIMITE Namory",
      role: "Developpeur full stack",
      image: "/assets/team/NAMORY.jpg",
    },
    // {
    //   name: "DANDAN DAVID",
    //   role: "Developpeur full stack",
    //   image: "/assets/team/1.jpg",
    // },
  ];

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100"
      >
        {/* Hero Section */}
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden bg-gradient-to-r from-amber-400 to-orange-400 text-white py-24"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 relative text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h1 className="text-5xl font-bold mb-6">Notre Vision</h1>
            <p className="text-xl leading-relaxed italic">
            "Notre vision est de devenir des développeurs full stack compétents et innovants, capables de créer des applications web robustes et performantes. 
            Nous explorons les multiples dimensions du développement web, du front-end au back-end, en passant par la gestion des bases de données et l'intégration des API. 
            Nous aspirons à maîtriser les technologies modernes et à les utiliser pour résoudre des problèmes réels et apporter des solutions efficaces.""
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8" />
          </div>
        </motion.section>

{/* Chef de Projet */}
        <motion.section
          variants={itemVariants}
          className="container mx-auto px-4 py-16 bg-white rounded-2xl shadow-2xl p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 shadow-xl">
                <div className="flex flex-col items-center">
                <img
                 src="/assets/team/Mr.png"
                  className="w-48 h-68 object-cover relative z-10 ring-4 ring-white"
                  alt="Mr"
                />
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">YROWAH Maxence</h3>
                  <p className="text-xl text-amber-600 font-semibold mb-4">Notre instructeur & mentor</p>
                  <p className="text-gray-600 leading-relaxed text-center">
                    Avec plus de 10 ans d'expérience en développement web.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
  variants={itemVariants}
  className="container mx-auto px-4 py-16 bg-white rounded-2xl shadow-2xl p-12"
>
  <div className="text-center mb-16">
    <Users className="w-12 h-12 text-amber-500 mx-auto" />
    <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-transparent bg-clip-text">
      Notre Équipe
    </h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {teamMembers.map((member, index) => (
      <motion.div
        key={index}
        variants={itemVariants}
        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform"
      >
        <div className="relative mb-6">
          {/* Conteneur de l'image avec animation */}
          <motion.div
            className="aspect-square overflow-hidden rounded-full"
            whileHover={{ y: -10 }} // Animation pour faire monter l'image
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
        <p className="text-amber-600 font-medium mb-3">{member.role}</p>
        {/* <p className="text-gray-600 text-sm">Expert en développement web</p> */}
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