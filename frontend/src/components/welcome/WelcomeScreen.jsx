import React from "react"
import { useNavigate } from "react-router-dom"
import educationSvg from "/education.svg"

const WelcomeScreen = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Your Personalized Learning Journey Starts Here
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Get AI-powered recommendations tailored to your skills,
                            interests, and learning style.
                        </p>
                        <button
                            onClick={() => navigate("/assessment")}
                            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
                        >
                            Take Assessment
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <img
                            src={educationSvg}
                            alt="Education"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Skill Assessment"
                            description="Take a quick assessment to identify your current skills and learning preferences."
                            icon="📝"
                            color="bg-cyan-50"
                            iconBg="bg-cyan-100"
                            borderColor="border-cyan-200"
                        />
                        <FeatureCard
                            title="AI-Powered Matching"
                            description="Our ML model analyzes your profile to create personalized learning recommendations."
                            icon="🤖"
                            color="bg-indigo-50"
                            iconBg="bg-indigo-100"
                            borderColor="border-indigo-200"
                        />
                        <FeatureCard
                            title="Custom Learning Path"
                            description="Get a tailored roadmap with courses, projects, and resources matched to your goals."
                            icon="🎯"
                            color="bg-sky-50"
                            iconBg="bg-sky-100"
                            borderColor="border-sky-200"
                        />
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                        Why Choose Pathwise?
                    </h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Our platform combines cutting-edge AI with proven learning methodologies 
                        to deliver the most effective personalized learning experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <BenefitCard
                            title="Personalized Learning"
                            description="Get recommendations based on your unique skill set and learning style."
                            icon="🎯"
                            color="bg-blue-50"
                            iconBg="bg-blue-100"
                        />
                        <BenefitCard
                            title="Adaptive Progress"
                            description="Your learning path evolves as you grow and achieve milestones."
                            icon="📈"
                            color="bg-green-50"
                            iconBg="bg-green-100"
                        />
                        <BenefitCard
                            title="Industry Relevance"
                            description="Focus on in-demand skills that matter in today's tech landscape."
                            icon="💼"
                            color="bg-purple-50"
                            iconBg="bg-purple-100"
                        />
                        <BenefitCard
                            title="Structured Growth"
                            description="Follow a clear, organized path to reach your career goals."
                            icon="🚀"
                            color="bg-orange-50"
                            iconBg="bg-orange-100"
                        />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-indigo-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Start Your Learning Journey?
                    </h2>
                    <button
                        onClick={() => navigate("/assessment")}
                        className="bg-white text-indigo-700 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                        Begin Assessment
                    </button>
                </div>
            </div>
        </div>
    )
}

const FeatureCard = ({ title, description, icon, color, iconBg, borderColor }) => (
    <div className={`${color} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border ${borderColor} transform hover:-translate-y-1 text-center`}>
        <div className={`${iconBg} p-4 rounded-lg shadow-sm w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
            <span className="text-3xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
)

const BenefitCard = ({ title, description, icon, color, iconBg }) => (
    <div className={`${color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100`}>
        <div className="flex items-start space-x-4">
            <div className={`${iconBg} p-3 rounded-lg`}>
                <span className="text-2xl">{icon}</span>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
)

export default WelcomeScreen
