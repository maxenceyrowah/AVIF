import { motion } from "motion/react";
import Footer from "@/shared/components/Footer";
import { useRef, useState, useEffect } from "react";

const PodcastsPage = () => {
  // Add state to track currently playing audio
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  // Effect to handle pausing other audio elements when one starts playing
  useEffect(() => {
    const handlePlay = (index: number) => {
      // Pause all other audio elements
      audioRefs.current.forEach((audio, i) => {
        if (i !== index && audio) {
          audio.pause();
        }
      });
      setCurrentlyPlaying(index);
    };

    // Add event listeners to all audio elements
    audioRefs.current.forEach((audio, index) => {
      if (audio) {
        audio.addEventListener("play", () => handlePlay(index));
      }
    });

    // Cleanup event listeners
    return () => {
      audioRefs.current.forEach((audio, index) => {
        if (audio) {
          audio.removeEventListener("play", () => handlePlay(index));
        }
      });
    };
  }, []);

  const podcastData = [
    {
      name: "Euphrasie Kouassi Yao",
      image: "/assets/images/euphrasie-yaoImg2.jpg",
      quote:
        "Nous allons essayer de faire un bilan et d'évaluer l'ampleur des efforts déployés dans un pays du continent, la Côte d'Ivoire. Nous en discutons avec Euphrasie Kouassi Yao, titulaire de la chaire UNESCO sur les femmes et le pouvoir.",
      description:
        "Decouvrez l'interview d'Euphrasie Kouassi Yao sur les droits des femmes en Côte d'Ivoire.",
      audio: "/assets/audio/euphrasieyao-france-24.m4a",
      bio: "Euphrasie Yao est connue pour son engagement en faveur de l'éducation et de l'autonomisation des femmes, notamment en Afrique. Elle a travaillé sur plusieurs projets visant à améliorer l'accès à l'éducation pour les filles et à promouvoir des initiatives qui soutiennent leur développement personnel et professionnel. Elle est également impliquée dans des campagnes de sensibilisation sur les droits des femmes et des enfants. Son travail met souvent en lumière les défis auxquels font face les femmes dans divers contextes, tout en encourageant des solutions durables.",
    },
    {
      name: "TIA Philomene EPSE GLAO",
      image: "/assets/images/TiaPhilomeneImg.jpg",
      quote:
        "À seulement 17 ans, Mme Tia Glao a subi l'abus de ses droits en étant mariée à un homme beaucoup plus âgé. Écoutez son histoire marquante, celle d'une femme qui est partie de rien et a su surmonter les obstacles pour bâtir sa vie",
      audio: "/assets/audio/histoire-tia-glao.MP3",
      bio: "Tia Philomène, pionnière du transport en Côte d'Ivoire avec sa compagnie MT International, incarne la force des femmes dans des secteurs dominés par les hommes. Bien qu'elle n'ait pas eu la chance de faire des études, son parcours exceptionnel lui a valu le titre de femme leader en 2016. Elle inspire les femmes africaines à surmonter les obstacles et à investir dans l'éducation de leurs enfants. Son message est simple : « Apprenez de vos échecs et ne laissez jamais les difficultés vous freiner. » Tia prouve que la détermination peut transformer des vies et ouvrir la voie à l'égalité des sexes.",
    },
    {
      name: "Kadhy Touré",
      image: "/assets/images/kadhy-toure.jpg",
      quote:
        "L'actrice et productrice Kadhy Touré témoigne de sa résilience dans son premier livre.",
      description:
        "Kadhy Touré est actrice, productrice, présentatrice de télévision et entrepreneuse, cumulant avec brio des rôles qui témoignent de sa passion, de sa résilience et de sa créativité. Découvrez son interview par Fatimata Wane, sur le plateau de France 24.",
      audio: "/assets/audio/kadhytoure-temoignage.mp4",
      bio: "Actrice ivoirienne, traductrice de langues anglais/français et responsable communication d'entreprise, Kadhy Touré a réalisé des exploits dans le monde cinématographique à l'extérieur avant de s'installer définitivement en Côte d'Ivoire dans l'optique d'aider au développement du cinéma ivoirien.",
    },
  ];

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
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-50"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          className="text-5xl font-bold text-yellow-400 text-center mb-8 mt-4"
          variants={itemVariants}
        >
          Podcasts
        </motion.h1>
        <motion.p
          className="text-3xl text-secondary text-center mb-16 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          Féminité Résiliente : Récits Puissants De Femmes Qui Ont Brisé Les
          Chaînes De l'Injustice Et Transformé Leur Douleur En Énergie Créatrice
          Pour Réussir.
        </motion.p>

        <div className="space-y-24">
          {podcastData.map((podcast, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl"
            >
              <div
                className={`flex flex-col lg:flex-row ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  {podcast.image && (
                    <img
                      className="w-full h-[400px] object-cover"
                      src={podcast.image}
                      alt={podcast.name}
                    />
                  )}
                </motion.div>

                <motion.div
                  className="lg:w-1/2 p-8 flex flex-col justify-between space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div>
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                      {podcast.name}
                    </h2>
                    <p className="text-gray-300 italic mb-4">
                      "{podcast.quote}"
                    </p>
                    {podcast.description && (
                      <p className="text-gray-400">{podcast.description}</p>
                    )}
                  </div>

                  {podcast.audio && (
                    <div className="w-full">
                      <div className="flex items-center">
                        <audio 
                          ref={(el) => (audioRefs.current[index] = el)} 
                          controls 
                          src={podcast.audio} 
                          className="w-full"
                          onPlay={() => setCurrentlyPlaying(index)}
                        />
                        {currentlyPlaying === index && (
                          <span className="ml-3 text-green-400 animate-pulse">
                            ▶ En lecture
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {podcast.bio && (
                <motion.div
                  className="p-8 bg-gray-900 text-gray-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="leading-relaxed">{podcast.bio}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </motion.section>
  );
};

export default PodcastsPage;
