import React from "react";

const Solutions = () => {
  const solutions = [
    {
      title: "Smart Manufacturing",
      description: "We deliver advanced IoT and automation solutions that enhance production efficiency, reduce downtime, and ensure real-time monitoring of processes.",
      image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["IoT Integration", "Process Automation", "Real-time Monitoring", "Predictive Maintenance"]
    },
    {
      title: "Product Design & Innovation",
      description: "Our engineering experts design and prototype innovative products using 3D modeling, simulation, and rapid testing methodologies.",
      image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["3D Modeling", "Rapid Prototyping", "Simulation", "User Testing"]
    },
    {
      title: "Sustainable Technologies",
      description: "We develop energy-efficient and eco-friendly solutions to help companies meet sustainability goals without compromising productivity.",
      image: "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["Energy Efficiency", "Eco-friendly Solutions", "Carbon Footprint Reduction", "Green Technology"]
    },
    {
      title: "Embedded Systems",
      description: "Custom embedded solutions for industrial automation, medical devices, and consumer electronics with robust firmware development.",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["Firmware Development", "Hardware Design", "RTOS", "Device Drivers"]
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and applications that enable businesses to grow and adapt to changing market demands.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["Cloud Migration", "Microservices", "DevOps", "Serverless Architecture"]
    },
    {
      title: "Web & Mobile Applications",
      description: "Modern, responsive web and mobile applications that provide seamless user experiences across all devices.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["Full-stack Development", "Progressive Web Apps", "Cross-platform Apps", "UI/UX Design"]
    },
    {
      title: "Smart Products & IoT",
      description: "Intelligent connected products with IoT capabilities that gather data, provide insights, and enable remote control.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["IoT Devices", "Smart Sensors", "Connectivity", "Data Analytics"]
    },
    {
      title: "AI & Machine Learning",
      description: "Artificial intelligence solutions that automate processes, provide intelligent insights, and enhance decision-making.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["Machine Learning", "Computer Vision", "Predictive Analytics", "AI Integration"]
    },
    {
      title: "Digital Transformation",
      description: "Comprehensive digital transformation services to modernize your business processes and technology infrastructure.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      features: ["Process Automation", "Digital Strategy", "Technology Modernization", "Change Management"]
    }
  ];

  // Rest of the component remains the same...
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Solutions
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We provide industry-leading technology solutions to drive innovation, performance,
          and digital transformation for businesses across various industries.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div 
                  className="hidden w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 items-center justify-center text-white text-center p-4"
                  style={{display: 'none'}}
                >
                  <div>
                    <div className="text-2xl font-bold mb-2">{solution.title}</div>
                    <div className="text-sm opacity-90">KodeBloom Solutions</div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {solution.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Let's discuss how our solutions can help you achieve your business goals. 
          Contact us for a free consultation and project assessment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Free Consultation
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
            View Case Studies
          </button>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Projects Completed</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
          <div className="text-gray-600">Happy Clients</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
          <div className="text-gray-600">Years Experience</div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;