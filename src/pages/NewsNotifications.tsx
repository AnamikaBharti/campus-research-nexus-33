
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NewsNotifications = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">News & Notifications</h1>
          <p className="text-xl opacity-90">Stay updated with the latest announcements and news from GBU</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">150+</div>
              <div className="text-gray-600">News Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">75+</div>
              <div className="text-gray-600">Notifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">25+</div>
              <div className="text-gray-600">Important Updates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">12+</div>
              <div className="text-gray-600">Emergency Alerts</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Latest News</h2>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-sm text-blue-600 mb-2">December {item}, 2024</div>
                  <h3 className="text-xl font-semibold mb-3">Important University News Title {item}</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Read more →</a>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Sidebar */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Recent Notifications</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="text-sm text-gray-500 mb-1">Dec {item}, 2024</div>
                  <h4 className="font-semibold mb-2">Notification Title {item}</h4>
                  <p className="text-sm text-gray-600">Brief notification description...</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsNotifications;
