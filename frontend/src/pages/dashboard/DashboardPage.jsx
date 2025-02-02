import React from "react"
import { useAuth } from "../../context/AuthContext"
import MainLayout from "../../components/layout/MainLayout"

const DashboardPage = () => {
    const { user } = useAuth()

    return (
        <MainLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Welcome, {user?.name}!
                </h1>
                <p className="text-gray-600">
                    Here's your personalized learning dashboard
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Learning Progress Section */}
                <div className="bg-white shadow-sm rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Your Learning Path
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="w-2/3">
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-2 bg-indigo-600 rounded-full w-1/3"></div>
                                </div>
                            </div>
                            <span className="ml-4 text-sm text-gray-600">
                                33% Complete
                            </span>
                        </div>
                    </div>
                </div>

                {/* Recommended Courses */}
                <div className="bg-white shadow-sm rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Recommended Courses
                    </h2>
                    <div className="space-y-4">
                        <div className="border rounded-lg p-4 hover:border-indigo-200 transition-colors">
                            <h3 className="font-medium">
                                Introduction to Web Development
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Based on your assessment results
                            </p>
                        </div>
                        <div className="border rounded-lg p-4 hover:border-indigo-200 transition-colors">
                            <h3 className="font-medium">
                                JavaScript Fundamentals
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Recommended next step
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills Overview */}
                <div className="bg-white shadow-sm rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Skills Overview
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">
                                    HTML/CSS
                                </span>
                                <span className="text-sm text-gray-600">
                                    70%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div
                                    className="h-2 bg-green-500 rounded-full transition-all duration-300"
                                    style={{ width: "70%" }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">
                                    JavaScript
                                </span>
                                <span className="text-sm text-gray-600">
                                    45%
                                </span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full">
                                <div
                                    className="h-2 bg-yellow-500 rounded-full transition-all duration-300"
                                    style={{ width: "45%" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Learning Goals */}
                <div className="bg-white shadow-sm rounded-xl p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        Learning Goals
                    </h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span>Complete JavaScript Fundamentals</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-yellow-100 p-2 rounded-lg">
                                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span>Build 3 Frontend Projects</span>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default DashboardPage
