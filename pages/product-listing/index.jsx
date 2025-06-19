'use client';

import React, { useState, useEffect } from 'react';
import FilterSidebar from '@/components/FilterSidebar';
import ProductListHeader from '@/components/ProductListHeader';
import ProductGrid from '@/components/ProductGrid';
import './ProductListingPage.css';

export default function ProductListingPage() {
  const [isFilterHidden, setIsFilterHidden] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from fakestoreapi
  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleFilterVisibility = () => {
    setIsFilterHidden(!isFilterHidden);
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prevFilters => {
      const newCategoryFilters = prevFilters[category] ? [...prevFilters[category]] : [];
      if (newCategoryFilters.includes(value)) {
        return {
          ...prevFilters,
          [category]: newCategoryFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prevFilters,
          [category]: [...newCategoryFilters, value]
        };
      }
    });
  };

  const handleUnselectAll = (category) => {
    setSelectedFilters(prevFilters => ({
      ...prevFilters,
      [category]: []
    }));
  };

  return (
    <div className="product-listing-page">
      {!isFilterHidden && (
        <aside className="sidebar-section">
          <FilterSidebar
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
            onUnselectAll={handleUnselectAll}
          />
        </aside>
      )}

      <main className={`main-content ${isFilterHidden ? 'full-width' : ''}`}>
        <ProductListHeader
          itemCount={products.length}
          isFilterHidden={isFilterHidden}
          onToggleFilter={toggleFilterVisibility}
        />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ProductGrid products={products} />
        )}
      </main>
    </div>
  );
}