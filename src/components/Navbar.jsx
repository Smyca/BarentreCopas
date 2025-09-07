import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-12 w-12 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight font-bold">Bar Entre Copas y Ruedas</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-orange-600 transition">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Animated dropdown menu */}
        <div
          className={`mt-3
            absolute top-full left-0 w-full z-40
            flex flex-col items-center
            transition-all duration-300 ease-in-out
            ${mobileDrawerOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-8 pointer-events-none'
            }
            bg-black border-t-2 border-b-2 border-orange-600 shadow-xl rounded-b-xl
          `}
        >
          <ul className="flex flex-col items-center py-8 space-y-7 w-full">
            {navItems.map((item, index) => (
              <li key={index} className="w-full text-center">
                <a
                  href={item.href}
                  className="text-white text-lg hover:text-orange-500 transition font-medium"
                  onClick={() => setMobileDrawerOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;