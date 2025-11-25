import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SustainableEngineering = () => {
  const engineeringFeatures = [
    {
      icon: "🌱",
      title: "Eco-Friendly Design",
      description: "Sustainable product design that minimizes environmental impact throughout the lifecycle."
    },
    {
      icon: "♻️",
      title: "Circular Economy",
      description: "Implementing closed-loop systems that eliminate waste and maximize resource efficiency."
    },
    {
      icon: "📊",
      title: "Carbon Tracking",
      description: "Real-time monitoring and reduction of carbon footprint across all operations."
    },
    {
      icon: "💡",
      title: "Green Innovation",
      description: "Developing cutting-edge solutions for renewable energy and sustainable materials."
    }
  ];

  const engineeringBenefits = [
    {
      metric: "65%",
      description: "Reduction in carbon emissions"
    },
    {
      metric: "90%",
      description: "Waste diverted from landfills"
    },
    {
      metric: "40%",
      description: "Energy consumption reduction"
    },
    {
      metric: "100%",
      description: "Renewable energy target"
    }
  ];

  const projects = [
    {
      name: "Green Building Solutions",
      description: "Sustainable architecture and construction methods that reduce environmental impact.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      impact: "50% energy savings"
    },
    {
      name: "Water Conservation Systems",
      description: "Advanced water recycling and conservation technologies for sustainable usage.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      impact: "70% water reuse"
    },
    {
      name: "Sustainable Manufacturing",
      description: "Eco-friendly production processes that minimize waste and energy consumption.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      impact: "Zero waste facilities"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-cyan-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sustainable <span className="text-yellow-300">Engineering</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovating eco-friendly designs that reduce waste and carbon footprint.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                View Projects
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Download Report
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Engineering for a Sustainable Future
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our sustainable engineering solutions combine innovation with environmental 
                responsibility to create lasting positive impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {engineeringFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Environmental Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our sustainable engineering approach delivers measurable environmental benefits.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {engineeringBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {benefit.metric}
                  </div>
                  <p className="text-gray-600 font-medium">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our innovative sustainable engineering projects making a real difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.impact}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center">
                        Learn More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Approach */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Sustainable Approach
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We integrate environmental considerations into every stage of the engineering 
                  process, from design and material selection to implementation and end-of-life recycling.
                </p>
                <div className="space-y-4">
                  {[
                    "Lifecycle assessment and optimization",
                    "Renewable material sourcing",
                    "Energy-efficient design principles",
                    "Waste reduction strategies",
                    "Carbon-neutral operations",
                    "Sustainable supply chain management"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Core Principles</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Eco-Design", icon: "🎨" },
                    { name: "Energy Efficiency", icon: "⚡" },
                    { name: "Waste Minimization", icon: "📉" },
                    { name: "Renewable Resources", icon: "🌞" },
                    { name: "Carbon Neutrality", icon: "🌍" },
                    { name: "Circular Systems", icon: "🔄" }
                  ].map((principle, index) => (
                    <div key={index} className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl mb-2">{principle.icon}</div>
                      <div className="font-semibold">{principle.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Sustainable Revolution
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Partner with us to create engineering solutions that benefit both your business 
              and the planet. Let's build a sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Start Partnership
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Case Studies
              </button>
            </div>
          </div>
        </section>

        {/* Explore More Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More Innovations
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our other engineering solutions can drive sustainable growth and innovation.
            </p>
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center justify-center mx-auto">
              Explore More
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SustainableEngineering;