import { BookOpen, Globe, Heart, Shield } from "lucide-react";
import { FC } from "react";

interface Campaign {
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
}

const campaigns: Campaign[] = [
  {
    title: "Mettre fin aux mariages forcés",
    description:
      "Notre campagne vise à éliminer les mariages d'enfants et les mariages forcés qui affectent des millions de filles chaque année.",
    icon: <Shield className="h-10 w-10 text-secondary" />,
    link: "/campaigns/end-forced-marriages",
  },
  {
    title: "Défendre les défenseures",
    description:
      "Nous protégeons les femmes défenseures des droits humains qui risquent leur vie pour la justice et l'égalité.",
    icon: <Heart className="h-10 w-10 text-secondary" />,
    link: "/campaigns/defend-defenders",
  },
  {
    title: "Éducation pour toutes",
    description:
      "Nous luttons pour que chaque fille ait accès à une éducation de qualité, sans discrimination ni obstacles.",
    icon: <BookOpen className="h-10 w-10 text-secondary" />,
    link: "/campaigns/education-for-all",
  },
  {
    title: "Égalité économique",
    description:
      "Nous travaillons pour éliminer les écarts de salaire et garantir l'accès égal aux opportunités économiques.",
    icon: <Globe className="h-10 w-10 text-secondary" />,
    link: "/campaigns/economic-equality",
  },
];

const CampaignCard: FC<Campaign> = ({ title, description, icon }) => (
  <div className="bg-white p-8 flex hover:shadow-lg transition-shadow duration-300 rounded-lg">
    <div className="mr-6 mt-1 flex-shrink-0">{icon}</div>
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
    </div>
  </div>
);

const CampaignsSection: FC = () => {
  return (
    <section className="bg-gray-100 py-20">
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
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
