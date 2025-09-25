import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < 50) {
        setShowNavbar(true);
      } else {
        setShowNavbar(prevScrollPos > currentScrollPos);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } bg-white shadow-md`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-extrabold tracking-wide">
          <Link to="/">FOXPLORE TRAVELS</Link>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold relative">
          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("destinations")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
              Destinations <ChevronDown size={16} />
            </div>
            {openDropdown === "destinations" && (
              <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48">
                <a href="/tour/india" className="block px-4 py-2 hover:bg-gray-100">India</a>
                <a href="/tour/nepal" className="block px-4 py-2 hover:bg-gray-100">Nepal</a>
                <a href="/tour/bhutan" className="block px-4 py-2 hover:bg-gray-100">Bhutan</a>
                <a href="/tour/indonesia" className="block px-4 py-2 hover:bg-gray-100">Indonesia</a>
                <a href="/tour/thailand" className="block px-4 py-2 hover:bg-gray-100">Thailand</a>
                <a href="/tour/maldives" className="block px-4 py-2 hover:bg-gray-100">Maldives</a>
                <a href="/tour/azerbaijan" className="block px-4 py-2 hover:bg-gray-100">Azerbaijan</a>
                <a href="/tour/kazakhistan" className="block px-4 py-2 hover:bg-gray-100">Kazakhistan</a>
                <a href="/tour/europe" className="block px-4 py-2 hover:bg-gray-100">Europe</a>
                <a href="/tour/turkey" className="block px-4 py-2 hover:bg-gray-100">Turkey</a>
                <a href="" className="block px-4 py-2 hover:bg-gray-100">Many More..</a>
              </div>
            )}
          </div>

          {/* Travel Themes Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("themes")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
              India Travel Themes <ChevronDown size={16} />
            </div>
            {openDropdown === "themes" && (
              <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48">
                <a href="/tour/tajmahal" className="block px-4 py-2 hover:bg-gray-100">Taj Mahal</a>
                <a href="/tour/wildlife" className="block px-4 py-2 hover:bg-gray-100">Wildlife</a>
                <a href="/tour/spiritual" className="block px-4 py-2 hover:bg-gray-100">Spiritual</a>
                <a href="/tour/wellness" className="block px-4 py-2 hover:bg-gray-100">Wellness</a>
                <a href="/tour/culinary" className="block px-4 py-2 hover:bg-gray-100">Culinary</a>
                <a href="/tour/festival" className="block px-4 py-2 hover:bg-gray-100">Festival</a>
                <a href="/tour/textile" className="block px-4 py-2 hover:bg-gray-100">Textile</a>
                <a href="/tour/photography" className="block px-4 py-2 hover:bg-gray-100">Photography</a>
                <a href="/tour/ayurveda" className="block px-4 py-2 hover:bg-gray-100">Ayurveda</a>
                <a href="/tour/luxury" className="block px-4 py-2 hover:bg-gray-100">Luxury</a>
                <a href="/tour/yogameditation" className="block px-4 py-2 hover:bg-gray-100">Yoga and Meditation</a>
                <a href="/tour/hillstation" className="block px-4 py-2 hover:bg-gray-100">Hills Station</a>
                <a href="/tour/family" className="block px-4 py-2 hover:bg-gray-100">Family</a>
                <a href="/tour/honeymoon" className="block px-4 py-2 hover:bg-gray-100">Honeymoon</a>
                <a href="/tour/womenspecial" className="block px-4 py-2 hover:bg-gray-100">Women Special</a>
                <a href="/tour/firsttimers" className="block px-4 py-2 hover:bg-gray-100">First Timers</a>
              </div>
            )}
          </div>

          <Link to="/gallery" className="hover:text-red-600">Gallery</Link>

          {/* Special Offers Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("offers")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
              Special Offers - BestSelling <ChevronDown size={16} />
            </div>
            {openDropdown === "offers" && (
              <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48">
                <a href="/tour/mgt" className="block px-4 py-2 hover:bg-gray-100">Magnificent Golden Triangle</a>
                <a href="/tour/rrt" className="block px-4 py-2 hover:bg-gray-100">Royal Rajasthan Tour</a>
                <a href="/tour/gtwk" className="block px-4 py-2 hover:bg-gray-100">Golden Triangle with Khajuraho and Varanasi</a>
                <a href="/tour/hit" className="block px-4 py-2 hover:bg-gray-100">Heritage India Tour</a>
                <a href="/tour/egt" className="block px-4 py-2 hover:bg-gray-100">Exotic Goa Tour</a>
                <a href="/tour/gtwyt" className="block px-4 py-2 hover:bg-gray-100">Golden Triangle with Yoga Tour</a>
                <a href="/tour/kbt" className="block px-4 py-2 hover:bg-gray-100">Kerala Backwater Tour</a>
                <a href="/tour/tntt" className="block px-4 py-2 hover:bg-gray-100">Tamil Nadu Temple Tour</a>
                <a href="/tour/wtoi" className="block px-4 py-2 hover:bg-gray-100">Wildlife Tour of India</a>
                <a href="/tour/yamwgt" className="block px-4 py-2 hover:bg-gray-100">Yoga and Meditation with Ganges Tour</a>
                <a href="/tour/ttoi" className="block px-4 py-2 hover:bg-gray-100">Textile Tours of India</a>
              </div>
            )}
          </div>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("aboutus")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
              About Us <ChevronDown size={16} />
            </div>
            {openDropdown === "aboutus" && (
              <div className="absolute bg-white shadow-md rounded-md mt-2 py-2 w-48">
                <a href="/whoweare" className="block px-4 py-2 hover:bg-gray-100">Who We Are</a>
                <a href="/guestexp" className="block px-4 py-2 hover:bg-gray-100">Guest Experience</a>
                <a href="/contactus" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <div className="flex flex-col space-y-4 px-6 mt-6 font-semibold text-lg">
          {/* Mobile Dropdowns */}
          <div>
            <button
              onClick={() => toggleDropdown("destinations")}
              className="flex justify-between items-center w-full"
            >
              Destinations <ChevronDown size={18} />
            </button>
            {openDropdown === "destinations" && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <a href="/tour/india" onClick={() => setIsOpen(false)}>India</a><br />
                <a href="/tour/nepal" onClick={() => setIsOpen(false)}>Nepal</a><br />
                <a href="/tour/bhutan" onClick={() => setIsOpen(false)}>Bhutan</a><br />
                <a href="/tour/indonesia" onClick={() => setIsOpen(false)}>Indonesia</a><br />
                <a href="/tour/thailand" onClick={() => setIsOpen(false)}>Thailand</a><br />
                <a href="/tour/maldives" onClick={() => setIsOpen(false)}>Maldives</a><br />
                <a href="/tour/azerbaijan" onClick={() => setIsOpen(false)}>Azerbaijan</a><br />
                <a href="/tour/kazakhistan" onClick={() => setIsOpen(false)}>Kazakhistan</a><br />
                <a href="/tour/europe" onClick={() => setIsOpen(false)}>Europe</a><br />
                <a href="/tour/turkey" onClick={() => setIsOpen(false)}>Turkey</a><br />
                <a href="" onClick={() => setIsOpen(false)}>And Many More</a><br />
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleDropdown("themes")}
              className="flex justify-between items-center w-full"
            >
              India Travel Themes <ChevronDown size={18} />
            </button>
            {openDropdown === "themes" && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <a href="/tour/tajmahal" onClick={() => setIsOpen(false)}>Taj Mahal</a><br />
                <a href="/tour/wildlife" onClick={() => setIsOpen(false)}>Wildlife</a><br />
                <a href="/tour/spiritual" onClick={() => setIsOpen(false)}>Spiritual</a><br />
                <a href="/tour/wellness" onClick={() => setIsOpen(false)}>Wellness</a><br />
                <a href="/tour/culinary" onClick={() => setIsOpen(false)}>Culinary</a><br />
                <a href="/tour/festival" onClick={() => setIsOpen(false)}>Festival</a><br />
                <a href="/tour/textile" onClick={() => setIsOpen(false)}>Textile</a><br />
                <a href="/tour/photography" onClick={() => setIsOpen(false)}>Photography</a><br />
                <a href="/tour/ayurveda" onClick={() => setIsOpen(false)}>Ayurveda</a><br />
                <a href="/tour/luxury" onClick={() => setIsOpen(false)}>Luxury</a><br />
                <a href="/tour/yogameditation" onClick={() => setIsOpen(false)}>Yoga and Meditation</a><br />
                <a href="/tour/hillstation" onClick={() => setIsOpen(false)}>Hills Station</a><br />
                <a href="/tour/family" onClick={() => setIsOpen(false)}>Family</a><br />
                <a href="/tour/honeymoon" onClick={() => setIsOpen(false)}>Honeymoon</a><br />
                <a href="/tour/womenspecial" onClick={() => setIsOpen(false)}>Women Special</a><br />
                <a href="/tour/firsttimers" onClick={() => setIsOpen(false)}>First Timers</a><br />
              </div>
            )}
          </div>
          <a href="/inspired" onClick={() => setIsOpen(false)}>Gallery</a>
          {/* <a href="/tour/offers" onClick={() => setIsOpen(false)}>Special Trips</a> */}
          <div>
            <button
              onClick={() => toggleDropdown("offers")}
              className="flex justify-between items-center w-full"
            >
              Special Offers <ChevronDown size={18} />
            </button>
            {openDropdown === "offers" && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <Link to="/tour/mgt" onClick={() => setIsOpen(false)}>Magnificent Golden Triangle</Link><br />
                <Link to="/tour/rrt" onClick={() => setIsOpen(false)}>Royal Rajasthan Tour</Link><br />
                <Link to="/tour/gtwk" onClick={() => setIsOpen(false)}>Golden Triangle with Khajuraho and Varanasi</Link><br />
                <Link to="/tour/hit" onClick={() => setIsOpen(false)}>Heritage India Tour</Link><br />
                <Link to="/tour/egt" onClick={() => setIsOpen(false)}>Exotic Goa Tour</Link><br />
                <Link to="/tour/gtwyt" onClick={() => setIsOpen(false)}>Golden Triangle with Yoga Tour</Link><br />
                <Link to="/tour/kbt" onClick={() => setIsOpen(false)}>Kerala Backwater Tour</Link><br />
                <Link to="/tour/tntt" onClick={() => setIsOpen(false)}>Tamil Nadu Temple Tour</Link><br />
                <Link to="/tour/wtoi" onClick={() => setIsOpen(false)}>Wildlife Tour of India</Link><br />
                <Link to="/tour/yamwgt" onClick={() => setIsOpen(false)}>Yoga and Meditation with Ganges Tour</Link><br />
                <Link to="/tour/ttoi" onClick={() => setIsOpen(false)}>Textile Tours of India</Link><br />
              </div>
            )}
          </div>

          {/* <a href="/tour/about" onClick={() => setIsOpen(false)}>About Us</a> */}
          <div>
            <button
              onClick={() => toggleDropdown("aboutus")}
              className="flex justify-between items-center w-full"
            >
              About Us <ChevronDown size={18} />
            </button>
            {openDropdown === "aboutus" && (
              <div className="ml-4 mt-2 space-y-2 transition-all">
                <a href="/whoweare" onClick={() => setIsOpen(false)}>Who We Are</a><br />
                <a href="/guestexp" onClick={() => setIsOpen(false)}>Guest Experience</a><br />
                <a href="/contactus" onClick={() => setIsOpen(false)}>Contact Us</a><br />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
