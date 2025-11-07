import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhone, FaFacebookF, FaLinkedinIn, FaArrowRight, FaCheck, FaUsers, FaRocket, FaHandshake, FaCog, FaGlobe, FaCloud, FaHeart, FaStar } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // ✅ Live Time & Date
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");

      setCurrentTime(`${formattedHours}:${minutes}:${seconds} ${ampm}`);

      const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
      setCurrentDate(now.toLocaleDateString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* ✅ Header Section */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 border-b border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
          {/* Logo */}
          <div onClick={() => navigate("/")} className="flex items-center cursor-pointer">
            {/* Logo Image */}
            <div className="w-12 h-12 flex items-center justify-center mr-3">
         <div className="w-[400px]">
  <img
    src="/KODEBLOOM.jpg"
    alt="KodeBloom Logo"
    className="w-full h-auto object-contain"
  />
</div>



            </div>
            {/* Company Name */}
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">KODEBLOOM</h1>
              <p className="text-xs text-gray-500">Technology Solutions</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex space-x-8 font-medium text-gray-700">
            <button onClick={() => navigate("/solutions")} className="hover:text-blue-600">
              Solutions
            </button>
            <button onClick={() => navigate("/industries")} className="hover:text-blue-600">
              Industries
            </button>
            <button onClick={() => navigate("/about-us")} className="hover:text-blue-600">
              About Us
            </button>
            <button onClick={() => navigate("/careers")} className="hover:text-blue-600">
              Careers
            </button>
          </nav>

          {/* Action Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/signin")}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
            >
              Client Portal
            </button>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden text-gray-600 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Driving Innovation with <br />
                <span className="text-blue-600">Technology Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                At KodeBloom, we deliver cutting-edge embedded systems, web & cloud technologies
                that empower enterprises to scale, transform, and succeed in the digital era.
                Your trusted partner for digital transformation.
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center"
                >
                  Contact Us
                  <FaArrowRight className="ml-2" />
                </button>
                <button
                  onClick={() => navigate("/solutions")}
                  className="text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Our Solutions
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80"
                alt="Technology solutions"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology offerings designed to drive your business forward in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaCog className="text-3xl text-blue-600" />, 
                title: "Embedded Systems", 
                desc: "IoT solutions, real-time OS development, hardware-software co-design, and firmware development for innovative products.",
                features: ["IoT Development", "RTOS", "Firmware", "Hardware Design"]
              },
              { 
                icon: <FaGlobe className="text-3xl text-blue-600" />, 
                title: "Web Development", 
                desc: "Full-stack applications, Progressive Web Apps, enterprise websites, and scalable web solutions with modern frameworks.",
                features: ["Full-Stack", "PWA", "Enterprise", "E-commerce"]
              },
              { 
                icon: <FaCloud className="text-3xl text-blue-600" />, 
                title: "Cloud Computing", 
                desc: "Scalable cloud infrastructure, microservices architecture, DevOps implementation, and cloud migration services.",
                features: ["AWS/Azure", "Microservices", "DevOps", "Migration"]
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, fIdx) => (
                    <span key={fIdx} className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose KodeBloom?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We stand out through our commitment to excellence, innovation, and client success. 
                Here's what makes us your ideal technology partner.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: FaUsers, title: "Expert Team", desc: "Seasoned professionals with diverse technology expertise" },
                  { icon: FaRocket, title: "Innovation Focus", desc: "Cutting-edge solutions using latest technologies" },
                  { icon: FaStar, title: "Quality Assurance", desc: "Rigorous testing and quality control processes" },
                  { icon: FaHandshake, title: "Client Partnership", desc: "Long-term relationships built on trust and results" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-blue-600 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                company: "TechCorp India",
                text: "KodeBloom delivered an exceptional IoT solution that transformed our manufacturing process. Their expertise in embedded systems is remarkable.",
                rating: 5
              },
              {
                name: "Priya Sharma",
                company: "Global Retail Inc",
                text: "The web application developed by KodeBloom has significantly improved our customer engagement and sales conversion rates.",
                rating: 5
              },
              {
                name: "Arun Patel",
                company: "FinServe Solutions",
                text: "Professional team, timely delivery, and excellent post-launch support. Highly recommended for cloud migration projects.",
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600">
              Tailored technology solutions for diverse industry verticals
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Healthcare", icon: "🏥" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Retail", icon: "🛍️" },
              { name: "Finance", icon: "💳" },
              { name: "Education", icon: "🎓" },
              { name: "Logistics", icon: "🚚" },
            ].map((industry, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900">{industry.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can drive your success. Get in touch with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center"
            >
              Start Your Project
              <FaArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => navigate("/solutions")}
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <footer className="w-full bg-gray-900 text-white mt-auto">
        <div className="container mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hyderabad Office */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">Hyderabad Office</h4>
            <p className="text-sm leading-relaxed">
              KodeBloom Technology & Services Pvt. Ltd.<br />
              Second Floor, Plot No. 1, Street 5,<br />
              Gandhi Nagar, Sarvasukhi Colony,<br />
              West Marredpally, Secunderabad,<br />
              Telangana 500026, India.
            </p>
          </div>

          {/* Vijayawada Office */}
          <div>
            <h4 className="text-blue-400 font-semibold mb-3">Vijayawada Office</h4>
            <p className="text-sm leading-relaxed">
              KodeBloom Technology & Services Pvt. Ltd.<br />
              2nd Floor, D. No. 48-11-5A,<br />
              Currency Nagar, Revenue Ward 2A,<br />
              Vijayawada – 2, Krishna District,<br />
              Andhra Pradesh – 520008, India.
            </p>
          </div>

          {/* Contact Info */}
          <div className="relative">
            <h4 className="text-blue-400 font-semibold mb-3">Contact Info</h4>
            <p className="flex items-center text-sm mb-2">
              <FaEnvelope className="mr-2 text-blue-300" /> info@kodebloom.com
            </p>
            <p className="flex items-center text-sm mb-4">
              <FaPhone className="mr-2 text-blue-300" /> +91-90630 97733
            </p>

            <div className="flex space-x-3 mb-6">
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-500 transition">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="absolute top-0 right-0 text-right text-xs text-gray-400">
              <div className="font-semibold text-blue-300">{currentTime}</div>
              <div>{currentDate}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 text-center py-4 text-gray-500 text-sm">
          © 2025 KodeBloom Technology & Services Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;