import Footer from "@/shared/components/Footer";
import { useState } from "react";

const ForumsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "droit",
      label: "Droits et Législation",
      discussions: [
        {
          id: 1,
          title: "Les droits des femmes au travail",
          author: "Marie",
          replies: 15,
        },
        {
          id: 2,
          title: "Comprendre le code du travail",
          author: "Sophie",
          replies: 23,
        },
      ],
    },
    {
      id: "emploi",
      label: "Emploi et Carrière",
      discussions: [
        {
          id: 3,
          title: "Comment réussir son entretien",
          author: "Pierre",
          replies: 45,
        },
        {
          id: 4,
          title: "Négocier son salaire",
          author: "Jean",
          replies: 32,
        },
      ],
    },
    {
      id: "formation",
      label: "Formation Continue",
      discussions: [
        {
          id: 5,
          title: "Les meilleures certifications",
          author: "Claire",
          replies: 28,
        },
        {
          id: 6,
          title: "Formation en ligne vs présentiel",
          author: "Lucas",
          replies: 19,
        },
      ],
    },
    {
      id: "entreprise",
      label: "Création d'Entreprise",
      discussions: [
        {
          id: 7,
          title: "Choisir son statut juridique",
          author: "Thomas",
          replies: 37,
        },
        {
          id: 8,
          title: "Trouver des financements",
          author: "Emma",
          replies: 41,
        },
      ],
    },
  ];
  const selectedCategoryData = categories.find(
    (cat) => cat.id === selectedCategory
  );

  return (
    <>
      <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50 flex flex-col">
        <div className="flex-1 flex flex-col">
          <main className="flex-1 container mx-auto px-4 py-8 mt-10">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
              Bienvenue sur le Forum
            </h1>

            {!selectedCategory ? (
              <div className="max-w-7xl mx-auto">
                <p className="text-center text-gray-600 text-xl mb-12">
                  Choisissez une catégorie pour commencer
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className="group p-8 bg-white rounded-xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                    >
                      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                        <span className="text-xl font-semibold text-gray-800 group-hover:text-yellow-500 transition-colors">
                          {category.label}
                        </span>
                        <span className="text-gray-500">
                          {category.discussions.length} discussions
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="max-w-6xl mx-auto">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="mb-8 text-gray-600 hover:text-yellow-500 flex items-center text-lg"
                >
                  <span>← Retour aux catégories</span>
                </button>
                <h2 className="text-3xl font-bold mb-8">
                  {selectedCategoryData?.label}
                </h2>
                <div className="space-y-6">
                  {selectedCategoryData?.discussions.map((discussion) => (
                    <div
                      key={discussion.id}
                      className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    >
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {discussion.title}
                      </h3>
                      <div className="flex justify-between items-center text-gray-600">
                        <span className="flex items-center">
                          <span className="mr-2">Par</span>
                          <span className="font-medium">
                            {discussion.author}
                          </span>
                        </span>
                        <span className="bg-gray-100 px-4 py-1 rounded-full">
                          {discussion.replies} réponses
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForumsPage;
