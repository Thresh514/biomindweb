import React, { useState, useEffect } from 'react';

const resources = [
    {
        id: 1,
        title: 'A-Level & AS Biology Chapter 1 Mindmap',
        description: 'A mindmap covering the first chapter of AS Biology.',
        category: 'Biology',
        uploadDate: '2025-01-10',
        link: '#a-level-as-biology-chapter-1-mindmap',
        imageUrl: ['/asch1mindmap.jpg'],
    },
    {
        id: 2,
        title: 'A-Level A2 Biology Syllabus Analysis',
        description: 'A detailed analysis of the A2 Biology syllabus.',
        category: 'Biology',
        uploadDate: '2025-01-08',
        link: '#a-level-a2-biology-syllabus-analysis',
        imageUrl: ['/a2syllabus1.jpg', '/a2syllabus2.jpg','/a2syllabus3.jpg'],
    },
    {
        id: 3,
        title: 'GCSE Physics Formula Sheet',
        description: 'A handy formula sheet for GCSE Physics students.',
        category: 'Physics',
        uploadDate: '2025-01-12',
        link: '#gcse-physics-formula-sheet',
        imageUrl: ['/physics1.jpg', '/physics2.jpg'],
    },
];

export default function FeaturedResources() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndexes, setImageIndexes] = useState(
        resources.map(() => 0) // 初始化每个资源的图片索引
    );

    // 自动滚动功能
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
        }, 30000); // 每30秒切换
        return () => clearInterval(interval);
    }, []);

    // 切换到下一个卡片
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % resources.length);
    };

    // 切换到上一个卡片
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? resources.length - 1 : prevIndex - 1
        );
    };

    // 切换到下一个图片
    const handleImageNext = () => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((index, i) =>
                i === currentIndex ? (index + 1) % resources[currentIndex].imageUrl.length : index
            )
        );
    };

    // 切换到上一个图片
    const handleImagePrev = () => {
        setImageIndexes((prevIndexes) =>
            prevIndexes.map((index, i) =>
                i === currentIndex
                    ? index === 0
                        ? resources[currentIndex].imageUrl.length - 1
                        : index - 1
                    : index
            )
        );
    };

    return (
        <div className="relative bg-white p-10 border rounded-lg shadow-lg w-4/5 mx-auto mt-10 mb-10 h-[600px]">
            <div className="overflow-hidden flex items-center justify-center h-full relative">
                {/* 滚动卡片 */}
                <div
                    className="flex transition-transform duration-1000"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {resources.map((resource, resourceIndex) => (
                        <div
                            key={resource.id}
                            className="min-w-full p-4 flex-shrink bg-white rounded-lg flex items-center"
                        >
                            <div className="relative flex justify-center items-center overflow-x-auto space-x-4 w-1/2 bg-white">

                            {/* 图片左边滚动按钮 */}
                                <button
                                    onClick={() => handleImagePrev(resourceIndex)}
                                    className="absolute top-1/2 left-0 text-m transform -translate-y-1/2 bg-transparent p-2 h-full w-[30px] z-10 opacity-40 hover:opacity-90 transition-opacity duration-300"
                                >
                                    ◀
                                </button>
                            {/* 图片 */}
                            <div
                                className="flex transition-transform duration-1000"
                                style={{
                                    transform: `translateX(-${imageIndexes[resourceIndex] * 100}%)`,
                                }}
                            >
                                {Array.isArray(resource.imageUrl) &&
                                    resource.imageUrl.map((image, index) => (
                                        <div
                                            key={index}
                                            className= 'flex-shrink-1 w-full h-full'
                                        >
                                            <img
                                                src={image}
                                                alt={resource.title}
                                                style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                                                className="rounded-lg object-contain"
                                            />
                                        </div>
                                    ))}
                            </div>
                            {/* 图片右边滚动按钮 */}
                                <button
                                    onClick={() => handleImageNext(resourceIndex)}
                                    className="absolute top-1/2 right-0 text-m transform -translate-y-1/2 bg-transparent p-4 h-full w-[30px] z-10 opacity-40 hover:opacity-90 transition-opacity duration-300"
                                >
                                    ▶
                                </button>
                            </div>

                            <div className="flex-1 ml-6 mr-6">
                                <h3 className="text-xl font-semibold mb-4">{resource.title}</h3>
                                <p className="text-gray-600 text-m mb-4 mt-4">{resource.description}</p>
                                <div className="text-gray-500 text-m mb-4 mt-4">
                                    <span className="font-bold">Category:</span> {resource.category}
                                </div>
                                <div className="text-gray-500 text-m mb-4 mt-4">
                                    <span className="font-bold">Uploaded:</span> {resource.uploadDate}
                                </div>
                                <a
                                    href={resource.link}
                                    className="block bg-lighter text-white text-center py-2 mt-4 mb-4 rounded hover:bg-middle"
                                >
                                    View Resource
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 左右切换按钮 */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300"
            >
                ◀
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 text-2xl transform -translate-y-1/2 bg-transparent p-2 h-full w-[50px] opacity-40 hover:opacity-90 transition-opacity duration-300"
            >
                ▶
            </button>

            {/* 底部指示点 */}
            <div className="flex justify-center mt-2 mr-6 bg-transparent">
                {resources.map((_, index) => (
                    <div
                        key={index}
                        className={`h-3 w-3 rounded-full ml-2 mx-1 ${
                            currentIndex === index ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
