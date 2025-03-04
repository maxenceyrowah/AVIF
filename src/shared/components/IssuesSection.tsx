import { ChevronRight } from "lucide-react";

const IssuesComponent = () => {
  const issues = [
    {
      title: "Violence basée sur le genre",
      description:
        "Nous travaillons pour mettre fin à la violence contre les femmes et les filles sous toutes ses formes.",
      image:
        "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Droits sexuels et reproductifs",
      description:
        "Nous défendons le droit des femmes à prendre leurs propres décisions concernant leur corps et leur santé.",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Participation politique",
      description:
        "Nous œuvrons pour une représentation égale des femmes dans tous les domaines de prise de décision.",
      image:
        "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enjeux Prioritaires
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Nous nous concentrons sur les problèmes les plus urgents affectant
            les droits des femmes dans le monde entier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {issues.map((issue, index) => (
            <div key={index} className="group overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={issue.image}
                  alt={issue.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="p-6 border-l-4 border-yellow-400">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {issue.title}
                </h3>
                <p className="text-gray-600 mb-4">{issue.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-black hover:text-yellow-500 transition-colors"
                >
                  EN SAVOIR PLUS <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default IssuesComponent;
