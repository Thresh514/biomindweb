import React, { useState } from 'react';

export default function MembershipBenefits() {
    // 定义每个特权模块的状态，用于控制是否展开详细描述
    const [expandedIndex, setExpandedIndex] = useState(null);

    const benefits = [
        {
            title: '无限下载资源',
            description: '会员可以无限制下载平台上的所有学习资源，随时随地掌握新知识。',
            details: '除了普通的资源，会员还可以优先访问最新的学习资料，确保学到最前沿的内容。',
            icon: '/unlimited.svg',
        },
        {
            title: '专属学习计划',
            description: '根据您的学习目标和进度，提供个性化的学习计划，帮助您高效学习。',
            details: '我们的学习计划会根据您的反馈和学习进度进行调整，确保最适合您的学习节奏。',
            icon: '/study-plan.svg', 
        },
        {
            title: '无广告纯净体验',
            description: '会员用户将享受无广告干扰的学习环境，专注于提升自我。',
            details: '告别广告弹窗和中断，让您可以在一个干净、专注的环境中高效学习。',
            icon: '/ad-block-icon.svg',
        },
        {
            title: '专家答疑支持',
            description: '会员可以向专家提问，获得一对一的答疑支持，解决学习中的疑难问题。',
            details: '我们的专家团队随时待命，解答您在学习过程中遇到的各种问题。',
            icon: '/expert-icon.svg',
        },
    ];

    // 切换展开/收起详细描述
    const handleHover = (index) => {
        setExpandedIndex(index);
    };

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-darker mb-12">为什么选择会员？</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"> {/*网格布局：默认一列，屏幕宽度大于640px时为两列，768px以上为四列*/}
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <img
                                src={benefit.icon}
                                alt={benefit.title}
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-darker mb-4">{benefit.title}</h3>
                            <p className="text-gray-600 mb-4">{benefit.description}</p>
                            <div
                            className={`overflow-hidden transition-all duration-300 ${
                            expandedIndex === index ? 'max-h-40' : 'max-h-0'
                            }`}
                            >
                            <p className="text-gray-500">{benefit.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
