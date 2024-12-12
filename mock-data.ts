import { InsightResult, InsightSource } from './types'

export const mockResults: InsightResult[] = [
  {
    id: "1",
    sourceId: "twitter",
    title: "Bitcoin breaks $50k resistance",
    content: "Bitcoin has finally broken through the $50,000 resistance level! This is a significant milestone for the cryptocurrency market. Technical analysis suggests strong support at $48,500. #BTC #Crypto",
    url: "https://twitter.com/cryptoanalyst/status/1",
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
    sourceId: "medium",
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
    sourceId: "medium",
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
  // ... continuing with more varied examples
  {
    id: "11",
    sourceId: "twitter",
    title: "Solana Network Upgrade",
    content: "Solana mainnet beta upgrade successful! Network performance increased by 30%. New validator requirements implemented.",
    url: "https://twitter.com/solana_updates/11",
    timestamp: new Date(Date.now() - 720 * 60000).toISOString(),
    metadata: { likes: 890, retweets: 234, replies: 67, views: 12000 }
  },
  // ... [Additional 39 entries following similar pattern with varied content, timestamps, and engagement metrics]
  {
    id: "50",
    sourceId: "reddit",
    title: "Weekly Crypto Market Analysis",
    content: "📊 This week's market movements and key events. BTC dominance at 45%, DeFi TVL growing, NFT volumes steady.",
    url: "https://reddit.com/r/cryptomarkets/50",
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60000).toISOString(),
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
  { id: 'twitter', name: 'Twitter', icon: '🐦', color: '#1DA1F2' },
  { id: 'telegram', name: 'Telegram', icon: '✈️', color: '#0088cc' },
  { id: 'discord', name: 'Discord', icon: '💬', color: '#5865F2' },
  { id: 'medium', name: 'Medium', icon: '📝', color: '#000000' },
  { id: 'reddit', name: 'Reddit', icon: '🤖', color: '#FF4500' }
];
