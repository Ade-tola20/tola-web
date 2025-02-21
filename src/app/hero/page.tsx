"use client";

import React from "react";
import Image from "next/image";
import { useAnimation } from "./../AnimationProvider";
import TolaBg from "./../../../public/images/Asset 1.svg";
import ExportIcon from "./../../../public/images/external-link.svg";
import Link from "next/link";

export default function Hero() {
    const { isAnimating } = useAnimation();

    return (
        <>
            {isAnimating ? (
                <div className="w-full h-screen bg-white flex items-center justify-center fixed top-0 left-0">
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                </div>
            ) : (
                <div className="bg-[#1b1b1b] min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center px-6 lg:px-20 py-10 space-y-10 lg:space-y-0">
                    {/* Left Side (Text Content) */}
                    <div className="text-white text-center lg:text-left space-y-4 w-full lg:w-1/2">
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                            Converting Ideas <br className="hidden sm:block" /> Into Products And <br className="hidden sm:block" /> Reality Through Code.
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                            As a skilled full-stack developer, I am dedicated to converting 
                            ideas into innovative web applications. Explore my latest 
                            projects, showcasing my expertise in React.js, Next.js & 
                            Angular and web development.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                            <a href="/tola-dev-resume.pdf" download="tola-dev-resume.pdf">
                                <button className="liquid-morph-element flex items-center justify-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white text-base font-semibold">
                                    Resume
                                    <Image src={ExportIcon} alt="Export Icon" className="w-5 h-5 ml-2" />
                                </button>
                            </a>
                            <Link href="mailto:oduwoleadetohlar@gmail.com" className="text-white text-lg font-semibold underline">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Right Side (Image & Hire Me Button) */}
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <Image src={TolaBg} alt="Hero Image" className="w-[80%] sm:w-[60%] lg:w-[50%] max-w-xs lg:max-w-md" />
                        <a href="mailto:oduwoleadetohlar@gmail.com">
                            <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-16 sm:h-20 animate-pulse hover:bg-[#001] animate-spin rounded-full bg-[#0a2342] p-2 font-medium text-white text-center hover:bg-[#001]">
                                Hire Me
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
