
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PhotoGallery = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl opacity-90">Capturing moments and memories at GBU</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5000+</div>
              <div className="text-gray-600">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">100+</div>
              <div className="text-gray-600">Albums</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-gray-600">Events Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">200+</div>
              <div className="text-gray-600">Campus Shots</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                <span className="text-gray-600">Photo {item}</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">Album Title {item}</h3>
                <p className="text-gray-600 text-sm">Event date: December {item}, 2024</p>
                <p className="text-gray-600 text-sm">25 photos</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PhotoGallery;
