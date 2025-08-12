import React, { useState } from "react";
import ToggleTheme from "./toggle-theme";
import { Link } from "react-scroll";
import { Link as Redirect } from "react-router";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import logoicon from '../../public/images/logo-icon.png';

const headerOptions = [
  { label: "Home", id: "home", type: "scroll" },
  { label: "Massage", id: "about", type: "scroll" },
  { label: "Roadmap", id: "features", type: "scroll" },
  { label: "Explorar", id: "explorer", type: "scroll" },
  { label: "Lightpaper", id: "lightpaper", type: "scroll" },
  { label: "Contact Us", id: "/contact-us", type: "page" },
];

const Header = () => {
  const { theme } = useTheme();
  const currentTheme = theme || "light";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderNavLink = (option) => {
    if (option.type === "page") {
      return (
        <Redirect
          key={option.id}
          to={option.id}
          className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
        >
          {option.label}
        </Redirect>
      );
    } else {
      return (
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
      );
    }
  };

  const renderMobileNavLink = (option) => {
    if (option.type === "page") {
      return (
        <Redirect
          key={option.id}
          to={option.id}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-lg font-medium cursor-pointer hover:text-blue-500 transition"
        >
          {option.label}
        </Redirect>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <header
      className={`w-full bg-card z-50 relative border-b border-custom-border`}
    >
      <div className="flex justify-between items-center p-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="w-40">
          <Redirect to="/" className="flex items-center gap-2">
            <img src={logoicon} alt="BC CASH Logo" className="w-10" />
            <h2 className="text-xl font-bold">BC CASH</h2>
          </Redirect>
        </div>

        <div className="flex items-center gap-5">
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-5 items-center">
            {headerOptions.map((option) => renderNavLink(option))}

            {/* Feedback Button */}
            <button 
              className={`h-10 px-4 rounded-lg border shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
                currentTheme === "light"
                  ? "border-custom-border bg-sub-card"
                  : currentTheme === "dark"
                  ? "bg-sub-card-dark border-custom-border-dark"
                  : "bg-sub-card-dim border-custom-border-dim"
              }`}
            >
              Sign Up
            </button>
          </nav>
          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 justify-center">
            <ToggleTheme />
            <div className="lg:hidden flex justify-center items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full shadow-lg bg-card border-t border-custom-border flex flex-col items-center py-6 gap-6 z-40">
          {headerOptions.map((option) => renderMobileNavLink(option))}

          {/* Mobile Feedback Button */}
          <button               
            className={`h-10 px-4 rounded-lg border shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
              currentTheme === "light"
                ? "border-custom-border bg-sub-card"
                : currentTheme === "dark"
                ? "bg-sub-card-dark border-custom-border-dark"
                : "bg-sub-card-dim border-custom-border-dim"
            }`}
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;