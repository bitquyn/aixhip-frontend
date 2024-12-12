export interface InsightSource {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface InsightResult {
  id: string;
  sourceId: string;
  title: string;
  content: string;
  url: string;
  timestamp: string;
  metadata: {
    likes?: number;
    retweets?: number;
    replies?: number;
    views?: number;
  }
}

export interface SearchFilters {
  query: string;
  timeRange: string;
  sources: string[];
}
