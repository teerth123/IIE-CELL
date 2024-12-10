import React, { useState, useEffect } from "react";
import gsap from "gsap";

export default function App() {
  const [menu, setMenu] = useState(false); // Use boolean for easier toggling

  // Toggle the mobile menu visibility
  function clicked() {
    setMenu(prev => !prev);
  }

  useEffect(() => {
    const tl1 = gsap.timeline();

    tl1.fromTo(
      '.navbar',
      { width: '90%', y: -50, opacity: 0 },
      { duration: 1, width: '90%', y: 0, opacity: 1 }
    );

    tl1.to('.navbar', {
      duration: 1,
      width: '50%'
    });
  }, []);

  return (
    <div
      className="navbar fixed top-8 left-1/2 transform -translate-x-1/2 bg-[#09080b] rounded-full px-2 font-inter justify-between items-center flex shadow-sm w-[90vw] text-white z-30"
    >
      {/* Left Side of the Navbar */}
      <div className="flex items-center">
        <div className="w-5 h-5 rounded-full bg-[#f6f9f8]"></div>
        <h1 className="text font-extrabold text-lg py-2 cursor-pointer ml-2">
          IIE Cell WCE
        </h1>
      </div>

      {/* Right Side of the Navbar (Links) */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 items-center">
        {/* Regular Navbar Links */}
        <h1 className="text mx-2 py-2 cursor-pointer hover:text-gray-600 transition-colors text-sm xs:hidden sm:block">
          Events
        </h1>
        <h1 className="text mx-2 py-2 cursor-pointer hover:text-gray-600 transition-colors text-sm xs:hidden sm:block">
          Blogs
        </h1>

        {/* Mobile menu toggle button */}
        <div onClick={clicked} className="cursor-pointer flex justify-center sm:block md:block lg:hidden">
          ==
        </div>

        {/* Mobile Menu (Appears on clicking ==) */}
        <div
          className={`  lg:hidden ${
            menu ? "block" : "hidden"
          } absolute top-16 left-1/2 transform -translate-x-1/2 bg-[#09080b] w-4/5 p-4 rounded-lg`}
        >
          <ul>
            {/* Mobile Links */}
            <li className="py-2">
              <a
                className="text-white hover:text-gray-600 transition-colors sm:hidden"
                href="/internship"
              >
                Events
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-white hover:text-gray-600 transition-colors sm:hidden"
                href="/internship"
              >
                Blogs
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-white hover:text-gray-600 transition-colors"
                href="/internship"
              >
                Internship
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-white hover:text-gray-600 transition-colors"
                href="/register-startup"
              >
                Startup
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-white hover:text-gray-600 transition-colors"
                href="/team"
              >
                Team
              </a>
            </li>
            <li className="py-2">
              <a
                className="text-white hover:text-gray-600 transition-colors"
                href="/contact-us"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop View Links */}
        <h1 className={`text mx-2 py-2 cursor-pointer hover:text-gray-600 transition-colors text-sm xs:hidden sm:hidden md:hidden lg:block `}>
          Internship
        </h1>
        <h1 className={`text mx-2 py-2 cursor-pointer hover:text-gray-600 transition-colors text-sm xs:hidden sm:hidden md:hidden lg:block  `}>
          Startup
        </h1>
        <h1 className={`text mx-2 py-2 cursor-pointer hover:text-gray-600 transition-colors text-sm xs:hidden sm:hidden md:hidden lg:block  `}>
          Team
        </h1>
        <div className={`text bg-[#e6e6e6] rounded-[114px] px-2 justify-center align-center text-black mx-2 cursor-pointer hover:bg-gray-800 transition-colors text-sm xs:hidden sm:hidden md:hidden lg:block `}>
          Contact
        </div>
      </div>
    </div>
  );
}