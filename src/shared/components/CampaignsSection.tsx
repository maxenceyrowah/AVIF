import { BookOpen, ChevronRight, Globe, Heart, Shield } from "lucide-react";

const CampaignsSection = () => {
  const campaigns = [
    {
      title: "Mettre fin aux mariages forcés",
      description:
        "Notre campagne vise à éliminer les mariages d'enfants et les mariages forcés qui affectent des millions de filles chaque année.",
      icon: <Shield className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Défendre les défenseures",
      description:
        "Nous protégeons les femmes défenseures des droits humains qui risquent leur vie pour la justice et l'égalité.",
      icon: <Heart className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Éducation pour toutes",
      description:
        "Nous luttons pour que chaque fille ait accès à une éducation de qualité, sans discrimination ni obstacles.",
      icon: <BookOpen className="h-10 w-10 text-yellow-400" />,
    },
    {
      title: "Égalité économique",
      description:
        "Nous travaillons pour éliminer les écarts de salaire et garantir l'accès égal aux opportunités économiques.",
      icon: <Globe className="h-10 w-10 text-yellow-400" />,
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Campagnes
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl">
            Découvrez comment nous agissons concrètement pour faire avancer les
            droits des femmes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-white p-8 flex hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mr-6 mt-1">{campaign.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {campaign.title}
                </h3>
                <p className="text-gray-600 mb-4">{campaign.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center font-bold text-black hover:text-yellow-500 transition-colors"
                >
                  PARTICIPER <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CampaignsSection;
