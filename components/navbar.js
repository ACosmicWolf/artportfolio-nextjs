import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="ctp-mocha">
      <motion.header
        animate={{ scale: 1 }}
        initial={{ scale: 0 }}
        className="bg-gradient-to-r from-ctp-sky to-ctp-lavender relative"
      >
        <nav className="flex justify-between p-4 shadow-lg">
          <div className="ml-4 text-lg">
            <a href="#">
              <span>Arshita</span>
            </a>
          </div>
          {/* Links */}
          <div className="text-sm p-1 text-ctp-surface0 hidden sm:block">
            <a className="m-1" href="#">
              Home
            </a>
            <a className="m-1" href="#">
              About
            </a>
            <a className="m-1" href="#">
              Portfolio
            </a>
            <a className="m-1" href="#">
              Contact
            </a>
          </div>

          <div className="block sm:hidden">
            <button onClick={() => setNavbar(!navbar)}>
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </motion.header>
      <motion.div
        className={`border-b-2 border-ctp-crust/10 ${
          navbar ? "scale-100" : "scale-0"
        }`}
        animate={{ scale: navbar ? 1 : 0 }}
        initial={{ scale: 0 }}
      >
        <ul className="p-4">
          <li className="p-4">
            <a href="#">Home</a>
          </li>
          <li className="p-4">
            <a href="#">About</a>
          </li>
          <li className="p-4">
            <a href="#">Portfolio</a>
          </li>
          <li className="p-4">
            <a href="#">Contact</a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}
