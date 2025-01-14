import React from 'react';

const testimonials = [
    {
    id: 1,
    name: '张伟',
    avatar: '/path-to-avatar1.jpg',
    review: '用了平台的 SAT 笔记，成功提高 200 分！',
    completedNotes: 30, // 完成的笔记数量
    },
    {
    id: 2,
    name: '李娜',
    avatar: '/path-to-avatar2.jpg',
    review: '平台的学习资源很全面，帮助我顺利通过了 GRE！',
    completedNotes: 25,
    },
    {
    id: 3,
    name: '王强',
    avatar: '/path-to-avatar3.jpg',
    review: '通过平台的高效学习，我的雅思成绩提升了 2 分！',
    completedNotes: 18,
    },
];

export default function SuccessStories() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-darker mb-12">用户评价 & 成功案例</h2>
        
        {/* 展示每个用户的评价 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
            <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              {/* 用户头像 */}
                <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name}头像`}
                    className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                {/* 用户名字 */}
                <h3 className="text-xl font-semibold text-darker mb-2">{testimonial.name}</h3>
                {/* 用户评价 */}
                <p className="text-gray-600 mb-4">{testimonial.review}</p>
                {/* 用户学习数据 */}
                <div className="text-sm text-gray-500">
                    完成笔记数：<span className="font-semibold">{testimonial.completedNotes}</span>
                </div>
            </div>
            ))}
        </div>
        </div>
    </section>
    );
}
