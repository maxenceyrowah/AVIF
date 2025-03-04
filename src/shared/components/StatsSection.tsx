const StatsComponent = () => {
  const stats = [
    { value: "129", label: "pays où l'avortement est restreint" },
    {
      value: "1/3",
      label: "des femmes subissent des violences physiques ou sexuelles",
    },
    {
      value: "2.7×",
      label: "plus de temps consacré aux tâches domestiques non rémunérées",
    },
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-6xl font-bold mb-2 text-yellow-400">
                {stat.value}
              </div>
              <div className="text-xl uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StatsComponent;
