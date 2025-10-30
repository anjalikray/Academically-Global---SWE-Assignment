import { useState, useEffect, useRef, useCallback } from "react";
import { CiHeart, CiImageOn } from "react-icons/ci";
import { FaListUl, FaUser, FaUserFriends } from "react-icons/fa";

const OnboardingScreens = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const maxScroll = documentHeight - windowHeight;
                const progress = Math.min((scrollTop / maxScroll) * 3, 3);
                setScrollProgress(progress);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const screens = [
        {
            id: "goals",
            title: "Stay motivated and reach your goals",
            description:
                "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
            content: (
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full ml-1"></div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex-1 bg-pink-500 rounded-3xl p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <CiHeart className="w-8 h-8 mb-3" />
                            <p className="text-base font-medium">
                                You're interested in traveling, and exploring
                                new cultures.
                            </p>
                        </div>

                        <div className="flex-1 bg-blue-600 rounded-3xl p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
                            <FaListUl className="w-8 h-8 mb-3" />
                            <p className="text-base font-medium">
                                We've created unique lessons and conversations
                                based on those goals.
                            </p>
                        </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white rounded-2xl py-3 px-8 text-base font-semibold mt-4 hover:bg-blue-700 transition-colors">
                        Get Started
                    </button>
                </div>
            ),
        },
        {
            id: "topics",
            title: "Talk about anything, anytime, anywhere",
            description:
                "Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.",
            content: (
                <div className="flex flex-col items-center gap-4 w-full max-w-md">
                    <div className="rounded-3xl p-6 w-full space-y-3">
                        <div className="text-sm text-gray-500 text-center mb-4">
                            Create your own
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <FaUser className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-base font-medium text-gray-800">
                                Tourist
                            </span>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <FaUserFriends className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-base font-medium text-gray-800">
                                New friend
                            </span>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-white rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                <CiImageOn className="w-6 h-6 text-blue-600" />
                            </div>
                            <span className="text-base font-medium text-gray-800">
                                Talking about the best places to grab dinner in
                                San Francisco.
                            </span>
                        </div>

                        <button className="w-full bg-blue-600 text-white rounded-2xl py-3 px-8 text-base font-semibold mt-3 hover:bg-blue-700 transition-colors">
                            Start chatting
                        </button>
                    </div>
                </div>
            ),
        },
        {
            id: "relationship",
            title: "Build a relationship with your tutor",
            description:
                "Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.",
            content: (
                <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
                    <div className="bg-white rounded-3xl shadow-xl w-full max-w-sm border border-gray-200">
                        <div className="bg-gray-50 px-6 py-3 flex justify-between items-center border-b border-gray-200">
                            <span className="text-sm font-semibold">9:41</span>
                            <div className="flex gap-1">
                                <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                                <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                                <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        <div className="w-1 h-1 bg-blue-500 rounded-full ml-0.5"></div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-semibold text-gray-900">
                                            Speak
                                        </span>
                                        <span className="text-xs text-gray-400">
                                            now
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-sm">
                                        Hey Audrey, your trip to Mexico is in 6
                                        days! Let's practice some vocabulary for
                                        your trip!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 w-full h-full">
                        <div className="grid grid-cols-3 gap-3">
                            <div className="aspect-square bg-gray-200 rounded-xl"></div>
                            <div className="aspect-square bg-gray-200 rounded-xl"></div>
                            <div className="aspect-square bg-gray-200 rounded-xl"></div>
                            <div className="aspect-square bg-gray-200 rounded-xl"></div>
                            <div className="aspect-square bg-gray-200 rounded-xl"></div>
                            <div className="aspect-square bg-gray-200 rounded-xl"></div>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const getCardStyle = useCallback(
        (index: number) => {
            const cardSpacing = 40;

            if (scrollProgress < index) {
                return {
                    transform: `translateY(${index * cardSpacing}px) scale(${
                        1 - index * 0.05
                    })`,
                    opacity: 1,
                    zIndex: 10 - index,
                };
            } else if (scrollProgress >= index && scrollProgress < index + 1) {
                const progress = scrollProgress - index;
                const translateY =
                    index * cardSpacing -
                    progress * (window.innerHeight + cardSpacing);
                const scale = 1 - index * 0.05 + progress * index * 0.05;

                return {
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity: 1,
                    zIndex: 10 - index,
                };
            } else {
                return {
                    transform: `translateY(-${window.innerHeight}px)`,
                    opacity: 0,
                    zIndex: 10 - index,
                };
            }
        },
        [scrollProgress, window.innerHeight]
    );

    return (
        <div
            ref={containerRef}
            className="bg-linear-to-br from-gray-50 to-blue-50"
        >
            <div style={{ height: "400vh" }}>
                <div className="fixed inset-0 flex items-start justify-center pt-24 px-4 overflow-hidden">
                    <div
                        className="relative w-full max-w-6xl"
                        style={{ height: "80vh" }}
                    >
                        {screens.map((screen, index) => (
                            <div
                                key={screen.id}
                                className="absolute inset-0 transition-all duration-500 ease-out pointer-events-auto"
                                style={getCardStyle(index)}
                            >
                                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 h-[80%] flex items-center justify-center overflow-hidden">
                                    <div className="flex justify-between w-full h-full">
                                        <div className="space-y-4 mb-6 flex flex-col justify-between w-[50%]">
                                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                                                {screen.title}
                                            </h1>
                                            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                                                {screen.description}
                                            </p>
                                        </div>
                                        <div className="bg-neutral-100 p-6 rounded-2xl flex">
                                            <div className="bg-white rounded-2xl shadow-lg p-6 overflow-hidden">
                                                {screen.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div
                            className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out"
                            style={{
                                transform: `
      translateY(${Math.max(0, (3 - scrollProgress) * 60)}%)
      scale(${1 - Math.max(0, 3 - scrollProgress) * 0.05})
    `,
                                opacity:
                                    scrollProgress >= 2 && scrollProgress <= 3.2
                                        ? 1
                                        : 0,
                                pointerEvents:
                                    scrollProgress >= 2 && scrollProgress <= 3
                                        ? "auto"
                                        : "none",
                                transition:
                                    "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease",
                                zIndex: 9,
                            }}
                        >
                            <div className="max-w-4xl mx-auto text-center space-y-8">
                                <div className="flex justify-center gap-3 items-center border p-4 rounded-full w-max mx-auto">
                                    <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center">
                                        <span className="text-gray-600 text-xs">
                                            JP
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium">
                                        Jessica Park
                                    </p>
                                </div>
                                <blockquote className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                                    "The first time I used Speak Tutor, I
                                    couldn't believe it wasn't a real person. It
                                    feels like it understands my motivations at
                                    a deep level."
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm animate-bounce pointer-events-none">
                {scrollProgress < 2.9}
            </div>
        </div>
    );
};

export default OnboardingScreens;
