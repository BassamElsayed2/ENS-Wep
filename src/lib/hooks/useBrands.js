/**
 * useBrands Hook
 * React hook for fetching brands data (static data)
 */

"use client";

import { useState, useEffect } from "react";
import brand1Data from "../../app/Data/brand1Data.json";
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
      const mappedData = mapBrandsToComponent(brand1Data.brands || []);
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
