import React, { useState } from 'react';
import subject from "../lib/SubjectData.json";
import subjectChapters from '../lib/subjectsChapters.json';

// 左侧导航栏组件
const Sidebar = ({ categories, onSelectSubject }) => {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const toggleCategory = (category) => {
        setExpandedCategory((prev) =>
            prev === category ? null : category
        );
    };

    return (
        <div className="max-w-7xl mx-auto md:w-1/3 pl-48 text-darker p-4">
            {subject.map((category) => (
                <div key={category.name}>
                    <div
                        className="cursor-pointer text-darker font-semibold text-xl py-2"
                        onClick={() => toggleCategory(category.name)}
                    >
                        {category.name}
                    </div>
                    {expandedCategory === category.name && (
                        <div className="ml-4">
                            {category.subcategories.map((sub) => (
                                <div key={sub.name}>
                                    <div
                                        className="cursor-pointer text-lg py-1"
                                        onClick={() => onSelectSubject(sub.name, category.name)}
                                    >
                                        {sub.name}
                                    </div>
                                    {sub.subjects && (
                                        <div className="ml-4">
                                            {sub.subjects.map((subject) => (
                                                <div
                                                    key={subject}
                                                    className="cursor-pointer text-lg py-1"
                                                    onClick={() => onSelectSubject(subject, category.name, sub.name || null)}
                                                >
                                                    {subject}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

// 右侧章节资源展示组件
    const ChapterList = ({ selectedSubject }) => {
        if (!selectedSubject) {
            return (
            <div className="max-w-7xl mx-auto md:w-2/3 pr-48 flex items-center justify-center text-xl text-darker text-semibold p-4">
                Please select a subject to view the chapters.
            </div> //注意：右侧样式调整
            );
        }

    const chapters = subjectChapters[selectedSubject] || [];

    return (
        <div className="max-w-7xl mx-auto md:w-2/3 pr-48 p-4"> 
            <div className="text-xl font-bold mb-4">{selectedSubject}</div>
            {chapters.length === 0 ? (
                <div>No chapters available for this subject.</div>
            ) : (
                chapters.map((chapter) => (
                    <div key={chapter.name} className="flex flex-row mb-4 border border-gray-300 rounded-lg shadow-md p-3">
                        <a
                            href={`#${chapter.name.replace(/\s+/g, '-').toLowerCase()}`} // 动态生成锚点链接
                            className="font-semibold mr-4 text-darker"
                        >
                            {chapter.name}
                        </a>
                        <div className="flex space-x-4 ml-auto">
                            <a href="#{chapter.analysisLink}" className="text-darker">
                                Analysis
                            </a>
                            <a href="#{chapter.mindmapLink}" className="text-darker">
                                Mindmap
                            </a>
                            <a href="#{chapter.videoLink}" className="text-darker">
                                Video
                            </a>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

// 主页面组件
const ResourcePage = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);

    const categories = Array.isArray(subject) ? subject : subject.categories || [];

    const handleSelectSubject = (subjectName, categoryName, subcategoryName) => {
        let selectedSubject = null;
    
        // 找到对应的主分类
        const category = categories.find((cat) => cat.name === categoryName);
        if (!category) return;

        const subcategory = category.subcategories.find(
            (sub) => sub.name === subcategoryName && sub.subjects.includes(subjectName)
        );

        if (subcategoryName) {
            // 处理有子分类名的情况
            const subcategory = category.subcategories.find(
                (sub) => sub.name === subcategoryName && sub.subjects.includes(subjectName)
            );
    
            if (subcategory) {
                selectedSubject = `${categoryName} ${subcategoryName} ${subjectName}`;
            }
        } else {
            // 处理没有子分类名的情况（如 IGCSE）
            const subcategory = category.subcategories.find((sub) =>
                sub.subjects.includes(subjectName)
            );
    
            if (subcategory) {
                selectedSubject = `${categoryName} ${subjectName}`;
            }
        }
        setSelectedSubject(selectedSubject); // 设置选中的学科
    };

    return (
        <div className="flex">
            {/* 左侧导航栏 */}
            <Sidebar categories={categories} onSelectSubject={handleSelectSubject} />

            {/* 右侧章节资源展示 */}
            <ChapterList selectedSubject={selectedSubject} />
        </div>
    );
};

export default ResourcePage;
