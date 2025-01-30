import React from 'react';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Dashboard</h1>
          
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Learning Progress Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">Learning Progress</h2>
              {/* TODO: Add LearningProgress component */}
            </div>

            {/* Recommended Courses Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">Recommended Courses</h2>
              {/* TODO: Add RecommendedCourses component */}
            </div>

            {/* Skills Overview Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900">Skills Overview</h2>
              {/* TODO: Add SkillsOverview component */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage; 