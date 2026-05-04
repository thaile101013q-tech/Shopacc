// hooks/useSearch.ts
import { useState, useEffect } from 'react';

export const useSearch = (query: string) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      // Mockup gọi API search (2026 sẽ tích hợp Vector Search như Pinecone hoặc Algolia)
      console.log("AI đang phân tích từ khóa:", query);
    }
  }, [query]);

  return results;
};
