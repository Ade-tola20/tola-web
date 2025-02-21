"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import Navbar from "./nav/page";
import Hero from "./hero/page";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className={`${inter.className} ${isAnimating ? "bg-white h-screen flex items-center justify-center fixed top-0 left-0 w-full z-50" : ""}`}>
      {isAnimating ? (
        <>
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </>
      ) : (
        <>
          <Hero />
        </>
      )}
    </div>
  );
}
