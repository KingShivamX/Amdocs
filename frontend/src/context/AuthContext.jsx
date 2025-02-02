import React, { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    // Set default logged in state to true
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [hasCompletedAssessment, setHasCompletedAssessment] = useState(false)
    // Set a default user
    const [user, setUser] = useState({
        name: "Test User",
        email: "test@example.com",
        createdAt: new Date().toISOString()
    })
    const navigate = useNavigate()

    // Remove the useEffect that checks for stored user

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
