import { motion } from "framer-motion";

const IssuesComponent = () => {
  const issues = [
    {
      title: "Violence basée sur le genre",
      description:
        "Nous travaillons pour mettre fin à la violence contre les femmes et les filles sous toutes ses formes.",
      image: "assets/images/stop-violence.jpg",
    },
    {
      title: "Droits sexuels et reproductifs",
      description:
        "Nous défendons le droit des femmes à prendre leurs propres décisions concernant leur corps et leur santé.",
      image: "assets/images/body-choice.jpg",
    },
    {
      title: "Participation politique",
      description:
        "Nous œuvrons pour une représentation égale des femmes dans tous les domaines de prise de décision.",
      image: "assets/images/politiques.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 font-montserrat">
            Enjeux Prioritaires
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Nous nous concentrons sur les problèmes les plus urgents affectant
            les droits des femmes dans le monde entier.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {issues.map((issue, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 border-l-4 border-secondary">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-500 transition-colors">
                  {issue.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {issue.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IssuesComponent;
