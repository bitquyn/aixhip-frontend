import { InsightResult, InsightSource } from './types'

export const mockResults: InsightResult[] = [
  {
    id: "1",
    sourceId: "twitter",
    title: "Bitcoin breaks $50k resistance",
    content: "Bitcoin has finally broken through the $50,000 resistance level! This is a significant milestone for the cryptocurrency market. Technical analysis suggests strong support at $48,500. #BTC #Crypto",
    url: "https://twitter.com/cryptoanalyst/1",
    timestamp: new Date(Date.now() - 5 * 60000).toISOString(),
    metadata: { likes: 1200, retweets: 450, replies: 89, views: 15000 }
  },
  {
    id: "2",
    sourceId: "telegram",
    title: "Ethereum Layer 2 Update",
    content: "Breaking: Arbitrum announces major protocol upgrade. Gas fees expected to decrease by 40%. This could be a game-changer for ETH scaling solutions. 🚀",
    url: "https://t.me/ethannouncements/2",
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    metadata: { views: 8500, replies: 145 }
  },
  {
    id: "3",
    sourceId: "discord",
    title: "DeFi Protocol Security Alert",
    content: "⚠️ Important: Potential vulnerability found in popular DeFi protocol. Users advised to withdraw funds immediately. Team is investigating. Updates to follow.",
    url: "https://discord.com/channels/defi-security/3",
    timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
    metadata: { replies: 234, views: 12000 }
  },
  {
    id: "4",
    sourceId: "news",
    title: "The Future of NFT Gaming",
    content: "Analyzing the intersection of blockchain gaming and traditional esports. New data suggests growing adoption among mainstream gamers, with play-to-earn mechanics gaining traction.",
    url: "https://medium.com/@crypto-gaming/4",
    timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
    metadata: { likes: 890, views: 25000 }
  },
  {
    id: "5",
    sourceId: "reddit",
    title: "Cardano Smart Contract Analysis",
    content: "Deep dive into Cardano's smart contract capabilities. Comparing throughput with other L1s. Results show promising scalability metrics. Full analysis in comments.",
    url: "https://reddit.com/r/cardano/5",
    timestamp: new Date(Date.now() - 90 * 60000).toISOString(),
    metadata: { likes: 567, replies: 89, views: 12300 }
  },
  {
    id: "6",
    sourceId: "twitter",
    title: "SEC Crypto Regulation Update",
    content: "BREAKING: SEC announces new framework for crypto asset classification. Major implications for DeFi protocols. Thread 🧵",
    url: "https://twitter.com/crypto_law/6",
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    metadata: { likes: 3400, retweets: 890, replies: 234, views: 45000 }
  },
  {
    id: "7",
    sourceId: "telegram",
    title: "New DEX Launch Announcement",
    content: "🎉 Introducing HyperSwap: Revolutionary DEX with cross-chain capabilities and minimal slippage. Early access starting next week.",
    url: "https://t.me/defi_news/7",
    timestamp: new Date(Date.now() - 180 * 60000).toISOString(),
    metadata: { views: 15600, replies: 234 }
  },
  {
    id: "8",
    sourceId: "discord",
    title: "NFT Collection Mint Alert",
    content: "🎨 CryptoArt Genesis Collection minting now! Only 10,000 available. Whitelist closes in 2 hours. Don't miss out!",
    url: "https://discord.com/channels/nft-alerts/8",
    timestamp: new Date(Date.now() - 240 * 60000).toISOString(),
    metadata: { replies: 567, views: 23400 }
  },
  {
    id: "9",
    sourceId: "news",
    title: "DeFi Yield Farming Strategy",
    content: "Comprehensive guide to maximizing yields in the current market. Analysis of top protocols and risk assessment framework included.",
    url: "https://medium.com/@defi_strategy/9",
    timestamp: new Date(Date.now() - 300 * 60000).toISOString(),
    metadata: { likes: 1200, views: 34500 }
  },
  {
    id: "10",
    sourceId: "reddit",
    title: "Layer 1 Performance Comparison",
    content: "Benchmarking top L1 chains: Ethereum, Solana, Avalanche, and more. Complete metrics on TPS, finality, and decentralization.",
    url: "https://reddit.com/r/cryptocurrency/10",
    timestamp: new Date(Date.now() - 360 * 60000).toISOString(),
    metadata: { likes: 2300, replies: 456, views: 78900 }
  },
  {
    id: "11",
    sourceId: "twitter",
    title: "Solana Network Upgrade",
    content: "Solana mainnet beta upgrade successful! Network performance increased by 30%. New validator requirements implemented.",
    url: "https://twitter.com/solana_updates/11",
    timestamp: new Date(Date.now() - 720 * 60000).toISOString(),
    metadata: { likes: 890, retweets: 234, replies: 67, views: 12000 }
  },
  {
    id: "12",
    sourceId: "discord",
    title: "Metaverse Project Launch",
    content: "Virtual world built on Ethereum launching next month. Early land sale for community members. Revolutionary graphics engine demo available.",
    url: "https://discord.com/channels/meta-world/12",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 789, views: 45000 }
  },
  {
    id: "13",
    sourceId: "telegram",
    title: "Privacy Protocol Update",
    content: "Major breakthrough in zero-knowledge proofs implementation. Transaction privacy enhanced while maintaining compliance.",
    url: "https://t.me/privacy_crypto/13",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 12400, replies: 156 }
  },
  {
    id: "14",
    sourceId: "news",
    title: "Institutional Adoption Trends",
    content: "Survey shows 65% of institutional investors plan to increase crypto exposure in 2024. Focus on Bitcoin and Ethereum.",
    url: "https://medium.com/@crypto_institute/14",
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 2300, views: 67000 }
  },
  {
    id: "15",
    sourceId: "reddit",
    title: "DAO Governance Analysis",
    content: "Study of successful DAO models and governance frameworks. Best practices for token distribution and voting mechanisms.",
    url: "https://reddit.com/r/dao_governance/15",
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1200, replies: 234, views: 34500 }
  },
  {
    id: "16",
    sourceId: "twitter",
    title: "Cross-chain Bridge Security",
    content: "New security audit completed for major cross-chain bridge. Zero critical vulnerabilities found. Detailed report available.",
    url: "https://twitter.com/bridge_security/16",
    timestamp: new Date(Date.now() - 6 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 567, retweets: 123, replies: 45, views: 9800 }
  },
  {
    id: "17",
    sourceId: "telegram",
    title: "DeFi Insurance Protocol",
    content: "Launching coverage for smart contract risks. Competitive premiums and instant claims processing.",
    url: "https://t.me/defi_insurance/17",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 8900, replies: 167 }
  },
  {
    id: "18",
    sourceId: "discord",
    title: "Gaming Token Economics",
    content: "Detailed breakdown of tokenomics for new blockchain game. Play-to-earn mechanics and NFT integration explained.",
    url: "https://discord.com/channels/game_token/18",
    timestamp: new Date(Date.now() - 8 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 456, views: 23400 }
  },
  {
    id: "19",
    sourceId: "news",
    title: "Sustainable Mining Initiative",
    content: "Major Bitcoin mining operations switching to 100% renewable energy. Carbon footprint reduction metrics released.",
    url: "https://medium.com/@green_mining/19",
    timestamp: new Date(Date.now() - 9 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 3400, views: 89000 }
  },
  {
    id: "20",
    sourceId: "reddit",
    title: "Stablecoin Market Analysis",
    content: "Comprehensive review of stablecoin adoption and use cases. Comparison of different backing mechanisms.",
    url: "https://reddit.com/r/stablecoins/20",
    timestamp: new Date(Date.now() - 10 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 890, replies: 167, views: 45600 }
  },
  {
    id: "21",
    sourceId: "twitter",
    title: "Layer 2 Scaling Solution",
    content: "New optimistic rollup solution achieves 100k TPS in testnet. Mainnet launch scheduled for next quarter.",
    url: "https://twitter.com/l2_scaling/21",
    timestamp: new Date(Date.now() - 11 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 2300, retweets: 567, replies: 123, views: 67000 }
  },
  {
    id: "22",
    sourceId: "telegram",
    title: "NFT Marketplace Update",
    content: "Zero-fee trading period extended. New features include batch minting and improved metadata support.",
    url: "https://t.me/nft_market/22",
    timestamp: new Date(Date.now() - 12 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 12300, replies: 234 }
  },
  {
    id: "23",
    sourceId: "discord",
    title: "Smart Contract Templates",
    content: "Library of audited smart contract templates released. Includes DEX, lending, and staking implementations.",
    url: "https://discord.com/channels/smart_contracts/23",
    timestamp: new Date(Date.now() - 13 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 345, views: 15600 }
  },
  {
    id: "24",
    sourceId: "news",
    title: "Crypto Payment Integration",
    content: "Major e-commerce platform adds crypto payment support. Bitcoin, Ethereum, and stablecoins accepted.",
    url: "https://medium.com/@crypto_payments/24",
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1500, views: 56000 }
  },
  {
    id: "25",
    sourceId: "reddit",
    title: "DeFi Lending Analysis",
    content: "Market overview of lending protocols. Interest rates, TVL, and risk assessment compared.",
    url: "https://reddit.com/r/defi_lending/25",
    timestamp: new Date(Date.now() - 15 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 678, replies: 145, views: 34500 }
  },
  {
    id: "26",
    sourceId: "twitter",
    title: "Blockchain Interoperability",
    content: "New cross-chain messaging protocol launched. Enables seamless asset and data transfer between networks.",
    url: "https://twitter.com/interop_chain/26",
    timestamp: new Date(Date.now() - 16 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1200, retweets: 345, replies: 89, views: 23400 }
  },
  {
    id: "27",
    sourceId: "telegram",
    title: "Token Vesting Platform",
    content: "Automated vesting and distribution platform launched. Supports multiple tokens and custom schedules.",
    url: "https://t.me/token_vesting/27",
    timestamp: new Date(Date.now() - 17 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 9800, replies: 178 }
  },
  {
    id: "28",
    sourceId: "discord",
    title: "Governance Proposal",
    content: "Community voting on protocol upgrade. Includes fee structure changes and new feature implementation.",
    url: "https://discord.com/channels/governance/28",
    timestamp: new Date(Date.now() - 18 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 567, views: 34500 }
  },
  {
    id: "29",
    sourceId: "news",
    title: "Regulatory Compliance",
    content: "New framework for crypto compliance released. Guidelines for DeFi protocols and centralized exchanges.",
    url: "https://medium.com/@crypto_compliance/29",
    timestamp: new Date(Date.now() - 19 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 890, views: 45600 }
  },
  {
    id: "30",
    sourceId: "reddit",
    title: "NFT Gaming Ecosystem",
    content: "Analysis of successful NFT gaming projects. Revenue models and player retention strategies.",
    url: "https://reddit.com/r/nft_gaming/30",
    timestamp: new Date(Date.now() - 20 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 2300, replies: 456, views: 78900 }
  },
  {
    id: "31",
    sourceId: "twitter",
    title: "Decentralized Identity",
    content: "Major breakthrough in self-sovereign identity implementation. Privacy-preserving verification system.",
    url: "https://twitter.com/decentralized_id/31",
    timestamp: new Date(Date.now() - 21 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1500, retweets: 678, replies: 234, views: 56000 }
  },
  {
    id: "32",
    sourceId: "telegram",
    title: "Yield Aggregator Launch",
    content: "Smart yield farming protocol goes live. Automated strategy switching for optimal returns.",
    url: "https://t.me/yield_aggr/32",
    timestamp: new Date(Date.now() - 22 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 12300, replies: 345 }
  },
  {
    id: "33",
    sourceId: "discord",
    title: "Oracle Network Update",
    content: "Enhanced price feed accuracy and latency improvements. New data sources added.",
    url: "https://discord.com/channels/oracle_network/33",
    timestamp: new Date(Date.now() - 23 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 234, views: 15600 }
  },
  {
    id: "34",
    sourceId: "news",
    title: "Enterprise Blockchain",
    content: "Major corporation implements private blockchain solution. Supply chain tracking and verification use case.",
    url: "https://medium.com/@enterprise_chain/34",
    timestamp: new Date(Date.now() - 24 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 678, views: 34500 }
  },
  {
    id: "35",
    sourceId: "reddit",
    title: "Privacy Protocol Review",
    content: "Comparison of privacy-focused cryptocurrencies. Technical analysis of anonymity features.",
    url: "https://reddit.com/r/privacy_coins/35",
    timestamp: new Date(Date.now() - 25 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1200, replies: 345, views: 56000 }
  },
  {
    id: "36",
    sourceId: "twitter",
    title: "DEX Liquidity Analysis",
    content: "Study of liquidity distribution across major DEXs. Impact on slippage and trading volumes.",
    url: "https://twitter.com/dex_analytics/36",
    timestamp: new Date(Date.now() - 26 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 890, retweets: 234, replies: 67, views: 23400 }
  },
  {
    id: "37",
    sourceId: "telegram",
    title: "Staking Protocol Launch",
    content: "New liquid staking solution for multiple networks. Competitive yields and instant unstaking.",
    url: "https://t.me/staking_protocol/37",
    timestamp: new Date(Date.now() - 27 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 9800, replies: 156 }
  },
  {
    id: "38",
    sourceId: "discord",
    title: "NFT Marketplace Analytics",
    content: "Trading volume analysis across platforms. Emerging trends in digital collectibles.",
    url: "https://discord.com/channels/nft_analytics/38",
    timestamp: new Date(Date.now() - 28 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 456, views: 34500 }
  },
  {
    id: "39",
    sourceId: "news",
    title: "Cross-chain DeFi",
    content: "Integration of multiple blockchain networks for DeFi operations. Unified liquidity pools.",
    url: "https://medium.com/@cross_chain/39",
    timestamp: new Date(Date.now() - 29 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 2300, views: 78900 }
  },
  {
    id: "40",
    sourceId: "reddit",
    title: "Mining Hardware Update",
    content: "Next-gen ASIC miners announced. Efficiency improvements and hash rate projections.",
    url: "https://reddit.com/r/crypto_mining/40",
    timestamp: new Date(Date.now() - 30 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1500, replies: 678, views: 45600 }
  },
  {
    id: "41",
    sourceId: "twitter",
    title: "GameFi Token Launch",
    content: "New gaming ecosystem token announced. Play-to-earn mechanics and governance rights.",
    url: "https://twitter.com/gamefi_token/41",
    timestamp: new Date(Date.now() - 31 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 678, retweets: 145, replies: 34, views: 12300 }
  },
  {
    id: "42",
    sourceId: "telegram",
    title: "Layer 1 Partnership",
    content: "Strategic partnership between major L1 networks. Interoperability and shared security model.",
    url: "https://t.me/l1_network/42",
    timestamp: new Date(Date.now() - 32 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 15600, replies: 234 }
  },
  {
    id: "43",
    sourceId: "discord",
    title: "DeFi Insurance Claims",
    content: "Analysis of recent smart contract exploit claims. Coverage types and payout statistics.",
    url: "https://discord.com/channels/defi_insurance/43",
    timestamp: new Date(Date.now() - 33 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 345, views: 23400 }
  },
  {
    id: "44",
    sourceId: "news",
    title: "Blockchain in Healthcare",
    content: "Implementation of blockchain for medical records. Privacy-compliant data sharing solution.",
    url: "https://medium.com/@health_chain/44",
    timestamp: new Date(Date.now() - 34 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 890, views: 34500 }
  },
  {
    id: "45",
    sourceId: "reddit",
    title: "Token Economics Study",
    content: "Research on successful token economic models. Inflation, utility, and governance analysis.",
    url: "https://reddit.com/r/tokenomics/45",
    timestamp: new Date(Date.now() - 35 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 2300, replies: 567, views: 78900 }
  },
  {
    id: "46",
    sourceId: "twitter",
    title: "Smart Contract Security",
    content: "New automated audit tool released. Real-time vulnerability detection and mitigation.",
    url: "https://twitter.com/smart_security/46",
    timestamp: new Date(Date.now() - 36 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1500, retweets: 456, replies: 123, views: 45600 }
  },
  {
    id: "47",
    sourceId: "telegram",
    title: "Metaverse Land Sale",
    content: "Premium virtual real estate auction. Exclusive locations and development rights.",
    url: "https://t.me/meta_land/47",
    timestamp: new Date(Date.now() - 37 * 24 * 60 * 60000).toISOString(),
    metadata: { views: 23400, replies: 678 }
  },
  {
    id: "48",
    sourceId: "discord",
    title: "DAO Treasury Management",
    content: "Best practices for DAO fund management. Investment strategies and risk assessment.",
    url: "https://discord.com/channels/dao_treasury/48",
    timestamp: new Date(Date.now() - 38 * 24 * 60 * 60000).toISOString(),
    metadata: { replies: 234, views: 15600 }
  },
  {
    id: "49",
    sourceId: "news",
    title: "Blockchain Identity Standards",
    content: "Industry consortium releases identity standards. Interoperable verification framework.",
    url: "https://medium.com/@id_standards/49",
    timestamp: new Date(Date.now() - 39 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 678, views: 34500 }
  },
  {
    id: "50",
    sourceId: "reddit",
    title: "Weekly Crypto Market Analysis",
    content: "📊 This week's market movements and key events. BTC dominance at 45%, DeFi TVL growing, NFT volumes steady.",
    url: "https://reddit.com/r/cryptomarkets/50",
    timestamp: new Date(Date.now() - 40 * 24 * 60 * 60000).toISOString(),
    metadata: { likes: 1500, replies: 234, views: 45000 }
  }
];

export const timeRangeOptions = [
  { value: "all", label: "All Time" },
  { value: "5m", label: "Last 5 minutes" },
  { value: "15m", label: "Last 15 minutes" },
  { value: "30m", label: "Last 30 minutes" },
  { value: "1h", label: "Last hour" },
  { value: "2h", label: "Last 2 hours" },
  { value: "4h", label: "Last 4 hours" },
  { value: "6h", label: "Last 6 hours" },
  { value: "12h", label: "Last 12 hours" },
  { value: "24h", label: "Last 24 hours" },
  { value: "3d", label: "Last 3 days" },
  { value: "7d", label: "Last 7 days" }
];

export const mockSources: InsightSource[] = [
  { id: 'twitter', name: 'Twitter', icon: '/icons/twitter_x_logo_icon.svg', color: '#1DA1F2' },
  { id: 'telegram', name: 'Telegram', icon: '/icons/telegram_logo_icon.svg', color: '#0088cc' },
  { id: 'discord', name: 'Discord', icon: '/icons/discord_logo_icon.svg', color: '#5865F2' },
  { id: 'news', name: 'News', icon: '/icons/news_icon.svg', color: '#000000' },
  { id: 'reddit', name: 'Reddit', icon: '/icons/reddit_logo_icon.svg', color: '#FF4500' }
];
