import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import HeroBanner1 from "/assets/images/hero-banner.jpg";
import HeroBanner2 from "/assets/images/hero-banner-word.jpg";
import HeroBanner3 from "/assets/images/hero-banner-001.jpg";
import useVisibleHeroText from "../../hooks/useVisibleHeroText";

const HeroBannerComponent = () => {
  const { isVisible } = useVisibleHeroText();
  const [currentBg, setCurrentBg] = useState(0);
  const [nextBg, setNextBg] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const backgrounds = [HeroBanner1, HeroBanner2, HeroBanner3];

  const transitionToNext = (next: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setNextBg(next);

    setTimeout(() => {
      setCurrentBg(next);
      setIsAnimating(false);
    }, 1000);
  };

  const handleNextBackground = () => {
    const next = (currentBg + 1) % backgrounds.length;
    transitionToNext(next);
  };

  const handlePreviousBackground = () => {
    const next = (currentBg - 1 + backgrounds.length) % backgrounds.length;
    transitionToNext(next);
  };

  useEffect(() => {
    const interval = setInterval(handleNextBackground, 6000);
    return () => clearInterval(interval);
  }, [currentBg]);

  return (
    <div className="relative bg-black text-white overflow-hidden h-screen w-full">
      {backgrounds.map((bg, index) => (
        <div key={index} className="inset-0 z-0 absolute">
          <img
            src={bg}
            alt="Women's rights"
            className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${index === currentBg ? "opacity-50" : "opacity-0"}
              ${index === nextBg && isAnimating ? "opacity-50" : ""}
            `}
            style={{
              transform:
                index === currentBg
                  ? isAnimating
                    ? "scale(0.95)"
                    : "scale(1)"
                  : index === nextBg && isAnimating
                  ? "scale(1.05)"
                  : "scale(1)",
              transition:
                "transform 1000ms ease-in-out, opacity 1000ms ease-in-out",
            }}
          />
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={handlePreviousBackground}
        className="md:block hidden absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
        disabled={isAnimating}
      >
        <ArrowRight className="w-6 h-6 transform rotate-180" />
      </button>

      <button
        onClick={handleNextBackground}
        className="md:block hidden absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 p-2 rounded-full hover:bg-black/70 transition-all"
        disabled={isAnimating}
      >
        <ArrowRight className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl">
          <h1
            className={`
            text-5xl md:text-7xl font-bold leading-tight mb-6
            bg-gradient-to-r from-white via-yellow-400 to-white
            bg-clip-text text-transparent
            transition-all duration-1000 ease-in-out
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
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
            <button className="bg-yellow-400 text-black font-bold py-4 px-8 hover:bg-yellow-300 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              AGIR MAINTENANT <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white font-bold py-4 px-8 hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              EN SAVOIR PLUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerComponent;
