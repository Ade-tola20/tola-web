"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAnimation } from "./../AnimationProvider";
import LinkedIn from "./../../../public/images/linkedin-in-brands-solid.svg";
import Github from "./../../../public/images/github-brands-solid.svg";
import X from "./../../../public/images/x-twitter-brands-solid.svg";
import { Menu, X as CloseIcon } from "lucide-react"; // Icons for the hamburger menu

export default function Navbar() {
    const router = useRouter();
    const { isAnimating, triggerAnimation } = useAnimation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigate = (path: string) => {
        triggerAnimation();
        setTimeout(() => router.push(path), 3000);
        setMenuOpen(false); // Close menu after clicking a link
    };

    return (
        <>
            {isAnimating ? (
                <div className="w-full h-screen bg-white flex items-center justify-center fixed top-0 left-0">
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                </div>
            ) : (
                <nav className="bg-[#1b1b1b] text-white p-4 h-[80px] flex justify-between lg:justify-around items-center relative">


                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <button onClick={() => handleNavigate("/")} className="hover-underline cursor-pointer">Home</button>
                        <button onClick={() => handleNavigate("/about")} className="hover-underline cursor-pointer">About</button>
                        <button onClick={() => handleNavigate("/projects")} className="hover-underline cursor-pointer">Projects</button>
                    </div>

                    {/* Logo */}
                    <button className="nav-btn text-center text-base font-bold rounded-full bg-transparent border-[2px] border-white">OA</button>

                    {/* Desktop Social Icons */}
                    <div className="hidden md:flex space-x-6">
                        <a href="https://www.linkedin.com/in/faruq-oduwole-686934246" target="_blank" rel="noopener noreferrer">
                            <Image src={LinkedIn} alt="LinkedIn" className="w-6 h-6 hover:animate-bounce transition duration-300" />
                        </a>
                        <a href="https://github.com/Ade-tola20" target="_blank" rel="noopener noreferrer">
                            <Image src={Github} alt="GitHub" className="w-6 h-6 hover:animate-bounce transition duration-300" />
                        </a>
                        <a href="https://github.com/Ade-tola20" target="_blank" rel="noopener noreferrer">
                            <Image src={X} alt="Twitter" className="w-6 h-6 hover:animate-bounce transition duration-300" />
                        </a>
                    </div>

                    {/* Hamburger Menu Button (Mobile/Tablet) */}   
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <CloseIcon className="w-8 h-8" /> : <Menu className="w-8 h-8 " />}
                    </button>

                    {/* Mobile Menu (Dropdown) */}
                    {menuOpen && (
                        <div className="absolute top-[80px] left-0 w-full bg-[#0a2342] text-white flex flex-col items-center space-y-6 py-8 shadow-lg md:hidden z-50">
                            {/* Navigation Links */}
                            <button onClick={() => handleNavigate("/")} className="text-lg">Home</button>
                            <button onClick={() => handleNavigate("/about")} className="text-lg">About</button>
                            <button onClick={() => handleNavigate("/projects")} className="text-lg">Projects</button>

                            {/* Social Icons (Bottom of Menu) */}
                            <div className="flex space-x-6 mt-6">
                                <a href="https://www.linkedin.com/in/faruq-oduwole-686934246" target="_blank" rel="noopener noreferrer">
                                    <Image src={LinkedIn} alt="LinkedIn" className="w-6 h-6 hover:animate-bounce transition duration-300" />
                                </a>
                                <a href="https://github.com/Ade-tola20" target="_blank" rel="noopener noreferrer">
                                    <Image src={Github} alt="GitHub" className="w-6 h-6 hover:animate-bounce transition duration-300" />
                                </a>
                                <a href="https://github.com/Ade-tola20" target="_blank" rel="noopener noreferrer">
                                    <Image src={X} alt="Twitter" className="w-6 h-6 hover:animate-bounce transition duration-300" />
                                </a>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    );
}
