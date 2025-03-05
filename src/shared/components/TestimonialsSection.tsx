import { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Grâce à cette organisation, j'ai pu retrouver ma dignité après avoir subi des pratiques traditionnelles néfastes. Leur soutien m'a permis de devenir une voix pour le changement dans ma communauté.",
      name: "Aisha N.",
      role: "Activiste contre les MGF",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "En tant que survivante de mariage précoce, cette organisation m'a aidée à reprendre mes études et à devenir une source d'inspiration pour d'autres jeunes filles de mon village.",
      name: "Mariama D.",
      role: "Étudiante et militante",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "En tant que chef traditionnel, j'ai vu comment leur approche respectueuse de nos coutumes, tout en promouvant les droits des femmes, a transformé notre communauté.",
      name: "Chef Ousmane K.",
      role: "Leader communautaire",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote:
        "Après avoir été victime de violence conjugale, j'ai trouvé refuge auprès de cette organisation. Aujourd'hui, je dirige une coopérative de femmes et je suis économiquement indépendante.",
      name: "Aminata S.",
      role: "Entrepreneure sociale",
      image:
        "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }, 6000); // Increased interval to account for animation

    return () => clearInterval(timer);
  }, []);

  const handleTestimonialChange = (index: number) => {
    if (currentIndex === index) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const TestimonialCard: React.FC<Testimonial> = ({
    quote,
    name,
    role,
    image,
  }) => (
    <div className="text-center transform transition-all duration-700 ease-in-out hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mx-auto mb-8 shadow-lg transform transition-transform duration-700"
        loading="lazy"
      />
      <blockquote>
        <p className="text-2xl md:text-3xl text-gray-800 italic mb-8 leading-relaxed">
          "{quote}"
        </p>
      </blockquote>
      <div className="w-12 h-1 bg-yellow-400 mx-auto mb-6 transform transition-all duration-500 ease-in-out hover:w-24"></div>
      <h4 className="font-bold text-xl text-gray-900">{name}</h4>
      <p className="text-gray-600">{role}</p>
    </div>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto relative">
          <div
            className={`transition-all duration-700 ease-in-out transform ${
              isAnimating
                ? "opacity-0 -translate-x-full"
                : "opacity-100 translate-x-0"
            }`}
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ease-in-out transform ${
                  currentIndex === index
                    ? "bg-yellow-400 scale-125"
                    : "bg-gray-300 hover:bg-yellow-200"
                }`}
                onClick={() => handleTestimonialChange(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
