import React from "react"
import { useNavigate } from "react-router-dom"

const WelcomeScreen = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome to Adaptive Learning!
                </h1>
                <p className="text-gray-600 mb-8">
                    To provide you with a personalized learning experience, we
                    need to understand your current skills and interests. Please
                    take our quick assessment test to get started.
                </p>

                <button
                    onClick={() => navigate("/assessment")}
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Start Assessment Test
                </button>

                <p className="mt-4 text-sm text-gray-500">
                    This will take approximately 5-10 minutes to complete
                </p>
            </div>
        </div>
    )
}

export default WelcomeScreen
