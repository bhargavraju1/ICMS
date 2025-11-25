import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SmartMobilitySolutions = () => {
  const mobilityFeatures = [
    {
      icon: "🚗",
      title: "Connected Vehicles",
      description: "Real-time vehicle-to-vehicle and vehicle-to-infrastructure communication for enhanced safety and efficiency."
    },
    {
      icon: "🚦",
      title: "Smart Traffic Management",
      description: "AI-powered traffic flow optimization and intelligent signal control systems."
    },
    {
      icon: "⚡",
      title: "EV Infrastructure",
      description: "Comprehensive electric vehicle charging networks and smart grid integration."
    },
    {
      icon: "📱",
      title: "Mobility as a Service",
      description: "Integrated platforms for seamless multi-modal transportation experiences."
    }
  ];

  const mobilityBenefits = [
    {
      metric: "40%",
      description: "Reduction in urban traffic congestion"
    },
    {
      metric: "60%",
      description: "Decrease in transportation emissions"
    },
    {
      metric: "30%",
      description: "Improvement in commute times"
    },
    {
      metric: "85%",
      description: "Increase in transportation efficiency"
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
              Smart Mobility <span className="text-yellow-300">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Integrating IoT and automation to build connected and intelligent transport systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Explore Our Solutions
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Request Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Transforming Urban Transportation
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our smart mobility solutions leverage cutting-edge technology to create safer, 
                more efficient, and sustainable transportation ecosystems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {mobilityFeatures.map((feature, index) => (
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
                Measurable Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our smart mobility solutions deliver tangible benefits for cities, businesses, and communities.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {mobilityBenefits.map((benefit, index) => (
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

        {/* Technology Stack */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Powered by Advanced Technology
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our smart mobility platform integrates IoT sensors, artificial intelligence, 
                  and real-time data analytics to create intelligent transportation networks 
                  that adapt and optimize continuously.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time traffic pattern analysis",
                    "Predictive maintenance for infrastructure",
                    "Autonomous vehicle integration",
                    "Smart parking solutions",
                    "Multi-modal route optimization",
                    "Carbon footprint tracking"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Key Technologies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "IoT Sensors", icon: "📡" },
                    { name: "AI & ML", icon: "🤖" },
                    { name: "5G Connectivity", icon: "📶" },
                    { name: "Cloud Computing", icon: "☁️" },
                    { name: "Blockchain", icon: "⛓️" },
                    { name: "Edge Computing", icon: "🔧" }
                  ].map((tech, index) => (
                    <div key={index} className="bg-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="font-semibold">{tech.name}</div>
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
              Ready to Transform Urban Mobility?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join us in building the future of intelligent transportation. 
              Let's create smarter, cleaner, and more connected cities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Get Started
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Explore More Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore More Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our other innovative technologies can transform your business and operations.
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

export default SmartMobilitySolutions;