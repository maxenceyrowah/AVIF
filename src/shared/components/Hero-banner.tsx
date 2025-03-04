import { ArrowRight } from "lucide-react";

import HeroBannerBg from "/assets/images/hero-banner.jpg";
import useVisibleHeroText from "../../hooks/useVisibleHeroText";

const HeroBannerComponent = () => {
  const { isVisible } = useVisibleHeroText();

  return (
    <div className="relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <img
          src={HeroBannerBg}
          alt="Women's rights"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`
            text-5xl md:text-7xl font-bold leading-tight mb-6
            bg-gradient-to-r from-white via-yellow-400 to-white
            bg-clip-text text-transparent
            transition-opacity duration-1000 ease-in-out
            ${isVisible ? "opacity-100" : "opacity-0"}
            `}
          >
            Le 8 mars,
            <span className="block mt-2 bg-gradient-to-r from-yellow-400 to-white bg-clip-text">
              Tout pour la femme, Tous pour la femme
            </span>
            AVIF
          </h1>

          <div
            className={`w-24 h-1 bg-yellow-400 mb-8 transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          ></div>

          <p
            className={`text-xl md:text-2xl mb-10 leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Autonomisation, Valorisation et Insertion des Femmes
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button className="bg-yellow-400 text-black font-bold py-4 px-8 hover:bg-yellow-300 transition duration-300 flex items-center justify-center">
              AGIR MAINTENANT <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white font-bold py-4 px-8 hover:bg-white hover:text-black transition duration-300">
              EN SAVOIR PLUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerComponent;
