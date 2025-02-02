import React from 'react';
import { useAuth } from '../../context/AuthContext';
import Navigation from '../../components/common/Navigation';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="py-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Profile</h1>
          
          <div className="mt-8">
            {/* Profile Information Section */}
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profile Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1 text-gray-900">{user?.name}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <div className="mt-1 text-gray-900">{user?.email}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Member Since</label>
                  <div className="mt-1 text-gray-900">
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
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