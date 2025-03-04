import { ChevronRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      title: "Nouvelle loi sur les violences conjugales adoptée",
      date: "15 juin 2025",
      image:
        "https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Rapport sur les droits reproductifs dans le monde",
      date: "3 mai 2025",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Manifestation mondiale pour l'égalité salariale",
      date: "8 mars 2025",
      image:
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
          <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Restez informé·e des dernières avancées et défis dans la lutte pour
            les droits des femmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              <p className="text-yellow-500 font-bold mb-2">{item.date}</p>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center font-bold text-black hover:text-yellow-500 transition-colors text-lg"
          >
            VOIR TOUTES LES ACTUALITÉS <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
