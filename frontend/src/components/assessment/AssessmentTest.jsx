import React, { useState } from "react"
import QuestionCard from "./QuestionCard"
import ProgressBar from "./ProgressBar"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const AssessmentTest = () => {
    const { setHasCompletedAssessment } = useAuth()
    const navigate = useNavigate()
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState({})
    const [error, setError] = useState("")

    // Sample questions (you can move this to a separate data file)
    const questions = [
        {
            id: 1,
            question: "What skills do you currently have?",
            options: [
                "Python Programming",
                "Data Analysis & Visualization",
                "Machine Learning",
                "Web Development (Frontend)",
                "Web Development (Backend)",
                "Database Management (SQL/NoSQL)",
                "Cloud Services (AWS/Azure/GCP)",
                "DevOps & CI/CD",
                "Mobile App Development",
                "UI/UX Design",
                "JavaScript/TypeScript",
                "Java Development",
                "System Architecture",
                "API Development",
                "Testing & QA"
            ],
            type: "multiple",
            description: "Select all the skills you currently possess"
        },
        {
            id: 2,
            question: "What's your experience level in programming?",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"],
            type: "single",
        },
        {
            id: 3,
            question: "Which areas interest you the most?",
            options: [
                "Web Development",
                "AI/ML",
                "Mobile Development",
                "DevOps",
                "Cybersecurity",
                "Data Science",
                "Cloud Computing",
                "Blockchain"
            ],
            type: "multiple",
        },
        {
            id: 4,
            question: "How many hours can you dedicate to learning per week?",
            options: ["0-5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
            type: "single",
        }
    ]

    const handleAnswer = (questionId, answer) => {
        setAnswers(prev => ({ ...prev, [questionId]: answer }))
        setError("") // Clear error when user answers
    }

    const handleNext = () => {
        // Check if current question is answered
        if (!answers[questions[currentQuestion].id]) {
            setError("Please answer the question before proceeding")
            return
        }

        if (currentQuestion === questions.length - 1) {
            handleSubmit()
        } else {
            setCurrentQuestion(prev => prev + 1)
        }
    }

    const handleSubmit = async () => {
        try {
            // TODO: Send answers to backend
            console.log("Assessment answers:", answers)
            setHasCompletedAssessment(true)
            navigate("/dashboard")
        } catch (error) {
            console.error("Error submitting assessment:", error)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header - Compact fixed header */}
            <div className="bg-white shadow-sm fixed top-0 w-full z-10">
                <div className="px-6 py-2">
                    <div className="flex items-center justify-between mb-1">
                        <h1 className="text-lg font-bold text-gray-900">Skill Assessment</h1>
                        <div className="text-sm text-gray-600">
                            Question {currentQuestion + 1} of {questions.length}
                        </div>
                    </div>
                    <ProgressBar
                        current={currentQuestion + 1}
                        total={questions.length}
                    />
                </div>
            </div>

            {/* Main Content - Adjusted spacing */}
            <div className="pt-14">
                <div className="px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full py-4">
                    <div className="bg-white rounded-xl shadow-sm p-4">
                        <QuestionCard
                            question={questions[currentQuestion]}
                            onAnswer={handleAnswer}
                            currentAnswer={answers[questions[currentQuestion].id]}
                        />
                    </div>
                </div>
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-2">
                <div className="max-w-3xl mx-auto flex items-center justify-end gap-4">
                    {error && (
                        <span className="text-red-600 text-sm">{error}</span>
                    )}
                    <button
                        onClick={handleNext}
                        className={`px-6 py-1.5 rounded-lg font-semibold text-white 
                            ${answers[questions[currentQuestion].id]
                                ? 'bg-indigo-600 hover:bg-indigo-700'
                                : 'bg-gray-400 cursor-not-allowed'}
                            transition-colors`}
                        disabled={!answers[questions[currentQuestion].id]}
                    >
                        {currentQuestion === questions.length - 1
                            ? "Submit"
                            : "Next"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AssessmentTest
