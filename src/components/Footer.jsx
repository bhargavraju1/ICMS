import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "oklch(13% 0.028 261.692)" }}
      className="text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* 🔹 Social Media Icons (Top Section) */}
        <div className="absolute top-4 right-16 flex space-x-4 text-xl">
          <a href="https://www.linkedin.com/company/kodebloom-technology/posts/?feedView=all" className="hover:text-blue-400 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com/company/kodebloom-technology/posts/?feedView=all" className="hover:text-blue-500 transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="https://www.linkedin.com/company/kodebloom-technology/posts/?feedView=all" className="hover:text-sky-400 transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/company/kodebloom-technology/posts/?feedView=all" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/kodebloom-technology/posts/?feedView=all" className="hover:text-red-500 transition-colors">
            <FaYoutube />
          </a>
        </div>

        {/* 🔹 Thick Full-Width White Separator Line */}
        <div className="absolute top-14 left-0 w-full border-b-4 border-white"></div>

        {/* 🔹 Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-20">
          {/* Column 1 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                {[
                  "Overview",
                  "Leadership Team",
                  "Business Locations",
                  "Our Vision",
                  "Awards",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Investors</h3>
              <ul className="space-y-2">
                {[
                  "Dashboard",
                  "Financial Results",
                  "Shareholders Information",
                  "Corporate Governance",
                  "Regulatory Filings",
                  "Board of Directors & Committees",
                  "Investor Contact",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                {[
                  "ICE Investment Solutions",
                  "E-Mobility Solutions",
                  "Lighting Solutions",
                  "HHI Solutions",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Careers</h3>
              <ul className="space-y-2">
                {[
                  "Work @ Kodebloom Technology",
                  "Life @ Kodebloom Technology",
                  "Talent Development",
                  "Early Talent Programme",
                  "Join us",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
              <ul className="space-y-2">
                {[
                  "Safe Mobility",
                  "Smart Mobility",
                  "Sustainable Mobility",
                  "Capabilities in Product Development",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Media</h3>
              <ul className="space-y-2">
                {["In The News", "Gallery", "Media Kit", "Media Contact"].map(
                  (item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-gray-300 transition-colors text-base">
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Column 4 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <ul className="space-y-2">
                {[
                  "Commitment to Environment",
                  "Commitment to Society",
                  "Commitment to Governance",
                  "Our ESG Framework",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Blogs</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors text-base">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                Specialised Offerings
              </h3>
              <ul className="space-y-2">
                {[
                  "Telematics Platform",
                  "Fleet Management Solutions",
                  "Aftermarket solutions",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-gray-300 transition-colors text-base">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact us</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors text-base">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 🔹 Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-base mb-4 md:mb-0 text-center md:text-left">
              <p>
                Copyright © 2025 Kodebloom Technology Group. All rights reserved. | kodebloom is a
                registered trademark of Kodebloom Technology Group.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-base">Contact By</span>
              <span className="text-base">©Kodebloom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
