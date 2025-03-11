const StatsComponent = () => {
  const stats = [
    {
      value: "99,5 ans",
      label:
        "temps estimé pour combler l'écart mondial entre les sexes dans les domaines de la politique, de l'économie, de la santé et de l'éducation",
      source: "https://fr.wikipedia.org/wiki/Condition_f%C3%A9minine",
    },
    {
      value: "8 sur 78",
      label:
        "nombre de femmes parmi les chefs d'État et de gouvernement présents à la COP29",
      source:
        "https://www.lemonde.fr/planete/article/2024/11/22/climat-l-offensive-de-l-arabie-saoudite-de-l-iran-et-du-vatican-sur-l-egalite-entre-les-genres-a-la-cop29_6408741_3244.html",
    },
    {
      value: "58 places",
      label:
        "recul de la Chine en dix ans dans le classement du Forum économique mondial sur l’égalité hommes-femmes, passant de la 69ᵉ à la 127ᵉ place",
      source: "https://fr.wikipedia.org/wiki/%C3%89galit%C3%A9_des_sexes",
    },
    {
      value: "0,04",
      label:
        "indice d'inégalité de genre pour la Suisse, le pays le plus égalitaire",
      source: "https://fr.wikipedia.org/wiki/%C3%89galit%C3%A9_des_sexes",
    },
    {
      value: "64%",
      label: "des droits des hommes sont étendus aux femmes",
      source:
        "https://elpais.com/sociedad/2025-03-07/mas-violencia-desigualdad-y-un-punado-de-avances-30-anos-de-lucha-feminista-en-la-onu.html",
    },
    {
      value: "137 ans",
      label:
        "nécessaires pour éliminer la pauvreté extrême chez les femmes et les filles",
      source:
        "https://elpais.com/sociedad/2025-03-07/mas-violencia-desigualdad-y-un-punado-de-avances-30-anos-de-lucha-feminista-en-la-onu.html",
    },
  ];

  return (
    <div className="bg-secondary text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group p-6 hover:bg-primary group-hover:text-secondary transition-colors duration-300 rounded-lg cursor-pointer"
              onClick={() => window.open(stat.source, "_blank")}
            >
              <div className="text-6xl font-bold mb-2 text-primary group-hover:text-secondary">
                {stat.value}
              </div>
              <div className="text-xl uppercase tracking-wide group-hover:text-secondary">
                {stat.label}
              </div>
              <div className="mt-2 text-sm underline opacity-75 group-hover:opacity-100 text-secondary">
                Source
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StatsComponent;
