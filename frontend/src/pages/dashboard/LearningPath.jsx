import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

const LearningPath = () => {
    const pathSteps = [
        {
            id: 1,
            title: "Web Development Fundamentals",
            status: "completed",
            items: ["HTML", "CSS", "JavaScript Basics"]
        },
        {
            id: 2,
            title: "Frontend Development",
            status: "current",
            items: ["React.js", "State Management", "API Integration"]
        },
        {
            id: 3,
            title: "Backend Development",
            status: "upcoming",
            items: ["Node.js", "Express", "Database Design"]
        }
    ];

    return (
        <MainLayout>
            <div className="py-6">
                <h1 className="text-2xl font-semibold text-gray-900">Your Learning Path</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Personalized roadmap based on your goals
                </p>
                <div className="mt-6">
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {pathSteps.map((step, stepIdx) => (
                                <li key={step.id}>
                                    <div className="relative pb-8">
                                        {stepIdx !== pathSteps.length - 1 ? (
                                            <span
                                                className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                                                aria-hidden="true"
                                            />
                                        ) : null}
                                        <div className="relative flex space-x-3">
                                            <div>
                                                <span
                                                    className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                                                        step.status === 'completed'
                                                            ? 'bg-green-500'
                                                            : step.status === 'current'
                                                            ? 'bg-blue-500'
                                                            : 'bg-gray-200'
                                                    }`}
                                                >
                                                    {step.status === 'completed' ? (
                                                        <svg
                                                            className="w-5 h-5 text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <span className="text-white">{step.id}</span>
                                                    )}
                                                </span>
                                            </div>
                                            <div className="min-w-0 flex-1 pt-1.5">
                                                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        {step.title}
                                                    </h3>
                                                    <ul className="mt-2 space-y-1">
                                                        {step.items.map((item, index) => (
                                                            <li
                                                                key={index}
                                                                className="text-sm text-gray-600"
                                                            >
                                                                • {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default LearningPath; 