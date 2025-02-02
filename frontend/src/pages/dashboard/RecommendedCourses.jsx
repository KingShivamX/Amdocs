import React from 'react';
import MainLayout from '../../components/layout/MainLayout';

const RecommendedCourses = () => {
    const courses = [
        {
            id: 1,
            title: "Introduction to Web Development",
            description: "Learn the fundamentals of web development with HTML, CSS, and JavaScript",
            level: "Beginner",
            duration: "8 weeks"
        },
        {
            id: 2,
            title: "React.js Fundamentals",
            description: "Master modern frontend development with React.js",
            level: "Intermediate",
            duration: "6 weeks"
        },
        {
            id: 3,
            title: "Node.js Backend Development",
            description: "Build scalable backend applications with Node.js",
            level: "Intermediate",
            duration: "10 weeks"
        }
    ];

    return (
        <MainLayout>
            <div className="py-6">
                <h1 className="text-2xl font-semibold text-gray-900">Recommended Courses</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Courses tailored to your skills and interests
                </p>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:border-indigo-200 transition-colors"
                        >
                            <div className="p-6">
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">
                                        {course.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {course.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <span>{course.level}</span>
                                        <span>•</span>
                                        <span>{course.duration}</span>
                                    </div>
                                    <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default RecommendedCourses; 