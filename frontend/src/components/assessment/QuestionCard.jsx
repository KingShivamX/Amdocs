import React from "react"

const QuestionCard = ({ question, onAnswer, currentAnswer }) => {
    const handleOptionClick = (option) => {
        if (question.type === "single") {
            onAnswer(question.id, option)
        } else if (question.type === "multiple") {
            const currentAnswers = currentAnswer || []
            const updatedAnswers = currentAnswers.includes(option)
                ? currentAnswers.filter((item) => item !== option)
                : [...currentAnswers, option]
            onAnswer(question.id, updatedAnswers)
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
            <div className="space-y-3">
                {question.options.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`p-3 border rounded-lg cursor-pointer hover:bg-gray-50 
              ${
                  question.type === "single" && currentAnswer === option
                      ? "bg-blue-100 border-blue-500"
                      : ""
              }
              ${
                  question.type === "multiple" &&
                  currentAnswer?.includes(option)
                      ? "bg-blue-100 border-blue-500"
                      : ""
              }
            `}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
