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
      description:
        "Highlighting our commitment to sustainable mobility solutions that shape a greener future.",
      icon: "https://img.icons8.com/color/96/000000/leaf.png",
      bgColor: "bg-green-100",
    },
    {
      title: "PIONEERING INNOVATION",
      description:
        "Driving cutting-edge research and innovation in the automotive and technology sectors.",
      icon: "https://img.icons8.com/color/96/000000/light-on.png",
      bgColor: "bg-yellow-100",
    },
    {
      title: "LEADING AUTO TECH PRODUCTS",
      description:
        "Offering advanced automotive products that redefine mobility and performance standards.",
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

  const [visibleCards, setVisibleCards] = useState([]);

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
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="text-center mt-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide text-blue-700">
          Engineering a Better World
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Through safe, smart, and sustainable mobility solutions — shaping a smarter
          tomorrow.
        </p>
      </div>

      {/* Section Title */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Technology Updates
        </h2>
      </div>

      {/* Scrolling Images - Row 1 */}
      <div className="relative w-full overflow-hidden py-6 bg-white mt-8">
        <div className="flex animate-scroll-left items-start gap-3">
          {duplicatedRow1.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={`flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                image.type === "square"
                  ? "w-[160px] h-[160px]"
                  : "w-[230px] h-[160px]"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Scrolling Images - Row 2 */}
      <div className="relative w-full overflow-hidden py-6 bg-white mt-6">
        <div className="flex animate-scroll-right items-start gap-3 -mt-6">
          {duplicatedRow2.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className={`flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                image.type === "square"
                  ? "w-[160px] h-[160px]"
                  : "w-[230px] h-[160px]"
              }`}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>

      {/* Feature Boxes */}
      <div className="max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureBoxes.map((box, index) => (
          <div
            key={index}
            className={`feature-card flex items-start rounded-xl shadow-lg transition-all duration-500 transform hover:-translate-y-1 hover:shadow-xl ${box.bgColor} ${
              visibleCards.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transition: "all 0.5s ease-out" }}
          >
            <div className="flex items-center justify-center w-24 p-3">
              <div className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-500 flex items-center justify-center">
                <img
                  src={box.icon}
                  alt={box.title}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg md:text-lg font-bold mb-1 text-gray-800">
                {box.title}
              </h3>
              <p className="text-gray-700 mb-3 flex-1 text-sm">{box.description}</p>
              <button className="mt-auto inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors group text-sm">
                Read More
                <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* About Us Section */}
      <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">ABOUT US</h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Varroc is a leading global auto technology company with a product portfolio
          covering a wide range of electrical, electronics, lighting, polymer, metallic,
          aftermarket and advanced safety solutions.
        </p>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-6 shadow-md flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
            <p className="text-gray-700 text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>

      <Footer />

      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left { display: flex; animation: scrollLeft 40s linear infinite; }
        .animate-scroll-right { display: flex; animation: scrollRight 40s linear infinite; }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
};

export default Home;
