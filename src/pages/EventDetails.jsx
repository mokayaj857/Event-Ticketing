import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, MapPin, Ticket, Wallet, ArrowLeft, DollarSign } from "lucide-react";

const eventDetails = {
  1: {
    title: "Concert A",
    description: "Join us for an unforgettable night of live music featuring top artists! Experience amazing acoustics, spectacular light shows, and an electric atmosphere that will leave you wanting more.",
    price: "30",
    date: "2025-05-01",
    location: "Venue A",
    capacity: "500",
    organizer: "Music Events Co.",
    category: "Music"
  },
  2: {
    title: "Conference B",
    description: "A premier tech conference bringing together industry leaders, innovators, and enthusiasts. Network with professionals, attend workshops, and gain insights into the latest technological trends.",
    price: "100",
    date: "2025-06-15",
    location: "Venue B",
    capacity: "1000",
    organizer: "Tech Summit Inc.",
    category: "Technology"
  }
};

export default function EventDetails() {
  const { eventId } = useParams();
  const event = eventDetails[eventId];
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <Link to="/" className="text-blue-500 hover:text-blue-600 flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePurchase = () => {
    if (!isWalletConnected) {
      setShowModal(true);
    } else {
      // Handle purchase logic here
      alert("Processing your purchase...");
    }
  };

  const connectWallet = () => {
    setIsWalletConnected(true);
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-6 gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Events
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={`/api/placeholder/800/400`}
            alt={event.title}
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {event.category}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Ticket className="w-5 h-5" />
                  <span>Capacity: {event.capacity} attendees</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-5 h-5" />
                  <span className="text-2xl font-bold">${event.price}</span>
                </div>
                <p className="text-gray-600">Organized by: {event.organizer}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 mb-6">
              <h2 className="text-xl font-semibold mb-3">About This Event</h2>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>

            <button
              onClick={handlePurchase}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Ticket className="w-5 h-5" />
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Connect Your Wallet</h2>
            <p className="text-gray-600 mb-4">
              Please connect your wallet to purchase tickets for this event.
            </p>
            <div className="flex gap-3">
              <button
                onClick={connectWallet}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Wallet className="w-4 h-4" />
                Connect Wallet
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}