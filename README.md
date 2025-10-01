<div align="center">

# 🔮 seti — Sui-native Prediction Markets

**Create, trade, and resolve markets on real-world events — secured by the Sui blockchain**

![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Build](https://img.shields.io/badge/Build-Passing-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</div>

## 🌍 Overview

Seti is a professional-grade prediction market platform that lets anyone launch a market, add liquidity, and trade YES/NO outcomes with transparent on-chain settlement. Built for speed and usability on Sui, it features real-time pricing, wallet-native flows, and a clean, responsive interface.

Try the live demo: https://seti-mvp.vercel.app/

## ✨ Key Features

### 🏪 Marketplace & Discovery
- **Browse live markets** across multiple categories (Crypto, Stocks, Sports, Politics, Tech, and more).
- **Real-time pricing** for YES/NO outcomes with dynamic liquidity.
- **Structured analytics**: 24h volume, total liquidity, and performance signals.

### 🧰 Market Creation
- **One-click launch** of markets with question, description, end time, category, image, and tags.
- **Initial liquidity** supplied in SUI with on-chain settlement.

### 💧 Liquidity & Trading
- **Add liquidity** to deepen markets and earn fees.
- **Fast trades** with clear pre-trade payout and risk visibility.

### 🔐 Wallet-first UX
- **Sui wallet integration** via `@mysten/dapp-kit`.
- **Session persistence** and smooth signing flows.

### 📱 Polished UX
- **Modern, responsive UI** powered by Tailwind and shadcn/ui.
- **Accessible components** with Radix primitives.

## 🛠️ Tech Stack

### Languages & Frameworks
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### Styling & UI
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge)
![Radix](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge)

### Blockchain & Data
![Sui](https://img.shields.io/badge/Sui-6FBCF0?style=for-the-badge)
![Mysten dapp-kit](https://img.shields.io/badge/@mysten/dapp--kit-0A7AFF?style=for-the-badge)
![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A Sui-compatible wallet (Sui Wallet, Suiet)

### 1) Clone & install
```bash
# Clone your fork or this repo
git clone https://github.com/your-organization/seti.git
cd seti

# Install dependencies
npm install
# or: yarn install
```

### 2) Configure environment
Copy and adjust env values:
```bash
cp .env.example .env.local
```
Then edit `.env.local`:
```env
# Sui Blockchain
VITE_SUI_PACKAGE_ID=0x0          # Your deployed Move package ID
VITE_NETWORK=devnet              # devnet | testnet | mainnet

# Optional RPC override
VITE_SUI_RPC_URL=https://fullnode.devnet.sui.io:443
```

### 3) Run the app
```bash
npm run dev
# or: yarn dev
```
Open http://localhost:5173 (Vite default) in your browser.

> Tip: Connect your Sui wallet and ensure it’s on the same network defined in `VITE_NETWORK`.

## 🔗 Smart Contracts
- Move module: `contract/sources/polymarket.move`
- Provides core entry functions like `create_market`, liquidity ops, and market resolution primitives consumed by the frontend (`src/hooks/`).
- Frontend interactions are handled via `@mysten/dapp-kit` and typed helpers in `src/types/contract`.

## 📦 Project Structure
```
src/
├─ components/           # UI + domain components (shadcn/ui)
├─ hooks/                # Data + blockchain interactions (React hooks)
├─ pages/                # Page-level components
├─ types/                # Contract + app types
├─ App.tsx               # App shell
└─ main.tsx              # Entry point
contract/
└─ sources/polymarket.move  # Move sources
```

## 🧪 Developer Experience
- **TypeScript strict** for reliability.
- **ESLint** for code quality.
- **Consistent UI system** with Tailwind + shadcn/ui.
- **Production-ready builds** via Vite.

## 🚢 Deployment
- Vercel or Netlify recommended.
- Build: `npm run build` → outputs to `dist/`.
- Configure env vars in your hosting dashboard.

### Vercel quick start
```bash
npm i -g vercel
vercel --prod
```

### Netlify quick start
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🗺️ Roadmap
- Advanced market analytics and charts.
- Portfolio dashboard and historical PnL.
- Additional market types and conditional markets.
- Governance and community discovery.

## 👏 Acknowledgments
- Sui Foundation and Mysten Labs
- shadcn/ui, Radix UI, Tailwind CSS
- React and Vite communities

## 👥 The Team

| Name | Role | Contact |
| ---- | ---- | ------- |
| Brandistone Nyabonyi | Frontend Developer | brandistone@example.com |
| Williams Ochieng | Smart Contract Developer | williams@example.com |
| Joseph Okumu Otieno | Full‑stack Engineer | jokumu25@gmail.com |
| John Mokaya | Frontend Developer | mokayaj857@gmail.com |
| Stanley Kariuki | Smart Contract Developer | stanleykariuki@example.com |
| Phelix | Backend Developer | phelix@example.com |

> Want edits? Share final names/roles/emails and I’ll update the table.

## 📸 Feature Snapshots

> Replace these placeholders with real screenshots by adding files under `public/` (e.g., `public/screenshots/`) and updating the image paths below.

### Marketplace Overview
!<img width="1517" height="946" alt="image" src="https://github.com/user-attachments/assets/19d8afe7-5b94-43da-83e8-050d4fad7642" />


### Create Market Flow
![Create Market Flow](./public/placeholder.svg)

### Trading YES/NO
![Trading YES/NO](./public/placeholder.svg)

### Wallet Connection
![Wallet Connection](./public/placeholder.svg)

## 📈 Milestones

### MVP Release
- Core market creation and trading on Sui
- Wallet integration and responsive UI

![MVP Release](./public/og-image.svg)

### Liquidity & Analytics Enhancements
- Add liquidity flow and 24h volume metrics

![Liquidity & Analytics](./public/placeholder.svg)

### Next: Portfolio & Advanced Markets
- Portfolio dashboard, conditional markets, and governance discovery

![Roadmap Preview](./public/placeholder.svg)

## 📄 License
MIT — see `LICENSE` for details.
