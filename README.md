## Project Title
EVENTVERSE

## Description
A blockchain-based ticketing platform designed to tackle fraud and inefficiencies in the ticketing industry. Built on the Avalanche blockchain, the system allows event organizers to issue tickets as digital tokens, enabling secure purchases, resales, and QR-code-based authentication.

## Features

### Feature 1: Decentralized Ticket Minting and Transfer
Event organizers can mint unique tickets as tokens with specified event details, ensuring transparency and security during ticket creation and transfers.

### Feature 2: QR Code Verification
Each ticket includes a unique QR code for real-time validation, preventing counterfeit tickets and ensuring authenticity.

### Feature 3: Secure Blockchain Transactions
All transactions, including ticket purchases and resales, are processed on Avalanche's blockchain, providing speed, transparency, and low fees.

### Feature 4: Resale Marketplace
A secure marketplace for ticket holders to resell their tickets, maintaining the integrity of the ticketing process.

## Tech Stack Used
* **Language**: Solidity for smart contracts, TypeScript for frontend/backend development
* **Framework**: Avalanche for blockchain integration, Next.js for frontend
* **Tools**: Hardhat for smart contract development, Ethers.js for blockchain interaction, Avalanche Wallet SDK for wallet integration

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Compile the smart contracts:**
   ```bash
   npx hardhat compile
   ```

4. **Configure the Avalanche network:**
   * Edit `hardhat.config.js` to include Avalanche network details under the `networks` section.

5. **Deploy to the Avalanche network:**
   ```bash
   npx hardhat run scripts/deploy.js --network avalanche
   ```

6. **Run the application locally:**
   ```bash
   npm run dev
   ```

## Team Members
* Brandistone Nyabonyi Mabeya – Lead Developer

## Milestones

### Waitlist Landing Page Integration

#### Objective
Develop a landing page to capture user interest, gather feedback, and build a community around the platform.

#### Tasks
1. **Design Landing Page:**
   * Create a form with fields for name, email, and interest level.
   * Add a concise description of the project and its benefits.

2. **Integrate Form with Backend:**
   * Store form submissions in a database such as Firebase or Google Sheets.

3. **Launch Page:**
   * Make the page publicly accessible and link it via social media or newsletters.

## Avalanche Checkpoints

### Using Avalanche for Your Project
Our project uses Avalanche to handle blockchain transactions, ensuring secure and efficient ticket minting, transfers, and validation.

### Deploying Smart Contracts on Avalanche
We have deployed smart contracts on Avalanche's C-Chain to facilitate ticketing operations. The contracts manage ticket creation, transfers, and event data securely.

### Taking Advantage of Avalanche's Speed and Low Costs
Avalanche's high transaction throughput and low fees enhance the user experience, enabling fast and affordable ticketing transactions.

## Quick Integrations
* **Wallet Integrations:** Avalanche Wallet SDKs
* **Tooling:** Avalanche Tooling
