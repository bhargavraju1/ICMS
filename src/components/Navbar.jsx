import React from "react";
import logo from "../assets/KODEBLOOM.jpeg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-1 px-8">
      <div className="container mx-auto flex flex-col -mt-1">
        {/* Top row: Logo + Main Menu */}
        <div className="flex justify-between items-center mb-0 -mt-1">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <img
              src={logo}
              alt="KodeBloom Logo"
              className="w-[90px] h-[85px] object-cover rounded-[50%/60%]"
            />
          </div>

          {/* Top Main Menu */}
          <div className="flex items-center text-gray-600 text-[13px] font-medium -mt-2">
            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors">About Us</button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg shadow-md w-60 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                <a href="https://kodebloom.com/?page_id=411" className="block px-4 py-2 hover:bg-gray-100">Overview</a>
                <a href="https://kodebloom.com/?p=477" className="block px-4 py-2 hover:bg-gray-100">Leadership Team</a>
                <a href="https://kodebloom.com/#" className="block px-4 py-2 hover:bg-gray-100">Business Location</a>
                <a href="https://kodebloom.com/#" className="block px-4 py-2 hover:bg-gray-100">Our Vision</a>
                <a href="https://kodebloom.com/#" className="block px-4 py-2 hover:bg-gray-100">Awards</a>
                <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
              </div>
            </div>

            <span className="mx-2 text-gray-400">|</span>

            {/* Media Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors">Media</button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg shadow-md w-60 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                <a href="https://www.google.com/search?sca_esv=47b6b848a0a925b4&sxsrf=AE3TifPjlwie03Fatk9jG1nS8JqemIHf4w:1763968861450&udm=2&fbs=AIIjpHw8E4NgCV5vjTpYldhMg2BBfIMmA7z9kYRke6sDwVV0fom4jye1L2WGuPUDEpgwrM59CwJKJlJkgNvGxWr2VWFzyoS86tttIcDr_CaMnj1CZqjYqtZDnpbVdUboIr0V625aTeCS5JpRtjB5e-2ri64jAC0gDZw2NNdnbNACnUd1DLhsIbB5vX4HZeEjLODpgroCXl5I6smbxVU8LySEIz8I3Nv8uwLo5CzmeWpf9-EE0HXuhcZr__57O-VIFM1Gd0dnFSQEbo0sE3Bdp31E_AERP8DF2A&q=kodebloom+technology+and+private+limited+gallery&sa=X&ved=2ahUKEwizv4aLoIqRAxUFSWwGHeiCLBsQtKgLegQICxAB&biw=1280&bih=585&dpr=1.5" className="block px-4 py-2 hover:bg-gray-100">News</a>
                <a href="https://www.google.com/search?sca_esv=47b6b848a0a925b4&sxsrf=AE3TifPjlwie03Fatk9jG1nS8JqemIHf4w:1763968861450&udm=2&fbs=AIIjpHw8E4NgCV5vjTpYldhMg2BBfIMmA7z9kYRke6sDwVV0fom4jye1L2WGuPUDEpgwrM59CwJKJlJkgNvGxWr2VWFzyoS86tttIcDr_CaMnj1CZqjYqtZDnpbVdUboIr0V625aTeCS5JpRtjB5e-2ri64jAC0gDZw2NNdnbNACnUd1DLhsIbB5vX4HZeEjLODpgroCXl5I6smbxVU8LySEIz8I3Nv8uwLo5CzmeWpf9-EE0HXuhcZr__57O-VIFM1Gd0dnFSQEbo0sE3Bdp31E_AERP8DF2A&q=kodebloom+technology+and+private+limited+gallery&sa=X&ved=2ahUKEwizv4aLoIqRAxUFSWwGHeiCLBsQtKgLegQICxAB&biw=1280&bih=585&dpr=1.5" className="block px-4 py-2 hover:bg-gray-100">Gallery</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Media Kit</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Media Contest</a>
                <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
              </div>
            </div>

            <span className="mx-2 text-gray-400">|</span>

            {/* Blogs */}
            <a href="#" className="hover:text-blue-600 transition-colors">Blogs</a>

            <span className="mx-2 text-gray-400">|</span>

            {/* Specialized Offerings Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-600 transition-colors">Specialized Offerings</button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-1 bg-white rounded-lg shadow-md w-60 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Automotive Lighting</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Electronics</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Mechatronics</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Cloud Systems</a>
                <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
              </div>
            </div>

            <span className="mx-2 text-gray-400">|</span>

            {/* Contact Us */}
            <a href="https://kodebloom.com/?page_id=666" className="hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Bottom row: Submenus aligned to the right */}
        <div className="flex justify-end items-center text-gray-600 text-[16px] font-medium -mt-4 space-x-4">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors">Solutions</button>
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">ICE Powertrain Solutions</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">E-mobility Solutions</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Lighting Solutions</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">HMI Solutions</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Body System Solutions</a>
              <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
            </div>
          </div>
          <span className="text-gray-400">|</span>
          {/* these is for only builidng the only user interfaces */}

          {/* Technology Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors">Technology</button>
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Overview</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Safe Mobility</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Smart Mobility</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Sustainable Mobility</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Capabilities in Product Development</a>
              <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
            </div>
          </div>
          <span className="text-gray-400">|</span>

          {/* Sustainability Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors">Sustainability</button>
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Overview</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our ESG Framework</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Commitment to Environment</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Commitment to Society</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Commitment to Governance</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our ESG Profile</a>
              <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
            </div>
          </div>
          <span className="text-gray-400">|</span>

          {/* Investors Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors">Investors</button>
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Financial Results</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shareholder Information</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Corporate Governance</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Regulatory Finance</a>
              <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
            </div>
          </div>
          <span className="text-gray-400">|</span>

          {/* Careers Dropdown */}
          <div className="relative group">
            <button className="hover:text-blue-600 transition-colors">Careers</button>
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md w-64 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Work @ KodeBloom</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Life @ KodeBloom</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Talent Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Early Talent Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Join Us</a>
              <div className="h-1 w-full bg-sky-400 rounded-b-lg mt-1"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
