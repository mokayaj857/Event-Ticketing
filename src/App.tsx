import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Discover from "./pages/Discover";
import EventList from "./pages/EventList";
import EventDetails from "./pages/EventDetails";
import TicketPurchase from "./components/TicketPurchase";
import Testimonials from "./pages/Testimonials";
import Chatbit from "./pages/Chatbit";
import Footer from "./components/Footer"; // Updated import path for Footer
import Qrcode from "./pages/Qrcode";
import ConnectWalletButton from "./components/ConnectWallet";
import CreateEvent from "./pages/CreateEvent";
import MintNFT from "./pages/MintNFT";
const App = () => {
  return (
    <Router>
      {/* Chatbit Component - Displayed on all pages */}
      <Chatbit />

      {/* Routing Order */}
      <Routes>
        {/* Hero as Default Page */}
        <Route path="/" element={<Hero />} />

        {/* Testimonials under Hero */}
        <Route path="/testimonials" element={<Testimonials />} />
        
        {/* Qrcode under Testimonials */}
        <Route path="/qrcode" element={<Qrcode />} />

        {/* Discover under Testimonials */}
        <Route path="/discover" element={<Discover />} />

        {/* Home, EventList, EventDetails remain unchanged */}
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/event/:eventId" element={<EventDetails />} />

        {/* Additional Pages */}
        <Route path="/purchase" element={<TicketPurchase />} />
        <Route path="/connect wallet" element={<ConnectWalletButton />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/mint" element={<MintNFT />} />
      </Routes>

      {/* Footer Component - Displayed on all pages */}
      <Footer />
    </Router>
  );
};

export default App;