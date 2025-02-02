import React from "react"

const ProgressBar = ({ current, total }) => {
    const progress = (current / total) * 100

    return (
        <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
                className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}

export default ProgressBar
