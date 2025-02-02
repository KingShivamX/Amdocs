import React, { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import AssessmentTest from "../components/assessment/AssessmentTest"
import WelcomeScreen from "../components/welcome/WelcomeScreen"
import { useAuth } from "../context/AuthContext"
import DashboardPage from "../pages/dashboard/DashboardPage"
import ProfilePage from "../pages/profile/ProfilePage"

// Loading component for suspense fallback
const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
)

const AppRoutes = () => {
    const { hasCompletedAssessment } = useAuth()

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* Protected Routes - now accessible without login */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>

                {/* Home route */}
                <Route
                    path="/"
                    element={
                        hasCompletedAssessment ? (
                            <DashboardPage />
                        ) : (
                            <WelcomeScreen />
                        )
                    }
                />

                {/* Assessment route */}
                <Route path="/assessment" element={<AssessmentTest />} />

                {/* Catch all - redirect to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
