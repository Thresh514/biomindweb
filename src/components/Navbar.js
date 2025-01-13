import Link from 'next/link';
import { useState } from 'react';

export default function Navbar(){
    const [activeMenu, setActiveMenu] = useState(null);
    
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
                onMouseEnter={() => setActiveMenu(menu)}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <span className="cursor-pointer font-semibold text-lg hover:underline">
                {menu}
                </span>
              {/* 下拉菜单 */}
                {activeMenu === menu && (
                <div className="absolute text-black bg-white shadow-lg p-4 w-[180px]">
                    {Object.keys(menuItems[menu]).map((subject, idx) => (
                    <div className="">
                        <h3 className="font-bold mb-2">{subject}</h3>
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