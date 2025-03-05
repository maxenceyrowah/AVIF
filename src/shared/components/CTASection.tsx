const CTASection = () => {
  return (
    <div className="bg-yellow-200 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black mb-6">
          Rejoignez le mouvement
        </h2>
        <p className="text-xl text-black max-w-3xl mx-auto mb-10">
          Ensemble, nous pouvons créer un monde où les droits des femmes sont
          respectés, protégés et réalisés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black text-white font-bold py-4 px-8 hover:bg-gray-800 transition duration-300">
            FAIRE UN DON
          </button>
          <button className="bg-transparent border-2 border-black font-bold py-4 px-8 hover:bg-black hover:text-white transition duration-300">
            DEVENIR BÉNÉVOLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
