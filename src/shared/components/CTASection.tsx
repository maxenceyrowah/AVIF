const CTASection = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Rejoignez le mouvement
        </h2>
        <p className="text-xl text-primary max-w-3xl mx-auto mb-10">
          Ensemble, nous pouvons créer un monde où les droits des femmes sont
          respectés, protégés et réalisés.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-primary text-secondary font-bold py-4 px-8 hover:bg-secondary hover:text-primary hover:border-primary hover:border transition duration-300">
            FAIRE UN DON
          </button>
          <button className="bg-transparent border-2 border-black text-primary font-bold py-4 px-8 hover:bg-black hover:text-white transition duration-300">
            DEVENIR BÉNÉVOLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
