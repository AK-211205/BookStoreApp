import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
    const [cards, setCards] = useState([]);
    const containerRef = useRef(null);
    const [scrollDirection, setScrollDirection] = useState("down");

    // ✅ Scroll direction detection
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentY = window.scrollY;
            if (currentY > lastScrollY) {
                setScrollDirection("down");
            } else if (currentY < lastScrollY) {
                setScrollDirection("up");
            }
            lastScrollY = currentY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Scroll tracking for glow animation
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const borderScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

    // ✅ Glow color changes based on scroll direction
    const glowColor = scrollDirection === "down"
        ? "rgba(0, 255, 255, 1)"   // Aqua
        : "rgba(255, 0, 255, 1)";  // Magenta

    // ✅ Dummy card data
    useEffect(() => {
        const mockCards = [
            {
                id: 1,
                title: "Build multi-step agents calling custom tools",
                description: "Create agentic systems on a single screen. Integrate any LLM into your workflows as fast as you can drag in drop.",
                sectionTitle: "Explore AI",
                checklistItems: [
                    { text: "Running Custom Unit Testing", checked: false },
                    { text: "Update Rolled Back Automatically", checked: false }
                ],
                secondarySectionTitle: "IT Team Notified of New Ticket",
                secondaryChecklistItems: [
                    { text: "Custom Unit Testing failed", checked: false },
                    { text: "Update Installed", checked: false }
                ]
            },
            {
                id: 2,
                title: "Self-host everything – including AI models",
                description: "Protect your data by deploying on prem.",
                checklistItems: [
                    { text: "Deploy with Docker", checked: true },
                    { text: "Access the entire source code on", checked: true }
                ]
            },
            {
                id: 3,
                title: "Chat with your own data",
                description: "Use Slack, Teams, SMS, voice, or our embedded chat interface to get accurate answers from your data, create tasks, and complete workflows.",
                content: [
                    "Who held meetings with Spacex last week?",
                    "On Wednesday, Joe updated the status to 'won' in Salesforce after a Zoom call.",
                    "On Thursday, Sue provided on-site setup and closed the ServiceNow ticket.",
                    "Create a task in Astra..."
                ]
            }
        ];

        setCards(mockCards);
    }, []);

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                {/* Header Section */}
                <div className="mt-28 items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We are delighted to have you 
                        <span className="text-pink-500"> Here!!! :)</span>
                    </h1>
                    <p className="mt-12 text-[24px]">
                        Your unused books can become someone else's treasure. Donate today. 
                        Books have the power to change lives. Share that power by donating your books.
                    </p>
                    
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>

                {/* Cards Section */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))}
                </div>

                {/* Glowing Image Section */}
                <div className="mt-12 flex justify-center" ref={containerRef}>
                    <div className="relative w-full max-w-4xl rounded-lg">
                        {/* Glowing Border */}
                        <motion.div
                            className="absolute inset-0 z-10 rounded-lg pointer-events-none"
                            style={{
                                scale: borderScale,
                            }}
                            animate={{
                                boxShadow: [
                                    `0 0 0px 0px ${glowColor}`,
                                    `0 0 40px 20px ${glowColor}`,
                                    `0 0 80px 40px ${glowColor}`,
                                    `0 0 40px 20px ${glowColor}`,
                                    `0 0 0px 0px ${glowColor}`
                                ],
                                filter: "blur(4px)"
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Image */}
                        <motion.img 
                            src="/Banner.jpg" 
                            alt="Book donation visual"
                            className="w-full h-auto rounded-lg shadow-xl relative z-20 bg-white"
                            whileHover={{ scale: 1.02 }}
                            initial={{ scale: 1 }}
                        />
                    </div>
                </div>

                <div className="h-[50vh]"></div>
            </div>
        </>
    );
}

export default Course;
