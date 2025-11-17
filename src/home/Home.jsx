import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import img1 from "../assets/profile1.jpg";
import img2 from "../assets/profile2.jpg";
import img3 from "../assets/profile3.jpg";
import img4 from "../assets/profile4.jpg";
import img5 from "../assets/profile5.jpg";
import img6 from "../assets/profile6.jpg";
import img7 from "../assets/profile7.jpg";
import img8 from "../assets/profile8.jpg";
import img9 from "../assets/profile9.avif";
import img10 from "../assets/profile10.jpg";
import img11 from "../assets/profile11.webp";
import img12 from "../assets/profile12.jpg";
import img13 from "../assets/profile13.jpeg";
import img14 from "../assets/profile14.jpeg";
import tech1 from "../assets/tech1.jpg";
import tech2 from "../assets/tech2.jpg";
import tech3 from "../assets/tech3.webp";
import solution1 from "../assets/solution1.jpg";
import solution2 from "../assets/solution2.jpg";
import solution3 from "../assets/solution3.webp";

const Home = () => {
  const imagesRow1 = [
    { id: 1, url: img1, alt: "Artificial Intelligence", type: "square" },
    { id: 2, url: img2, alt: "Digital Transformation", type: "rectangle" },
    { id: 3, url: img3, alt: "Innovation and Connectivity", type: "square" },
    { id: 4, url: img4, alt: "Automation & Robotics", type: "rectangle" },
    { id: 5, url: img5, alt: "Data Analytics", type: "square" },
    { id: 6, url: img6, alt: "Smart Infrastructure", type: "rectangle" },
    { id: 7, url: img7, alt: "Futuristic Design", type: "square" },
  ];

  const imagesRow2 = [
    { id: 8, url: img8, alt: "Advanced Mobility", type: "rectangle" },
    { id: 9, url: img9, alt: "Green Technology", type: "square" },
    { id: 10, url: img10, alt: "AI Research", type: "rectangle" },
    { id: 11, url: img11, alt: "Digital Innovation", type: "square" },
    { id: 12, url: img12, alt: "Sustainable Energy", type: "rectangle" },
    { id: 13, url: img13, alt: "Smart Manufacturing", type: "square" },
    { id: 14, url: img14, alt: "Connected Systems", type: "rectangle" },
  ];

  const duplicatedRow1 = [...imagesRow1, ...imagesRow1];
  const duplicatedRow2 = [...imagesRow2, ...imagesRow2];

  const featureBoxes = [
    {
      title: "SUSTAINABILITY SPOTLIGHT",
      description: "Highlighting our commitment to sustainable mobility solutions that shape a greener future.",
      icon: "https://img.icons8.com/color/96/000000/leaf.png",
      bgColor: "bg-green-100",
    },
    {
      title: "PIONEERING INNOVATION",
      description: "Driving cutting-edge research and innovation in the automotive and technology sectors.",
      icon: "https://img.icons8.com/color/96/000000/light-on.png",
      bgColor: "bg-yellow-100",
    },
    {
      title: "LEADING AUTO TECH PRODUCTS",
      description: "Offering advanced automotive products that redefine mobility and performance standards.",
      icon: "https://img.icons8.com/color/96/000000/gear.png",
      bgColor: "bg-blue-100",
    },
  ];

  const statsData = [
    { number: "8", label: "Countries" },
    { number: "6100", label: "Employees" },
    { number: "37", label: "Operating Manufacturing Facilities" },
    { number: "120+", label: "Patents" },
    { number: "7", label: "Technical Centres" },
  ];

  const technologyCards = [
    {
      id: 1,
      image: tech1,
      title: "Advanced Manufacturing",
      description: "Leveraging robotics and AI for precision, efficiency, and sustainable production.",
      redirectUrl: "/technology/manufacturing"
    },
    {
      id: 2,
      image: tech2,
      title: "Smart Mobility Solutions",
      description: "Integrating IoT and automation to build connected and intelligent transport systems.",
      redirectUrl: "/technology/mobility"
    },
    {
      id: 3,
      image: tech3,
      title: "Sustainable Engineering",
      description: "Innovating eco-friendly designs that reduce waste and carbon footprint.",
      redirectUrl: "/technology/sustainability"
    }
  ];

  const solutionCards = [
    {
      id: 1,
      image: solution1,
      title: "Electric Vehicle Solutions",
      description: "Complete EV powertrain and battery management systems for next-generation mobility.",
      features: ["Battery Management", "Power Electronics", "Charging Systems"],
      redirectUrl: "/solutions/ev"
    },
    {
      id: 2,
      image: solution2,
      title: "Connected Car Technology",
      description: "Advanced telematics and connectivity solutions for smart vehicle ecosystems.",
      features: ["V2X Communication", "OTA Updates", "Fleet Management"],
      redirectUrl: "/solutions/connected-car"
    },
    {
      id: 3,
      image: solution3,
      title: "Autonomous Driving Systems",
      description: "Sensor fusion and AI-driven autonomous driving capabilities for safer roads.",
      features: ["ADAS", "Sensor Fusion", "AI Processing"],
      redirectUrl: "/solutions/autonomous"
    }
  ];

  // Technology-related images for showcase section - Simple and reliable URLs
  const technologyImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Advanced Robotics",
      title: "Robotics & Automation"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "AI Technology",
      title: "Artificial Intelligence"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1593941707882-a5bba5331fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Electric Vehicle",
      title: "EV Technology"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Smart Manufacturing",
      title: "Industry 4.0"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1558618666-fcd2585632d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "IoT Technology",
      title: "Internet of Things"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Data Analytics",
      title: "Big Data Analytics"
    },
    {
      id: 7,
      url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "3D Printing",
      title: "Additive Manufacturing"
    },
    {
      id: 8,
      url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80",
      alt: "Renewable Energy",
      title: "Sustainable Tech"
    }
  ];

  const duplicatedTechnologyImages = [...technologyImages, ...technologyImages];

  // Sustainability data with explore buttons
  const sustainabilityData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      title: "Green Manufacturing",
      description: "Transforming our production processes with eco-friendly technologies and sustainable resource management.",
      features: ["Water Conservation", "Clean Production", "Eco-materials"],
      stats: "60% less water consumption",
      redirectUrl: "/sustainability/manufacturing"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      title: "Eco-Innovation",
      description: "Developing breakthrough technologies that enable sustainable mobility and reduce environmental impact.",
      features: ["Clean Tech R&D", "Eco-design", "Lifecycle Analysis"],
      stats: "25+ green patents filed",
      redirectUrl: "/sustainability/innovation"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=300&q=80",
      title: "Community Impact",
      description: "Creating positive social and environmental impact through community engagement and educational initiatives.",
      features: ["Social Programs", "Education", "Local Development"],
      stats: "50+ communities supported",
      redirectUrl: "/sustainability/community"
    }
  ];

  // Investors Data
  const investorsData = [
    {
      id: 1,
      name: "Global Investment Partners",
      description: "Leading global investment firm with over $50B in assets under management",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80"
    },
    {
      id: 2,
      name: "Tech Growth Ventures",
      description: "Specialized in technology and innovation investments across automotive sector",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80"
    },
    {
      id: 3,
      name: "Sustainable Future Fund",
      description: "Dedicated to environmentally sustainable and socially responsible investments",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80"
    },
    {
      id: 4,
      name: "Innovation Capital",
      description: "Early-stage technology investors focused on mobility and automation",
      logo: "https://images.unsplash.com/photo-1558618666-fcd2585632d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=200&q=80"
    }
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const [hoveredTechCard, setHoveredTechCard] = useState(null);
  const [hoveredSolutionCard, setHoveredSolutionCard] = useState(null);
  const [hoveredSustainabilityCard, setHoveredSustainabilityCard] = useState(null);
  const [highlightedLogo, setHighlightedLogo] = useState(0);

  // Function to handle explore more clicks
  const handleExploreMore = (url) => {
    window.location.href = url;
  };

  // Auto-highlight logos one by one with middle focus
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedLogo((prev) => (prev + 1) % technologyImages.length);
    }, 2000); // Change highlighted logo every 2 seconds

    return () => clearInterval(interval);
  }, [technologyImages.length]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".feature-card");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisibleCards((prev) => [...new Set([...prev, index])]);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen bg-white flex flex-col overflow-hidden">
      <Navbar />

      {/* Main Content Container with Fixed Height */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <div className="text-center mt-16 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide text-blue-700">
            Engineering a Better World
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Through safe, smart, and sustainable mobility solutions — shaping a smarter tomorrow.
          </p>
        </div>

        {/* Scrolling Images Row 1 */}
        <div className="relative w-full overflow-hidden py-3 bg-white mt-6">
          <div className="flex animate-scroll-left items-start gap-2">
            {duplicatedRow1.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className={`flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  image.type === "square" ? "w-[120px] h-[120px]" : "w-[180px] h-[120px]"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=120&fit=crop";
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Scrolling Images Row 2 */}
        <div className="relative w-full overflow-hidden py-3 bg-white mt-2">
          <div className="flex animate-scroll-right items-start gap-2 -mt-2">
            {duplicatedRow2.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className={`flex-shrink-0 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                  image.type === "square" ? "w-[120px] h-[120px]" : "w-[180px] h-[120px]"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=120&h=120&fit=crop";
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Feature Boxes - REMOVED to eliminate gap */}
        {/* <div className="max-w-6xl mx-auto px-4 mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {featureBoxes.map((box, index) => (
            <div
              key={index}
              className={`feature-card flex items-start rounded-lg shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl ${box.bgColor} ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transition: "all 0.5s ease-out" }}
            >
              <div className="flex items-center justify-center w-20 p-2">
                <div className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                  <img
                    src={box.icon}
                    alt={box.title}
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      e.target.src = "https://img.icons8.com/color/96/000000/help.png";
                    }}
                  />
                </div>
              </div>

              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-sm md:text-base font-bold mb-1 text-gray-800">
                  {box.title}
                </h3>
                <p className="text-gray-700 mb-2 flex-1 text-xs">{box.description}</p>
                <button 
                  className="mt-auto inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors group text-xs"
                  onClick={() => handleExploreMore("/sustainability")}
                >
                  Read More
                  <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div> */}

        {/* About Us Section - Directly after images with minimal gap */}
        <div className="max-w-7xl mx-auto px-6 mt-8 text-center"> {/* Reduced from mt-14 to mt-8 */}
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
            ABOUT US
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
           Kodebloom Technology is a global software company focused on designing and developing high-quality digital products for enterprises and startups. Our team blends engineering rigor with user-centered design to create web and mobile apps, cloud platforms, and automation solutions that solve real business problems. We prioritize performance, security, and maintainability delivering products that are easy to adopt and built to grow with your organization.
          </p>
        </div>

        {/* Stats Section - Reduced gap */}
        <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-2 md:grid-cols-5 gap-4 text-center"> {/* Reduced from mt-10 to mt-8 */}
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-4 shadow-md flex flex-col items-center justify-center"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{stat.number}</h3>
              <p className="text-gray-700 text-xs md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Technology Section - Reduced gap */}
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center"> {/* Reduced from mt-14 to mt-12 */}
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">TECHNOLOGY</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologyCards.map((tech) => (
              <div 
                key={tech.id} 
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group"
                onMouseEnter={() => setHoveredTechCard(tech.id)}
                onMouseLeave={() => setHoveredTechCard(null)}
              >
                {/* Image Container with Dynamic Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className={`w-full h-48 object-cover transition-all duration-700 ${
                      hoveredTechCard === tech.id 
                        ? 'scale-110 rotate-1' 
                        : 'scale-100 rotate-0'
                    }`}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop";
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${
                    hoveredTechCard === tech.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Shine Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform transition-all duration-1000 ${
                    hoveredTechCard === tech.id 
                      ? 'translate-x-full opacity-100' 
                      : '-translate-x-full opacity-0'
                  }`}></div>
                </div>

                <div className="p-4 relative z-10">
                  <h3 className="text-lg font-semibold mt-2 text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                    {tech.title}
                  </h3>
                  <p className="text-gray-600 mt-1 px-2 mb-3 text-sm">
                    {tech.description}
                  </p>
                  <button 
                    onClick={() => handleExploreMore(tech.redirectUrl)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group-hover:scale-105 text-sm"
                  >
                    Explore More
                    <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-padding transition-all duration-500 ${
                  hoveredTechCard === tech.id ? 'opacity-100' : 'opacity-0'
                }`} style={{
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '2px'
                }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section - Reduced gap */}
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center"> {/* Reduced from mt-14 to mt-12 */}
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">OUR SOLUTIONS</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutionCards.map((solution) => (
              <div 
                key={solution.id} 
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group"
                onMouseEnter={() => setHoveredSolutionCard(solution.id)}
                onMouseLeave={() => setHoveredSolutionCard(null)}
              >
                {/* Image Container with Dynamic Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className={`w-full h-48 object-cover transition-all duration-700 ${
                      hoveredSolutionCard === solution.id 
                        ? 'scale-110 -rotate-1' 
                        : 'scale-100 rotate-0'
                    }`}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop";
                    }}
                  />
                  
                  {/* Color Overlay */}
                  <div className={`absolute inset-0 mix-blend-overlay transition-all duration-500 ${
                    hoveredSolutionCard === solution.id 
                      ? 'bg-gradient-to-br from-blue-400/30 to-purple-500/30' 
                      : 'bg-transparent'
                  }`}></div>
                  
                  {/* Floating Elements Effect */}
                  <div className={`absolute top-3 right-3 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm transition-all duration-500 transform ${
                    hoveredSolutionCard === solution.id 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-3 opacity-0 scale-75'
                  }`}></div>
                  <div className={`absolute bottom-3 left-3 w-5 h-5 bg-white/20 rounded-full backdrop-blur-sm transition-all duration-500 transform delay-100 ${
                    hoveredSolutionCard === solution.id 
                      ? 'translate-y-0 opacity-100 scale-100' 
                      : 'translate-y-3 opacity-0 scale-75'
                  }`}></div>
                </div>

                <div className="p-4 relative z-10">
                  <h3 className="text-lg font-semibold mt-2 text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mt-1 px-2 mb-3 text-sm">
                    {solution.description}
                  </p>
                  <div className="space-y-1 mb-3">
                    {solution.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-xs text-gray-700 transition-all duration-300 group-hover:text-gray-900 group-hover:translate-x-1"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all duration-300 group-hover:bg-purple-500 group-hover:scale-125"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleExploreMore(solution.redirectUrl)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group-hover:scale-105 text-sm"
                  >
                    Explore Solution
                    <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      →
                    </span>
                  </button>
                </div>

                {/* Animated Background Pattern */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 transition-opacity duration-500 -z-10 ${
                  hoveredSolutionCard === solution.id ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Corner Accents */}
                <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-blue-500 rounded-tl-xl transition-all duration-500 ${
                  hoveredSolutionCard === solution.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-purple-500 rounded-tr-xl transition-all duration-500 ${
                  hoveredSolutionCard === solution.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-blue-500 rounded-bl-xl transition-all duration-500 ${
                  hoveredSolutionCard === solution.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-purple-500 rounded-br-xl transition-all duration-500 ${
                  hoveredSolutionCard === solution.id ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Showcase Section - Reduced gap */}
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center"> {/* Reduced from mt-14 to mt-12 */}
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">TECHNOLOGY SHOWCASE</h3>
          
          <div className="mb-8">
            <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Exploring cutting-edge technologies that drive innovation in automotive and mobility solutions worldwide.
            </p>
          </div>

          {/* Technology Images Carousel */}
          <div className="relative w-full overflow-hidden py-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-inner">
            <div className="flex animate-scroll-medium items-center gap-8 px-6">
              {duplicatedTechnologyImages.map((tech, index) => {
                const isHighlighted = index % technologyImages.length === highlightedLogo;
                const isInMiddleRange = index >= 3 && index <= 5;
                
                return (
                  <div
                    key={`${tech.id}-${index}`}
                    className={`
                      flex-shrink-0 group relative transition-all duration-1000
                      ${isHighlighted && isInMiddleRange ? 'z-20' : 'z-10'}
                    `}
                  >
                    <div className={`
                      relative rounded-xl overflow-hidden shadow-lg transition-all duration-1000 transform
                      ${isHighlighted && isInMiddleRange 
                        ? 'scale-110 bg-white shadow-2xl' 
                        : isInMiddleRange
                        ? 'scale-105 bg-white/90 shadow-lg'
                        : 'scale-95 bg-white/70 shadow-md'
                      }
                      group-hover:scale-110 group-hover:shadow-2xl group-hover:z-30
                    `}>
                      <img
                        src={tech.url}
                        alt={tech.alt}
                        className={`
                          w-64 h-40 object-cover transition-all duration-1000
                          ${isHighlighted && isInMiddleRange 
                            ? 'grayscale-0' 
                            : isInMiddleRange
                            ? 'grayscale-20'
                            : 'grayscale'
                          }
                          group-hover:grayscale-0
                        `}
                        onError={(e) => {
                          console.log("Image failed to load:", tech.url);
                          e.target.src = "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=256&h=160&fit=crop";
                        }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className={`
                          text-white font-semibold text-sm transition-all duration-500
                          ${isHighlighted && isInMiddleRange 
                            ? 'opacity-100 scale-105' 
                            : isInMiddleRange
                            ? 'opacity-90 scale-100'
                            : 'opacity-70 scale-95'
                          }
                          group-hover:opacity-100
                        `}>
                          {tech.title}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-blue-50 via-blue-50/80 to-transparent pointer-events-none" />
          </div>

          {/* Technology Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl p-6 shadow-lg border border-blue-100 transform hover:scale-105 transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                120+
              </div>
              <div className="text-gray-800 font-bold text-base mb-1">Patents Filed</div>
              <p className="text-gray-600 text-xs">Innovative technologies protected worldwide</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 shadow-lg border border-green-100 transform hover:scale-105 transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                7
              </div>
              <div className="text-gray-800 font-bold text-base mb-1">R&D Centers</div>
              <p className="text-gray-600 text-xs">Global research and development facilities</p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 shadow-lg border border-purple-100 transform hover:scale-105 transition-all duration-500">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                15+
              </div>
              <div className="text-gray-800 font-bold text-base mb-1">Years of Innovation</div>
              <p className="text-gray-600 text-xs">Pioneering automotive technology solutions</p>
            </div>
          </div>
        </div>

        {/* Sustainability Section - Reduced gap */}
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center"> {/* Reduced from mt-14 to mt-12 */}
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">SUSTAINABILITY</h3>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-3xl mx-auto">
            Committed to environmental stewardship, social responsibility, and sustainable innovation 
            that drives positive change for our planet and communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sustainabilityData.map((item) => (
              <div 
                key={item.id}
                className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white group"
                onMouseEnter={() => setHoveredSustainabilityCard(item.id)}
                onMouseLeave={() => setHoveredSustainabilityCard(null)}
              >
                {/* Image Container with Dynamic Effects */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-48 object-cover transition-all duration-700 ${
                      hoveredSustainabilityCard === item.id 
                        ? 'scale-110 rotate-1' 
                        : 'scale-100 rotate-0'
                    }`}
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop";
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 ${
                    hoveredSustainabilityCard === item.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      {item.stats}
                    </div>
                  </div>
                </div>

                <div className="p-4 relative z-10">
                  <h3 className="text-lg font-semibold mt-2 text-gray-800 transition-colors duration-300 group-hover:text-blue-700">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 px-2 mb-3 text-sm">
                    {item.description}
                  </p>
                  <div className="space-y-1 mb-3">
                    {item.features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-center text-xs text-gray-700 transition-all duration-300 group-hover:text-gray-900 group-hover:translate-x-1"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 transition-all duration-300 group-hover:bg-blue-600 group-hover:scale-125"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <button 
                    onClick={() => handleExploreMore(item.redirectUrl)}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-all duration-300 group-hover:scale-105 text-sm"
                  >
                    Explore More
                    <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110">
                      →
                    </span>
                  </button>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-padding transition-all duration-500 ${
                  hoveredSustainabilityCard === item.id ? 'opacity-100' : 'opacity-0'
                }`} style={{
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'exclude',
                  WebkitMaskComposite: 'xor',
                  padding: '2px'
                }}></div>
              </div>
            ))}
          </div>

          {/* Sustainability Stats */}
          <div className="mt-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-inner">
            <h4 className="text-xl font-bold text-gray-800 mb-6">Our Sustainability Impact</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">45%</div>
                <div className="text-sm text-gray-700">Carbon Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-sm text-gray-700">Recycling Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">60%</div>
                <div className="text-sm text-gray-700">Water Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-700">Green Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Investors Section - Reduced gap */}
        <div className="max-w-7xl mx-auto px-6 mt-12 text-center"> {/* Reduced from mt-14 to mt-12 */}
          <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">INVESTORS</h3>
          <p className="text-gray-600 text-sm md:text-base mb-8 max-w-3xl mx-auto">
            Trusted by leading global investment firms and financial partners who believe in our vision 
            for the future of automotive technology and sustainable mobility.
          </p>

          {/* Large Investor Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 group">
            <div className="relative h-96 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80"
                alt="Global Investment Partners"
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&h=600&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/70"></div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl border border-white/30">
                  <h4 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Global Investment Leadership
                  </h4>
                  <p className="text-lg md:text-xl mb-6 text-blue-100 leading-relaxed">
                    Partnering with world-class investors to drive innovation and sustainable growth 
                    in the automotive technology sector.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">$2.5B+</div>
                      <div className="text-blue-200 text-sm">Total Investments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">15+</div>
                      <div className="text-blue-200 text-sm">Investment Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">8.2%</div>
                      <div className="text-blue-200 text-sm">Average Annual Growth</div>
                    </div>
                  </div>
                  <button 
                    onClick={() => handleExploreMore("/investors")}
                    className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Investor Relations
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Logos Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {investorsData.map((investor) => (
              <div 
                key={investor.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 group"
              >
                <div className="relative h-24 mb-4 flex items-center justify-center">
                  <img
                    src={investor.logo}
                    alt={investor.name}
                    className="max-h-16 max-w-full object-contain transition-all duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop";
                    }}
                  />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-sm md:text-base group-hover:text-blue-700 transition-colors">
                  {investor.name}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {investor.description}
                </p>
              </div>
            ))}
          </div>

          {/* Investor Stats */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-inner">
            <h4 className="text-xl font-bold text-gray-800 mb-8">Investment Performance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">24.5%</div>
                <div className="text-sm text-gray-700 font-semibold">ROI (5 Years)</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">$850M</div>
                <div className="text-sm text-gray-700 font-semibold">Market Cap Growth</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">12.3%</div>
                <div className="text-sm text-gray-700 font-semibold">Dividend Yield</div>
              </div>
              <div className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-sm text-gray-700 font-semibold">Investor Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        <Footer/>
      </div>

      {/* Scroll Animations */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes scrollMedium {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          display: flex;
          animation: scrollLeft 30s linear infinite;
        }
        .animate-scroll-right {
          display: flex;
          animation: scrollRight 30s linear infinite;
        }
        .animate-scroll-medium {
          display: flex;
          animation: scrollMedium 40s linear infinite;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover,
        .animate-scroll-medium:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Home;