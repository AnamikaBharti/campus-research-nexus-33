
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventsCalendar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Events Calendar</h1>
          <p className="text-xl opacity-90">Discover upcoming events and activities at GBU</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-8 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Annual Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">200+</div>
              <div className="text-gray-600">Student Activities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">25+</div>
              <div className="text-gray-600">Cultural Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-gray-600">Academic Conferences</div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center font-semibold p-2">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => (
                  <div key={i} className="text-center p-2 hover:bg-gray-100 rounded cursor-pointer">
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            {/* Event List */}
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Event Title {item}</h3>
                      <p className="text-gray-600 mb-2">Date: December {item + 10}, 2024</p>
                      <p className="text-gray-600 mb-2">Time: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-600">Venue: University Auditorium</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Upcoming
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <h3 className="text-xl font-bold mb-4">Event Categories</h3>
            <div className="space-y-2">
              {['Academic', 'Cultural', 'Sports', 'Workshops', 'Seminars', 'Celebrations'].map((category) => (
                <div key={category} className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                  {category}
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

export default EventsCalendar;
