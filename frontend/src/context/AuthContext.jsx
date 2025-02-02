import React, { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false)
    const [user, setUser] = useState({
        name: "Test User",
        email: "test@example.com",
        createdAt: new Date().toISOString()
    })
    const navigate = useNavigate()

    const login = (userData) => {
        // No need to implement
    }

    const logout = () => {
        // No need to implement
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                hasCompletedAssessment,
                setHasCompletedAssessment,
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
