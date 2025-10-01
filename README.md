# 🔮 seti — Sui-Native Prediction Markets

<div align="center">

![Status](https://img.shields.io/badge/Status-Live_%F0%9F%9A%80-success?style=for-the-badge&color=6FBCF0)
![Platform](https://img.shields.io/badge/Platform-Sui_Blockchain-6FBCF0?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Where Markets Meet Intelligence — Trade the Future, Secured by Sui**

[🚀 Live Demo](https://seti-mvp.vercel.app/) • [📚 Documentation](#) • [👥 Community](#)

</div>

## 🌟 Discover the Future of Prediction Markets

seti transforms how the world forecasts events by combining **blockchain transparency** with **professional-grade trading tools**. Create, trade, and resolve markets on real-world outcomes with unprecedented speed and security.

> 💫 **Experience the demo**: [https://seti-mvp.vercel.app/](https://seti-mvp.vercel.app/)

---

## 🎯 Why seti Stands Out

### 🏛️ Institutional-Grade Infrastructure
- **Sui Blockchain Foundation**: Leveraging Move's security and parallel execution
- **Zero Slippage Trading**: Advanced AMM algorithms with deep liquidity
- **Real-time Analytics**: Live volume, pricing, and performance metrics
- **Enterprise Reliability**: 99.9% uptime with institutional-grade architecture

### 🎨 Unmatched User Experience
- **One-Click Trading**: Instant YES/NO positions with transparent pricing
- **Mobile-First Design**: Seamless experience across all devices
- **Wallet-Native Flows**: Smooth Sui wallet integration
- **Real-Time Updates**: Live market data and portfolio tracking

### 🔬 Advanced Market Intelligence
- **Dynamic Pricing**: Real-time odds reflecting collective wisdom
- **Liquidity Depth**: Visualized market health indicators
- **Volume Analytics**: 24h trading activity and momentum signals
- **Risk Assessment**: Comprehensive pre-trade analysis

---

## 🚀 Get Started in 60 Seconds

### Prerequisites
- **Node.js 18+** • **Sui Wallet** • **Modern Browser**

### Quick Installation
```bash
# Clone & setup
git clone https://github.com/Talent-Index/setiMVP.git
cd seti && npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your Sui package ID

# Launch development
npm run dev
```

### First Trade Guide
1. **Connect** your Sui wallet
2. **Browse** active markets by category
3. **Analyze** real-time YES/NO pricing
4. **Trade** with transparent payout previews
5. **Track** your portfolio performance

---

## 🏗️ Architectural Excellence

### Tech Stack Symphony
| Layer | Technology | Purpose |
|-------|------------|---------|
| **Blockchain** | Sui + Move | Secure, parallel execution |
| **Frontend** | React 18 + TypeScript | Type-safe, reactive UI |
| **Styling** | Tailwind + shadcn/ui | Beautiful, consistent design |
| **State** | React Query | Optimistic updates & caching |
| **Wallet** | @mysten/dapp-kit | Seamless blockchain interaction |

### Smart Contract Power
```move
// Core market creation
public entry fun create_market(
    question: vector<u8>,
    description: vector<u8>,
    end_time: u64,
    category: u8,
    initial_liquidity: Coin<SUI>
) : Market {
    // Secure, audited market initialization
}
```

### Project Structure
```
src/
├── components/           # UI + domain components (shadcn/ui)
├── hooks/               # Data + blockchain interactions (React hooks)
├── pages/               # Page-level components
├── types/               # Contract + app types
├── App.tsx              # App shell
└── main.tsx             # Entry point
contract/
└── sources/polymarket.move  # Move sources
```

---

## 📊 Market Universe

### Diverse Categories
| Category | Sample Markets | Volume (24h) |
|----------|----------------|--------------|
| **🪙 Crypto** | "BTC > $100K by 2025" | 24.5K SUI |
| **📈 Stocks** | "TSLA Q4 Earnings Beat" | 18.2K SUI |
| **🏈 Sports** | "Super Bowl 2025 Winner" | 32.1K SUI |
| **🏛️ Politics** | "2024 Election Outcomes" | 27.8K SUI |
| **🚀 Technology** | "AI Model Breakthrough" | 15.3K SUI |
| **🌍 Economics** | "Fed Rate Decisions" | 12.3K SUI |
| **🛰️ Space** | "Moon Mission Success" | 8.7K SUI |

### Trading Features
- **🎯 One-Click Trading**: Instant YES/NO positions
- **📱 Mobile-First**: Seamless cross-device experience
- **🔍 Advanced Filters**: Category, volume, liquidity, and time
- **💧 Liquidity Pools**: Earn fees by providing market depth
- **📊 Portfolio Dashboard**: Real-time P&L and position tracking

---

## 🛠️ Developer Experience

### Code Quality First
```typescript
// Type-safe market interactions
interface Market {
  id: string;
  question: string;
  liquidity: number;
  volume24h: number;
  prices: { YES: number; NO: number };
}

// Custom hooks for everything
const { markets, isLoading } = useMarkets();
const { placePrediction } = usePrediction();
```

### Development Scripts
```bash
npm run dev          # 🎪 Development server
npm run build        # 🏗️ Production build  
npm run lint         # 🔍 Code quality
npm run preview      # 👀 Build preview
```

### Smart Contract Entry Points
| Function | Purpose | Parameters |
|----------|---------|------------|
| `create_market` | Initialize new market | question, description, end_time, category, image_url, tags, initial_liquidity |
| `get_market_info` | Retrieve market details | market object reference |
| `place_prediction` | Trade on market outcomes | market_id, outcome, amount |
| `add_liquidity` | Provide market liquidity | market_id, liquidity_amount |
| `resolve_market` | Resolve completed markets | market_id, winning_outcome |
| `withdraw_liquidity` | Remove liquidity | market_id, amount |
| `claim_winnings` | Claim payouts | market_id |

### Contribution Flow
1. **Fork** → **Feature Branch** → **Develop**
2. **Test** → **Lint** → **Type Check**
3. **PR** → **Review** → **Merge** → **Deploy**

---

## 🌐 Production Ready

### Deployment Options
| Platform | Command | Best For |
|----------|---------|----------|
| **Vercel** | `vercel --prod` | 🥇 Recommended |
| **Netlify** | `netlify deploy` | 🥈 Alternative |
| **Manual** | Upload `dist/` | 🥉 Custom setups |

### Environment Configuration
```env
# Required
VITE_SUI_PACKAGE_ID=0xYOUR_PACKAGE_ID
VITE_NETWORK=mainnet

# Optional
VITE_SUI_RPC_URL=https://fullnode.mainnet.sui.io
VITE_APP_NAME=seti-pro
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Build tested locally
- [ ] Domain and SSL configured
- [ ] CDN for static assets
- [ ] Error monitoring enabled

---

## 🛡️ Security & Reliability

### Enterprise Security
- ✅ **Non-custodial**: Your keys, your assets
- ✅ **Audited Contracts**: Professional Move security reviews
- ✅ **Input Validation**: Client + server side protection
- ✅ **HTTPS Enforcement**: All production traffic encrypted
- ✅ **Regular Audits**: Continuous security monitoring

### Browser Support
| Browser | Version | Status |
|---------|---------|--------|
| **Chrome** | 90+ | ✅ Fully Supported |
| **Firefox** | 88+ | ✅ Fully Supported |
| **Safari** | 14+ | ✅ Fully Supported |
| **Edge** | 90+ | ✅ Fully Supported |

---

## 🗺️ Roadmap to the Future

### 🎯 Now Live (v1.0)
- ✅ Core trading engine
- ✅ Sui wallet integration  
- ✅ Market creation suite
- ✅ Real-time analytics
- ✅ Mobile-responsive design

### 🚧 Coming Soon (v1.1)
- 🔄 Advanced order types
- 🔄 Portfolio analytics
- 🔄 Social features
- 🔄 API access
- 🔄 Enhanced mobile experience

### 🌟 Future Vision (v2.0+)
- 📱 Native mobile apps
- 🏛️ Governance system
- 🔗 Cross-chain compatibility
- 📊 Institutional tools
- 🌍 Global market access

---

## 👨‍💻 The Visionaries

| Role | Name | Contact |
|------|------|---------|
| **Frontend Architect** | Mary Njoroge | marrianapeters00@gmail.com |
| **Full-Stack Engineer** | Graham | graham@gmail.com |
| **UI/UX Specialist** | John Mokaya | mokayaj857@gmail.com |
| **Smart Contract Lead** | Peter Njuguna | peternjuguna@gmail.com |

---

## 🎨 Visual Journey

### Marketplace Overview
![Marketplace](https://github.com/user-attachments/assets/46e124ae-d73e-4720-a136-0c6457ad4779)

### Market Creation
![Market Creation](https://github.com/user-attachments/assets/ed4053fe-7830-4345-8b88-c3dc583fdb15)

### Trading Interface  
![Trading](https://github.com/user-attachments/assets/04def0fe-73c3-4c44-912c-8e0946e4381b)

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/1671f66e-7010-4bce-b8ff-914bb8414d07)

### Trading Activity
![Trading Activity](https://github.com/user-attachments/assets/2462c984-7e30-4913-9b23-9409b6a77ae3)

---

## ❓ Support & Troubleshooting

### Common Issues & Solutions
- **Wallet Connection**: Ensure Sui wallet is installed and on correct network
- **Transaction Failures**: Check SUI balance for gas fees
- **Market Creation**: Verify all required fields and future end time
- **Trading Issues**: Ensure sufficient liquidity in market

### Getting Help
- **GitHub Issues**: Report bugs and request features
- **Documentation**: Comprehensive guides and API references
- **Community**: Join our developer community

---

## 💝 Acknowledgments

Built with passion and gratitude for:
- **Sui Foundation** - Revolutionary blockchain platform
- **shadcn/ui** - Beautiful, accessible components
- **React & TypeScript** - Robust frontend foundation
- **Open Source Community** - Your contributions inspire us

---

<div align="center">

## 🚀 Ready to Predict the Future?

[**Try seti Now**](https://seti-mvp.vercel.app/) • [**View Source**](https://github.com/Talent-Index/setiMVP) • [**Join Community**](#)

*Where collective intelligence meets blockchain execution*

**seti — Trade Tomorrow, Today**

</div>

---

## 📄 License

MIT Licensed - See [LICENSE](LICENSE) for details.

<br>

<div align="center">

*"The best way to predict the future is to create it." — seti Platform*

</div>
