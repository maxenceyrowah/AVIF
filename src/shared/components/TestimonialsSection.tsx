const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Grâce au soutien de cette organisation, j'ai pu porter mon cas devant la justice et obtenir réparation pour les violences que j'ai subies.",
      name: "Amina K.",
      role: "Survivante et militante",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-8"
              />
              <p className="text-2xl md:text-3xl text-gray-800 italic mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="w-12 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <h4 className="font-bold text-xl text-gray-900">
                {testimonial.name}
              </h4>
              <p className="text-gray-600">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
