import React, { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import AssessmentTest from "../components/assessment/AssessmentTest"
import WelcomeScreen from "../components/welcome/WelcomeScreen"

// Lazy load pages
const LoginPage = React.lazy(() => import("../pages/auth/LoginPage"))
const RegisterPage = React.lazy(() => import("../pages/auth/RegisterPage"))
const DashboardPage = React.lazy(() =>
    import("../pages/dashboard/DashboardPage")
)
const ProfilePage = React.lazy(() => import("../pages/profile/ProfilePage"))

// Loading component for suspense fallback
const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>
)

const AppRoutes = () => {
    // This should come from your auth context/state
    const isLoggedIn = true // Replace with actual auth check

    // This should come from your user context/state
    const hasCompletedAssessment = false // Replace with actual check

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>

                {/* Redirect to welcome screen if logged in but hasn't completed assessment */}
                <Route
                    path="/"
                    element={
                        isLoggedIn ? (
                            hasCompletedAssessment ? (
                                <DashboardPage />
                            ) : (
                                <WelcomeScreen />
                            )
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />

                {/* Catch all - 404 */}
                <Route
                    path="*"
                    element={<Navigate to="/dashboard" replace />}
                />

                <Route path="/assessment" element={<AssessmentTest />} />
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
