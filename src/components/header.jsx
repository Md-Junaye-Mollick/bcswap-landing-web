import React, { useEffect, useState } from "react";
import ToggleTheme from "./toggle-theme";
import { Link } from "react-scroll";
import { Link as Redirect } from "react-router";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

const headerOptions = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Features", id: "features" },
  { label: "Explorer", id: "explorer" },
];

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getLogo = () => {
    if (!mounted) return null;
    return theme === "dark" || theme === "dim"
      ? "/images/logo-dark.png"
      : "/images/logo-light.png";
  };

  return (
    <header
      className={`w-full bg-card z-50 relative border-b border-custom-border`}
    >
      <div className="flex justify-between items-center p-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="w-40">
          <Redirect to="/">
            {mounted && <img src={getLogo()} alt="BC Swap Logo" />}
          </Redirect>
        </div>

        <div className="flex items-center gap-10">
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 items-center">
            {headerOptions.map((option) => (
              <Link
                key={option.id}
                to={option.id}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
              >
                {option.label}
              </Link>
            ))}

            {/* Feedback Button */}
            <button>Feedback</button>
          </nav>
          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 justify-center">
            <ToggleTheme />
            <div className="md:hidden flex justify-center items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full shadow-lg bg-card border-t border-custom-border flex flex-col items-center py-6 gap-6 z-40">
          {headerOptions.map((option) => (
            <Link
              key={option.id}
              to={option.id}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium cursor-pointer hover:text-blue-500 transition"
            >
              {option.label}
            </Link>
          ))}

          {/* Mobile Feedback Button */}
          <button className="text-lg font-medium cursor-pointer hover:text-blue-500 transition">
            Feedback
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
