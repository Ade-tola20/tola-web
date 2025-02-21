"use client";

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAnimation } from '../AnimationProvider';
import MovieBoxThumbnail from "../../../public/images/movie-box-thumbnail.svg"
import DragDropThumbnail from "../../../public/images/drag-drop-thumbnail.svg"
import FootballQuizThumbnail from "../../../public/images/football-quiz-thumbnail.svg"

export default function Projects() {
    const { isAnimating } = useAnimation();

    return (
        <>
            {isAnimating ? (
                <div className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center">
                    <div className="bg"></div>
                    <div className="bg bg2"></div>
                    <div className="bg bg3"></div>
                </div>
            ) : (
                <main className="bg-[#1b1b1b] py-10 px-4">
                    <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-10 lg:mb-20">
                        Ideas to <br className="hidden sm:block" /> Reality!
                    </h1>

                    <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-center items-center gap-12">
                        {[
                            {
                                href: "https://movie-boxxx.netlify.app/",
                                img: MovieBoxThumbnail,
                                title: "Movie Box",
                                desc: "is a web application that helps people discover movies. Users can easily search for movies, explore detailed information, and create personalized favorite lists. Redux was used for efficient state management.",
                            },
                            {
                                href: "https://drag-drop-ebon.vercel.app/",
                                img: DragDropThumbnail,
                                title: "Drag-Drop",
                                desc: "is dynamic and interactive image gallery that allows users to personalize their experience. By incorporating drag-and-drop functionality, users can easily rearrange images to suit their preferences, increasing engagement and satisfaction.",
                            },
                            {
                                href: "https://quiz-application-five-kappa.vercel.app/",
                                img: FootballQuizThumbnail,
                                title: "Football Quiz",
                                desc: "app features a responsive timer to gamify the knowledge testing experience, enhancing user engagement. Through this project, I honed my skills in front-end development, user experience design, and creating interactive elements.",
                            },
                        ].map((project, index) => (
                            <div key={index} className="card">
                                <div className="image">
                                    <Link href={project.href}>
                                        <Image src={project.img} alt={project.title} />
                                    </Link>
                                </div>
                                <div className="content">
                                    <p><strong>{project.title}</strong> {project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>
            )}
        </>
    );
}
