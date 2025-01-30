import React from 'react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Profile</h1>
          
          <div className="mt-8">
            {/* Profile Information Section */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
              {/* TODO: Add ProfileInfo component */}
            </div>

            {/* Profile Settings Section */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Settings</h2>
              {/* TODO: Add ProfileSettings component */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage; 