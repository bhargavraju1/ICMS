import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ViewTechnologies = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      id: 1,
      name: "Artificial Intelligence & Machine Learning",
      category: "ai",
      description: "Advanced AI algorithms and machine learning models that transform data into actionable intelligence and automate complex processes.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Deep Learning Neural Networks",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics",
        "Reinforcement Learning",
        "Generative AI Models"
      ],
      applications: [
        "Intelligent Process Automation",
        "Predictive Maintenance",
        "Personalized Customer Experiences",
        "Fraud Detection Systems",
        "Autonomous Decision Making",
        "Smart Content Generation"
      ],
      benefits: [
        "70% increase in operational efficiency",
        "90% accuracy in predictive modeling",
        "Real-time decision making capabilities",
        "Scalable intelligent automation"
      ],
      icon: "🤖",
      status: "Active Development"
    },
    {
      id: 2,
      name: "Blockchain & Web3 Solutions",
      category: "blockchain",
      description: "Decentralized ledger technology ensuring transparency, security, and trust in digital transactions and asset management.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Smart Contract Development",
        "Decentralized Applications (dApps)",
        "Cryptographic Security Protocols",
        "Distributed Consensus Mechanisms",
        "Tokenization Platforms",
        "Cross-chain Interoperability"
      ],
      applications: [
        "Supply Chain Transparency",
        "Digital Identity Management",
        "Secure Payment Systems",
        "Asset Tokenization",
        "Voting Systems",
        "Intellectual Property Protection"
      ],
      benefits: [
        "100% transaction transparency",
        "Immutable record keeping",
        "Reduced intermediary costs",
        "Enhanced security and trust"
      ],
      icon: "⛓️",
      status: "Production Ready"
    },
    {
      id: 3,
      name: "Internet of Things (IoT)",
      category: "iot",
      description: "Connected ecosystem of smart devices and sensors that collect, analyze, and act on real-time data from physical environments.",
      image: "https://images.unsplash.com/photo-1558618666-fcd2585632d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Edge Computing Capabilities",
        "Real-time Sensor Networks",
        "Predictive Maintenance Algorithms",
        "Wireless Communication Protocols",
        "Device Management Platforms",
        "Data Streaming Analytics"
      ],
      applications: [
        "Smart City Infrastructure",
        "Industrial Automation",
        "Healthcare Monitoring Systems",
        "Environmental Sensing",
        "Asset Tracking",
        "Energy Management"
      ],
      benefits: [
        "40% reduction in maintenance costs",
        "Real-time operational insights",
        "Automated resource optimization",
        "Enhanced safety monitoring"
      ],
      icon: "📱",
      status: "Enterprise Deployment"
    },
    {
      id: 4,
      name: "Cloud Computing & DevOps",
      category: "cloud",
      description: "Scalable cloud infrastructure and automated development pipelines enabling rapid innovation and global scalability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Multi-cloud Architecture",
        "Container Orchestration",
        "Serverless Computing",
        "Infrastructure as Code",
        "Continuous Integration/Deployment",
        "Microservices Architecture"
      ],
      applications: [
        "Enterprise Application Hosting",
        "Big Data Processing",
        "Disaster Recovery Solutions",
        "Global Content Delivery",
        "Development Environments",
        "AI Model Deployment"
      ],
      benefits: [
        "99.9% uptime guarantee",
        "60% cost reduction in infrastructure",
        "Global scalability in minutes",
        "Automated deployment pipelines"
      ],
      icon: "☁️",
      status: "Production Ready"
    },
    {
      id: 5,
      name: "Quantum Computing",
      category: "quantum",
      description: "Next-generation computing paradigm leveraging quantum mechanics to solve complex problems beyond classical computing capabilities.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Quantum Algorithm Development",
        "Qubit Processing Systems",
        "Quantum Cryptography",
        "Quantum Machine Learning",
        "Quantum Simulation",
        "Error Correction Protocols"
      ],
      applications: [
        "Drug Discovery & Molecular Modeling",
        "Financial Portfolio Optimization",
        "Climate Change Modeling",
        "Cryptographic Security",
        "Supply Chain Optimization",
        "Artificial Intelligence Enhancement"
      ],
      benefits: [
        "Exponential speedup for specific problems",
        "Unbreakable encryption methods",
        "Advanced simulation capabilities",
        "Revolutionary optimization solutions"
      ],
      icon: "⚛️",
      status: "Research & Development"
    },
    {
      id: 6,
      name: "Sustainable Energy Technology",
      category: "energy",
      description: "Innovative solutions for renewable energy generation, storage, and smart grid management to power a sustainable future.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Smart Grid Management Systems",
        "Energy Storage Solutions",
        "Renewable Energy Optimization",
        "Carbon Tracking Analytics",
        "Distributed Energy Resources",
        "Energy Trading Platforms"
      ],
      applications: [
        "Solar Farm Management",
        "Wind Power Optimization",
        "Electric Vehicle Infrastructure",
        "Building Energy Management",
        "Carbon Credit Systems",
        "Microgrid Development"
      ],
      benefits: [
        "85% renewable energy utilization",
        "40% reduction in carbon footprint",
        "Real-time energy optimization",
        "Cost-effective sustainable solutions"
      ],
      icon: "🌞",
      status: "Active Deployment"
    },
    {
      id: 7,
      name: "Advanced Manufacturing",
      category: "manufacturing",
      description: "Leveraging robotics and AI for precision, efficiency, and sustainable production in next-generation manufacturing processes.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      features: [
        "Industrial Robotics & Automation",
        "Additive Manufacturing (3D Printing)",
        "Digital Twin Technology",
        "Smart Factory Systems",
        "Predictive Quality Control",
        "Augmented Reality Maintenance"
      ],
      applications: [
        "Smart Factory Implementation",
        "Customized Mass Production",
        "Supply Chain Optimization",
        "Quality Assurance Automation",
        "Sustainable Production Lines",
        "Real-time Production Monitoring"
      ],
      benefits: [
        "50% faster production cycles",
        "99.8% manufacturing accuracy",
        "30% reduction in material waste",
        "24/7 automated operations"
      ],
      icon: "🏭",
      status: "Enterprise Deployment"
    }
  ];

  const filteredTechnologies = activeTab === 'all' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Technology</span> Stack
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive suite of cutting-edge technologies designed to drive innovation, 
              efficiency, and sustainable growth across industries.
            </p>
          </div>

          {/* Technology Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All Technologies' },
              { key: 'ai', label: 'AI & ML' },
              { key: 'blockchain', label: 'Blockchain' },
              { key: 'iot', label: 'IoT' },
              { key: 'cloud', label: 'Cloud & DevOps' },
              { key: 'quantum', label: 'Quantum' },
              { key: 'energy', label: 'Energy Tech' },
              { key: 'manufacturing', label: 'Advanced Manufacturing' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full transition-all duration-300 font-medium text-sm md:text-base ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md hover:shadow-lg border border-blue-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredTechnologies.map((tech) => (
              <div 
                key={tech.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer border border-blue-100"
                onClick={() => setSelectedTech(tech)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback image if the original fails to load
                      e.target.src = `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`;
                    }}
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tech.status}
                    </span>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {tech.icon}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-semibold">Click to explore details</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {tech.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tech.features.slice(0, 3).map((feature, index) => (
                      <span 
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                    {tech.features.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                        +{tech.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{tech.applications.length} applications</span>
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

          {/* Technology Modal */}
          {selectedTech && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-blue-200">
                <div className="relative">
                  <img
                    src={selectedTech.image}
                    alt={selectedTech.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80`;
                    }}
                  />
                  <button 
                    onClick={() => setSelectedTech(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedTech.name}</h2>
                      <div className="flex items-center gap-4">
                        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          {selectedTech.status}
                        </span>
                        <span className="text-2xl">{selectedTech.icon}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{selectedTech.description}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {selectedTech.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
                      <ul className="space-y-3">
                        {selectedTech.applications.map((application, index) => (
                          <li key={index} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-cyan-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedTech.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 mt-8">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                      Request Demo
                    </button>
                    <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-semibold transition-colors">
                      Download Tech Brief
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Technology Statistics */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Impact Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{technologies.length}</div>
                <div className="text-gray-600 font-medium">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">
                  {technologies.filter(tech => tech.status === 'Production Ready').length}
                </div>
                <div className="text-gray-600 font-medium">Production Ready</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600 font-medium">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                <div className="text-gray-600 font-medium">Uptime Average</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-white rounded-2xl p-12 shadow-xl border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Leverage Our Technologies?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technologies can transform your business operations and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Schedule Technology Consultation
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ViewTechnologies;