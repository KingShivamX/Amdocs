import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import AssessmentTest from "../components/assessment/AssessmentTest"
import WelcomeScreen from "../components/welcome/WelcomeScreen"
import DashboardPage from "../pages/dashboard/DashboardPage"
import RecommendedCourses from "../pages/dashboard/RecommendedCourses"
import LearningPath from "../pages/dashboard/LearningPath"

// Loading component for suspense fallback
const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
)

const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/assessment" element={<AssessmentTest />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/dashboard/courses" element={<RecommendedCourses />} />
                <Route path="/dashboard/learning-path" element={<LearningPath />} />
                <Route path="*" element={<WelcomeScreen />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
