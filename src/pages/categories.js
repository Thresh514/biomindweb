import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Categories() {
const [isOpen, setIsOpen] = useState(false);
const [subMenuOpen, setSubMenuOpen] = useState(false);

const categories = ['IGCSE', 'A-Level'];

const handleMouseEnter = () => {
    setSubMenuOpen(true); // 显示子菜单
};

const handleMouseLeave = () => {
    setSubMenuOpen(false); // 隐藏子菜单
};

return (
    <div className="p-4">
    <nav>
        <Link href="/">Back to Home</Link>
    </nav>
    <Head>
        <title>Categories - Education Resource Hub</title>
    </Head>
    <h1 className="text-2xl font-bold mb-4">Categories</h1>
    <div className="relative inline-block text-left">
        {/* 下拉按钮 */}
        <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 focus:outline-none"
        >
        Browse Categories
        </button>

        {/* 下拉菜单 */}
        {isOpen && (
        <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-10">
            {categories.map((category, index) => (
            <div
                key={index}
                onMouseEnter={category === 'A-Level' ? handleMouseEnter : null}
                onMouseLeave={category === 'A-Level' ? handleMouseLeave : null}
            >
                <a
                href={`#${category.toLowerCase()}`}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                {category}
                </a>

                {/* 子菜单: 只有当 A-Level 被悬停时才显示 */}
                {category === 'A-Level' && subMenuOpen && (
                <div className="absolute mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-20 left-56 top-0">
                    <a
                    href="#biology-mindmap"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                    Biology Mindmap
                    </a>
                    <a
                    href="#biology-syllabus-analysis"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                    Biology Syllabus Analysis
                    </a>
                </div>
                )}
            </div>
            ))}
        </div>
        )}
    </div>
    </div>
);
}
