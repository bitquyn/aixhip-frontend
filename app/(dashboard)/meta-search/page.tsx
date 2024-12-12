"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { mockResults, mockSources, timeRangeOptions } from "@/mock-data"
import type { SearchFilters, InsightResult, InsightSource } from "@/types"

export default function MetaSearchPage() {
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    timeRange: "all",
    sources: ["all"],
  })

  const [selectedResult, setSelectedResult] = useState<InsightResult | null>(null)

  // Filter results based on search criteria
  const filteredResults = useMemo(() => {
    return mockResults.filter((result: InsightResult) => {
      // Filter by search query
      if (filters.query) {
        const searchText = filters.query.toLowerCase()
        const matchesQuery = 
          result.title.toLowerCase().includes(searchText) ||
          result.content.toLowerCase().includes(searchText)
        if (!matchesQuery) return false
      }

      // Filter by sources
      if (!filters.sources.includes("all") && !filters.sources.includes(result.sourceId)) {
        return false
      }

      // Filter by time range
      if (filters.timeRange !== "all") {
        const resultDate = new Date(result.timestamp)
        const now = new Date()
        const diff = now.getTime() - resultDate.getTime()
        const minutes = diff / (1000 * 60)

        switch (filters.timeRange) {
          case "5m": if (minutes > 5) return false; break
          case "15m": if (minutes > 15) return false; break
          case "30m": if (minutes > 30) return false; break
          case "1h": if (minutes > 60) return false; break
          case "2h": if (minutes > 120) return false; break
          case "4h": if (minutes > 240) return false; break
          case "6h": if (minutes > 360) return false; break
          case "12h": if (minutes > 720) return false; break
          case "24h": if (minutes > 1440) return false; break
          case "3d": if (minutes > 4320) return false; break
          case "7d": if (minutes > 10080) return false; break
        }
      }

      return true
    })
  }, [filters])

  return (
    <div>
      <div className="container mx-auto px-4 py-4">
        {/* Search Form */}
        <div className="bg-white shadow-sm border rounded-lg p-4 mb-4">
          <div className="flex flex-col sm:flex-row gap-3 mb-3">
            <Input
              type="text"
              placeholder="Search crypto insights..."
              value={filters.query}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilters({ ...filters, query: e.target.value })}
              className="flex-1"
            />
            <Select
              value={filters.timeRange}
              onValueChange={(value: string) => setFilters({ ...filters, timeRange: value })}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                {timeRangeOptions.map((option: { value: string; label: string }) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="w-full sm:w-auto">Search</Button>
          </div>

          {/* Source filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filters.sources.includes("all") ? "default" : "outline"}
              size="sm"
              onClick={() => setFilters({ ...filters, sources: ["all"] })}
            >
              All Sources
            </Button>
            {mockSources.map((source: InsightSource) => (
              <Button
                key={source.id}
                variant={filters.sources.includes(source.id) ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  const newSources = filters.sources.includes(source.id)
                    ? filters.sources.filter((s: string) => s !== source.id)
                    : [...filters.sources.filter((s: string) => s !== "all"), source.id]
                  setFilters({ ...filters, sources: newSources })
                }}
              >
                <Image
                  src={source.icon}
                  alt={source.name}
                  width={16}
                  height={16}
                  className="mr-1"
                />
                {source.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Results list */}
          <div 
            className={`${
              selectedResult 
                ? 'col-span-12 lg:col-span-3 hidden lg:block' 
                : 'col-span-12'
            } bg-white shadow-sm border rounded-lg h-[calc(100vh-280px)] overflow-y-auto transition-all duration-300`}
          >
            {filteredResults.length > 0 ? (
              filteredResults.map((result: InsightResult) => {
                const source = mockSources.find((s: InsightSource) => s.id === result.sourceId)
                return (
                  <div
                    key={result.id}
                    className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${
                      selectedResult?.id === result.id ? "bg-blue-50 border-blue-200" : ""
                    }`}
                    onClick={() => setSelectedResult(result)}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {source && (
                        <Image
                          src={source.icon}
                          alt={source.name}
                          width={16}
                          height={16}
                        />
                      )}
                      <span className="font-medium">{result.title}</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">{result.content}</p>
                    <div className="text-xs text-gray-500 mt-2">
                      {new Date(result.timestamp).toLocaleString()}
                    </div>
                  </div>
                )
              })
            ) : (
              <div className="p-4 text-center text-gray-500">
                No results found for your search criteria
              </div>
            )}
          </div>

          {/* Content */}
          {selectedResult && (
            <div className="col-span-12 lg:col-span-9 bg-white shadow-sm border rounded-lg p-6 h-[calc(100vh-280px)] overflow-y-auto transition-all duration-300">
              <div>
                <a 
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setSelectedResult(null)
                  }}
                  className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 mb-4 lg:hidden"
                >
                  ← Back to results
                </a>
                <div className="flex items-center gap-2 mb-4">
                  {mockSources.find((s: InsightSource) => s.id === selectedResult.sourceId) && (
                    <Image
                      src={mockSources.find((s: InsightSource) => s.id === selectedResult.sourceId)!.icon}
                      alt={mockSources.find((s: InsightSource) => s.id === selectedResult.sourceId)!.name}
                      width={20}
                      height={20}
                    />
                  )}
                  <h2 className="text-xl font-semibold">{selectedResult.title}</h2>
                </div>
                <p className="text-gray-800 mb-4">{selectedResult.content}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span>{new Date(selectedResult.timestamp).toLocaleString()}</span>
                  {selectedResult.metadata.likes && (
                    <span>👍 {selectedResult.metadata.likes}</span>
                  )}
                  {selectedResult.metadata.retweets && (
                    <span>🔄 {selectedResult.metadata.retweets}</span>
                  )}
                  {selectedResult.metadata.replies && (
                    <span>💬 {selectedResult.metadata.replies}</span>
                  )}
                  {selectedResult.metadata.views && (
                    <span>👁️ {selectedResult.metadata.views}</span>
                  )}
                </div>
                <a
                  href={selectedResult.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-sm block mt-4"
                >
                  View original post →
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
