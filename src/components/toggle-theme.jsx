import React, { useEffect, useRef, useState, useCallback } from "react";
import { Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef(null);
  const currentTheme = theme || "light";

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const changeTheme = (newTheme) => {
    if (currentTheme === newTheme) {
      setOpen(false);
      return;
    }

    const html = document.documentElement;
    html.classList.remove("light", "dark", "dim");
    setTheme(newTheme);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Theme Selector */}
      <div
        className={`w-10 h-10 rounded-lg border shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
          currentTheme === "light"
            ? "border-custom-border bg-sub-card"
            : currentTheme === "dark"
            ? "bg-sub-card-dark border-custom-border-dark"
            : "bg-sub-card-dim border-custom-border-dim"
        }`}
      >
        <button
          className={`w-full h-full flex justify-center items-center ${
            currentTheme === "light"
              ? "text-dispute-color"
              : "text-text-color"
          }`}
          onClick={() => setOpen(!open)}
        >
          {currentTheme === "light" ? (
            <Sun className="w-5 h-5" />
          ) : currentTheme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <MoonStar className="w-5 h-5" />
          )}
        </button>
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className={`absolute right-0 p-2 rounded-xl z-50 w-44 mt-2 flex flex-col gap-2 justify-start items-start shadow-lg border ${
            currentTheme === "light"
              ? "bg-card border-custom-border text-dispute-color"
              : currentTheme === "dark"
              ? "bg-card-dark border-custom-border-dark text-text-color"
              : "bg-card-dim border-custom-border-dim text-text-color"
          }`}
        >
          <button
            onClick={() => changeTheme("light")}
            className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg transition-colors duration-200 ${
              currentTheme === "light"
                ? "text-blue-600 font-medium"
                : currentTheme === "light"
                ? "hover:bg-sub-card hover:text-dispute-color"
                : currentTheme === "dark"
                ? "hover:bg-sub-card-dark hover:text-text-color"
                : "hover:bg-sub-card-dim hover:text-text-color"
            }`}
          >
            <Sun className="w-4 h-4" /> Light
          </button>
          <button
            onClick={() => changeTheme("dark")}
            className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg transition-colors duration-200 ${
              currentTheme === "dark"
                ? "text-blue-600 font-medium"
                : currentTheme === "light"
                ? "hover:bg-sub-card hover:text-dispute-color"
                : "hover:bg-sub-card-dim hover:text-text-color"
            }`}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
          <button
            onClick={() => changeTheme("dim")}
            className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg transition-colors duration-200 ${
              currentTheme === "dim"
                ? "text-blue-600 font-medium"
                : currentTheme === "light"
                ? "hover:bg-sub-card hover:text-dispute-color"
                : "hover:bg-sub-card-dark hover:text-text-color"
            }`}
          >
            <MoonStar className="w-4 h-4" />
            Dim
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;