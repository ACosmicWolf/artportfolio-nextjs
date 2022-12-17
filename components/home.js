import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Homepage() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="relative sm:p-40 p-20">
      <h1 className="text-4xl">Hi!</h1>
    </div>
  );
}
