import React, { useState, useEffect } from 'react';
import { QRCode } from 'react-qr-code';
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  Ticket, 
  Lock,
  Scan,
  Globe
} from 'lucide-react';

const QRVerificationSystem = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [qrData, setQrData] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);

  // Simulated ticket data
  const mockTickets = [
    {
      id: 'AVX-1234',
      event: 'Blockchain Summit 2025',
      date: '2025-03-15',
      venue: 'Tech Center',
      price: '0.5 AVAX',
      txHash: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
    },
    {
      id: 'AVX-5678',
      event: 'Web3 Conference',
      date: '2025-04-01',
      venue: 'Innovation Hub',
      price: '0.8 AVAX',
      txHash: '0x912d35Cc6634C0532925a3b844Bc454e4438f123'
    }
  ];

  const generateQRCode = (ticketData) => {
    setSelectedTicket(ticketData);
    const qrString = JSON.stringify({
      ticketId: ticketData.id,
      txHash: ticketData.txHash,
      timestamp: Date.now()
    });
    setQrData(qrString);
  };

  const verifyTicket = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setVerificationStatus('success');
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float-slow"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(0,0,0,0) 70%)`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 
            bg-clip-text text-transparent">
            Avalanche Ticket Verification
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Secure ticket verification powered by Avalanche blockchain technology. 
            Generate and verify QR codes for your event tickets instantly.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-12">
          {/* Left Column - Ticket Selection */}
          <div className="space-y-6">
            <div className="bg-purple-900/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Ticket className="w-5 h-5 mr-2 text-purple-400" />
                Select Ticket to Verify
              </h2>
              
              <div className="space-y-4">
                {mockTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    onClick={() => generateQRCode(ticket)}
                    className={`group relative p-4 rounded-lg border border-purple-500/20 cursor-pointer 
                      transition-all duration-300 hover:border-purple-500/40 
                      ${selectedTicket?.id === ticket.id ? 'bg-purple-900/40' : 'bg-purple-900/20'}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 
                      rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-purple-300">{ticket.event}</h3>
                        <span className="text-sm text-gray-400">{ticket.id}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                        <div>Date: {ticket.date}</div>
                        <div>Venue: {ticket.venue}</div>
                        <div>Price: {ticket.price}</div>
                        <div className="truncate">Tx: {ticket.txHash}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - QR Code Display & Verification */}
          <div className="space-y-6">
            {/* QR Code Display */}
            <div className="bg-purple-900/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Scan className="w-5 h-5 mr-2 text-purple-400" />
                Ticket QR Code
              </h2>
              
              <div className="flex justify-center p-8">
                {qrData ? (
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                      rounded-xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-white p-4 rounded-xl">
                      <QRCode value={qrData} size={200} />
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400 text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    Select a ticket to generate QR code
                  </div>
                )}
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-purple-900/20 backdrop-blur-xl rounded-xl p-6 border border-purple-500/20">
              <h2 className="text-xl font-semibold mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-purple-400" />
                Verification Status
              </h2>
              
              <div className="text-center">
                {isVerifying ? (
                  <div className="animate-pulse">
                    <RefreshCw className="w-16 h-16 mx-auto mb-4 text-purple-400 animate-spin" />
                    <p>Verifying on Avalanche Network...</p>
                  </div>
                ) : verificationStatus === 'success' ? (
                  <div className="text-green-400">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <p>Ticket Verified Successfully!</p>
                  </div>
                ) : verificationStatus === 'error' ? (
                  <div className="text-red-400">
                    <XCircle className="w-16 h-16 mx-auto mb-4" />
                    <p>Verification Failed</p>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    <Lock className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p>Ready to verify ticket</p>
                  </div>
                )}

                {qrData && !isVerifying && (
                  <button
                    onClick={verifyTicket}
                    className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
                      rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all
                      flex items-center justify-center space-x-2 mx-auto"
                  >
                    <Shield className="w-5 h-5" />
                    <span>Verify on Avalanche</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Network Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Connected to Avalanche Network • Current Block: 12345678
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRVerificationSystem;