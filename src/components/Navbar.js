import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
    const [isVisible, setIsVisible] = useState(false); // 新增状态控制菜单显示隐藏
    
    const menuItems = {
        "GCSE / IGCSE": {
            Biology: ["Biology Papers", "Biology Revision"],
            Chemistry: ["Chemistry Papers", "Chemistry Revision"],
            Physics: ["Physics Papers", "Physics Revision"],
            Maths: ["Maths Papers", "Maths Revision"]
        },
        "A-Level": {
            Biology: ["Biology Papers", "Biology Revision"],
            Chemistry: ["Chemistry Papers", "Chemistry Revision"],
            Physics: ["Physics Papers", "Physics Revision"],
            Maths: ["Maths Papers", "Maths Revision"],
            "Computer Science": ["Computer Science Papers", "Computer Science Revision"]
        },
    };

    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
    };
    
    return (
    <nav className="flex bg-gradient-to-b from-lightest to-white text-darkest space-x-16 p-6 justify-evenly fixed top-20 left-0 right-0 z-50">
        <div className="flex flex-row items-center">
            <div>
            <Link href="/" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                Home
            </Link>
            </div>

          {/* Resource Categories 下拉菜单 */}
                <div
                    className="relative group ml-8 mr-8"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <span className="cursor-pointer font-semibold text-lg hover:underline">
                        Resource Categories
                    </span>
                    {/* 下拉菜单 */}
                    {isVisible && (
                    <div 
                        className={`absolute text-black bg-white shadow-lg rounded-lg p-4 w-[450px] transition-all duration-300 ease-out ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                    >
                            <div className="flex flex-row space-x-8">
                                {/* IGCSE */}
                                <div className="p-3">
                                    <a href="#igcse" className="font-bold text-xl cursor-pointer hover:underline">IGCSE</a>
                                    <div className="">
                                        {Object.keys(menuItems["GCSE / IGCSE"]).map((subject) => (
                                            <div key={subject} className="mt-2 mb-2">
                                                <div className="font-semibold">{subject}</div>
                                                {menuItems["GCSE / IGCSE"][subject].map((item, idx) => (
                                                    <div key={idx} className="mt-2 mb-2">
                                                        <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{item}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* A-Level */}
                                <div className="p-3">
                                    <a href="#alevel" className="font-bold text-xl cursor-pointer hover:underline">A-Level</a>
                                    <div className="">
                                        {Object.keys(menuItems["A-Level"]).map((subject) => (
                                            <div key={subject} className="mt-2 mb-2"> 
                                                <div className="font-semibold">{subject}</div>
                                                {menuItems["A-Level"][subject].map((item, idx) => (
                                                    <div key={idx} className="mt-2 mb-2">
                                                        <a href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">{item}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

            <div>
            <a href="#membership" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                Membership Zone
            </a>
            </div>

            <div>
            <a href="#faq" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                FAQ
            </a>
            </div>

            <div>
            <Link href="/about" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                About Us
            </Link>
            </div>

            <div>
            <a href="#login" className="p-2 ml-16 mr-2 font-semibold text-lg hover:underline">
                Login
            </a>
            </div>

            <div>
            <a href="#join" className="p-5 mr-4 font-semibold bg-darker rounded-lg text-white text-lg hover:underline">
                Join
            </a>
            </div>

        </div>
        </nav>
    );
}