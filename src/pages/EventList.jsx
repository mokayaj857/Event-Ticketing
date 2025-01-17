import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Concert A",
    date: "2025-05-01",
    location: "Venue A",
    description: "Join us for an amazing night of live music!",
    category: "Music",
  },
  {
    id: 2,
    title: "Conference B",
    date: "2025-06-15",
    location: "Venue B",
    description: "A gathering of industry experts and innovators.",
    category: "Business",
  },
  {
    id: 3,
    title: "Workshop C",
    date: "2025-07-20",
    location: "Venue C",
    description: "Hands-on learning experience with professionals.",
    category: "Education",
  },
];

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export default function EventList() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => (
          <div 
            key={event.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={`/api/placeholder/400/200`}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {event.category}
              </span>
            </div>
            
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>
              
              <Link 
                to={`/event/${event.id}`}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}