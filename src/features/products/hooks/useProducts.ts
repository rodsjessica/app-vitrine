import { useCallback, useEffect, useMemo, useState } from 'react';

import { getProducts } from '../services/productsService';
import type { Product } from '../types/Product';

type UseProductsResult = {
  products: Product[];
  filteredProducts: Product[];
  categories: string[];
  search: string;
  selectedCategory: string | null;
  loading: boolean;
  error: string | null;
  setSearch: (value: string) => void;
  setSelectedCategory: (category: string | null) => void;
  reload: () => void;
};

export function useProducts(): UseProductsResult {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    null,
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await getProducts();

      setProducts(data);
    } catch {
      setError('Não foi possível carregar os produtos.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      products.map(product => product.category),
    );

    return Array.from(uniqueCategories).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return products.filter(product => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.name.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === null ||
        selectedCategory === 'Todos' ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, selectedCategory]);

  return {
    products,
    filteredProducts,
    categories,
    search,
    selectedCategory,
    loading,
    error,
    setSearch,
    setSelectedCategory,
    reload: loadProducts,
  };
}