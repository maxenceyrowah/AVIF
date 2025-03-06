import Footer from "@/shared/components/Footer";
import { motion } from "motion/react";

const VideoPage = () => {
  const videosData = [
    {
      title:
        "Découvrez l'histoire d'une femme entrepreneure qui a transformé sa passion en succès.",
      url: "https://www.youtube.com/embed/xVKzlpaZGZc?si=VxxX8j9UiBNcVXW8",
    },
    {
      title:
        "Une icône de leadership féminin partage son parcours et ses défis sur le chemin de la réussite.",
      url: "https://www.youtube.com/embed/PIKLSPVhBHk?si=6ZeF0Qf9LdIupmK2",
    },
    {
      title: `Regardez le parcours inspirant d'une icône féminine qui a marqué son domaine à jamais.`,
      url: "https://www.youtube.com/embed/XU65YDjwyPw?si=z51pKk-KUEMOiCLs",
    },
    {
      title:
        "Un documentaire inspirant sur une femme ayant eu un impact majeur dans sa communauté.",
      url: "https://www.youtube.com/embed/GLOz6a-iulA?si=A95mIrY5F26bYgv_",
    },
  ];

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 py-20 px-4 md:px-8 relative overflow-hidden">
        <section>
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto relative z-10"
          >
            <div className="px-4 sm:px-6 lg:px-8 py-7">
              <motion.div variants={itemVariants} className="mb-16">
                <h1 className="mb-8 text-4xl font-bold text-gray-900">
                  Inspirez-vous de ces parcours
                </h1>
                <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videosData.map((video, index) => (
                  <div key={index} className="mb-8">
                    <iframe
                      className="w-full h-64 sm:h-72 md:h-80 lg:h-96"
                      src={video.url + "?autoplay=0&fullscreen=1"}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <p className="text-lg text-gray-600 mt-3">{video.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>
      </section>
      <Footer />
    </>
  );
};
export default VideoPage;
