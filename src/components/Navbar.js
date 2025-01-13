import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
    const [activeMenu, setActiveMenu] = useState(null);
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

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
        setTimeout(() => setIsVisible(true), 100); // 延迟设置为可见
    };
    
    const handleMouseLeave = () => {
        setIsVisible(false);
        setActiveMenu(null);
    };
    
    return (
    <nav className="flex bg-lightest text-darkest space-x-8 p-6 justify-evenly fixed top-0 left-0 right-0">
        <h1 className="absolute text-4xl font-bold left-0 ml-12 mt-2">Biomind Logic</h1>
        <div className="flex flex-row p-4">
            <div>
            <Link href="/" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                Home
            </Link>
            </div>
          {/* alevel,igcse菜单 */}
            {Object.keys(menuItems).map((menu, index) => (
            <div
                key={index}
                className="relative group ml-8 mr-8"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
            >
                <span className="cursor-pointer font-semibold text-lg hover:underline">
                {menu}
                </span>
              {/* 下拉菜单 */}
                {activeMenu === menu && (
                <div className={`absolute text-black bg-white shadow-lg p-4 w-[200px] opacity-0 transform transition-all duration-500 ${
                    isVisible 
                        ? "opacity-100 translate-y-1" 
                        : "opacity-0 translate-y-[-10px]"
                    }`}
                >
                    {Object.keys(menuItems[menu]).map((subject) => (
                    <div key={subject} className="flex flex-col">
                        <h3 className="font-bold mb-2 mt-2">{subject}</h3>
                        <div className="flex flex-col">
                        {menuItems[menu][subject].map((item, subIdx) => (
                            <a
                            key={subIdx}
                            href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                            className="hover:underline hover:bg-gray-100 p-2 rounded"
                            >
                            {item}
                            </a>
                        ))}
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
            ))}
            <div>
            <Link href="/about" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                About
            </Link>
            </div>
            <div>
            <a href="#upload" className="p-4 ml-4 mr-4 font-semibold text-lg hover:underline">
                Upload
            </a>
            </div>
        </div>
        </nav>
    );
}