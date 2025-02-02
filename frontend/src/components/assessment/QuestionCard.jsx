import React from "react"

const QuestionCard = ({ question, onAnswer, currentAnswer }) => {
    const handleOptionClick = (option) => {
        if (question.type === "multiple") {
            const newAnswer = currentAnswer || []
            const updatedAnswer = newAnswer.includes(option)
                ? newAnswer.filter(item => item !== option)
                : [...newAnswer, option]
            onAnswer(question.id, updatedAnswer)
        } else {
            onAnswer(question.id, option)
        }
    }

    return (
        <div className="space-y-3">
            <div className="mb-3">
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                    {question.question}
                </h2>
                {question.description && (
                    <p className="text-sm text-gray-600">{question.description}</p>
                )}
            </div>

            <div className="max-h-[calc(100vh-240px)] overflow-y-auto space-y-2">
                {question.options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className={`w-full text-left p-3 rounded-lg border transition-all
                            ${
                                question.type === "multiple"
                                    ? currentAnswer?.includes(option)
                                        ? "border-indigo-600 bg-indigo-50"
                                        : "border-gray-200 hover:border-indigo-300"
                                    : currentAnswer === option
                                    ? "border-indigo-600 bg-indigo-50"
                                    : "border-gray-200 hover:border-indigo-300"
                            }
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`flex-shrink-0 w-4 h-4 border rounded-${question.type === "multiple" ? "sm" : "full"}
                                ${
                                    question.type === "multiple"
                                        ? currentAnswer?.includes(option)
                                            ? "bg-indigo-600 border-indigo-600"
                                            : "border-gray-300"
                                        : currentAnswer === option
                                        ? "bg-indigo-600 border-indigo-600"
                                        : "border-gray-300"
                                }
                            `}>
                                {(question.type === "multiple" ? currentAnswer?.includes(option) : currentAnswer === option) && (
                                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <span className="text-gray-900">{option}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard
