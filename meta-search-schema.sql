-- Sources table to store different platforms
CREATE TABLE sources (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    icon VARCHAR(10) NOT NULL,
    color VARCHAR(7) NOT NULL
);

-- Insights table to store all crypto-related content
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
    sentiment FLOAT, -- Added for sentiment analysis (-1 to 1)
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Indexes for common queries
    INDEX idx_source_timestamp (source_id, timestamp),
    INDEX idx_timestamp (timestamp),
    FULLTEXT INDEX idx_content_search (title, content)
);

-- Tags table for categorizing insights
CREATE TABLE tags (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- Junction table for insights and tags
CREATE TABLE insight_tags (
    insight_id VARCHAR(36) REFERENCES insights(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (insight_id, tag_id)
);

-- Initial source data
INSERT INTO sources (id, name, icon, color) VALUES
('twitter', 'Twitter', '🐦', '#1DA1F2'),
('telegram', 'Telegram', '✈️', '#0088cc'),
('discord', 'Discord', '💬', '#5865F2'),
('medium', 'Medium', '📝', '#000000'),
('reddit', 'Reddit', '🤖', '#FF4500');
