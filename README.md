# AIxhip Frontend

## Meta Search Feature

Meta Search is a comprehensive crypto information aggregator that collects and displays data from various sources including Twitter, Telegram, Discord, Reddit, and news outlets.

### Features

#### Current Implementation
- **Real-time Search & Filtering**
  - Full-text search across titles and content
  - Time range filtering (5m, 15m, 30m, 1h, 2h, 4h, 6h, 12h, 24h, 3d, 7d)
  - Source-based filtering with multi-select capability
  
- **Interactive UI**
  - Responsive grid layout
  - Split view for results and detailed content
  - Real-time filtering without page reload
  - Source icons and metadata display

- **Data Display**
  - Engagement metrics (likes, retweets, replies, views)
  - Timestamp formatting
  - Source attribution
  - Original content links

### Technical Architecture

#### Database Schema
```sql
-- Sources table
CREATE TABLE sources (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(10) NOT NULL,
    color VARCHAR(7) NOT NULL
);

-- Insights table
CREATE TABLE insights (
    id VARCHAR(36) PRIMARY KEY,
    source_id VARCHAR(50) NOT NULL REFERENCES sources(id),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    url VARCHAR(512) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    likes INTEGER,
    retweets INTEGER,
    replies INTEGER,
    views INTEGER,
    sentiment FLOAT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_source_timestamp (source_id, timestamp),
    INDEX idx_timestamp (timestamp),
    FULLTEXT INDEX idx_content_search (title, content)
);

-- Tags system
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE insight_tags (
    insight_id VARCHAR(36) REFERENCES insights(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (insight_id, tag_id)
);
```

#### Component Structure
```
app/
└── (dashboard)/
    └── meta-search/
        └── page.tsx       # Main Meta Search component

components/
└── ui/
    ├── button.tsx        # Reusable button component
    ├── input.tsx         # Search input component
    └── select.tsx        # Time range selector component

lib/
└── utils.ts             # Utility functions

types.ts                 # TypeScript interfaces
mock-data.ts            # Sample data for development
```

### Data Flow

1. **Data Ingestion**
   - Backend services collect data from various sources
   - Data is normalized and stored in the insights table
   - Metadata (likes, retweets, etc.) is updated periodically

2. **Search & Filtering**
   - Client-side filtering using React's useMemo
   - Time range filtering based on timestamp
   - Source filtering with multi-select support
   - Full-text search across title and content

3. **UI Updates**
   - Real-time updates as filters change
   - Dynamic grid layout based on selection state
   - Smooth transitions between views

### API Integration (For Backend Team)

Expected endpoints:
```typescript
// GET /api/insights
interface GetInsightsParams {
  query?: string;
  timeRange?: string;
  sources?: string[];
  page?: number;
  limit?: number;
}

// GET /api/insights/:id
interface InsightResponse {
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
```

### Setup Instructions

1. Install dependencies:
```bash
npm install @radix-ui/react-select class-variance-authority lucide-react tailwind-merge clsx
```

2. Configure environment:
```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Changelog

#### v0.1.0 (Initial Release)
- ✨ Implemented basic Meta Search interface
- 🎨 Added UI components (Button, Input, Select)
- 📊 Created database schema
- 🔍 Implemented search and filtering
- 📱 Added responsive layout
- 🧪 Added mock data for testing

### Future Enhancements

1. **Phase 1 - Core Features**
   - [ ] Real-time data updates
   - [ ] Advanced filtering options
   - [ ] Sentiment analysis integration
   - [ ] Pagination support

2. **Phase 2 - User Experience**
   - [ ] Save favorite searches
   - [ ] Custom time ranges
   - [ ] Export functionality
   - [ ] Dark mode support

3. **Phase 3 - Analytics**
   - [ ] Trending topics
   - [ ] Source reliability scoring
   - [ ] User engagement metrics
   - [ ] Historical data analysis

### Development Guidelines

1. **Coding Standards**
   - Use TypeScript for type safety
   - Follow React hooks best practices
   - Implement proper error handling
   - Write unit tests for components

2. **Performance Considerations**
   - Implement virtualization for long lists
   - Use proper indexing in database
   - Optimize API calls with caching
   - Lazy load components when possible

3. **Accessibility**
   - Follow WCAG guidelines
   - Implement keyboard navigation
   - Add proper ARIA labels
   - Ensure color contrast compliance

### Team Collaboration

- **Frontend Team**: Focus on component development and user experience
- **Backend Team**: Implement API endpoints and data processing
- **DevOps**: Set up monitoring and scaling infrastructure
- **Product**: Define feature priorities and user stories

### Contact

For questions or suggestions:
- Frontend: [frontend-team@aixhip.com]
- Backend: [backend-team@aixhip.com]
- Product: [product-team@aixhip.com]
