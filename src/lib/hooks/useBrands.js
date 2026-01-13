/**
 * useBrands Hook
 * React hook for fetching brands data (static data)
 */

"use client";

import { useState, useEffect } from "react";
import brandsData from "../../app/Data/brand1.json";
import { mapBrandsToComponent } from "../utils/dataMapper";

/**
 * Hook to fetch brands
 * @returns {object} - { data, loading, error }
 */
export function useBrands() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      setError(null);

      // استخدام البيانات الثابتة مباشرة
      const mappedData = mapBrandsToComponent(brandsData || []);
      setData(mappedData);
    } catch (err) {
      setError(null);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error };
}

