import Footer from "@/shared/components/Footer";

interface TestimonialProps {
  image: string;
  name: string;
  content: React.ReactNode;
  isReversed?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({
  image,
  name,
  content,
  isReversed = false,
}) => {
  const imageSection = (
    <div className="w-full md:w-1/2 animate-slide-in-left text-center">
      <img
        src={image}
        alt={`Portrait de ${name}`}
        className="max-w-xs w-50 h-50 object-cover rounded-[100%] shadow-lg mx-auto"
      />
      <div className="mt-4 bg-white bg-opacity-75 p-2 rounded-lg inline-block">
        <strong className="text-sm font-bold text-black">{name}</strong>
      </div>
    </div>
  );

  const contentSection = (
    <div className="w-full md:w-1/2 bg-gradient-to-b from-[#facc15] to-yellow-50 p-6 rounded-lg shadow-lg animate-slide-in-right">
      <p className="text-sm">{content}</p>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 rounded-3xl gap-8 bg-[black]">
      {isReversed ? (
        <>
          {contentSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

const TemoignagesPage = () => {
  const testimonials = [
    {
      image: "/assets/images/barack.avif",
      name: "Barack Obama",
      content:
        "Il n'y a pas de pays qui réussisse sans l'égalité des sexes. L'égalité des sexes est une condition préalable à la prospérité.",
    },
    {
      image: "/assets/images/koffi.jpg",
      name: "Koffi Annan",
      content:
        "Lutte contre la violence à l'égard des femmes : Il a soutenu des initiatives visant à combattre la violence basée sur le genre et a encouragé les gouvernements à adopter des lois pour protéger les droits des femmes. Éducation des filles : Annan a plaidé pour l'éducation des filles, considérant cela comme un élément crucial pour le progrès des sociétés. Il a insisté sur le fait que l'éducation est un droit fondamental.",
    },
    {
      image: "/assets/images/Lamine-Sow.jpg",
      name: "Mamadou Lamine Sow",
      content:
        "Égalité des sexes : Sow souligne l'importance de l'égalité entre les sexes comme un droit fondamental et essentiel au développement de la société. Participation des femmes : Il insiste sur la nécessité d'inclure les femmes dans tous les aspects de la vie politique, économique et sociale, affirmant que leur contribution est cruciale pour un progrès durable.",
    },
    {
      image: "/assets/images/Boubacar Boris Diop.avif",
      name: "Boubacar Boris Diop",
      content:
        "Égalité des droits : Diop plaide pour l'égalité des droits entre les sexes, soulignant que les femmes doivent avoir les mêmes opportunités que les hommes dans tous les domaines, y compris le travail et la politique. Lutte contre la violence : Il dénonce la violence faite aux femmes et appelle à des actions concrètes pour protéger les victimes et punir les agresseurs.",
    },
    {
      image: "/assets/images/Gilbert Houngbo.jpg",
      name: "Gilbert Houngbo",
      content:
        "Autonomisation économique : Il souligne que l'autonomisation économique des femmes est essentielle pour le développement durable. Cela inclut l'accès à des emplois décents et à des opportunités d'entrepreneuriat. Participation politique : Il plaide pour une représentation accrue des femmes dans les processus décisionnels, affirmant que leur voix est essentielle pour une société équitable.",
    },
    {
      image: "/assets/images/Achille Mbembe.jpg",
      name: "Achille Mbembe",
      content:
        "Décolonisation des esprits : Mbembe souligne l'importance de décoloniser les mentalités pour lutter contre les stéréotypes de genre. Il appelle à une revalorisation des contributions des femmes dans l'histoire et la culture africaines. Intersectionnalité : Il met en avant la nécessité de comprendre les droits des femmes dans un cadre intersectionnel, reconnaissant que les femmes vivent des expériences différentes selon leur race, classe sociale et origine géographique.",
    },
  ];

  return (
    <section>
      <div className="relative text-center text-sm bg-blue-400 bg-[url('/assets/images/fond.png')] bg-cover h-screen mb-4">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative flex flex-col justify-center items-center h-full text-white z-10">
          <h1 className="text-5xl font-bold mb-4">
            Témoignages des hommes alliés
          </h1>
          <p className="text-2xl">
            Ici vous trouverez quelques témoignages des hommes alliés aux droits
            de la femme
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className={index > 0 ? "mt-8" : ""}>
            <Testimonial {...testimonial} />
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default TemoignagesPage;
