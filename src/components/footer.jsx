import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Github, Twitter, Mail, Instagram, Facebook } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full px-6 py-10 border-t border-custom-border bg-card">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex gap-4">
          {/* Privacy Policy Link */}
          <Link
            to="/privacy-policy"
            className="text-sm underline text-blue-700 hover:text-blue-600 transition"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-services"
            className="text-sm underline text-blue-700 hover:text-blue-600 transition"
          >
            Terms & Services
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            title="Twitter"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            title="GitHub"
          >
            <Facebook size={20} />
          </a>
          <a
            href="mailto:hello@bcswap.com"
            className="hover:text-blue-600 transition"
            title="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs ">
          &copy; {new Date().getFullYear()} BC Cash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;