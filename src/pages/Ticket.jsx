import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { 
  Wallet, 
  Image as ImageIcon, 
  Sparkles, 
  ChevronRight, 
  Plus, 
  MinusCircle, 
  Loader,
  AlertCircle
} from 'lucide-react';

// Replace with your actual contract address and ABI


const CONTRACT_ADDRESS = "YOUR_NFT_CONTRACT_ADDRESS";
const CONTRACT_ABI = [
  "function mint(uint256 quantity) public payable",
  "function totalSupply() public view returns (uint256)",
  "function maxSupply() public view returns (uint256)",
  "function balanceOf(address owner) public view returns (uint256)"
];

const Ticket = () => {
  // UI States
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [selectedPreview, setSelectedPreview] = useState(0);
  
  // Wallet & Contract States
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [mintCount, setMintCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // NFT States
  const [totalMinted, setTotalMinted] = useState(0);
  const [maxSupply, setMaxSupply] = useState(10000);
  const [userBalance, setUserBalance] = useState(0);

  const PRICE_PER_NFT = 0.08; // ETH

  const previewImages = [
    "/src/assets/rena.png",
    "/src/assets/rab.png",
    "/src/assets/rb.png",
    "/src/assets/rb2.png",
    "/src/assets/ast.png",
    "/src/assets/rb1.png",
    "/src/assets/rb3.png"

  useEffect(() => {
    setIsVisible(true);
    checkWalletConnection();
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', () => window.location.reload());
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  useEffect(() => {
    if (isWalletConnected) {
      updateContractInfo();
    }
  }, [isWalletConnected]);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length === 0) {
      // User disconnected wallet
      setIsWalletConnected(false);
      setWalletAddress('');
    } else {
      // User switched accounts
      setWalletAddress(accounts[0]);
    }
  };

  const checkWalletConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsWalletConnected(true);
        }
      } catch (error) {
        console.error("Error checking wallet connection:", error);
      }
    }
  };

  const updateContractInfo = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
      
      const [supply, max, balance] = await Promise.all([
        contract.totalSupply(),
        contract.maxSupply(),
        contract.balanceOf(walletAddress)
      ]);

      setTotalMinted(Number(supply));
      setMaxSupply(Number(max));
      setUserBalance(Number(balance));
    } catch (error) {
      console.error("Error updating contract info:", error);
    }
  };

  const connectWallet = async () => {
    if (typeof window.ethereum === "undefined") {
      setError("Please install MetaMask to connect your wallet!");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      });
      
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
        setIsWalletConnected(true);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setError("Failed to connect wallet. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMint = async () => {
    if (!isWalletConnected) {
      await connectWallet();
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      // Calculate price in wei
      const priceInEth = (PRICE_PER_NFT * mintCount).toString();
      const priceInWei = ethers.parseEther(priceInEth);

      // Estimate gas to check if transaction will fail
      await contract.mint.estimateGas(mintCount, { value: priceInWei });

      // Execute transaction
      const tx = await contract.mint(mintCount, {
        value: priceInWei
      });

      // Wait for confirmation
      await tx.wait();

      // Update contract info
      await updateContractInfo();

      // Show success message
      alert(`Successfully minted ${mintCount} NFT${mintCount > 1 ? 's' : ''}!`);
    } catch (error) {
      console.error("Error minting NFT:", error);
      setError(error.message || "Failed to mint NFT. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300}px`,
              height: `${Math.random() * 300}px`,
              background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(0,0,0,0) 70%)',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <div className={`text-center mb-16 transition-all duration-1000 
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Realm of Ticket Collection
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Enter the quantum realm with an exclusive ticket to our unique experience. Each ticket grants you access to a one-of-a-kind event, digitally stored and verified on the blockchain.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-2 gap-12 items-center">
            {/* Left Side - Preview */}
            <div className={`transition-all duration-1000 delay-300 
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <div className="relative group">
                {/* Main Preview */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 
                    group-hover:opacity-70 transition-opacity duration-300" />
                  <img 
                    src={previewImages[selectedPreview]}
                    alt="NFT Preview"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Preview Selector */}
                <div className="flex space-x-4 mt-4 overflow-x-auto pb-2">
                  {previewImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedPreview(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0
                        ${selectedPreview === index ? 'ring-2 ring-purple-500' : ''} 
                        transition-all duration-300 transform hover:scale-105`}
                    >
                      <img 
                        src={previewImages[index]}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Minting Interface */}
            <div className={`transition-all duration-1000 delay-500 
              ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-purple-500/30 p-8">
                {/* Price Info */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Purchase Your Ticket</h2>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 
                      bg-clip-text text-transparent">{PRICE_PER_NFT} ETH</span>
                    <span className="text-gray-400">per ticket</span>
                  </div>
                </div>

                {/* Wallet Connection */}
                {!isWalletConnected ? (
                  <button
                    onClick={connectWallet}
                    disabled={isLoading}
                    className="w-full group relative px-6 py-4 rounded-xl overflow-hidden mb-6"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 
                      group-hover:from-purple-500 group-hover:to-blue-500 transition-colors duration-300" />
                    <div className="relative z-10 flex items-center justify-center space-x-2">
                      {isLoading ? (
                        <Loader className="w-5 h-5 animate-spin" />
                      ) : (
                        <Wallet className={`w-5 h-5 transition-transform duration-300 
                          ${isHovering ? 'rotate-12' : ''}`} />
                      )}
                      <span>{isLoading ? 'Connecting...' : 'Connect Wallet'}</span>
                    </div>
                  </button>
                ) : (
                  <div className="mb-6">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-purple-500/10 
                      border border-purple-500/30">
                      <div className="flex items-center space-x-2">
                        <Wallet className="w-5 h-5 text-purple-400" />
                        <span className="text-sm">{formatAddress(walletAddress)}</span>
                      </div>
                      <button 
                        className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                        onClick={() => setIsWalletConnected(false)}
                      >
                        Disconnect
                      </button>
                    </div>
                  </div>
                )}

                {/* Mint Amount Selector */}
                <div className="mb-8">
                  <label className="block text-sm text-gray-400 mb-2">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => setMintCount(Math.max(1, mintCount - 1))}
                      className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 
                        transition-colors duration-300"
                      disabled={isLoading}
                    >
                      <MinusCircle className="w-6 h-6" />
                    </button>
                    <span className="text-2xl font-bold w-16 text-center">{mintCount}</span>
                    <button 
                      onClick={() => setMintCount(Math.min(10, mintCount + 1))}
                      className="p-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 
                        transition-colors duration-300"
                      disabled={isLoading}
                    >
                      <Plus className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Total Price */}
                <div className="flex justify-between items-center mb-8 p-4 rounded-xl bg-purple-500/10">
                  <span className="text-gray-400">Total Price:</span>
                  <span className="text-2xl font-bold">
                    {(0.08 * mintCount).toFixed(2)} ETH
                  </span>
                </div>

                {/* Mint Button */}
             
                <button
                  className={`w-full group relative px-6 py-4 rounded-xl overflow-hidden 
                    ${!isWalletConnected ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!isWalletConnected}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 
                    group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative z-10 flex items-center justify-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>Buy Now</span>
                  </div>
                </button>

                {/* Minting Progress */}
                <div className="mt-6 text-center text-sm text-gray-400">
                  <div className="mb-2 flex justify-between">
                    <span>bought</span>
                    <span className="font-bold">2,431 / 10,000</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-purple-500/20 overflow-hidden">
                    <div className="w-[24.31%] h-full bg-gradient-to-r from-purple-500 to-blue-500 
                      animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Collection Stats */}
      <section className="mt-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-6">
          {[
            { label: "Total Items", value: "10,000" },
            { label: "Owners", value: "1,823" },
            { label: "Floor Price", value: "0.08 ETH" },
            { label: "Volume Traded", value: "1,205 ETH" }
          ].map((stat, index) => (
            <div
              key={index}
              className={`bg-gray-900/50 backdrop-blur-xl rounded-xl border border-purple-500/30 p-6 
                transform hover:scale-105 transition-all duration-300 cursor-pointer
                ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-gray-400 mb-2">{stat.label}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 
                bg-clip-text text-transparent">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </div>
    
    
  );
};

export default Ticket;

