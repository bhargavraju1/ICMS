import React from "react";

const Solutions = () => {
  const solutions = [
    {
      title: "Smart Manufacturing",
      description:
        "We deliver advanced IoT and automation solutions that enhance production efficiency, reduce downtime, and ensure real-time monitoring of processes.",
      image:
        "https://images.unsplash.com/photo-1581092580502-30c94f96d3f4?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Product Design & Innovation",
      description:
        "Our engineering experts design and prototype innovative products using 3D modeling, simulation, and rapid testing methodologies.",
      image:
        "https://images.unsplash.com/photo-1603791452906-bb9f9c5b24c6?auto=format&fit=crop&w=1000&q=80",
    },
    {
      title: "Sustainable Technologies",
      description:
        "We develop energy-efficient and eco-friendly solutions to help companies meet sustainability goals without compromising productivity.",
      image:
        "https://images.unsplash.com/photo-1602407294553-6eaa3d3074f6?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
        Our Solutions
      </h1>
      <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
        We provide industry-leading solutions to drive innovation, performance,
        and sustainability for businesses across the globe.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((s, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img src={s.image} alt={s.title} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
