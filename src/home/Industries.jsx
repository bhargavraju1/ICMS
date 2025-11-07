import React from "react";

const Industries = () => {
  const industries = [
    {
      title: "Automotive",
      description:
        "We provide smart lighting, electronics, and connected technologies that redefine the automotive industry.",
      icon: "🚗",
    },
    {
      title: "Aerospace",
      description:
        "High-precision manufacturing and sensor technologies tailored for aerospace and defense applications.",
      icon: "✈️",
    },
    {
      title: "Energy",
      description:
        "Sustainable and efficient energy systems for renewable and traditional power generation industries.",
      icon: "⚡",
    },
    {
      title: "Healthcare",
      description:
        "Advanced medical devices and IoT-driven healthcare solutions for improved patient care and efficiency.",
      icon: "🏥",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Industries We Serve
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {industries.map((ind, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="text-5xl mb-4">{ind.icon}</div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {ind.title}
            </h3>
            <p className="text-gray-600">{ind.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
