import React from 'react';
import DashboardNavigation from '../common/DashboardNavigation';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <DashboardNavigation />
            <main className="py-10 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 