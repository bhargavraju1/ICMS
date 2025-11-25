import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const LearnAboutSustainability = () => {
  const [activeCategory, setActiveCategory] = useState('environmental');

  const sustainabilityData = {
    environmental: {
      title: "Environmental Stewardship",
      description: "Committed to protecting our planet through innovative solutions that reduce environmental impact and promote ecological balance.",
      icon: "🌍",
      initiatives: [
        {
          name: "Carbon Neutral Operations",
          description: "Achieving net-zero carbon emissions across all global operations through renewable energy and carbon offset programs.",
          progress: 75,
          target: "2025",
          achievements: [
            "85% renewable energy usage in data centers",
            "60% reduction in operational carbon footprint",
            "100% carbon offset for business travel"
          ],
          image: "https://images.unsplash.com/photo-1569163139394-de44cb54d0a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
          name: "Circular Economy Implementation",
          description: "Transforming our product lifecycle to eliminate waste and maximize resource efficiency through circular design principles.",
          progress: 60,
          target: "2026",
          achievements: [
            "90% product materials from recycled sources",
            "Zero waste to landfill across facilities",
            "Closed-loop manufacturing processes"
          ],
          image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
          name: "Green Data Centers",
          description: "Powering our digital infrastructure with 100% renewable energy and implementing advanced cooling technologies.",
          progress: 85,
          target: "2024",
          achievements: [
            "LEED Platinum certified data centers",
            "Advanced liquid cooling systems",
            "Solar and wind power integration"
          ],
          image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        }
      ]
    },
    social: {
      title: "Social Responsibility",
      description: "Empowering communities through technology access, education, and inclusive development programs worldwide.",
      icon: "👥",
      initiatives: [
        {
          name: "Digital Inclusion Program",
          description: "Bridging the digital divide by providing technology access and digital literacy training to underserved communities.",
          progress: 70,
          target: "2027",
          achievements: [
            "1 million+ people trained in digital skills",
            "500+ community technology centers established",
            "Local language educational content developed"
          ],
          image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
          name: "Ethical AI Development",
          description: "Ensuring artificial intelligence systems are developed and deployed with fairness, transparency, and human oversight.",
          progress: 80,
          target: "2025",
          achievements: [
            "Comprehensive bias detection frameworks",
            "Explainable AI implementation",
            "Diverse training data collection"
          ],
          image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
          name: "Employee Wellbeing & Diversity",
          description: "Creating inclusive workplaces that support mental health, work-life balance, and equal opportunities for all.",
          progress: 90,
          target: "2024",
          achievements: [
            "Flexible remote work policies",
            "Comprehensive mental health support",
            "50/50 gender representation goal"
          ],
          image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        }
      ]
    },
    governance: {
      title: "Sustainable Governance",
      description: "Implementing transparent, accountable business practices that prioritize long-term sustainability over short-term gains.",
      icon: "📊",
      initiatives: [
        {
          name: "Transparent Sustainability Reporting",
          description: "Public disclosure of comprehensive environmental and social impact metrics with third-party verification.",
          progress: 95,
          target: "2024",
          achievements: [
            "Annual sustainability report publication",
            "Third-party audit compliance",
            "Stakeholder engagement programs"
          ],
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
          name: "Ethical Supply Chain Management",
          description: "Ensuring responsible sourcing and fair labor practices throughout our global value chain.",
          progress: 65,
          target: "2026",
          achievements: [
            "Supplier code of conduct implementation",
            "Regular supply chain audits",
            "Conflict-free mineral sourcing"
          ],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        },
        {
          name: "Data Privacy & Security Excellence",
          description: "Protecting user data with industry-leading security measures and privacy-by-design principles.",
          progress: 88,
          target: "2024",
          achievements: [
            "GDPR and global privacy compliance",
            "End-to-end encryption implementation",
            "Privacy impact assessments"
          ],
          image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80"
        }
      ]
    }
  };

  const impactMetrics = [
    { number: "45%", label: "Carbon Reduction Achieved", icon: "📉" },
    { number: "85%", label: "Renewable Energy Usage", icon: "⚡" },
    { number: "1M+", label: "People Impacted Positively", icon: "👥" },
    { number: "95%", label: "Waste Diverted from Landfills", icon: "🔄" },
    { number: "50+", label: "Sustainable Partnerships", icon: "🤝" },
    { number: "100%", label: "Ethical Compliance", icon: "✅" }
  ];

  const currentCategory = sustainabilityData[activeCategory];

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
              Our <span className="text-blue-600">Sustainability</span> Journey
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building a sustainable future through innovative technology solutions, responsible business practices, 
              and meaningful community engagement. Discover how we're making a positive impact on people and the planet.
            </p>
          </div>

          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{metric.number}</div>
                <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Sustainability Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(sustainabilityData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === key
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow-md border border-blue-200'
                }`}
              >
                <span className="text-xl mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Current Category Header */}
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">{currentCategory.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentCategory.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{currentCategory.description}</p>
          </div>

          {/* Initiatives Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {currentCategory.initiatives.map((initiative, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100">
                <div className="relative">
                  <img
                    src={initiative.image}
                    alt={initiative.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Target: {initiative.target}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{initiative.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${initiative.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {initiative.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sustainability Commitment */}
          <div className="bg-white rounded-2xl p-8 shadow-xl mb-16 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Sustainability Commitment</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Goals 2025</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Achieve 100% renewable energy across all operations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Reduce water consumption by 50% compared to 2020 baseline
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Implement circular economy principles across product lines
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Achieve zero waste to landfill certification
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Impact Targets</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Train 2 million people in digital skills by 2027
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Achieve gender parity in leadership positions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Support 1000+ social enterprises through technology
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                    Ensure living wages across entire supply chain
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Sustainability Mission</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Together, we can create a more sustainable future through technology innovation, 
              responsible practices, and collective action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold transition-colors">
                Download Sustainability Report
              </button>
              <button className="border border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-colors">
                Partner for Impact
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

export default LearnAboutSustainability;