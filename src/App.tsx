// import { useState } from "react";
// import Header from "@components/Header";
// import {
//   // ArrowRight,
//   Heart,
//   // Award,
//   // Sparkles,
//   // Users,
//   // Star,
//   // Menu,
//   // X,
//   ChevronRight,
//   Globe,
//   Shield,
//   BookOpen,
// } from "lucide-react";

// import Header from "./shared/components/Header";
// import Footer from "./shared/components/Footer";
// import HeroBannerComponent from "./shared/components/Hero-banner";
import Routes from "./routes";
// import { Header } from "./components/Header";

// const IssuesSection = () => {
//   const issues = [
//     {
//       title: "Violence basée sur le genre",
//       description:
//         "Nous travaillons pour mettre fin à la violence contre les femmes et les filles sous toutes ses formes.",
//       image:
//         "https://images.unsplash.com/photo-1485182708500-e8f1f318ba72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     },
//     {
//       title: "Droits sexuels et reproductifs",
//       description:
//         "Nous défendons le droit des femmes à prendre leurs propres décisions concernant leur corps et leur santé.",
//       image:
//         "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     },
//     {
//       title: "Participation politique",
//       description:
//         "Nous œuvrons pour une représentation égale des femmes dans tous les domaines de prise de décision.",
//       image:
//         "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     },
//   ];

//   return (
//     <div className="bg-white py-20">
//       <div className="container mx-auto px-6">
//         <div className="mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Enjeux Prioritaires
//           </h2>
//           <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl">
//             Nous nous concentrons sur les problèmes les plus urgents affectant
//             les droits des femmes dans le monde entier.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {issues.map((issue, index) => (
//             <div key={index} className="group overflow-hidden">
//               <div className="relative overflow-hidden">
//                 <img
//                   src={issue.image}
//                   alt={issue.title}
//                   className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
//               </div>
//               <div className="p-6 border-l-4 border-yellow-400">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   {issue.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{issue.description}</p>
//                 <a
//                   href="#"
//                   className="inline-flex items-center font-bold text-black hover:text-yellow-500 transition-colors"
//                 >
//                   EN SAVOIR PLUS <ChevronRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const StatsSection = () => {
//   const stats = [
//     { value: "129", label: "pays où l'avortement est restreint" },
//     {
//       value: "1/3",
//       label: "des femmes subissent des violences physiques ou sexuelles",
//     },
//     {
//       value: "2.7×",
//       label: "plus de temps consacré aux tâches domestiques non rémunérées",
//     },
//   ];

//   return (
//     <div className="bg-black text-white py-20">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//           {stats.map((stat, index) => (
//             <div key={index} className="p-6">
//               <div className="text-6xl font-bold mb-2 text-yellow-400">
//                 {stat.value}
//               </div>
//               <div className="text-xl uppercase">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const CampaignsSection = () => {
//   const campaigns = [
//     {
//       title: "Mettre fin aux mariages forcés",
//       description:
//         "Notre campagne vise à éliminer les mariages d'enfants et les mariages forcés qui affectent des millions de filles chaque année.",
//       icon: <Shield className="h-10 w-10 text-yellow-400" />,
//     },
//     {
//       title: "Défendre les défenseures",
//       description:
//         "Nous protégeons les femmes défenseures des droits humains qui risquent leur vie pour la justice et l'égalité.",
//       icon: <Heart className="h-10 w-10 text-yellow-400" />,
//     },
//     {
//       title: "Éducation pour toutes",
//       description:
//         "Nous luttons pour que chaque fille ait accès à une éducation de qualité, sans discrimination ni obstacles.",
//       icon: <BookOpen className="h-10 w-10 text-yellow-400" />,
//     },
//     {
//       title: "Égalité économique",
//       description:
//         "Nous travaillons pour éliminer les écarts de salaire et garantir l'accès égal aux opportunités économiques.",
//       icon: <Globe className="h-10 w-10 text-yellow-400" />,
//     },
//   ];

//   return (
//     <div className="bg-gray-100 py-20">
//       <div className="container mx-auto px-6">
//         <div className="mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Nos Campagnes
//           </h2>
//           <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl">
//             Découvrez comment nous agissons concrètement pour faire avancer les
//             droits des femmes.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {campaigns.map((campaign, index) => (
//             <div
//               key={index}
//               className="bg-white p-8 flex hover:shadow-lg transition-shadow duration-300"
//             >
//               <div className="mr-6 mt-1">{campaign.icon}</div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-3">
//                   {campaign.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{campaign.description}</p>
//                 <a
//                   href="#"
//                   className="inline-flex items-center font-bold text-black hover:text-yellow-500 transition-colors"
//                 >
//                   PARTICIPER <ChevronRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const TestimonialsSection = () => {
//   const testimonials = [
//     {
//       quote:
//         "Grâce au soutien de cette organisation, j'ai pu porter mon cas devant la justice et obtenir réparation pour les violences que j'ai subies.",
//       name: "Amina K.",
//       role: "Survivante et militante",
//       image:
//         "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
//     },
//   ];

//   return (
//     <div className="py-20 bg-white">
//       <div className="container mx-auto px-6">
//         <div className="max-w-4xl mx-auto">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={testimonial.image}
//                 alt={testimonial.name}
//                 className="w-24 h-24 rounded-full object-cover mx-auto mb-8"
//               />
//               <p className="text-2xl md:text-3xl text-gray-800 italic mb-8 leading-relaxed">
//                 "{testimonial.quote}"
//               </p>
//               <div className="w-12 h-1 bg-yellow-400 mx-auto mb-6"></div>
//               <h4 className="font-bold text-xl text-gray-900">
//                 {testimonial.name}
//               </h4>
//               <p className="text-gray-600">{testimonial.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// const CTASection = () => {
//   return (
//     <div className="bg-yellow-400 py-20">
//       <div className="container mx-auto px-6 text-center">
//         <h2 className="text-4xl font-bold text-black mb-6">
//           Rejoignez le mouvement
//         </h2>
//         <p className="text-xl text-black max-w-3xl mx-auto mb-10">
//           Ensemble, nous pouvons créer un monde où les droits des femmes sont
//           respectés, protégés et réalisés.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition duration-300">
//             FAIRE UN DON
//           </button>
//           <button className="bg-transparent border-2 border-black font-bold py-4 px-8 hover:bg-black hover:text-white transition duration-300">
//             DEVENIR BÉNÉVOLE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// const NewsSection = () => {
//   const news = [
//     {
//       title: "Nouvelle loi sur les violences conjugales adoptée",
//       date: "15 juin 2025",
//       image:
//         "https://images.unsplash.com/photo-1591522810850-58128c5fb089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Rapport sur les droits reproductifs dans le monde",
//       date: "3 mai 2025",
//       image:
//         "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//     {
//       title: "Manifestation mondiale pour l'égalité salariale",
//       date: "8 mars 2025",
//       image:
//         "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
//     },
//   ];

//   return (
//     <div className="bg-white py-20">
//       <div className="container mx-auto px-6">
//         <div className="mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Actualités</h2>
//           <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
//           <p className="text-xl text-gray-600 max-w-3xl">
//             Restez informé·e des dernières avancées et défis dans la lutte pour
//             les droits des femmes.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {news.map((item, index) => (
//             <div key={index} className="group cursor-pointer">
//               <div className="relative overflow-hidden mb-4">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
//               </div>
//               <p className="text-yellow-500 font-bold mb-2">{item.date}</p>
//               <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-500 transition-colors">
//                 {item.title}
//               </h3>
//             </div>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <a
//             href="#"
//             className="inline-flex items-center font-bold text-black hover:text-yellow-500 transition-colors text-lg"
//           >
//             VOIR TOUTES LES ACTUALITÉS <ChevronRight className="ml-2 h-5 w-5" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

const App = () => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* <Header />

      <main className="pt-16">
        <HeroBannerComponent />

        <IssuesSection />
        <StatsSection />
        <CampaignsSection />
        <TestimonialsSection />
        <NewsSection />
        <CTASection />
      </main>

      <Footer /> */}

      <Routes />
    </div>
  );
};

export default App;
