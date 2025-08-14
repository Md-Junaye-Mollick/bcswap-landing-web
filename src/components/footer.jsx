import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Github, Twitter, Mail, Instagram, Facebook } from "lucide-react";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [userCount, setUserCount] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchUserCount = () => {
      setTimeout(() => {
        setUserCount(13845);
      }, 1000);
    };

    fetchUserCount();
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
            <Twitter size={20} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            title="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            title="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            title="Facebook"
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

        {/* User Counter */}
        {userCount !== null && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              Total Users:{" "}
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                {userCount.toLocaleString()}
              </span>
            </p>
          </div>
        )}

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BC Cash. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;