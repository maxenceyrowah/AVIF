import Footer from "@/shared/components/Footer";

const headingStyles = "text-4xl font-bold text-black mb-8 pt-8 text-center";
const cardStyles = "bg-white p-6 rounded-lg shadow-md";
const emergencyContacts = [
  { title: "Police", number: "17" },
  { title: "Pompiers", number: "18" },
  { title: "Urgences par SMS", number: "114" },
  { title: "Violences Femmes Info", number: "3919" },
];

const OutilsPage = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50">
      {/* Hero Section */}
      <section>
        <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
          <img
            src="/assets/images/solidarite.jpg"
            alt="Bannière inspirante"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

          <div className="relative z-20 px-4">
            <h1 className="text-yellow-400 text-5xl md:text-6xl font-bold mb-4">
              Agir et Défendre : Ensemble pour les Droits des Femmes
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Chaque action compte. Découvrez comment vous pouvez faire la
              différence dès aujourd'hui !
            </p>
            <a
              href="#agir"
              className="inline-block bg-yellow-400 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300"
            >
              Je veux agir
            </a>
          </div>

          <div className="absolute bottom-20 left-0 right-0 text-center z-20 hidden lg:block">
            <blockquote className="text-lg italic">
              "La liberté ne s'octroie pas, elle se conquiert." — Simone de
              Beauvoir
            </blockquote>
          </div>
        </div>
      </section>

      {/* Rights Defense Section */}
      <div id="defense_des_droits">
        <section className="container mx-auto px-4 py-8 space-y-8">
          <section className="text-center">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Pourquoi défendre les droits des femmes ?
            </h2>
            <p className="text-black text-lg max-w-2xl mx-auto font-bold">
              Les inégalités persistent et les violences sont encore trop
              fréquentes. Nous avons tous un rôle à jouer pour construire une
              société plus juste et équitable.
            </p>
          </section>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                image: "abus.jpg",
                title: "1 Sur 3",
                text: "Dans le monde, 1 femme sur 3 a été victime de violence physique ou sexuelle...",
              },
              {
                image: "jeune depute.jpg",
                title: "Pour un avenir égalitaire",
                text: "Seulement 25% des parlementaires dans le monde sont des femmes...",
              },
              {
                image: "zero violence.jpg",
                title: "Non à la Violence",
                text: "Nous ne devons tolérer aucune forme de violence...",
              },
            ].map((stat, index) => (
              <div key={index} className={cardStyles}>
                <div>
                  <img
                    src={`/assets/images/${stat.image}`}
                    alt={stat.title}
                    className="w-[95%] h-90 rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-4xl font-bold text-black mt-4">
                  {stat.title}
                </h3>
                <p className="text-black mt-4">{stat.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-yellow-400">Comment Agir ?</h2>
        <p className="text-xl text-black mt-4 font-bold">
          Découvrez des actions concrètes pour soutenir la cause des droits des
          femmes.
        </p>
      </div>

      {/* Emergency Contact Section */}
      <section className="my-5">
        <div className="w-[75%] mx-auto">
          <h2 className={headingStyles}>Protéger et Aider</h2>

          <div className="grid grid-cols-1 gap-6">
            <div className={cardStyles}>
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                Numéros d'urgence et contacts utiles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md flex items-center"
                  >
                    <span className="text-4xl text-yellow-500 mr-4">
                      &#x1F4DE;
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-black">
                        {contact.title}
                      </h3>
                      <p className="text-gray-700 text-lg font-semibold">
                        <strong>{contact.number}</strong>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default OutilsPage;
