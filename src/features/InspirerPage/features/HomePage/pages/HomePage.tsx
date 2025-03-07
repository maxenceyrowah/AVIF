import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  INSPIRING_WOMEN,
  RECENT_PODCASTS,
} from "@/shared/constantes/women-data";
import Footer from "@/shared/components/Footer";
import { Podcast, NavCardProps } from "@/shared/models";

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  const NavCard = ({ to, emoji, color, title, description }: NavCardProps) => (
    <Link to={to} className="block h-full">
      <div
        className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-${color}-500 h-full flex flex-col`}
      >
        <div className={`text-${color}-500 text-3xl mb-3`}>{emoji}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </Link>
  );

  const PodcastCard = ({ podcast }: { podcast: Podcast }) => (
    <motion.div
      key={podcast.id}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/3 h-24 sm:h-auto">
          <img
            src={podcast.image}
            alt={podcast.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5 sm:w-2/3">
          <h3 className="text-lg font-bold">{podcast.title}</h3>
          <p className="text-sm text-gray-500">
            Avec {podcast.guest} • Animé par {podcast.host} • {podcast.duration}
          </p>
          <p className="text-gray-600 mt-2 text-sm line-clamp-2">
            {podcast.description}
          </p>
          <div className="mt-3">
            <button
              className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
              onClick={() => window.open(podcast.audio, "_blank")}
              aria-label="Écouter le podcast"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <section className="min-h-screen pt-16 px-4 md:px-8 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-900 md:text-6xl mb-4">
              S'inspirer
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez des histoires inspirantes de femmes qui ont changé le
              monde et qui continuent de lutter pour l'égalité et la dignité
            </p>
          </motion.div>

          <motion.nav
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            <NavCard
              to="/inspirer/podcasts"
              emoji="🎙️"
              color="purple"
              title="Podcasts & Voix"
              description="Découvrez des conversations enrichissantes avec des femmes leaders, activistes et expertes qui partagent leurs parcours"
            />
            <NavCard
              to="/inspirer/galeries-et-photos"
              emoji="👑"
              color="pink"
              title="Galerie des Talents Inspirants"
              description="Explorez les portraits de femmes exceptionnelles qui innovent et inspirent à travers leurs réalisations"
            />
            <NavCard
              to="/inspirer/videos"
              emoji="🎬"
              color="orange"
              title="Vidéos & Stories"
              description="Plongez dans des documentaires captivants et des histoires visuelles de femmes qui changent le monde"
            />
            <NavCard
              to="/inspirer/temoignages"
              emoji="💬"
              color="teal"
              title="Témoignages & Récits"
              description="Découvrez des histoires authentiques et inspirantes de femmes qui transforment les défis en opportunités"
            />
          </motion.nav>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-lg mb-16"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Femmes Inspirantes</h2>
              <Link
                to="/inspirer/temoignages"
                className="text-secondary hover:text-purple-800 font-medium"
              >
                Voir toutes →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INSPIRING_WOMEN.slice(0, 3).map((woman) => (
                <motion.div
                  key={woman.id}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={woman.image}
                      alt={woman.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{woman.name}</h3>
                    <p className="text-secondary mb-2">{woman.role}</p>
                    <p className="text-gray-600 text-sm">{woman.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-lg mb-16"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Podcasts Récents</h2>
              <Link
                to="/inspirer/podcasts"
                className="text-secondary font-medium"
              >
                Tous les épisodes →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {RECENT_PODCASTS.map((podcast) => (
                <PodcastCard key={podcast.id} podcast={podcast} />
              ))}
            </div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-700 italic mb-4">
                "Féminité Résiliente : Récits Puissants De Femmes Qui Ont Brisé
                Les Chaînes De l'Injustice"
              </p>
              <Link
                to="/inspirer/podcasts"
                className="inline-block px-6 py-2 bg-primary text-secondary rounded-lg hover:bg-yellow-200 transition-colors"
              >
                Découvrir tous nos podcasts
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center py-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Rejoignez notre mouvement
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Ensemble, nous pouvons faire la différence. Découvrez comment vous
              pouvez contribuer à la lutte pour l'égalité et la dignité des
              femmes.
            </p>
            <Link to="/agir">
              <button className="px-8 py-3 bg-gradient-to-r from-secondary to-secondary text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all">
                Comment agir maintenant
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
