import React, { useState } from 'react';
import { ethers } from 'ethers';

// Your contract ABI and address (replace these with your actual contract ABI and address)
import contractABI from "/src/abi/Ticket.json";
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your NFT contract address

const MintNFT = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [mintingStatus, setMintingStatus] = useState(null);
  const [tokenURI, setTokenURI] = useState('');

  const checkWalletConnection = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting wallet:', error);
      }
    }
  };

  const handleMintNFT = async () => {
    if (!walletAddress) {
      alert('Please connect your wallet');
      return;
    }

    if (!tokenURI) {
      alert('Please provide a token URI');
      return;
    }

    try {
      setMintingStatus('Minting...');
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const transaction = await contract.mintNFT(tokenURI);

      await transaction.wait();
      setMintingStatus('NFT Minted Successfully!');
    } catch (error) {
      console.log('Error minting NFT:', error);
      setMintingStatus('Minting failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Mint Your NFT</h2>

        {!walletAddress ? (
          <div className="text-center mb-6">
            <button
              onClick={connectWallet}
              className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition duration-300"
            >
              Connect Wallet
            </button>
          </div>
        ) : (
          <div className="mb-4 text-center">
            <p className="text-lg">Connected Wallet: {walletAddress}</p>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-300 font-semibold mb-2" htmlFor="tokenURI">Token URI</label>
          <input
            type="text"
            id="tokenURI"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Enter token URI"
            value={tokenURI}
            onChange={(e) => setTokenURI(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            onClick={handleMintNFT}
            className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 transition duration-300"
          >
            Mint NFT
          </button>
        </div>

        {mintingStatus && (
          <div className="mt-6 text-center">
            <p className="text-lg">{mintingStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MintNFT;
