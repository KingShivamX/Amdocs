import React, { useState } from "react"
import QuestionCard from "./QuestionCard"
import ProgressBar from "./ProgressBar"

const AssessmentTest = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState({})

    // Sample questions (you can move this to a separate data file)
    const questions = [
        {
            id: 1,
            question: "What's your experience level in programming?",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"],
            type: "single",
        },
        {
            id: 2,
            question: "Which areas interest you the most?",
            options: [
                "Web Development",
                "AI/ML",
                "Mobile Development",
                "DevOps",
                "Cybersecurity",
            ],
            type: "multiple",
        },
        {
            id: 3,
            question: "How many hours can you dedicate to learning per week?",
            options: ["0-5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
            type: "single",
        },
    ]

    const handleAnswer = (questionId, answer) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: answer,
        }))
    }

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        } else {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        // TODO: Send answers to backend
        console.log("Assessment answers:", answers)
        // Navigate to dashboard or loading screen while ML processes results
    }

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Skill Assessment Test</h1>

            <ProgressBar
                current={currentQuestion + 1}
                total={questions.length}
            />

            <QuestionCard
                question={questions[currentQuestion]}
                onAnswer={handleAnswer}
                currentAnswer={answers[questions[currentQuestion].id]}
            />

            <div className="mt-6 flex justify-end">
                <button
                    onClick={handleNext}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                    {currentQuestion === questions.length - 1
                        ? "Submit"
                        : "Next"}
                </button>
            </div>
        </div>
    )
}

export default AssessmentTest
