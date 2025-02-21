"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import FaruqBg from "./../../../public/images/Asset 2.svg";
import Angular from "./../../../public/images/angular-brands-solid.svg";
import ReactIcon from "./../../../public/images/react-brands-solid.svg";
import Javascript from "./../../../public/images/js-brands-solid.svg";
import Typescript from "./../../../public/images/typescript-svgrepo-com.svg";
import Github from "./../../../public/images/github-brands-solid.svg";
import Tailwind from "./../../../public/images/tailwind-svgrepo-com.svg";
import CSS from "./../../../public/images/css3-brands-solid.svg";
import Firebase from "./../../../public/images/fire-solid.svg";
import NodeJs from "./../../../public/images/node-js-brands-solid.svg";
import HTML from "./../../../public/images/html5-brands-solid.svg";
import Web from "./../../../public/images/web-svgrepo-com.svg";
import { motion } from "framer-motion";

export default function About() {
    const [clients, setClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [experience, setExperience] = useState(0);
    const statsRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);
    const [visibleSection, setVisibleSection] = useState<number | null>(null);

    const orbits = [
        [Angular, ReactIcon, Typescript],
        [Javascript, Github, Firebase, NodeJs],
        [Tailwind, CSS, HTML]
    ];

    const experiences = [
        {
            company: "Primed E Health",
            role: "Frontend Developer",
            duration: "March 2024 - Present",
            description: "At Primed E-Health, I contributed to developing and improving health tech solutions tailored to the Nigerian healthcare industry.My role involved collaborating across departments to support and enhance existing applications, addressing user complaints, and implementing necessary fixes.",
        },
        {
            company: "Werenode",
            role: "Frontend Developer",
            duration: "August 2022 - March 2024",
            description: "As a front-end developer at Werenode, I developed user-friendly interfaces to facilitate EV charging network connectivity. I used blockchain technology to enhance user experience, deliver real-time data, and boost accessibility.",
        },
        {
            company: "HALI",
            role: "Frontend Intern",
            duration: "October 2023 - December 2023",
            description: "My role at Hali involves creating interactive interview preparation tools for job seekers. The platform's user-friendly features, including pre-recorded Q&A sections, help individuals improve their interview skills, contributing to Hali's mission of unlocking career potential. ",
        },
        {
            company: "Data Nexi",
            role: "Frontend Intern",
            duration: "April 2023 - July 2023",
            description: "The crucial role I played during my time at Data Nexi involved ensuring usability for its users, thereby bridging the digital divide and providing affordable electricity to all Nigerians.",
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    const animateNumber = (setter: (value: number) => void, target: number) => {
                        let count = 0;
                        const step = Math.ceil(target / 100);
                        const interval = setInterval(() => {
                            count += step;
                            if (count >= target) {
                                count = target;
                                clearInterval(interval);
                            }
                            setter(count);
                        }, 30);
                    };

                    animateNumber(setClients, 10);
                    animateNumber(setProjects, 20);
                    animateNumber(setExperience, 3);
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll(".experience-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(sections).indexOf(entry.target);
                        setVisibleSection(index);
                    }
                });
            },
            { threshold: 0.6 } // Ensure it's fully in view before triggering animation
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <main className="bg-[#1b1b1b]">
            <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight lg:leading-none">
                It all starts as <br /> an idea!
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-8 px-4">
                <div className="text-left max-w-lg">
                    <p className="text-xl font-bold text-[#b6b4ae] text-center lg:text-left">BIOGRAPHY</p>
                    <span className="text-lg font-bold text-white space-y-2">
                        <p>
                            Hello, I'm Adetola, a skilled frontend developer and an ideologist with a passion for creating friendly, functional and user-centered experiences. With over 3 years experience, I am always looking for new ideas and innovative ways to turn my clients'/employers' visions to reality. I specialize in building dynamic web applications using modern technologies like React, Angular, and TypeScript. My journey has taken me through diverse industries, from healthcare to blockchain, where I’ve contributed to innovative solutions that bridge gaps and <br /> empower users. I thrive on solving complex problems, bringing ideas to life and delivering high-quality, performant code that enhances user engagement and satisfaction. I believe that development is more than just writing code – it’s about creating intuitive, accessible, and impactful solutions that solve real-world problems. Whether it’s designing interactive dashboards, integrating third-party APIs, or optimizing user interfaces, I prioritize usability and performance to ensure every product I work on delivers <br /> value.
                        </p>
                    </span>
                </div>
                <div className="w-80 h-96 lg:w-[400px] lg:h-[600px] bg-transparent box-shadow border-2 border-white rounded-xl flex items-center justify-center lg:mt-5">
                    <div className=" object-cover rounded-xl">
                        <Image src={FaruqBg} alt="" className="w-72 h-80 lg:w-[350px] lg:h-[550px]" />
                    </div>
                </div>
            </div>
            <div ref={statsRef} className="flex flex-wrap justify-center lg:justify-around mt-16 mb-16 lg:mb-10 text-center">
                <div className="text-white m-4">
                    <span className="text-4xl font-bold">{clients}+</span>
                    <p className="text-[#b6b4ae] text-lg font-bold">Satisfied Clients</p>
                </div>
                <div className="text-white m-4">
                    <span className="text-4xl font-bold">{projects}+</span>
                    <p className="text-[#b6b4ae] text-lg font-bold">Projects Completed</p>
                </div>
                <div className="text-white m-4">
                    <span className="text-4xl font-bold">{experience}+</span>
                    <p className="text-[#b6b4ae] text-lg font-bold">Years of Experience</p>
                </div>
            </div>

            <div className="mb-32 lg:mb-10">
                <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold text-white">Skills</h1>
            </div>
            <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] flex flex-col items-center justify-center mx-auto my-10">
                {/* Central Icon */}
                <motion.div className="absolute flex items-center justify-center w-24 h-24 rounded-full">
                    <Image src={Web} alt="Web" width={60} height={60} />
                </motion.div>

                {orbits.map((orbit, index) => {
                    const radius = 90 + index * 50; // Adjusting radius dynamically

                    return (
                        <motion.div
                            key={index}
                            className="absolute rounded-full border border-gray-600 flex items-center justify-center"
                            style={{
                                width: `${radius * 2}px`,
                                height: `${radius * 2}px`
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10 + index * 5, repeat: Infinity, ease: "linear" }}
                        >
                            {orbit.map((skill, idx) => {
                                const angle = (idx / orbit.length) * 2 * Math.PI;
                                const x = radius * Math.cos(angle);
                                const y = radius * Math.sin(angle);

                                return (
                                    <motion.div
                                        key={idx}
                                        className="absolute"
                                        style={{
                                            transform: `translate(${x}px, ${y}px)`
                                        }}
                                    >
                                        <Image src={skill} alt="Skill" width={40} height={40} className="rounded-full" />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    );
                })}
            </div>

            <div>
                <section className="bg-[#1b1b1b] py-20">
                    <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-12">Experience</h1>
                    <div className="flex flex-col space-y-12 items-center px-4">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="experience-card w-full md:w-[80%] lg:w-[60%] bg-transparent p-6 rounded-lg shadow-lg border border-gray-700"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: visibleSection === index ? 1 : 0, y: visibleSection === index ? 0 : 50 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                <p className="text-gray-400">{exp.role} ({exp.duration})</p>
                                <p className="text-gray-300 mt-2">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}