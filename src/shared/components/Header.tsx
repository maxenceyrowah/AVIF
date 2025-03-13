import { useState } from "react";
import { Menu, Shield, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import { MENUS } from "../configs";

const HeaderComponent = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  // New function to handle menu item clicks
  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-black text-white fixed w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link
              to="/acceuil"
              className="flex items-center"
              onClick={handleMenuItemClick}
            >
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold">AVIF</span>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {MENUS.map((item) => (
              <div
                key={item.name}
                className="relative group text-xl cursor-pointer"
              >
                <Link
                  to={item.path}
                  className="text-white hover:text-primary transition py-2 flex items-center"
                >
                  {item.name}
                  {item.submenu && item.submenu.length > 0 && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>

                {item.submenu && item.submenu.length > 0 && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-black border border-gray-800 shadow-lg z-10 
                                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 text-lg"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-primary transition-all duration-200"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/faire-un-don"
              className="bg-primary text-black font-bold py-2 px-6 hover:bg-yellow-300 transition duration-300 ml-2 
                              hover:shadow-lg hover:scale-105 transform inline-block"
            >
              FAIRE UN DON
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black animate-fadeIn">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {MENUS.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.path}
                      className="text-white hover:text-primary transition py-2 flex-grow"
                      onClick={handleMenuItemClick}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && item.submenu.length > 0 && (
                      <button
                        className="text-white hover:text-primary p-2"
                        onClick={() => toggleDropdown(item.name)}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.submenu &&
                    item.submenu.length > 0 &&
                    activeDropdown === item.name && (
                      <div className="pl-4 space-y-2 border-l border-gray-700 animate-slideDown">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block py-2 text-gray-300 hover:text-yellow-400 transition-all duration-200"
                            onClick={handleMenuItemClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
              <Link
                to="/faire-un-don"
                className="bg-yellow-400 text-black font-bold py-2 px-6 hover:bg-yellow-300 transition duration-300 w-full mt-4
                              hover:shadow-lg transform hover:scale-105 text-center block"
                onClick={handleMenuItemClick}
              >
                FAIRE UN DON
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
