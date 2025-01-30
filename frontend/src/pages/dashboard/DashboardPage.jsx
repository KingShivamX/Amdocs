import React from "react"
import { useAuth } from "../../context/AuthContext"

const DashboardPage = () => {
    const { hasCompletedAssessment } = useAuth()

    return (
        <div className="min-h-screen bg-gray-100">
            <main className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Your Learning Dashboard
                        </h1>
                        {!hasCompletedAssessment && (
                            <div className="mt-4 p-4 bg-yellow-50 rounded-md">
                                <p className="text-yellow-700">
                                    Please complete the assessment test to get
                                    personalized recommendations.
                                </p>
                            </div>
                        )}
                    </div>

                    {hasCompletedAssessment ? (
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {/* Learning Progress Section */}
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Your Learning Path
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-2/3">
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <div className="h-2 bg-blue-600 rounded-full w-1/3"></div>
                                            </div>
                                        </div>
                                        <span className="ml-4 text-sm text-gray-600">
                                            33% Complete
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Recommended Courses */}
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                                    Recommended Courses
                                </h2>
                                <div className="space-y-4">
                                    <div className="border rounded-lg p-4">
                                        <h3 className="font-medium">
                                            Introduction to Web Development
                                        </h3>
                                        <p className="text-sm text-gray-600 mt-1">
                                            Based on your assessment results
                                        </p>
                                    </div>
                                    <div className="border rounded-lg p-4">
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
                            <div className="bg-white shadow rounded-lg p-6">
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
                                                className="h-2 bg-green-500 rounded-full"
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
                                                className="h-2 bg-yellow-500 rounded-full"
                                                style={{ width: "45%" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="text-gray-600">
                                Complete the assessment to view your
                                personalized dashboard.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}

export default DashboardPage
