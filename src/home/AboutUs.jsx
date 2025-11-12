import React from "react";
import { 
  FaRocket, 
  FaUsers, 
  FaHandshake, 
  FaLightbulb, 
  FaAward, 
  FaGlobe,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";

const AboutUs = () => {
  const values = [
    {
      icon: <FaRocket className="text-3xl text-blue-600" />,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions that keep you ahead of the competition."
    },
    {
      icon: <FaUsers className="text-3xl text-blue-600" />,
      title: "Collaboration",
      description: "We work as an extension of your team, fostering strong partnerships and transparent communication."
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-600" />,
      title: "Integrity",
      description: "We build trust through honesty, reliability, and ethical business practices in everything we do."
    },
    {
      icon: <FaLightbulb className="text-3xl text-blue-600" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring quality and attention to detail at all levels."
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started our journey with a vision to transform businesses through technology" },
    { year: "2021", event: "First Major Project", description: "Delivered our first enterprise-level embedded systems solution" },
    { year: "2022", event: "Team Expansion", description: "Grew to 15+ experts across multiple technology domains" },
    { year: "2023", event: "Global Reach", description: "Expanded services to international clients across 5+ countries" },
    { year: "2024", event: "Innovation Hub", description: "Established R&D center for emerging technologies" }
  ];

  const teamStats = [
    { number: "15+", label: "Expert Engineers" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Delivered" },
    { number: "10+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-blue-200">KodeBloom</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Driving digital transformation through innovative technology solutions 
            that empower businesses to thrive in the modern era.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <FaRocket className="mr-3 text-blue-600" />
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To empower businesses with cutting-edge technology solutions that drive growth, 
                    enhance efficiency, and create sustainable competitive advantages in an ever-evolving digital landscape.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                    <FaGlobe className="mr-3 text-green-600" />
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading technology partner for businesses worldwide, recognized for 
                    innovation, reliability, and transformative digital solutions that shape the future of industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="KodeBloom Team"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming a trusted technology partner for businesses worldwide
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in <span className="font-semibold text-blue-600">2020</span>, 
                <span className="font-semibold"> KodeBloom Technology & Services Pvt. Ltd.</span> emerged 
                from a simple yet powerful vision: to bridge the gap between innovative technology 
                and real-world business challenges.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                What started as a small team of passionate engineers has grown into a dynamic 
                organization of <span className="font-semibold">15+ experts</span> specializing in 
                embedded systems, web development, cloud computing, and digital transformation.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Today, we're proud to have delivered <span className="font-semibold">50+ successful projects</span> 
                across various industries, helping our clients achieve their digital transformation 
                goals and stay ahead in their respective markets.
              </p>
              <div className="flex items-center text-blue-600 font-semibold mt-8">
                <span>Continue our journey with us</span>
                <FaArrowRight className="ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {teamStats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Milestones that mark our growth and commitment to excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
              
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className="text-sm text-blue-600 font-semibold mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join the growing list of businesses that trust KodeBloom for their technology needs. 
              Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center">
                Get Started Today
                <FaArrowRight className="ml-2" />
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;