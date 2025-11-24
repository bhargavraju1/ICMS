import React, { useState, useEffect } from 'react';

const ExploreOurVision = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const visionPillars = [
    {
      title: "Sustainable Innovation",
      description: "Creating technologies that not only advance human capabilities but also protect and preserve our planet for future generations.",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      goals: [
        "Achieve carbon-negative operations by 2030",
        "Develop 100% recyclable technology products",
        "Power all data centers with renewable energy",
        "Implement circular economy principles across all operations"
      ],
      metrics: [
        { value: "85%", label: "Renewable Energy Usage" },
        { value: "60%", label: "Reduction in Carbon Footprint" },
        { value: "95%", label: "Materials Recycled" }
      ],
      icon: "🌱"
    },
    {
      title: "Global Digital Inclusion",
      description: "Ensuring that the benefits of technology reach every corner of the world, bridging the digital divide and empowering underserved communities.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      goals: [
        "Provide internet access to 1 billion people by 2030",
        "Develop affordable technology solutions for emerging markets",
        "Create digital literacy programs in 50+ countries",
        "Support local tech entrepreneurship worldwide"
      ],
      metrics: [
        { value: "25+", label: "Countries Reached" },
        { value: "5M+", label: "People Trained" },
        { value: "500+", label: "Local Partnerships" }
      ],
      icon: "🌍"
    },
    {
      title: "Ethical Technology Development",
      description: "Building AI and technology systems with transparency, fairness, and accountability at their core, ensuring they benefit humanity as a whole.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
      goals: [
        "Implement comprehensive AI ethics frameworks",
        "Ensure 100% transparency in algorithms",
        "Eliminate bias in machine learning models",
        "Establish global standards for ethical AI"
      ],
      metrics: [
        { value: "100%", label: "Algorithm Transparency" },
        { value: "0", label: "Tolerance for Bias" },
        { value: "50+", label: "Ethics Reviews Completed" }
      ],
      icon: "⚖️"
    }
  ];

  const visionTimeline = [
    {
      year: "2024",
      milestones: [
        "Launch Global Digital Literacy Initiative",
        "Achieve 85% renewable energy across operations",
        "Open 5 new innovation hubs worldwide"
      ]
    },
    {
      year: "2025",
      milestones: [
        "Deploy AI for Social Good in 20 countries",
        "Reduce carbon footprint by 50%",
        "Train 1 million people in digital skills"
      ]
    },
    {
      year: "2030",
      milestones: [
        "Become carbon-negative company",
        "Connect 1 billion people to digital services",
        "Establish global ethical AI standards"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visionPillars.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [visionPillars.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Vision for a <span className="text-blue-600">Better Tomorrow</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We envision a world where technology serves as a catalyst for positive change, 
            driving sustainable progress, fostering global inclusion, and upholding the highest ethical standards.
          </p>
        </div>

        {/* Vision Carousel */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-blue-100">
          <div className="relative h-96">
            {visionPillars.map((pillar, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-2xl ml-12 text-white">
                    <span className="text-4xl mb-4 block">{pillar.icon}</span>
                    <h2 className="text-4xl font-bold mb-4">{pillar.title}</h2>
                    <p className="text-xl mb-6 opacity-90">{pillar.description}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                      Learn More About {pillar.title}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {visionPillars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Vision Pillars Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visionPillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
              <div className="text-4xl mb-4 text-center">{pillar.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{pillar.title}</h3>
              <p className="text-gray-600 mb-6 text-center">{pillar.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Goals:</h4>
                <ul className="space-y-2">
                  {pillar.goals.map((goal, goalIndex) => (
                    <li key={goalIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-blue-100 pt-4">
                <h4 className="font-semibold text-gray-900 mb-3">Current Progress:</h4>
                <div className="space-y-2">
                  {pillar.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="font-bold text-blue-600">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-16 border border-blue-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Vision Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {visionTimeline.map((period, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold py-4 px-6 rounded-t-2xl">
                  {period.year}
                </div>
                <div className="border border-blue-200 rounded-b-2xl p-6">
                  <ul className="space-y-3">
                    {period.milestones.map((milestone, mileIndex) => (
                      <li key={mileIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Us in Shaping the Future</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Together, we can build a future where technology serves humanity, protects our planet, 
            and creates opportunities for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-colors">
              Partner With Us
            </button>
            <button className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors">
              Download Vision Document
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurVision;